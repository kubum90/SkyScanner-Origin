package com.web.sky.controller;
import java.util.HashMap;
import java.util.Map;
import org.slf4j.LoggerFactory;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.web.sky.command.Command;
import com.web.sky.hotel.Hotel;
import com.web.sky.hotel.RespMap;
import com.web.sky.mapper.MSMapper;
import com.web.sky.member.Member;
import com.web.sky.service.IGetService;
import com.web.sky.service.IListService;
import com.web.sky.service.IPostService;
import com.web.sky.service.IPutService;
import com.web.sky.service.TxService;

@RestController
public class MSController {
	@Autowired
	Command cmd;
	@Autowired
	MSMapper ms;
	@Autowired
	Member member;
	@Autowired
	TxService tx;

	private static final Logger logger = LoggerFactory.getLogger(MSController.class);

	@RequestMapping(value = "/join", method = RequestMethod.POST, consumes = "application/json")
	public @ResponseBody Map<?, ?> join(@RequestBody Member mem) {
		Map<String, Object> map = new HashMap<>();
		cmd.setSearch(mem.getEmail());
		cmd.setDir(mem.getPassword());
		IPostService postService = x -> {
			ms.insert(cmd);
		};
		postService.execute(cmd);
		return map;
	};

	@RequestMapping(value = "/login", method = RequestMethod.POST, consumes = "application/json")
	public @ResponseBody Map<?, ?> login(@RequestBody Member mem) {
		Map<String, Object> map = new HashMap<>();
		cmd.setSearch(mem.getEmail());
		cmd.setColumn(mem.getPassword());
		IGetService loginService = (x) -> {
			return ms.selectOne(cmd);
		};
		Member bean = (Member) loginService.execute(cmd);
		map.put("bean", bean);
		return map;
	};

	@RequestMapping(value = "/suggest", method = RequestMethod.POST, consumes = "application/json")
	public @ResponseBody Map<?, ?> searchSuggestions(@RequestBody Hotel hotel) {
		Map<String, Object> map = new HashMap<>();
		IListService listService = null;
		cmd.setAction(hotel.getDestination());
		listService = (x) -> {
			return ms.selectList(cmd);
		};
		if (listService.execute(cmd).isEmpty()) {
			map.put("sgst", null);
		} else {
			map.put("sgst", listService.execute(cmd));
		};
		return map;
	};

	@RequestMapping(value = "/recommandView/{range}/{num}", method = RequestMethod.POST, consumes = "application/json")
	public @ResponseBody Map<?, ?> recommandView(@RequestBody RespMap resp, @PathVariable String range,
			@PathVariable int num) {
		Map<String, Object> map = new HashMap<>();
		IListService listService = null;
		IGetService getService = null;
		cmd.setSearch(range);
		String numStart = String.valueOf(((num - 1) * 3) + 1);
		String numEnd = String.valueOf(num * 3);
		cmd.setStartRow(numStart);
		cmd.setEndRow(numEnd);
		cmd.setAction(resp.getDestination());
		listService = (x) -> {
			return ms.recommandList(cmd);
		};
		getService = (x) -> {
			return ms.count(cmd);
		};
		Hotel r = (Hotel) getService.execute(cmd);
		map.put("rview", listService.execute(cmd));
		int count = Integer.parseInt(r.getCount());
		map.put("count", count);
		return map;
	};

	@RequestMapping(value = "/filter", method = RequestMethod.POST, consumes = "application/json")
	public @ResponseBody Map<?, ?> filter() {
		Map<String, Object> map = new HashMap<>();
		IGetService serivce = null;
		serivce = (x) -> {
			return ms.selectFilter(cmd);
		};
		map.put("filter", serivce.execute(cmd));
		return map;
	};

	@RequestMapping(value = "/hotelReservation", method = RequestMethod.POST, consumes = "application/json")
	public @ResponseBody Map<?, ?> hotelReservation(@RequestBody RespMap resp) {
		Map<String, Object> map = new HashMap<>();
		IPostService postService = null;
		IPutService putService = null;
		int ran = (int) ((Math.random() * 9999) + 1);
		cmd.setAction(String.valueOf(ran));
		cmd.setColumn(resp.getEmail());
		cmd.setDir(resp.getPassword());
		cmd.setPage(String.valueOf(resp.getHotelSeq()));
		cmd.setView("1");
		tx.hotelReservation(cmd);
		return map;
	};

	@RequestMapping(value = "/pagination", method = RequestMethod.POST, consumes = "application/json")
	public @ResponseBody Map<?, ?> pagination(@RequestBody RespMap resp) {
		Map<String, Object> map = new HashMap<>();
		IGetService gservice = null;
		map.put("startPage", "");
		map.put("endPage", "");
		map.put("totalCount", "");
		map.put("pageNum", "");
		map.put("pageSize", "2");
		map.put("totalPage", "2");
		map.put("blockSize", "3");
		gservice = (x) -> {
			return null;
		};
		return null;
	};
}
