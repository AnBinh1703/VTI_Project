CREATE DATABASE GroupManagement;
Use GroupManagement;

DROP TABLE IF EXISTS `group`;
CREATE TABLE `group` (
	groupID TINYINT unsigned auto_increment primary key,
    groupName NVARCHAR(50) NOT NULL unique key,
    totalMember TINYINT NOT NULL default 0,
    creator NVARCHAR(100) NOT NULL default 'NAT',
    createDate DATETIME DEFAULT NOW()
);

INSERT INTO `group` (groupName,totalMember,creator,createDate)
VALUE 				(N'Testing System'		,   5			,	'NAT'			,	'2019-03-05'),
					(N'Developement'		,   1			,	'NAT'			,	'2020-03-07'),
                    (N'VTI Sale 01'			,   2			,	'NAT'			,	'2020-03-09'),
                    (N'VTI Sale 02'			,   3			,	'NAT'			,	'2020-03-10'),
                    (N'VTI Sale 03'			,   4			,	'NAT'			,	'2020-03-28'),
                    (N'VTI Creator'			,   6			,	'NAT'			,	'2020-04-06'),
                    (N'VTI Marketing 01'	,   7			,	'NAT'			,	'2020-04-07'),
                    (N'Management'			,   8			,	'NAT'			,	'2020-04-08'),
                    (N'Chat with love'		,   9			,	'NAT'			,	'2020-04-09'),
                    (N'JAVA CORE'			,   3			,	'NAT'			,		now()	),
                    (N'Angular'				,   4			,	'NAT'			,		now()	),
                    (N'MySQL'				,   5			,	'NAT'			,		now()	),
                    (N'Vi Ti Ai'			,   10			,	'NAT'			,	'2020-04-10');
select * from `group`