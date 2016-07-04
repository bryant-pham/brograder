package com.bpham.brograder.domain;

public interface UserFactory {
    User createFrom(GoogleToken token);
}
