package com.bpham.brograder.service;

import com.bpham.brograder.domain.GoogleToken;
import com.bpham.brograder.domain.User;
import com.bpham.brograder.domain.exception.InvalidAuthTokenException;
import com.bpham.brograder.domain.factory.UserFactory;
import com.bpham.brograder.domain.service.TokenAuthService;
import com.bpham.brograder.domain.service.TokenService;
import org.junit.Before;
import org.junit.Test;
import org.mockito.Mock;

import static org.junit.Assert.assertEquals;
import static org.mockito.Matchers.any;
import static org.mockito.Mockito.when;
import static org.mockito.MockitoAnnotations.initMocks;

public class AuthenticationServiceImplTest {
    @Mock private TokenService tokenService;
    @Mock private TokenAuthService tokenAuthService;
    @Mock private UserFactory userFactory;
    private AuthenticationServiceImpl authService;

    @Before
    public void setUp() {
        initMocks(this);
        this.authService = new AuthenticationServiceImpl(tokenService, tokenAuthService, userFactory);
    }

    @Test
    public void returnUserForValidToken() {
        User expectedUser = new User();
        when(tokenAuthService.isValidToken(any(GoogleToken.class))).thenReturn(true);
        when(userFactory.createFrom(any())).thenReturn(expectedUser);

        User result = authService.authenticate("token");

        assertEquals(expectedUser, result);
    }

    @Test(expected = InvalidAuthTokenException.class)
    public void throwExceptionForInvalidToken() {
        when(tokenAuthService.isValidToken(any(GoogleToken.class))).thenReturn(false);

        authService.authenticate("token");
    }
}