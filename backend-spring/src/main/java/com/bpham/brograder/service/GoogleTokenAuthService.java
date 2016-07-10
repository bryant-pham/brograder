package com.bpham.brograder.service;

import com.bpham.brograder.domain.GoogleToken;
import com.bpham.brograder.domain.service.TokenAuthService;

public class GoogleTokenAuthService implements TokenAuthService {
    private String googleAppClientId;

    public GoogleTokenAuthService(String googleAppClientId) {
        this.googleAppClientId = googleAppClientId;
    }

    @Override
    public boolean isValidToken(GoogleToken token) {
        return token.getClientId().equals(this.googleAppClientId);
    }
}
