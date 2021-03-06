package com.bpham.brograder.controller;

import com.bpham.brograder.domain.User;
import com.bpham.brograder.domain.dto.TokenDto;
import com.bpham.brograder.domain.service.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.http.ResponseEntity.ok;


@RestController
public class AuthenticationController {
    private AuthenticationService authService;

    @Autowired
    public AuthenticationController(AuthenticationService authService) {
        this.authService = authService;
    }

    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    public ResponseEntity<User> login(@RequestBody TokenDto token) {
        return ok(this.authService.login(token.getIdToken()));
    }
}
