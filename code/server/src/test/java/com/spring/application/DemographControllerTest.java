package com.spring.application;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

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

import com.spring.application.model.AreaDemograph;
import com.spring.application.service.DemographService;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
public class DemographControllerTest {

	@Autowired
	private MockMvc mvc;

	@Autowired
	private JdbcTemplate jdbc;

	@MockBean
	private AuthenticationManager auth;

	@MockBean
	private DemographService demographService;

	@Test
	@WithMockUser
	public void getDemographTest() throws Exception {
		// BusService mock = org.mockito.Mockito.mock(BusService.class);
		mvc.perform(
				get("/get/area/geocodes").contentType(MediaType.APPLICATION_JSON).accept(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk());
	}

	@WithMockUser
	public void getAreaGeocodesTest() throws Exception {
		// BusService mock = org.mockito.Mockito.mock(BusService.class);
		List<Object[]> demograph = new ArrayList<>();
		Object[] areapop = new Object[2];
		areapop[0] = "thorndon";
		areapop[1] = 3434;
		//demograph.add(arg0)[0][0] = "thorndon";
		demograph.add(areapop);

		//List<Object[]> demographs = 
		// Request request = new Request("wellington", 944, 960, "2018-11-28");
		when(demographService.findAllAreaGeoCode()).thenReturn(demograph);

		mvc.perform(get("/get/area/geocodes").contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk());
	}

}