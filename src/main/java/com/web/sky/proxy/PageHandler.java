package com.web.sky.proxy;

import org.springframework.stereotype.Component;

import com.web.sky.command.Command;

@Component
public class PageHandler {

	public static Command attr(PageProxy pxy) {
		Command cmd = new Command();
		if (pxy.getPageNumber() <= pxy.getTheNumberOfRows() / pxy.getPageSize() + 1) {
			if (pxy.getPageNumber() == 1) {
				cmd.setStartRow("1");
				cmd.setEndRow(String.valueOf(pxy.getPageSize()));
			} else {
				cmd.setStartRow(String.valueOf((pxy.getPageNumber() - 1) * pxy.getPageSize() + 1));
				cmd.setEndRow(String.valueOf(pxy.getPageNumber() * pxy.getPageSize()));
			}
		}

		return cmd;
	}
}
