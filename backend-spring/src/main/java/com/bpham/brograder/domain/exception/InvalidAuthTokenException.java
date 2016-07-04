package com.bpham.brograder.domain.exception;

public class InvalidAuthTokenException extends RuntimeException {
    public InvalidAuthTokenException(String tokenId) {
        super("Invalid Google token id: " + tokenId);
    }
}
