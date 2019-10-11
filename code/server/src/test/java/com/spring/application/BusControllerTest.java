package com.spring.application;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Arrays;
import java.sql.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.spring.application.model.Bus;
import com.spring.application.model.Request;
import com.spring.application.service.BusService;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
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
		Bus bus = new Bus();
		bus.setCity("wellington");
		when(busService.findOneBus()).thenReturn(bus);
		mvc.perform(get("/get/buses/one").contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk());
	}

	@Test
	@WithMockUser
	public void getBus() throws Exception {
		Map<Integer, Map<String, Integer>> timeSuburbDurations = new HashMap<>();
		Map<String, Integer> suburbDuration = new HashMap<>();
		suburbDuration.put("Aro Valley", 18);
		timeSuburbDurations.put(744, suburbDuration);
		Request request = new Request("944", "960", "2018-11-28");
		when(busService.findBusTravelDetails(request)).thenReturn(timeSuburbDurations);

		mvc.perform(post("/get/bus/travelDetails").content(asJsonString(request))
				.contentType(MediaType.APPLICATION_JSON).accept(MediaType.APPLICATION_JSON)).andExpect(status().isOk());
	}

	@Test
	@WithMockUser
	public void getAllBus() throws Exception {
		Bus bus = new Bus();
		bus.setCity("wellington");
		List<Object> buses = Arrays.asList(bus);
		when(busService.findAllBusTravelDetails()).thenReturn(buses);

		mvc.perform(get("/get/bus/travelAllDetails").contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk());
	}

	@Test
	@WithMockUser
	public void getCities() throws Exception {
		String city = "Wellington";
		List<Object> cities = Arrays.asList(city);
		when(busService.findCities()).thenReturn(cities);

		mvc.perform(get("/get/cities").contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk());
	}

	@Test
	@WithMockUser
	public void getTime() throws Exception {
		String time = "10 40";
		List<Object> times = Arrays.asList(time);
		when(busService.findTime()).thenReturn(times);
		mvc.perform(get("/get/time").contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk());
	}

	@Test
	@WithMockUser
	public void getDates() throws Exception {
		Date date = null;
		List<Date> dates = Arrays.asList(date);
		when(busService.findDate()).thenReturn(dates);
		mvc.perform(get("/get/dates").contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk());
	}

	public static String asJsonString(final Object obj) {
		try {
			return new ObjectMapper().writeValueAsString(obj);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
}
