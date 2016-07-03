package com.bpham.brograder.service;

import com.bpham.brograder.domain.GoogleToken;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

public class GoogleTokenAuthServiceTest {
    private GoogleTokenAuthService service;

    @Before
    public void setUp() {
        this.service = new GoogleTokenAuthService("appId");
    }

    @Test
    public void returnTrueIfGoogleClientIdIsInSubClaim() {
        GoogleToken token = GoogleToken.builder()
                .aud("appId").build();

        boolean result = service.isValidToken(token);

        assertTrue(result);
    }

    @Test
    public void returnFalseIfGoogleClientIdIsNotInSubClaim() {
        GoogleToken token = GoogleToken.builder()
                .aud("someotherappid").build();

        boolean result = service.isValidToken(token);

        assertFalse(result);
    }
}
