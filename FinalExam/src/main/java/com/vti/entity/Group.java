package com.vti.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;

@Entity
@Table(name = "`Group`", catalog = "groupmanagement")
public class Group implements Serializable {

	private static final long serialVersionUID = 1L;

	@Column(name = "groupID")
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private short groupId;

	@Column(name = "groupName", length = 50, nullable = false, unique = true)
	private String groupName;

	@Column(name = "totalMember", nullable = false)
	private short totalMember;

	@Column(name = "creator", length = 100, nullable = false)
	private String creator;

	@Column(name = "createDate")
	@Temporal(TemporalType.TIMESTAMP)
	@CreationTimestamp
	private Date createDate;

	public Group() {

	}

	public short getGroupId() {
		return groupId;
	}

	public void setGroupId(short groupId) {
		this.groupId = groupId;
	}

	public String getGroupName() {
		return groupName;
	}

	public void setGroupName(String groupName) {
		this.groupName = groupName;
	}

	public short getTotalMember() {
		return totalMember;
	}

	public void setTotalMember(short totalMember) {
		this.totalMember = totalMember;
	}

	public String getCreator() {
		return creator;
	}

	public void setCreator(String creator) {
		this.creator = creator;
	}

	public Date getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "Group [groupId=" + groupId + ", groupName=" + groupName + ", totalMember=" + totalMember + ", creator="
				+ creator + ", createDate=" + createDate + "]";
	}

}
