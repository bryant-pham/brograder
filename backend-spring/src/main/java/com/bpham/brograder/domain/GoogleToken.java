package com.bpham.brograder.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class GoogleToken {
    private String aud;
    private String sub;
    private String given_name;
    private String family_name;
    private String picture;
    private String email;
}
