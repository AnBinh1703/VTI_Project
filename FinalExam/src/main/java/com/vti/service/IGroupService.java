package com.vti.service;

import java.util.List;

import com.vti.entity.Group;

public interface IGroupService {

	public List<Group> getAllgroups(int page, int size, String sortType, String sortField, String search);

	public Group getGroupByID(short id);
	
	public void createGroup(Group group);

	public void updateGroup(Group group);

	public void deleteGroup(short id);
}
