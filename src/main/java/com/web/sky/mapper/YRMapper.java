package com.web.sky.mapper;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.web.sky.command.Command;
import com.web.sky.flight.FlightReserve;

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

}