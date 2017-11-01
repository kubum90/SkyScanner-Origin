package com.web.sky.command;

import org.springframework.context.annotation.Lazy;

import org.springframework.stereotype.Component;

import com.web.sky.constants.*;
import com.web.sky.member.Member;

import lombok.Data;

@Lazy @Component @Data
public class Command implements Commandable{

	protected String action,pageNumber,view,column,search,dir,startRow,endRow,page;
	protected Member member;
	
	

	
	public void setPageNumber(String pageNumber){
		this.pageNumber = 
				(pageNumber==null)?
						"1":pageNumber;
		System.out.println("페이지번호: "+this.pageNumber);
	}
	public void setAction(String action) {
		this.action = 
				(action==null)?
						"move":action;
		System.out.println("액션: "+this.action);
	}
	public void setColumn(String column){
		this.column = 
				(column==null)?
						"move":column;
		System.out.println("컬럼: "+this.column);
	}
	public void setSearch(String search){
		this.search = 
				(search==null)?
						"move":search;
		System.out.println("서치: "+this.search);
	}
	@Override
	public void process() {
		this.view=
				(dir.equals("home"))?
						"/WEB-INF/view/common/home.jsp":
				PathDTO.VIEW+dir+PathDTO.SEPARATOR+page+Extension.JSP;
		System.out.println("이동 페이지: "+view);
	}
	@Override
	public String toString() {
		return "Command [DEST="+search+"/"+column
				+page+".jsp"+ ",ACTION="+action+"]";
	}
}










