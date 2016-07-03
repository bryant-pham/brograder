package com.bpham.brograder.domain.service;

import com.bpham.brograder.domain.GoogleToken;

public interface TokenService {
    GoogleToken getToken(String idToken);
}
