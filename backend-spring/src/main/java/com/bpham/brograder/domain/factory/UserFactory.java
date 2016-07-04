package com.bpham.brograder.domain.factory;

import com.bpham.brograder.domain.GoogleToken;
import com.bpham.brograder.domain.User;

public interface UserFactory {
    User createFrom(GoogleToken token);
}
