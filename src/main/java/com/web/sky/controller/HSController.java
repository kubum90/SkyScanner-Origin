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
import com.web.sky.command.Command;
import com.web.sky.mapper.HSMapper;
import com.web.sky.member.Member;
import com.web.sky.proxy.PageProxy;
import com.web.sky.service.IDeleteService;
import com.web.sky.service.IGetService;
import com.web.sky.service.IPutService;

@RestController
public class HSController {
	private static final Logger logger = LoggerFactory.getLogger(HSController.class);
	@Autowired
	HSMapper hs;
	@Autowired
	Command cmd;
	@SuppressWarnings("null")
	@Autowired
	PageProxy pxy;

	@RequestMapping("/list/{cate}")
	public @ResponseBody Map<?, ?> countDB(Model model, @PathVariable String cate) {
		Map<String, Object> map = new HashMap<>();
		switch (cate) {
		case "member":
			String s = (String) new IGetService() {
				@Override
				public Object execute(Object o) {
					return hs.countMember(cmd);
				}
			}.execute(null);
			map.put("total", s);
			break;
		case "flight":
			String f = (String) new IGetService() {
				@Override
				public Object execute(Object o) {
					return hs.countFlight(cmd);
				}
			}.execute(null);
			map.put("total", f);
			break;
		case "hotel":
			String h = (String) new IGetService() {
				@Override
				public Object execute(Object o) {
					return hs.countHotel(cmd);
				}
			}.execute(null);
			map.put("total", h);
			break;

		default:
			break;
		}
		return map;
	}

	@RequestMapping("/admin/{cate}")
	public @ResponseBody Map<?, ?> adminPlaceholder(Model model, @PathVariable String cate) {
		Map<String, Object> map = new HashMap<>();
		switch (cate) {
		case "now":
			String e = (String) new IGetService() {
				@Override
				public Object execute(Object o) {
					return hs.selectAdminEmail(cmd);
				}
			}.execute(null);

			String s = (String) new IGetService() {
				@Override
				public Object execute(Object o) {
					return hs.selectAdminSir(cmd);
				}
			}.execute(null);
			String n = (String) new IGetService() {
				@Override
				public Object execute(Object o) {
					return hs.selectAdminFirst(cmd);
				}
			}.execute(null);

			String p = (String) new IGetService() {
				@Override
				public Object execute(Object o) {
					return hs.selectAdminPassword(cmd);
				}
			}.execute(null);
			map.put("result", "success");
			map.put("email", e);
			map.put("surname", s);
			map.put("firstname", n);
			map.put("password", p);
			break;
		default:
			break;
		}
		return map;
	}

	@RequestMapping(value = "/adminCheck", method = RequestMethod.POST, consumes = "application/json")
	public @ResponseBody Map<?, ?> adminCheck(@RequestBody Member member) {
		Map<String, Object> map = new HashMap<>();
		cmd.setSearch(member.getEmail());
		IGetService adminCheckService = x -> {
			return hs.adminCheck(cmd);
		};
		Member bean = (Member) adminCheckService.execute(cmd);
		if (bean == null) {
			map.put("success", "관리자 계정이 아닙니다.");
		} else {
			if (bean.getEmail().equals(cmd.getSearch())) {
				map.put("success", "성공");
				map.put("email", bean.getEmail());
			} else {
				map.put("success", "실패");
			}
		}
		return map;
	}

	@RequestMapping(value = "/update/member", method = RequestMethod.POST, consumes = "application/json")
	public @ResponseBody Map<?, ?> updateMember(@RequestBody Member bean) {
		Map<String, Object> map = new HashMap<>();
		cmd.setSearch(bean.getEmail());
		cmd.setDir(bean.getOldPassword());
		cmd.setColumn(bean.getNewPassword());
		cmd.setAction(bean.getFirstName());
		cmd.setView(bean.getSurname());
		cmd.setPage(bean.getCountry());
		IPutService updateService = x -> {
			hs.updateMember(cmd);
		};
		IPutService updateService1 = x -> {
			hs.updateMember1(cmd);
		};
		Member bean1 = (Member) new IGetService() {
			@Override
			public Object execute(Object o) {
				return hs.selectPass(cmd);
			}
		}.execute(cmd);
		String pw = bean1.getPassword();
		updateService.execute(cmd);
		updateService1.execute(cmd);
		map.put("selectPass", pw);
		
		return map;
	};

	@RequestMapping(value = "/delete/email", method = RequestMethod.POST, consumes = "application/json")
	public @ResponseBody Map<?, ?> deleteMember(@RequestBody Map<String, String> paramMap) {
		Map<String, Object> map = new HashMap<>();
		String emails = paramMap.get("selected_emails");
		String[] emailArr = emails.split(",");
		for (String email : emailArr) {
			cmd.setSearch(email);
			new IDeleteService() {
				@Override
				public void execute(Object o) {
					hs.deleteMember(cmd);
				}
			}.execute(cmd);
			;
		}
		return map;
	};

	@RequestMapping(value = "//updateAdmin/new", method = RequestMethod.POST, consumes = "application/json")
	public @ResponseBody Map<?, ?> put(@RequestBody Member bean) {
		Map<String, Object> map = new HashMap<>();
		cmd.setSearch(bean.getEmail());
		cmd.setAction(bean.getPassword());
		IGetService updateService1 = (x) -> {
			return hs.newAdmin1(cmd);
		};
		IGetService updateService = (x) -> {
			return hs.newAdmin(cmd);
		};
		bean = (Member) updateService1.execute(cmd);
		bean = (Member) updateService.execute(cmd);
		map.put("bean", bean);
		return map;
	};

	@RequestMapping(value = "/updateAdmin", method = RequestMethod.POST, consumes = "application/json")
	public @ResponseBody Map<?, ?> get(@RequestBody Member bean) {
		Map<String, Object> map = new HashMap<>();
		cmd.setSearch(bean.getEmail());
		cmd.setDir(bean.getSurname());
		cmd.setColumn(bean.getFirstName());
		cmd.setAction(bean.getPassword());
		IGetService updateService = (x) -> {
			return hs.updateAdmin(cmd);
		};
		bean = (Member) updateService.execute(cmd);
		map.put("bean", bean);
		return map;
	};

	@RequestMapping("/a/list/{cate}/{pageNumber}")
	public @ResponseBody Map<?, ?> memberList(Model model, @PathVariable String cate, @PathVariable int pageNumber) {
		pxy.setPageSize(10);
		pxy.setBlockSize(5);
		pxy.setPageNumber(pageNumber);
		Map<String, Object> map = new HashMap<>();
		switch (cate) {
		case "member":
			int count = Integer.parseInt((String) hs.countMember(cmd));
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
			List<?> list = hs.memberList(cmd);
			pxy.execute(model, result, list);
			map.put("startPage", String.valueOf(result[2]));
			map.put("endPage", String.valueOf(result[3]));
			map.put("pageNum", String.valueOf(result[0]));
			map.put("pageSize", String.valueOf(pxy.getPageSize()));
			map.put("totalPage", String.valueOf(result[1]));
			map.put("blockSize", String.valueOf(pxy.getBlockSize()));
			map.put("count", count);
			map.put("list", list);
			break;
		default:
			break;
		}
		return map;
	};

	@RequestMapping(value = "/search/{search}/{pageNumber}", method = RequestMethod.GET, consumes = "application/json")
	public @ResponseBody Map<?, ?> searchMember(Model model, @PathVariable String search,
			@PathVariable int pageNumber) {
		Map<String, Object> map = new HashMap<>();
		pxy.setPageSize(10);
		pxy.setBlockSize(5);
		pxy.setPageNumber(pageNumber);
		cmd.setSearch(search);
		List<?> list = hs.searchMember(cmd);
		int count = hs.searchMember(cmd).size();
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
		pxy.execute(model, result, list);
		map.put("startPage", String.valueOf(result[2]));
		map.put("endPage", String.valueOf(result[3]));
		map.put("pageNum", String.valueOf(result[0]));
		map.put("pageSize", String.valueOf(pxy.getPageSize()));
		map.put("totalPage", String.valueOf(result[1]));
		map.put("blockSize", String.valueOf(pxy.getBlockSize()));
		map.put("count", count);
		map.put("list", list);
		return map;
	};
}