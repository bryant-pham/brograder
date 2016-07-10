package com.bpham.brograder.factory;

import com.bpham.brograder.domain.GoogleToken;
import com.bpham.brograder.domain.User;
import com.bpham.brograder.domain.factory.UserFactory;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class UserFactoryImpl implements UserFactory {

    @Override
    public User createFrom(GoogleToken token) {
        return new User(
                token.getSub(),
                token.getGiven_name(),
                token.getFamily_name(),
                token.getEmail(),
                new ArrayList<>());
    }
}
