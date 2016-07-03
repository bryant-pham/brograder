package com.bpham.brograder.service;

import com.bpham.brograder.domain.GoogleToken;
import com.bpham.brograder.domain.service.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class GoogleTokenRestService implements TokenService {
    private static String URI = "https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=";

    private RestTemplate restTemplate;

    @Autowired
    public GoogleTokenRestService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @Override
    public GoogleToken getToken(String idToken) {
        String uri = buildUri(idToken);
        return this.restTemplate.getForObject(uri, GoogleToken.class);
    }

    private String buildUri(String idToken) {
        return URI + idToken;
    }
}
