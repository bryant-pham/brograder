package com.bpham.brograder.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
    @RequestMapping("/")
    public ResponseEntity<String> index() {
        return ResponseEntity.ok("hello");
    }
}
