package com.spring.application.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.spring.application.model.AreaDemograph;

@Transactional
public interface DemographRepository extends PagingAndSortingRepository<AreaDemograph, Long> {

	public static final String FIND_All_AREA_GEOCODES = "SELECT * FROM area_geo_pop";
	public static final String FIND_All_AREA_LATLNG = "SELECT lat,lng FROM area_geo_pop";

	@Query(value = FIND_All_AREA_GEOCODES, nativeQuery = true)
	List<AreaDemograph> findAllAreaGeoCode();
	
	@Query(value = FIND_All_AREA_LATLNG, nativeQuery = true)
	List<Object> findAllAreaLatLng();

}