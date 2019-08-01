package com.spring.application;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.sql.SQLException;
import java.util.Arrays;
import java.util.List;

import javax.script.ScriptException;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.MediaType;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.init.ScriptUtils;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.spring.application.model.Bus;
import com.spring.application.model.Request;
import com.spring.application.service.BusService;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class BusControllerTest {

	@Autowired
	private MockMvc mvc;
	
	@Autowired
	private JdbcTemplate jdbc;

	@MockBean
	private AuthenticationManager auth;

	@MockBean
	private BusService busService;

	@Test
	@WithMockUser
	public void getOneBusTest() throws Exception {
		// BusService mock = org.mockito.Mockito.mock(BusService.class);
		Bus bus = new Bus();
		bus.setCity("wellington");

		when(busService.findOneBus()).thenReturn(bus);

		mvc.perform(get("/get/buses/one").contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk());
	}

	@Test
	@WithMockUser
	public void getBus() throws Exception {
		// BusService mock = org.mockito.Mockito.mock(BusService.class);
		Bus bus = new Bus();
		bus.setCity("wellington");

		List<Bus> buses = Arrays.asList(bus);
		Request request = new Request("wellington", 944, 960, "2018-11-28");
		when(busService.findBusTravelDetails(request)).thenReturn(buses);

		mvc.perform(post("/get/bus/travelDetails").content(asJsonString(request))
				.contentType(MediaType.APPLICATION_JSON).accept(MediaType.APPLICATION_JSON)).andExpect(status().isOk());
	}

	public static String asJsonString(final Object obj) {
		try {
			return new ObjectMapper().writeValueAsString(obj);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
}