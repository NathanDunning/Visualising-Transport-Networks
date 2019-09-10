//package com.spring.application;
//
//import static org.mockito.Mockito.when;
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
//
//import java.util.Arrays;
//import java.util.List;
//
//import org.junit.Test;
//import org.junit.runner.RunWith;
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
//import com.fasterxml.jackson.databind.ObjectMapper;
//import com.spring.application.model.Car;
//import com.spring.application.model.Request;
//import com.spring.application.service.CarService;
//
//@RunWith(SpringRunner.class)
//@SpringBootTest
//@AutoConfigureMockMvc
//public class CarControllerTest {
//
//	@Autowired
//	private MockMvc mvc;
//
//	@MockBean
//	private AuthenticationManager auth;
//
//	@MockBean
//	private CarService carService;
//
//	@Test
//	@WithMockUser
//	public void getOneCarTest() throws Exception {
//		// BusService mock = org.mockito.Mockito.mock(BusService.class);
//		Car car = new Car();
//		car.setCity("wellington");
//		when(carService.findCar()).thenReturn(car);
//		mvc.perform(get("/get/cars/one").contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk());
//	}
//
//	@Test
//	@WithMockUser
//	public void getCar() throws Exception {
//		// BusService mock = org.mockito.Mockito.mock(BusService.class);
//		Car car = new Car();
//		car.setCity("wellington");
//
//		List<Car> cars = Arrays.asList(car);
//		Request request = new Request("wellington", 944, 960, "2018-11-28");
//		when(carService.findCarTravelDetails(request)).thenReturn(cars);
//
//		mvc.perform(post("/get/car/travelDetails").content(asJsonString(request))
//				.contentType(MediaType.APPLICATION_JSON).accept(MediaType.APPLICATION_JSON)).andExpect(status().isOk());
//	}
//
//	public static String asJsonString(final Object obj) {
//		try {
//			return new ObjectMapper().writeValueAsString(obj);
//		} catch (Exception e) {
//			throw new RuntimeException(e);
//		}
//	}
//}