package com.spring.application.repository;

import java.sql.Timestamp;
import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import com.spring.application.model.Bus;

@Transactional
public interface BusRepository extends PagingAndSortingRepository<Bus, Long> {

	public static final String FIND_BUS = "SELECT * FROM bus_from limit 1";
	public static final String FIND_BUS_DETAILS = "SELECT time, duration FROM bus_from where time>=?1 and time<=?2 and date=?3 and lat=?4 and lng=?5 ;";
	public static final String FIND_ALL_BUS_DETAILS = "SELECT DISTINCT lat, lng FROM bus_from";
	public static final String FIND_CITIES = "SELECT distinct city FROM bus_from";
	public static final String FIND_TIME = "SELECT distinct time FROM bus_from where date=?1 order by time";
	public static final String FIND_DATE = "SELECT distinct date FROM bus_from order by date";

	@Query(value = FIND_BUS, nativeQuery = true)
	Bus findBus();

	@Query(value = FIND_BUS_DETAILS, nativeQuery = true)
	List<Object[]> findBusDetails(String from_time, String to_time, String date, double lat, double lng);

	@Query(value = FIND_ALL_BUS_DETAILS, nativeQuery = true)
	List<Object> findAllBusDetails();

	@Query(value = FIND_CITIES, nativeQuery = true)
	List<Object> findCities();

	@Query(value = FIND_TIME, nativeQuery = true)
	List<Object> findTime(String dateField);

	@Query(value = FIND_DATE, nativeQuery = true)
	List<Timestamp> findDate();
}