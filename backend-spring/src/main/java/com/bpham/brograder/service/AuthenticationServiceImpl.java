package com.bpham.brograder.service;

import com.bpham.brograder.domain.service.AuthenticationService;
import com.bpham.brograder.domain.GoogleToken;
import com.bpham.brograder.domain.service.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {
    private TokenService tokenService;

    @Autowired
    public AuthenticationServiceImpl(TokenService tokenService) {
        this.tokenService = tokenService;
    }

    @Override
    public GoogleToken authenticate(String idToken) {
        GoogleToken token = this.tokenService.getToken(idToken);
        return token;
    }
}
