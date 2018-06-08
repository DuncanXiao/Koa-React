create table Users (
    id int(11) NOT NULL auto_increment,
    name varchar(40) NOT NULL,
    password varchar(8) NOT NULL,
    createTime timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updateTime timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY  (id)
);

create table UserArticles (
    articleId int(11) NOT NULL auto_increment,
    userId int(11) NOT NULL,
    title varchar(100) NOT NULL,
    createTime timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updateTime timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
    content LONGTEXT,
    PRIMARY KEY  (articleId),
    FOREIGN KEY (userId) REFERENCES Users(id)
);

create table ArticlesComments (
    id int(11) NOT NULL auto_increment,
    parentId int(11),
    articleId int(11) NOT NULL,
    userId int(11) NOT NULL,
    comment varchar (100) NOT NULL,
    likeCount int(10) NOT NULL DEFAULT 0,
    unLikeCount int (10) NOT NULL DEFAULT 0,
    createTime timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (articleId) REFERENCES UserArticles(articleId)
);