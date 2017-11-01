package com.web.sky.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.web.sky.flight.Arrival;
import com.web.sky.flight.Departure;
import com.web.sky.flight.Reservation;
import com.web.sky.mapper.YRMapper;

@Transactional
@Service
public class TxService {
   @Autowired Reservation reserve;
   @Autowired Arrival arrive;
   @Autowired Departure depart;
   @Autowired YRMapper mapper;
   public void reservation(Reservation reserve, Arrival arrive, Departure depart) {
      mapper.insertRsvt(reserve);
      mapper.insertDprt(depart);
      mapper.insertArrv(arrive);
   }
}