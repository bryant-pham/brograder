package com.bpham.brograder.service;

import com.bpham.brograder.domain.GoogleToken;
import com.bpham.brograder.domain.User;
import com.bpham.brograder.domain.exception.InvalidAuthTokenException;
import com.bpham.brograder.domain.factory.UserFactory;
import com.bpham.brograder.domain.service.AuthenticationService;
import com.bpham.brograder.domain.service.TokenAuthService;
import com.bpham.brograder.domain.service.TokenService;
import com.bpham.brograder.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {
    private TokenService tokenService;
    private TokenAuthService tokenAuthService;
    private UserFactory userFactory;
    private UserRepository userRepository;

    @Autowired
    public AuthenticationServiceImpl(
            TokenService tokenService,
            TokenAuthService tokenAuthService,
            UserFactory userFactory,
            UserRepository userRepository) {
        this.tokenService = tokenService;
        this.tokenAuthService = tokenAuthService;
        this.userFactory = userFactory;
        this.userRepository = userRepository;
    }

    @Override
    public User login(String idToken) {
        GoogleToken token = tokenService.getToken(idToken);
        boolean isValidToken = tokenAuthService.isValidToken(token);
        if (isValidToken) {
            return createOrRetrieveUser(token);
        } else {
            throw new InvalidAuthTokenException(idToken);
        }
    }

    private User createOrRetrieveUser(GoogleToken token) {
        User user = userFactory.createFrom(token);
        boolean isExistingUser = userRepository.exists(user.getId());
        if (!isExistingUser) {
            userRepository.save(user);
        }
        return user;
    }
}
