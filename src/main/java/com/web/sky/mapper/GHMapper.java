package com.web.sky.mapper;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.web.sky.command.Command;

@Repository
public interface GHMapper {
	public void insert(Object o);

	public void insertDprt(Object o);

	public void insertArrv(Object o);

	public List<?> selectList(Command cmd);

	public List<?> selectAll(Command cmd);

	public List<?> price(Command cmd);

	public Object selectOne(Command cmd);

	public String count(Command cmd);

	public void update(Object o);

	public void delete(Command cmd);

	public List<?> ress(Command cmd);
}