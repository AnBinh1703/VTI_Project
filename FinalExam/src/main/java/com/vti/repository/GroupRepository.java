package com.vti.repository;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.LogicalExpression;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import com.vti.entity.Group;
import com.vti.utils.HibernateUtils;

@Repository
public class GroupRepository implements IGroupRepository {

	private HibernateUtils hibernateUtils;

	public GroupRepository() {
		hibernateUtils = HibernateUtils.getInstance();
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Group> getAllgroups(int page, int size, String sortType, String sortField, String search) {
		Session session = null;

		try {
			session = hibernateUtils.openSession();

			Criteria criteria = session.createCriteria(Group.class);

			// paging
			criteria.setFirstResult((page - 1) * size);
			criteria.setMaxResults(size);

			// sorting
			if (sortType.equals("ASC")) {
				criteria.addOrder(Order.asc(sortField));
			} else {
				criteria.addOrder(Order.desc(sortField));
			}
			// search
			if (search != null) {
				criteria.add(Restrictions.ilike("groupName", "%" + search + "%"));
			}

			return criteria.list();

		} finally {
			if (session != null) {
				session.close();
			}
		}
	}

	@Override
	public void createGroup(Group group) {
		Session session = null;

		try {

			session = hibernateUtils.openSession();
			session.beginTransaction();

			session.save(group);

			session.getTransaction().commit();
		} finally {
			if (session != null) {
				session.close();
			}
		}

	}

	@Override
	public void updateGroup(Group group) {
		Session session = null;

		try {

			// get session
			session = hibernateUtils.openSession();
			session.beginTransaction();

			// update
			session.update(group);

			session.getTransaction().commit();
		} finally {
			if (session != null) {
				session.close();
			}
		}

	}

	@Override
	public void deleteGroup(short id) {
		Session session = null;

		try {

			session = hibernateUtils.openSession();
			session.beginTransaction();

			Group group = (Group) session.load(Group.class, id);

			session.delete(group);

			session.getTransaction().commit();

		} finally {
			if (session != null) {
				session.close();
			}
		}

	}

	@Override
	public Group getGroupByID(short id) {
		Session session = null;

		try {

			// get session
			session = hibernateUtils.openSession();

			// get department by id
			Group group = session.get(Group.class, id);

			return group;

		} finally {
			if (session != null) {
				session.close();
			}
		}
	}

}
