package com.bpham.brograder.domain.service;

import com.bpham.brograder.domain.GoogleToken;
import com.bpham.brograder.domain.User;

public interface UserFactory {
    User createFrom(GoogleToken token);
}
