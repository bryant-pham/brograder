package com.bpham.brograder.domain.service;

import com.bpham.brograder.domain.GoogleToken;

public interface TokenAuthService {
    boolean isValidToken(GoogleToken token);
}
