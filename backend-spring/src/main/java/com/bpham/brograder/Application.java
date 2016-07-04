package com.bpham.brograder;

import com.bpham.brograder.domain.service.TokenAuthService;
import com.bpham.brograder.service.GoogleTokenAuthService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class Application {
    @Value("${googleOAuth.clientId}")
    private String oauthClientId;

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Bean
    public RestTemplate getRestTemplate() {
        return new RestTemplate();
    }

    @Bean
    public TokenAuthService tokenAuthService() {
        return new GoogleTokenAuthService(oauthClientId);
    }
}
