package com.web.sky.command;

public class MoveCommand extends Command {
	public MoveCommand(String dir, String action, String page) {
		setDir(dir);
		setAction(action);
		setPage(page);
		process();
	}
}
