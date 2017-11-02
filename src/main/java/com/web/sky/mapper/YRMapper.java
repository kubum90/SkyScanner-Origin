package com.web.sky.mapper;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.web.sky.command.Command;
import com.web.sky.flight.Arrival;
import com.web.sky.flight.Departure;
import com.web.sky.flight.FlightReserve;
import com.web.sky.flight.Reservation;

@Repository
public interface YRMapper {

	public List<?> selectList(Command cmd);

	public Object selectOne(Command cmd);

	public String count(Command cmd);

	public void update(Object o);

	public void delete(Command cmd);

	public List<?> memberList(Command cmd);

	public void departFlight(FlightReserve reserve);

	public void arriveFlight(FlightReserve reserve);

	public String countReservation(Object o);

	public String countFlight(Object o);

	public void insertRsvt(Reservation reserve);

	public void insertDprt(Departure depart);

	public void insertArrv(Arrival arrive);

	public List<?> listFlight(Object o);

	public List<?> listReservation(Object o);

	public List<?> listArrival(Object o);

	public List<?> listDeparture(Object o);

	public List<?> listMap(Object o);

	public List<?> listMember(Object o);

	public Object selectMember(Object o);

	public Object selectFlight(Object o);

	public Object selectReservation(Object o);

	public String selectArrival(Object o);

	public String selectDeparture(Object o);

}