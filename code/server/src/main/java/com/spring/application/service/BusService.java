package com.spring.application.service;

import java.sql.Date;
import java.sql.Timestamp;
import java.text.Format;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.application.model.Bus;
import com.spring.application.model.Request;
import com.spring.application.repository.BusRepository;

@Service
public class BusService {
	@Autowired
	private BusRepository busRepo;

	public Bus findOneBus() {
		return busRepo.findBus();
	}

	public Map<Integer, Map<String, Integer>> findBusTravelDetails(Request busRequest) {

		Map<Integer, Map<String, Integer>> suburbDurations = new HashMap<>();

		Map<String, List<List<Double>>> suburbTravelPoints = busRequest.getSuburb_travel_points();
		for (Map.Entry<String, List<List<Double>>> suburbTravelPoint : suburbTravelPoints.entrySet()) {
			List<List<Double>> travelPoints = suburbTravelPoint.getValue();
			for (List<Double> travelPoint : travelPoints) {
				List<Object[]> travelTimeList = busRepo.findBusDetails(busRequest.getFrom_time(),
						busRequest.getTo_time(), busRequest.getDate(), travelPoint.get(0), travelPoint.get(1));
				for (Object[] travelTime : travelTimeList) {
					Map<String, Integer> suburbDuration = new HashMap<>();
					if (suburbDurations.containsKey(travelTime[0])) {
						suburbDuration = suburbDurations.get(travelTime[0]);
						if (suburbDuration.containsKey(suburbTravelPoint.getKey())) {
							Integer avgTime = (suburbDuration.get(suburbTravelPoint.getKey())
									+ Integer.parseInt(travelTime[1].toString()) / 60) / 2;
							suburbDuration.put(suburbTravelPoint.getKey().replace("_latlng", ""), avgTime);
						} else {
							suburbDuration.put(suburbTravelPoint.getKey().replace("_latlng", ""),
									Integer.parseInt(travelTime[1].toString()) / 60);
						}
					} else {
						suburbDuration.put(suburbTravelPoint.getKey(), Integer.parseInt(travelTime[1].toString()));
						suburbDurations.put(Integer.parseInt(travelTime[0].toString()), suburbDuration);
					}
				}
			}
		}

		return suburbDurations;
	}

	public List<Object> findAllBusTravelDetails() {
		List<Object> bus = busRepo.findAllBusDetails();
		return bus;
	}

	public List<Object> findCities() {
		List<Object> cities = busRepo.findCities();
		return cities;
	}

	public List<Object> findTime() {
		List<Object> time = busRepo.findTime();

		return time;
	}

	public List<Date> findDate() {
		List<Timestamp> dates = busRepo.findDate();
		List<Date> modified = new ArrayList();
		Date date;
		Format format = new SimpleDateFormat("yyyy/MM/dd");
		for (Timestamp time : dates) {
			date = new Date(time.getTime());
			modified.add(date);
		}
		return modified;
	}
}
