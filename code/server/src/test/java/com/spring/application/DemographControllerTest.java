package com.spring.application;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

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
		AreaDemograph demograph = new AreaDemograph();
		demograph.setAreaName("thorndon");
		demograph.setLatitude(-41.2322);
		demograph.setLongitude(174.53434);
		demograph.setPopulation(3454);

		List<AreaDemograph> demographs = Arrays.asList(demograph);
		// Request request = new Request("wellington", 944, 960, "2018-11-28");
		when(demographService.findAllAreaGeoCode()).thenReturn(demographs);

		mvc.perform(get("/get/area/geocodes").contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk());
	}

	@Test
	@WithMockUser
	public void getLatLngTest() throws Exception {
		// BusService mock = org.mockito.Mockito.mock(BusService.class);
		String latlng = "-41.234 174.4232";
		List<Object> demographs = Arrays.asList(latlng);
		// Request request = new Request("wellington", 944, 960, "2018-11-28");
		when(demographService.findAllAreaLatLng()).thenReturn(demographs);

		mvc.perform(get("/get/area/latlng").contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk());
	}

}
