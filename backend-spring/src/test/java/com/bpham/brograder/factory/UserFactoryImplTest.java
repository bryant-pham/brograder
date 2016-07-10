package com.bpham.brograder.factory;

import com.bpham.brograder.domain.GoogleToken;
import com.bpham.brograder.domain.User;
import com.sun.org.apache.xpath.internal.operations.String;
import org.junit.Before;
import org.junit.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.assertArrayEquals;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

public class UserFactoryImplTest {
    private UserFactoryImpl factory;

    @Before
    public void setUp() {
        this.factory = new UserFactoryImpl();
    }

    @Test
    public void createUserFromGoogleTokenProperties() {
        GoogleToken token = GoogleToken.builder()
                .given_name("john")
                .family_name("cena")
                .email("jcena@gmail.com")
                .sub("2")
                .build();

        User user = this.factory.createFrom(token);

        assertEquals("2", user.getId());
        assertEquals("john", user.getFirstName());
        assertEquals("cena", user.getLastName());
        assertEquals("jcena@gmail.com", user.getEmail());
        assertEquals(0, user.getClasses().size());
    }
}
