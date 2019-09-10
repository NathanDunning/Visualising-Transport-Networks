//package com.spring.application;
//
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
//
//import com.fasterxml.jackson.databind.ObjectMapper;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//import org.springframework.http.MediaType;
//import org.springframework.jdbc.core.JdbcTemplate;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.test.context.support.WithMockUser;
//import org.springframework.test.context.junit4.SpringRunner;
//import org.springframework.test.web.servlet.MockMvc;
//
//import com.spring.application.service.DemographService;
//
//@RunWith(SpringRunner.class)
//@SpringBootTest
//@AutoConfigureMockMvc
//public class DemographControllerTest {
//
//	@Autowired
//	private MockMvc mvc;
//
//	@Autowired
//	private JdbcTemplate jdbc;
//
//	@MockBean
//	private AuthenticationManager auth;
//
//	@MockBean
//	private DemographService demographService;
//
//	@Test
//	@WithMockUser
//	public void getDemograph() throws Exception {
//		// BusService mock = org.mockito.Mockito.mock(BusService.class);
//		mvc.perform(
//				get("/get/area/geocodes").contentType(MediaType.APPLICATION_JSON).accept(MediaType.APPLICATION_JSON))
//				.andExpect(status().isOk());
//	}
//
//
//}