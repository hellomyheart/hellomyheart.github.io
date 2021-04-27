(window.webpackJsonp=window.webpackJsonp||[]).push([[412],{828:function(t,a,s){"use strict";s.r(a);var e=s(14),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#元素"}},[t._v("#")]),t._v(" "),s("form",[t._v(" 元素")])]),t._v(" "),s("p",[s("code",[t._v("<form>")]),t._v("元素代表了表单，继承了 HTMLFormElement 接口。")]),t._v(" "),s("h2",{attrs:{id:"htmlformelement-的实例属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#htmlformelement-的实例属性"}},[t._v("#")]),t._v(" HTMLFormElement 的实例属性")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("elements")]),t._v("：返回一个类似数组的对象，成员是属于该表单的所有控件元素。该属性只读。")]),t._v(" "),s("li",[s("code",[t._v("length")]),t._v("：返回一个整数，表示属于该表单的控件数量。该属性只读。")]),t._v(" "),s("li",[s("code",[t._v("name")]),t._v("：字符串，表示该表单的名称。")]),t._v(" "),s("li",[s("code",[t._v("method")]),t._v("：字符串，表示提交给服务器时所使用的 HTTP 方法。")]),t._v(" "),s("li",[s("code",[t._v("target")]),t._v("：字符串，表示表单提交后，服务器返回的数据的展示位置。")]),t._v(" "),s("li",[s("code",[t._v("action")]),t._v("：字符串，表示表单提交数据的 URL。")]),t._v(" "),s("li",[s("code",[t._v("enctype")]),t._v("（或"),s("code",[t._v("encoding")]),t._v("）：字符串，表示表单提交数据的编码方法，可能的值有"),s("code",[t._v("application/x-www-form-urlencoded")]),t._v("、"),s("code",[t._v("multipart/form-data")]),t._v("和"),s("code",[t._v("text/plain")]),t._v("。")]),t._v(" "),s("li",[s("code",[t._v("acceptCharset")]),t._v("：字符串，表示服务器所能接受的字符编码，多个编码格式之间使用逗号或空格分隔。")]),t._v(" "),s("li",[s("code",[t._v("autocomplete")]),t._v("：字符串"),s("code",[t._v("on")]),t._v("或"),s("code",[t._v("off")]),t._v("，表示浏览器是否要对"),s("code",[t._v("<input>")]),t._v("控件提供自动补全。")]),t._v(" "),s("li",[s("code",[t._v("noValidate")]),t._v("：布尔值，表示是否关闭表单的自动校验。")])]),t._v(" "),s("h2",{attrs:{id:"htmlformelement-的实例方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#htmlformelement-的实例方法"}},[t._v("#")]),t._v(" HTMLFormElement 的实例方法")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("submit()")]),t._v("：提交表单，但是不会触发"),s("code",[t._v("submit")]),t._v("事件和表单的自动校验。")]),t._v(" "),s("li",[s("code",[t._v("reset()")]),t._v("：重置表单控件的值为默认值。")]),t._v(" "),s("li",[s("code",[t._v("checkValidity()")]),t._v("：如果控件能够通过自动校验，返回"),s("code",[t._v("true")]),t._v("，否则返回"),s("code",[t._v("false")]),t._v("，同时触发"),s("code",[t._v("invalid")]),t._v("事件。")])]),t._v(" "),s("p",[t._v("下面是一个创建表单并提交的例子。")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" f "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'form'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndocument"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("action "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/cgi-bin/some.cgi'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("method "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'POST'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("submit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);