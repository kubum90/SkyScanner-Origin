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
import com.web.sky.service.IListService;
import com.web.sky.service.IPutService;

@RestController
public class HSController {
	private static final Logger logger = LoggerFactory.getLogger(HSController.class);
	@Autowired HSMapper hs ;
	@Autowired Command cmd;
	@SuppressWarnings("null")
	@Autowired PageProxy pxy;
	
	@RequestMapping("/list/{cate}")
	public @ResponseBody Map<?, ?> countDB(Model model,@PathVariable String cate) {
		logger.info("HS ContList{}","진입");
		Map<String, Object> map=new HashMap<>();
		System.out.println("/list/에 들어옴!!");
		switch(cate){
		case "member":
			logger.info("/list/member/에 들어옴");
			String s = (String) new IGetService() {
				@Override
				public Object execute(Object o) {
					return hs.countMember(cmd);
				}
			}.execute(null);
			
			System.out.println("count " + s);
			map.put("result","success");
			map.put("total",s);
			break;
		case "flight":
			logger.info("/list/flight/에 들어옴");
			String f = (String) new IGetService() {
				@Override
				public Object execute(Object o) {
					return hs.countFlight(cmd);
				}
			}.execute(null);
			
			System.out.println("count " + f);
			map.put("result","success");
			map.put("total",f);
			break;
		case "hotel":
			logger.info("/list/hotel/에 들어옴");
			String h = (String) new IGetService() {
				@Override
				public Object execute(Object o) {
					return hs.countHotel(cmd);
				}
			}.execute(null);
			
			System.out.println("count " + h);
			map.put("result","success");
			map.put("total",h);
			break;
		
	
		
		default:
			break;
		}
		return map;
	}
	
	@RequestMapping("/admin/{cate}")
	public @ResponseBody Map<?, ?> adminPlaceholder(Model model,@PathVariable String cate) {
		logger.info("admin플레이스 ContList{}","진입");
		Map<String, Object> map=new HashMap<>();
		switch(cate){
		case "now":
			logger.info("/admin/now/에 들어옴");
			
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
			
			map.put("result","success");
			map.put("email",e);
			map.put("surname",s);
			map.put("firstname",n);
			map.put("password",p);
			break;
		default:
			break;
	
		}
		return map;
	}

	@RequestMapping(value="/adminCheck",
			method=RequestMethod.POST,
			consumes="application/json")
	public @ResponseBody Map<?,?> adminCheck(@RequestBody Member member){
		logger.info("관리자 체크 컨트롤러 진입");
		Map<String, Object> map = new HashMap<>();
		logger.info("관리자 체크 컨트롤러로 들어온 이메일 주소: {}",member.getEmail());
		cmd.setSearch(member.getEmail());
		IGetService adminCheckService = x->{
			return hs.adminCheck(cmd);
		};
		Member bean=(Member) adminCheckService.execute(cmd);
		if(bean==null) {
			System.out.println("email null");
			map.put("success", "관리자 계정이 아닙니다.");
		}else {
			if(bean.getEmail().equals(cmd.getSearch())) {
				map.put("success", "성공");
				map.put("email", bean.getEmail());	
			}else {
				map.put("success", "실패");
			}
		}
		
		
		return map;
	}
	
	
	@RequestMapping(value="/update/member",
			method=RequestMethod.POST,
	         consumes="application/json")
	public @ResponseBody Map<?, ?> updateMember(@RequestBody Member bean){
		logger.info("컨트롤러 진입!!");
		Map<String, Object> map = new HashMap<>();
		
		logger.info("업데이트 할 이메일: {}",bean.getEmail());
	
		
		cmd.setSearch(bean.getEmail());
		cmd.setDir(bean.getOldPassword());
		cmd.setColumn(bean.getNewPassword());
		cmd.setAction(bean.getFirstName());
		cmd.setView(bean.getSurname());
		cmd.setPage(bean.getCountry());
		
		
		IPutService updateService=x->{
			 hs.updateMember(cmd);
		};
		IPutService updateService1=x->{
			hs.updateMember1(cmd);
		};
	

		Member bean1 = (Member) new IGetService() {
			@Override
			public Object execute(Object o) {
				return hs.selectPass(cmd);
			}
		}.execute(cmd);
			
		String pw=bean1.getPassword();
		 updateService.execute(cmd);
		 updateService1.execute(cmd);
		 map.put("selectPass", pw);
		 map.put("success", "통신성공");
	
		return map;
	};
	
	

	
	@RequestMapping(value="/delete/email",
			method=RequestMethod.POST,
	         consumes="application/json")
	public @ResponseBody Map<?, ?> deleteMember(@RequestBody Map<String,String>paramMap){
		logger.info("컨트롤러 진입!!");
		Map<String, Object> map = new HashMap<>();
		
		/*logger.info("삭제할 이메일: {}",bean.getEmail());
		cmd.setSearch(bean.getEmail());*/
		String emails = paramMap.get("selected_emails");
		String[] emailArr = emails.split(",");
		for(String email: emailArr) {
			cmd.setSearch(email);
			new IDeleteService() {
				
				@Override
				public void execute(Object o) {
					hs.deleteMember(cmd);
					
				}
			}.execute(cmd);;
		}
		
		
		map.put("result", "success");
			
		return map;
	};
	
	@RequestMapping(value="//updateAdmin/new",
			method=RequestMethod.POST,
	         consumes="application/json")
	public @ResponseBody Map<?, ?> put(@RequestBody Member bean){
		logger.info("컨트롤러 진입!!");
		Map<String, Object> map = new HashMap<>();
		logger.info("지금 관리자 이메일: {}",bean.getEmail());
		cmd.setSearch(bean.getEmail());
		cmd.setAction(bean.getPassword());
		
		IGetService updateService1=(x)->{
			return hs.newAdmin1(cmd);
		};
		IGetService updateService=(x)->{
			return hs.newAdmin(cmd);
		};
		bean = (Member) updateService1.execute(cmd);
		bean = (Member) updateService.execute(cmd);
		map.put("success", "통신성공");
		map.put("bean", bean);	
		return map;
	};
	
	
	
	@RequestMapping(value="/updateAdmin",
			method=RequestMethod.POST,
	         consumes="application/json")
	public @ResponseBody Map<?, ?> get(@RequestBody Member bean){
		logger.info("컨트롤러 진입!!");
		Map<String, Object> map = new HashMap<>();
		
		logger.info("지금 관리자 이메일: {}",bean.getEmail());
		cmd.setSearch(bean.getEmail());
		cmd.setDir(bean.getSurname());
		cmd.setColumn(bean.getFirstName());
		cmd.setAction(bean.getPassword());
		
		IGetService updateService=(x)->{
			return hs.updateAdmin(cmd);
		};
		bean = (Member) updateService.execute(cmd);
		map.put("success", "통신성공");
		map.put("bean", bean);	
		return map;
	};
	
	
	
	@RequestMapping("/a/list/{cate}/{pageNumber}")
	public @ResponseBody Map<?, ?> memberList(Model model,@PathVariable String cate,@PathVariable int pageNumber) {
		logger.info("회원정보 하는거 진입");
		pxy.setPageSize(10);
		pxy.setBlockSize(5);
		pxy.setPageNumber(pageNumber);
		logger.info("페이지 넘버"+pageNumber);
		Map<String, Object> map=new HashMap<>();
		System.out.println("/member/list에 들어옴!!");
		
		switch(cate){
		case "member":
			logger.info("member 리스트에 들어옴");
			int count=Integer.parseInt((String) hs.countMember(cmd));
			pxy.setTheNumberOfRows(count);
			int[]result=new int[6];
			int theNumberOfPages=0,
					startPage=0,
					endPage=0;
	
			theNumberOfPages
			=(pxy.getTheNumberOfRows() % pxy.getPageSize())==0?
					pxy.getTheNumberOfRows() / pxy.getPageSize()
					: pxy.getTheNumberOfRows() / pxy.getPageSize() +1;
			
			startPage =pxy.getPageNumber() -((pxy.getPageNumber()-1)%pxy.getBlockSize());		
			
			endPage=(startPage + pxy.getBlockSize() -1 
					<= theNumberOfPages)?
							startPage + pxy.getBlockSize()-1 : theNumberOfPages;
			
			result[0]=pxy.getPageNumber();
			result[1]=theNumberOfPages;
			result[2]=startPage;
			result[3]=endPage;
			result[4]=(startPage-(theNumberOfPages/pxy.getBlockSize())>0)?1:0;
			result[5]=startPage+pxy.getBlockSize();
			
		
			if(pxy.getPageNumber() <= pxy.getTheNumberOfRows() / pxy.getPageSize() +1) {
				if(pxy.getPageNumber()==1) {
					cmd.setStartRow("1");
					cmd.setEndRow(String.valueOf(pxy.getPageSize()));
				}else {	
					cmd.setStartRow(String.valueOf((pxy.getPageNumber()-1)* pxy.getPageSize()+1));
					cmd.setEndRow(String.valueOf(pxy.getPageNumber()*pxy.getPageSize()));
				}
			}
			
				List<?> list = hs.memberList(cmd);
				
			pxy.execute(model, result,list);
			map.put("startPage", String.valueOf(result[2]));
			map.put("endPage", String.valueOf(result[3]));
			map.put("pageNum", String.valueOf(result[0]));
			map.put("pageSize", String.valueOf(pxy.getPageSize()));
			map.put("totalPage", String.valueOf(result[1]));
			map.put("blockSize", String.valueOf(pxy.getBlockSize()));
			map.put("count",count);
			map.put("result","success");
			map.put("list", list);
			break;
	
		
		default:
			break;
		}
		return map;
	};
	@RequestMapping(value="/search/{search}/{pageNumber}",
			method=RequestMethod.GET,
	         consumes="application/json")
	
	public @ResponseBody Map<?, ?> searchMember(Model model,@PathVariable String search,@PathVariable int pageNumber){
		logger.info("서치 진입(1)");
		Map<String, Object> map = new HashMap<>();
		pxy.setPageSize(10);
		pxy.setBlockSize(5);
		pxy.setPageNumber(pageNumber);
		logger.info("페이지 넘버"+pageNumber);
		cmd.setSearch(search);	
		List<?> list = hs.searchMember(cmd);
		int count=hs.searchMember(cmd).size();
		pxy.setTheNumberOfRows(count);
		int[]result=new int[6];
		int theNumberOfPages=0,
				startPage=0,
				endPage=0;

		theNumberOfPages
		=(pxy.getTheNumberOfRows() % pxy.getPageSize())==0?
				pxy.getTheNumberOfRows() / pxy.getPageSize()
				: pxy.getTheNumberOfRows() / pxy.getPageSize() +1;
		
		startPage =pxy.getPageNumber() -((pxy.getPageNumber()-1)%pxy.getBlockSize());		
		
		endPage=(startPage + pxy.getBlockSize() -1 
				<= theNumberOfPages)?
						startPage + pxy.getBlockSize()-1 : theNumberOfPages;
		
		result[0]=pxy.getPageNumber();
		result[1]=theNumberOfPages;
		result[2]=startPage;
		result[3]=endPage;
		result[4]=(startPage-(theNumberOfPages/pxy.getBlockSize())>0)?1:0;
		result[5]=startPage+pxy.getBlockSize();
		
	
		if(pxy.getPageNumber() <= pxy.getTheNumberOfRows() / pxy.getPageSize() +1) {
			if(pxy.getPageNumber()==1) {
				cmd.setStartRow("1");
				cmd.setEndRow(String.valueOf(pxy.getPageSize()));
			}else {	
				cmd.setStartRow(String.valueOf((pxy.getPageNumber()-1)* pxy.getPageSize()+1));
				cmd.setEndRow(String.valueOf(pxy.getPageNumber()*pxy.getPageSize()));
			}
		}
		
		pxy.execute(model, result,list);
		map.put("startPage", String.valueOf(result[2]));
		map.put("endPage", String.valueOf(result[3]));
		map.put("pageNum", String.valueOf(result[0]));
		map.put("pageSize", String.valueOf(pxy.getPageSize()));
		map.put("totalPage", String.valueOf(result[1]));
		map.put("blockSize", String.valueOf(pxy.getBlockSize()));
		map.put("count",count);
		map.put("list", list);
		map.put("success", "통신성공");
		
		return map;
	};
	
	
}