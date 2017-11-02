package com.web.sky.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;
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
import com.web.sky.mapper.GHMapper;
import com.web.sky.mapper.HSMapper;
import com.web.sky.proxy.PageProxy;
import com.web.sky.service.IListService;
import com.web.sky.service.TxService;

@RestController
public class GHController {
	List<String> list = new ArrayList<String>(5);
	@Autowired
	Command cmd;
	@Autowired
	GHMapper gh;
	@Autowired
	TxService tx;
	@Autowired
	PageProxy pxy;
	@Autowired
	HSMapper hs;
	private static final Logger logger = LoggerFactory.getLogger(GHController.class);

	@RequestMapping(value = "/choice", method = RequestMethod.POST, consumes = "application/json")
	public @ResponseBody Map<?, ?> choice() {
		Map<String, Object> map = new HashMap<>();
		IListService service = null;
		service = (x) -> {
			return gh.selectList(cmd);
		};
		map.put("place", service.execute(cmd));
		return map;
	};

	@RequestMapping(value = "/flight", method = RequestMethod.POST, consumes = "application/json")
	public @ResponseBody Map<?, ?> flight(@RequestBody Map<String, String> flight) {
		if (list.size() < 4) {
			list.add(Integer.parseInt(flight.get("a")), flight.get("column"));
		}
		Map<String, Object> map = new HashMap<>();
		IListService service = null;
		cmd.setSearch("%" + flight.get("search") + "%");
		cmd.setColumn("%" + flight.get("column") + "%");
		cmd.setDir("%" + flight.get("dir") + "%");
		service = (x) -> {
			return gh.selectAll(cmd);
		};
		map.put("flight", service.execute(cmd));
		return map;
	};

	@RequestMapping(value = "/price", method = RequestMethod.POST, consumes = "application/json")
	public @ResponseBody Map<?, ?> price() {
		Map<String, Object> map = new HashMap<>();
		IListService service = null;
		service = (x) -> {
			return gh.price(cmd);
		};
		map.put("price", service.execute(cmd));
		return map;
	}

	// void라서 리턴이 없음
	@RequestMapping(value = "/reserve", method = RequestMethod.POST, consumes = "application/json")
	public @ResponseBody Object insert(@RequestBody Map<String, String> reserve) {
		Map<String, Object> map = new HashMap<>();
		IListService list = null;
		Random rnd = new Random();
		StringBuffer buf = new StringBuffer();
		for (int i = 0; i < 10; i++) {
			if (rnd.nextBoolean()) {
				buf.append((char) ((int) (rnd.nextInt(26)) + 97));
			} else {
				buf.append((rnd.nextInt(10)));
			}
		}
		reserve.put("reservationNO", buf.toString());
		tx.ghreserve(reserve);
		cmd.setSearch(buf.toString());
		list = (x) -> {
			return gh.ress(cmd);
		};
		map.put("list", list.execute(cmd).get(0));
		return map;
	}

	@RequestMapping(value = "/flightlist/{pageNumber}", method = RequestMethod.GET, consumes = "application/json")
	public @ResponseBody Map<?, ?> pxy(@PathVariable int pageNumber) {
		pxy.setPageSize(4);
		pxy.setBlockSize(5);
		pxy.setPageNumber(pageNumber);
		Map<String, Object> map = new HashMap<>();
		IListService service = null;
		int count = Integer.parseInt((String) hs.countFlight(cmd));
		pxy.setTheNumberOfRows(count);
		int[] result = new int[6];
		int theNumberOfPages = 0, startPage = 0, endPage = 0;
		theNumberOfPages = (pxy.getTheNumberOfRows() % pxy.getPageSize()) == 0
				? pxy.getTheNumberOfRows() / pxy.getPageSize()
				: pxy.getTheNumberOfRows() / pxy.getPageSize() + 1;
		startPage = pxy.getPageNumber() - ((pxy.getPageNumber() - 1) % pxy.getBlockSize());
		endPage = (startPage + pxy.getBlockSize() - 1 <= theNumberOfPages) ? startPage + pxy.getBlockSize() - 1
				: theNumberOfPages;
		result[0] = pxy.getPageNumber();
		result[1] = theNumberOfPages;
		result[2] = startPage;
		result[3] = endPage;
		result[4] = (startPage - (theNumberOfPages / pxy.getBlockSize()) > 0) ? 1 : 0;
		result[5] = startPage + pxy.getBlockSize();
		if (pxy.getPageNumber() <= pxy.getTheNumberOfRows() / pxy.getPageSize() + 1) {
			if (pxy.getPageNumber() == 1) {
				cmd.setStartRow("1");
				cmd.setEndRow(String.valueOf(pxy.getPageSize()));
			} else {
				cmd.setStartRow(String.valueOf((pxy.getPageNumber() - 1) * pxy.getPageSize() + 1));
				cmd.setEndRow(String.valueOf(pxy.getPageNumber() * pxy.getPageSize()));
			}
		}
		List<?> list = gh.selectList(cmd);
		map.put("startPage", String.valueOf(result[2]));
		map.put("endPage", String.valueOf(result[3]));
		map.put("pageNum", String.valueOf(result[0]));
		map.put("pageSize", String.valueOf(pxy.getPageSize()));
		map.put("totalPage", String.valueOf(result[1]));
		map.put("blockSize", String.valueOf(pxy.getBlockSize()));
		map.put("count", count);
		map.put("result", "success");
		map.put("list", list);
		service = (x) -> {
			return gh.price(cmd);
		};
		map.put("fl", service.execute(cmd));
		return map;
	}
}