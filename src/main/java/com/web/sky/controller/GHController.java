package com.web.sky.controller;



import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.web.sky.command.Command;
import com.web.sky.flight.Flight;
import com.web.sky.mapper.GHMapper;
import com.web.sky.service.IListService;
@RestController
public class GHController {
   List<String>list=new ArrayList<String>(5);
   @Autowired Command cmd;
   @Autowired GHMapper gh;
      private static final Logger logger = LoggerFactory.getLogger(GHController.class);
      @RequestMapping(value="/choice", 
            method=RequestMethod.POST, 
            consumes="application/json")
   public @ResponseBody Map<?,?> choice() {
      Map<String, Object> map=new HashMap<>();
      IListService service=null;
      service=(x)->{
         return gh.selectList(cmd);
      };
      System.out.println(service.execute(cmd));
      map.put("place",service.execute(cmd));
         return map;
   };

   @RequestMapping(value="/flight", 
         method = RequestMethod.POST,
         consumes = "application/json")
   public @ResponseBody Map<?,?> flight(@RequestBody Map<String,String>flight) {
      if(list.size()<4) {
      list.add(Integer.parseInt(flight.get("a")),flight.get("column"));   
      }
      System.out.println(list);
      logger.info(flight.get("a"));
      logger.info("search {}",flight.get("search"));
      logger.info("colmn {}",flight.get("column"));
      Map<String, Object> map = new HashMap<>();
      IListService service = null;
      cmd.setSearch("%"+flight.get("search")+"%");
      cmd.setColumn("%"+flight.get("column")+"%");
      cmd.setDir("%"+flight.get("dir")+"%");
      service = (x) -> {
         return gh.selectAll(cmd);
      };
      map.put("flight",service.execute(cmd));
      return map;
   };
   @RequestMapping(value="/price", method=RequestMethod.POST, consumes="application/json")
   public @ResponseBody Map<?,?> price(){
         Map<String, Object>map=new HashMap<>();
         IListService service=null;
         service=(x)->{
            return gh.price(cmd);
         };
         map.put("price", service.execute(cmd));
         return map;
   } 
}