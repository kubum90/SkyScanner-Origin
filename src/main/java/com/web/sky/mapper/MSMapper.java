package com.web.sky.mapper;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.web.sky.command.Command;

@Repository
public interface MSMapper {
	public void insert(Object o);

	public void insertReserve(Object o);

	public List<?> selectList(Command cmd);

	public List<?> recommandList(Command cmd);

	public Object selectOne(Command cmd);

	public Object selectFilter(Command cmd);

	public Object count(Command cmd);

	public void update(Object o);

	public void delete(Command cmd);
}