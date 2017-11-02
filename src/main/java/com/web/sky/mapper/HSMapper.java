package com.web.sky.mapper;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.web.sky.command.Command;

@Repository
public interface HSMapper {
	public void insert(Object o);

	public List<?> selectList(Command cmd);

	public List<?> memberList(Command cmd);

	public List<?> searchMember(Command cmd);

	public Object selectPass(Command cmd);

	public Object countMember(Command cmd);

	public Object countFlight(Command cmd);

	public Object countHotel(Command cmd);

	public Object selectAdminEmail(Command cmd);

	public Object selectAdminSir(Command cmd);

	public Object selectAdminFirst(Command cmd);

	public Object selectAdminPassword(Command cmd);

	public Object updateAdmin(Command cmd);

	public void updateMember(Command cmd);

	public void updateMember1(Command cmd);

	public Object newAdmin(Command cmd);

	public Object newAdmin1(Command cmd);

	public void deleteMember(Command cmd);

	public Object adminCheck(Command cmd);;

}