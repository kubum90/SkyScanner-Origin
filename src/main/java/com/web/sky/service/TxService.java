package com.web.sky.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.web.sky.command.Command;
import com.web.sky.flight.Arrival;
import com.web.sky.flight.Departure;
import com.web.sky.flight.FlightReserve;
import com.web.sky.flight.Reservation;
import com.web.sky.mapper.GHMapper;
import com.web.sky.mapper.MSMapper;
import com.web.sky.mapper.YRMapper;

@Transactional
@Service
public class TxService {
	@Autowired
	Reservation yrreserve;
	@Autowired
	Arrival arrive;
	@Autowired
	Departure depart;
	@Autowired
	YRMapper mapper;
	@Autowired
	FlightReserve reserve;
	@Autowired
	YRMapper yrMapper;
	@Autowired
	MSMapper msMapper;
	@Autowired
	GHMapper gh;

	public void yrreservation(Reservation reserve, Arrival arrive, Departure depart) {
		mapper.insertRsvt(reserve);
		mapper.insertDprt(depart);
		mapper.insertArrv(arrive);
	}

	public void reservation(FlightReserve reserve) {
		yrMapper.departFlight(reserve);
		String departCity = reserve.getDepartCity();
		reserve.setArriveCity(departCity);
		yrMapper.arriveFlight(reserve);
	}

	public void hotelReservation(Command cmd) {
		msMapper.insertReserve(cmd);
		msMapper.update(cmd);
	}

	public void ghreserve(Map<String, String> reserve) {
		gh.insert(reserve);
		gh.insertDprt(reserve);
		gh.insertArrv(reserve);
	}
}
