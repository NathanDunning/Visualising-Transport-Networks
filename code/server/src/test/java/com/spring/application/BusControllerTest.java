package com.spring.application;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import com.spring.application.model.Bus;
import com.spring.application.service.BusService;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class BusControllerTest {
 
  @Autowired
  private MockMvc mvc;
  
  @MockBean 
  private AuthenticationManager auth;
 
  @MockBean
  private BusService busService;
 
  @Test
  @WithMockUser
  public void getOneBusTest()
    throws Exception {
	 // BusService mock = org.mockito.Mockito.mock(BusService.class);
      Bus bus = new Bus();
      bus.setCity("wellington");
   
      when(busService.findOneBus()).thenReturn(bus);
   
      mvc.perform(get("/get/buses/one")
        .contentType(MediaType.APPLICATION_JSON))
        .andExpect(status().isOk());
  }
}