package com.bpham.brograder.service;

import com.bpham.brograder.domain.GoogleToken;
import com.bpham.brograder.domain.User;
import com.bpham.brograder.domain.service.AuthenticationService;
import com.bpham.brograder.domain.service.TokenAuthService;
import com.bpham.brograder.domain.service.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {
    private TokenService tokenService;
    private TokenAuthService tokenAuthService;

    @Autowired
    public AuthenticationServiceImpl(TokenService tokenService, TokenAuthService tokenAuthService) {
        this.tokenService = tokenService;
        this.tokenAuthService = tokenAuthService;
    }

    @Override
    public User authenticate(String idToken) {
        GoogleToken token = this.tokenService.getToken(idToken);
        boolean validToken = this.tokenAuthService.isValidToken(token);
        if (validToken) {
            return new User();
        } else {
            throw new RuntimeException("Invalid Google token id");
        }
    }
}
