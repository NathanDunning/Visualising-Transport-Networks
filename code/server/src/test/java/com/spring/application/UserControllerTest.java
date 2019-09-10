//package com.spring.application;
//
//import static org.junit.Assert.assertEquals;
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
//
//import org.junit.Before;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.mockito.Mockito;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//import org.springframework.http.MediaType;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.test.context.support.WithMockUser;
//import org.springframework.test.context.junit4.SpringRunner;
//import org.springframework.test.web.servlet.MockMvc;
//
//import com.spring.application.model.User;
//import com.spring.application.repository.UserRepository;
//import com.spring.application.service.UserService;
//
//@RunWith(SpringRunner.class)
//@SpringBootTest
//@AutoConfigureMockMvc
//public class UserControllerTest {
//
//	@Autowired
//	private MockMvc mvc;
//
//	@MockBean
//	private AuthenticationManager auth;
//
//	@MockBean
//	private UserService userService;
//
//	@MockBean
//	private UserRepository userRepository;
//
//	@Before
//    public void setUp() {
//        User alex = new User();
//        alex.setEmail("unit@test.com");
//
//        Mockito.when(userRepository.findByEmail(alex.getEmail()))
//          .thenReturn(alex);
//    }
//
//	@Test
//	@WithMockUser
//	public void getOneCarTest() throws Exception {
//		mvc.perform(get("/home").contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk());
//	}
//
//	@Test
//	@WithMockUser
//	public void getCar() throws Exception {
//		mvc.perform(get("/get/users").contentType(MediaType.APPLICATION_JSON).accept(MediaType.APPLICATION_JSON))
//				.andExpect(status().isOk());
//	}
//
//	@Test
//	public void saveUserTest() {
//		User user = new User();
//		user.setEmail("unit@test.com");
//		userService.save(user,false);
//		User found = userRepository.findByEmail(user.getEmail());
//		assertEquals(found.getEmail(), user.getEmail());
//	}
//
//}