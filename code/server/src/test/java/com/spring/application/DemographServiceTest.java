package com.spring.application;

import com.spring.application.model.AreaDemograph;
import com.spring.application.service.DemographService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.runners.MockitoJUnitRunner;

import java.util.List;

import static org.junit.Assert.assertEquals;

@RunWith(MockitoJUnitRunner.class)
public class DemographServiceTest {

    //@Mock
    //DemographRepository demographRepository;

    @InjectMocks
    DemographService demographService;


    @Test
    public void testDefaultSize() {
        // Haven't added any area demographic data
        List<AreaDemograph> areaDemographs = demographService.findAllAreaGeoCode();

        // Size should return 0
        assertEquals(0, areaDemographs.size());
    }

    // Any other tests that check what the service returns should be added here
    // ie. if saving and on save it return, can test returned data is correct here
    // add when(demographRepository.save(any(AreaDemograph.class))).thenReturn(new AreaDemograph()); first line
}
