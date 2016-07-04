package com.bpham.brograder.domain.service;

import com.bpham.brograder.domain.User;

public interface AuthenticationService {
    User authenticate(String idToken);
}
