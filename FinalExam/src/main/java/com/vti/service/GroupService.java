package com.vti.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vti.entity.Group;
import com.vti.repository.IGroupRepository;

@Service
public class GroupService implements IGroupService {

	@Autowired
	private IGroupRepository repository;

	@Override
	public List<Group> getAllgroups(int page, int size, String sortType, String sortField, String search) {

		return repository.getAllgroups(page, size, sortType, sortField, search);
	}

	@Override
	public void createGroup(Group group) {
		repository.createGroup(group);
	}

	@Override
	public void updateGroup(Group group) {
		repository.updateGroup(group);

	}

	@Override
	public void deleteGroup(short id) {
		repository.deleteGroup(id);
	}

	@Override
	public Group getGroupByID(short id) {
		return repository.getGroupByID(id);
	}

}
