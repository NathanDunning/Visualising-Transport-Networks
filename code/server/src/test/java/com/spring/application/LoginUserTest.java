package com.spring.application;

import static org.junit.Assert.assertEquals;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.spring.application.model.User;
import com.spring.application.repository.UserRepository;

@RunWith(SpringRunner.class)
public class LoginUserTest {
 
  /*
    @Autowired
    private UserService userService;
 */
    @MockBean
    private UserRepository userRepository;
 
    @Before
    public void setUp() {
        User alex = new User();
        alex.setEmail("alex.com");
     
        Mockito.when(userRepository.findByEmail(alex.getEmail()))
          .thenReturn(alex);
    }
    
    @Test
    public void whenValidEmail_thenuserShouldBeFound() {
        String email = "alex.com";
        User found = userRepository.findByEmail(email);
        assertEquals(found.getEmail(), email);
     }
}