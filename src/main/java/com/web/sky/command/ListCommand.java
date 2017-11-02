package com.web.sky.command;

public class ListCommand extends Command {

	public ListCommand(String dir, String action, String page, String pageNumber) {
		setDir(dir);
		setAction(action);
		setPage(page);
		setPageNumber(pageNumber);
		process();
	}
}
