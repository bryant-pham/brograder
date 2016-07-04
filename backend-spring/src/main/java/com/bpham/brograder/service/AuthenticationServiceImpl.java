package com.bpham.brograder.service;

import com.bpham.brograder.domain.GoogleToken;
import com.bpham.brograder.domain.User;
import com.bpham.brograder.domain.exception.InvalidAuthTokenException;
import com.bpham.brograder.domain.factory.UserFactory;
import com.bpham.brograder.domain.service.AuthenticationService;
import com.bpham.brograder.domain.service.TokenAuthService;
import com.bpham.brograder.domain.service.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {
    private TokenService tokenService;
    private TokenAuthService tokenAuthService;
    private UserFactory userFactory;

    @Autowired
    public AuthenticationServiceImpl(TokenService tokenService, TokenAuthService tokenAuthService, UserFactory userFactory) {
        this.tokenService = tokenService;
        this.tokenAuthService = tokenAuthService;
        this.userFactory = userFactory;
    }

    @Override
    public User authenticate(String idToken) {
        GoogleToken token = this.tokenService.getToken(idToken);
        boolean validToken = this.tokenAuthService.isValidToken(token);
        if (validToken) {
            return userFactory.createFrom(token);
        } else {
            throw new InvalidAuthTokenException(idToken);
        }
    }
}
