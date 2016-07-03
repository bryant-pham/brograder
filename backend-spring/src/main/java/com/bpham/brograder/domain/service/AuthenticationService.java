package com.bpham.brograder.domain.service;

import com.bpham.brograder.domain.GoogleToken;

public interface AuthenticationService {
    GoogleToken authenticate(String idToken);
}
