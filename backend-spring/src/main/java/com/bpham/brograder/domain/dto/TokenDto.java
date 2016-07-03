package com.bpham.brograder.domain.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;

@Getter
public class TokenDto {
    @JsonProperty("id_token")
    private String idToken;
}
