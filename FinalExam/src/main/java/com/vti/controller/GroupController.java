package com.vti.controller;

import java.io.Serializable;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.vti.entity.Group;
import com.vti.service.IGroupService;

@RestController
@RequestMapping(value = "api/v1/groups")
@CrossOrigin(origins = "http://127.0.0.1:5501")
@Controller
public class GroupController implements Serializable {

	@Autowired
	private IGroupService service;

	@GetMapping()
	public List<Group> getAllgroups(@RequestParam(defaultValue = "1") int page,
			@RequestParam(defaultValue = "5") int size, @RequestParam(defaultValue = "ASC") String sortType,
			@RequestParam(defaultValue = "id") String sortField, @RequestParam String search) {

		return service.getAllgroups(page, size, sortType, sortField, search);
	}

	@GetMapping(value = "/{id}")
	public Group getGroupByID(@PathVariable(name = "id") short id) {
		return service.getGroupByID(id);
	}

	@PostMapping
	public void createGroup(@RequestBody Group group) {
		service.createGroup(group);
	}

	@PutMapping(value = "/{id}")
	public void updateGroup(@PathVariable(name = "id") short id, @RequestBody Group group) {
		group.setGroupId(id);
		service.updateGroup(group);

	}

	@DeleteMapping(value = "/{id}")
	public void deleteGroup(@PathVariable(name = "id") short id) {
		service.deleteGroup(id);
	}
}
