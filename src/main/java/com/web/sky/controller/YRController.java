package com.web.sky.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.web.sky.flight.Arrival;
import com.web.sky.flight.Departure;
import com.web.sky.flight.Flight;
import com.web.sky.flight.Reservation;
import com.web.sky.map.GMap;
import com.web.sky.mapper.YRMapper;
import com.web.sky.member.Member;
import com.web.sky.service.IGetService;
import com.web.sky.service.IListService;
import com.web.sky.service.IPostService;
import com.web.sky.service.TxService;

@RestController
public class YRController {
	private static final Logger logger = LoggerFactory.getLogger(YRController.class);
	@Autowired
	YRMapper mapper;
	@Autowired
	TxService tx;
	@Autowired
	Member m;
	@Autowired
	Flight f;
	@Autowired
	Departure d;
	@Autowired
	Arrival a;
	@Autowired
	Reservation r;
	@Autowired
	GMap gm;

	@RequestMapping(value = "/post/reserve/")
	public @ResponseBody Map<?, ?> insertReserve() {
		Map<String, Object> map = new HashMap<>();
		Reservation reserve = new Reservation();
		reserve.setReservationNo("sky1111222");
		reserve.setGender("male");
		reserve.setSurname("Kim");
		reserve.setFirstname("Yooshin");
		reserve.setCountry("GBR");
		reserve.setPhone("01022223333");
		reserve.setEmail("kim@gmail.com");
		Departure depart = new Departure();
		depart.setReservationNo("sky1111222");
		depart.setFlightNo("KE908");
		depart.setAirline("KAL");
		depart.setCabinClass("Y");
		depart.setDepartCity("ICN");
		depart.setArriveCity("LHW");
		depart.setDepartDate("2017-11-30");
		Arrival arrive = new Arrival();
		arrive.setReservationNo("sky1111222");
		arrive.setFlightNo("KE907");
		arrive.setAirline("KAL");
		arrive.setCabinClass("Y");
		arrive.setDepartCity("LHW");
		arrive.setArriveCity("ICN");
		arrive.setArriveDate("2017-12-15");
		new IPostService() {
			@Override
			public void execute(Object o) {
				tx.yrreservation(reserve, arrive, depart);
			}
		}.execute(null);
		return map;
	}

	@RequestMapping("/listYR/{cate}")
	public @ResponseBody Map<?, ?> selectList(@PathVariable String cate) {
		Map<String, Object> map = new HashMap<>();
		switch (cate) {
		case "member":
			map.put("member", new IListService() {
				@Override
				public List<?> execute(Object o) {
					return mapper.listMember(o);
				}
			}.execute(null));
			break;
		case "flight":
			map.put("flight", new IListService() {
				@Override
				public List<?> execute(Object o) {
					return mapper.listFlight(o);
				}
			}.execute(null));
			break;

		case "reservation":
			logger.info("/list/reservation {}", "진입~");
			map.put("reservation", new IListService() {
				@Override
				public List<?> execute(Object o) {
					return mapper.listReservation(o);
				}
			}.execute(null));
			break;
		case "arrival":
			logger.info("/list/arrival {}", "진입~");
			map.put("arrival", new IListService() {

				@Override
				public List<?> execute(Object o) {
					return mapper.listArrival(o);
				}
			}.execute(null));
			break;
		case "map":
			gm.setDepartcity("london");
			List<?> google = new IListService() {

				@Override
				public List<?> execute(Object o) {
					return mapper.listMap(gm);
				}
			}.execute(null);
			map.put("googleMap", google);
		}
		return map;
	}

	@RequestMapping(value = "/select/login")
	public @ResponseBody Map<?, ?> login() {
		Map<String, Object> map = new HashMap<>();
		m.setEmail("hong@gmail.com");
		Member mem = (Member) new IGetService() {
			@Override
			public Object execute(Object o) {
				return mapper.selectMember(m);
			}
		}.execute(null);
		map.put("member", mem);
		return map;
	}

	@RequestMapping(value = "/select/flight")
	public @ResponseBody Map<?, ?> selectFlight() {
		Map<String, Object> map = new HashMap<>();
		f.setFlightNo("KE907");
		Flight fli = (Flight) new IGetService() {
			@Override
			public Object execute(Object o) {
				return mapper.selectFlight(f);
			}
		}.execute(null);
		map.put("flight", fli);
		return map;
	}

	@RequestMapping(value = "/select/reservation")
	public @ResponseBody Map<?, ?> selectReservation() {
		Map<String, Object> map = new HashMap<>();
		r.setReservationNo("sky0123455");
		Reservation res = (Reservation) new IGetService() {
			@Override
			public Object execute(Object o) {
				return mapper.selectReservation(r);
			}
		}.execute(null);
		map.put("reservation", res);
		return map;
	}
}