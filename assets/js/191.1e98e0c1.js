(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{610:function(e,t,v){"use strict";v.r(t);var _=v(14),n=Object(_.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("p",[e._v("数据库基本上是现代应用程序的标准存储，绝大多数程序都把自己的业务数据存储在关系数据库中，可见，访问数据库几乎是所有应用程序必备能力。")]),e._v(" "),v("p",[e._v("我们在前面已经介绍了Java程序访问数据库的标准接口JDBC，它的实现方式非常简洁，即：Java标准库定义接口，各数据库厂商以“驱动”的形式实现接口。应用程序要使用哪个数据库，就把该数据库厂商的驱动以jar包形式引入进来，同时自身仅使用JDBC接口，编译期并不需要特定厂商的驱动。")]),e._v(" "),v("p",[e._v("使用JDBC虽然简单，但代码比较繁琐。Spring为了简化数据库访问，主要做了以下几点工作：")]),e._v(" "),v("ul",[v("li",[e._v("提供了简化的访问JDBC的模板类，不必手动释放资源；")]),e._v(" "),v("li",[e._v("提供了一个统一的DAO类以实现Data Access Object模式；")]),e._v(" "),v("li",[e._v("把"),v("code",[e._v("SQLException")]),e._v("封装为"),v("code",[e._v("DataAccessException")]),e._v("，这个异常是一个"),v("code",[e._v("RuntimeException")]),e._v("，并且让我们能区分SQL异常的原因，例如，"),v("code",[e._v("DuplicateKeyException")]),e._v("表示违反了一个唯一约束；")]),e._v(" "),v("li",[e._v("能方便地集成Hibernate、JPA和MyBatis这些数据库访问框架。")])]),e._v(" "),v("p",[e._v("本章我们将详细讲解在Spring中访问数据库的最佳实践。")])])}),[],!1,null,null,null);t.default=n.exports}}]);