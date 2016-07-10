package com.bpham.brograder.service;

import com.bpham.brograder.domain.GoogleToken;
import com.bpham.brograder.domain.User;
import com.bpham.brograder.domain.exception.InvalidAuthTokenException;
import com.bpham.brograder.domain.factory.UserFactory;
import com.bpham.brograder.domain.service.TokenAuthService;
import com.bpham.brograder.domain.service.TokenService;
import com.bpham.brograder.repository.UserRepository;
import org.junit.Before;
import org.junit.Test;
import org.mockito.Mock;

import static org.junit.Assert.assertEquals;
import static org.mockito.Matchers.any;
import static org.mockito.Matchers.anyString;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.mockito.MockitoAnnotations.initMocks;

public class AuthenticationServiceImplTest {
    @Mock private TokenService tokenService;
    @Mock private TokenAuthService tokenAuthService;
    @Mock private UserFactory userFactory;
    @Mock private UserRepository userRepository;
    private AuthenticationServiceImpl authService;

    @Before
    public void setUp() {
        initMocks(this);
        this.authService = new AuthenticationServiceImpl(tokenService, tokenAuthService, userFactory, userRepository);
    }

    @Test
    public void createUserIfNotExisting() {
        User expectedUser = new User();
        GoogleToken token = GoogleToken.builder().sub("id").build();
        when(tokenService.getToken(anyString())).thenReturn(token);
        when(tokenAuthService.isValidToken(any(GoogleToken.class))).thenReturn(true);
        when(userFactory.createFrom(any())).thenReturn(expectedUser);
        when(userRepository.findOne(anyString())).thenReturn(null);
        when(userRepository.save(any(User.class))).thenReturn(expectedUser);

        User result = authService.login("id");

        assertEquals(expectedUser, result);
        verify(userRepository).save(expectedUser);
    }

    @Test
    public void doNotCreateUserIfExisting() {
        User expectedUser = new User();
        GoogleToken token = GoogleToken.builder().sub("id").build();
        when(tokenService.getToken(anyString())).thenReturn(token);
        when(tokenAuthService.isValidToken(any(GoogleToken.class))).thenReturn(true);
        when(userRepository.findOne(anyString())).thenReturn(expectedUser);

        User result = authService.login("id");

        assertEquals(expectedUser, result);
        verify(userRepository, times(0)).save(expectedUser);
    }

    @Test(expected = InvalidAuthTokenException.class)
    public void throwExceptionForInvalidToken() {
        when(tokenAuthService.isValidToken(any(GoogleToken.class))).thenReturn(false);

        authService.login("token");
    }
}
