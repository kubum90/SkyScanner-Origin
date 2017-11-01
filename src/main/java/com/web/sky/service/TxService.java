package com.web.sky.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.web.sky.flight.FlightReserve;
import com.web.sky.mapper.YRMapper;

@Transactional
@Service
public class TxService {
   @Autowired FlightReserve reserve;
   @Autowired YRMapper yrMapper;
   
   public void reservation(FlightReserve reserve) {
      yrMapper.departFlight(reserve);
      String departCity = reserve.getDepartCity();
      reserve.setArriveCity(departCity);
      yrMapper.arriveFlight(reserve);
   }
}