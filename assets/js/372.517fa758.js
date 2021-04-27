(window.webpackJsonp=window.webpackJsonp||[]).push([[372],{789:function(t,e,s){"use strict";s.r(e);var a=s(14),v=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"html-字符编码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#html-字符编码"}},[t._v("#")]),t._v(" HTML 字符编码")]),t._v(" "),s("h2",{attrs:{id:"简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),s("p",[t._v("网页包含了大量的文字，浏览器必须知道这些文字的编码方法，才能把文字还原出来。")]),t._v(" "),s("p",[t._v("一般情况下，服务器向浏览器发送 HTML 网页文件时，会通过 HTTP 头信息，声明网页的编码方式。")]),t._v(" "),s("div",{staticClass:"language-http line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Content-Type:")]),t._v(" text/html; charset=UTF-8\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("上面代码中，HTTP 头信息的"),s("code",[t._v("Content-Type")]),t._v("字段先声明，服务器发送的数据类型是"),s("code",[t._v("text/html")]),t._v("（即 HTML 网页），然后声明网页的文字编码是"),s("code",[t._v("UTF-8")]),t._v("。")]),t._v(" "),s("p",[t._v("网页内部也会再用"),s("code",[t._v("<meta>")]),t._v("标签，再次声明网页的编码。")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("charset")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("UTF-8"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"字符的数字表示法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字符的数字表示法"}},[t._v("#")]),t._v(" 字符的数字表示法")]),t._v(" "),s("p",[t._v("网页可以使用不同语言的编码方式，但是最常用的编码是 UTF-8。UTF-8 编码是 Unicode 字符集的一种表达方式。这个字符集的设计目标是包含世界上的所有字符，目前已经收入了十多万个字符。")]),t._v(" "),s("p",[t._v("每个字符有一个 Unicode 号码，称为码点（code point）。如果知道码点，就能查到这是什么字符。举例来说，英文字母"),s("code",[t._v("a")]),t._v("的码点是十进制的"),s("code",[t._v("97")]),t._v("（十六进制的"),s("code",[t._v("61")]),t._v("），汉字“中”的码点是十进制的"),s("code",[t._v("20013")]),t._v("（十六进制的"),s("code",[t._v("4e2d")]),t._v("）。")]),t._v(" "),s("p",[t._v("由于下面的原因，不是每一个 Unicode 字符都能直接在 HTML 语言里面显示。")]),t._v(" "),s("p",[t._v("（1）不是每个 Unicode 字符都可以打印出来，有些没有可打印形式，比如换行符的码点是十进制的"),s("code",[t._v("10")]),t._v("（十六进制的"),s("code",[t._v("A")]),t._v("），就没有对应的字面形式。")]),t._v(" "),s("p",[t._v("（2）小于号（"),s("code",[t._v("<")]),t._v("）和大于号（"),s("code",[t._v(">")]),t._v("）用来定义 HTML 标签，其他需要用到这两个符号的场合，必须防止它们被解释成标签。")]),t._v(" "),s("p",[t._v("（3）由于 Unicode 字符太多，无法找到一种输入法，可以直接输入所有这些字符。换言之，没有一种键盘，有办法输入所有符号。")]),t._v(" "),s("p",[t._v("（4）网页不允许混合使用多种编码，如果使用 UTF-8 编码的同时，又想插入其他编码的字符，就会很困难。")]),t._v(" "),s("p",[t._v("HTML 为了解决上面这些问题，允许使用 Unicode 码点表示字符，浏览器会自动将码点转成对应的字符。")]),t._v(" "),s("p",[t._v("字符的码点表示法是"),s("code",[t._v("&#N;")]),t._v("（十进制，"),s("code",[t._v("N")]),t._v("代表码点）或者"),s("code",[t._v("&#xN;")]),t._v("（十六进制，"),s("code",[t._v("N")]),t._v("代表码点），比如，字符"),s("code",[t._v("a")]),t._v("可以写成"),s("code",[t._v("&#97;")]),t._v("（十进制）或者"),s("code",[t._v("&#x61;")]),t._v("（十六进制），字符"),s("code",[t._v("中")]),t._v("可以写成"),s("code",[t._v("&#20013;")]),t._v("（十进制）或者"),s("code",[t._v("&#x4e2d;")]),t._v("（十六进制），浏览器会自动转换它们。")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("hello"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 等同于 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token entity",title:"&#104;"}},[t._v("&#104;")]),s("span",{pre:!0,attrs:{class:"token entity",title:"&#101;"}},[t._v("&#101;")]),s("span",{pre:!0,attrs:{class:"token entity",title:"&#108;"}},[t._v("&#108;")]),s("span",{pre:!0,attrs:{class:"token entity",title:"&#108;"}},[t._v("&#108;")]),s("span",{pre:!0,attrs:{class:"token entity",title:"&#111;"}},[t._v("&#111;")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 等同于 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token entity",title:"&#x68;"}},[t._v("&#x68;")]),s("span",{pre:!0,attrs:{class:"token entity",title:"&#x65;"}},[t._v("&#x65;")]),s("span",{pre:!0,attrs:{class:"token entity",title:"&#x6c;"}},[t._v("&#x6c;")]),s("span",{pre:!0,attrs:{class:"token entity",title:"&#x6c;"}},[t._v("&#x6c;")]),s("span",{pre:!0,attrs:{class:"token entity",title:"&#x6f;"}},[t._v("&#x6f;")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("上面代码中，字符可以直接表示，也可以使用十进制码点或十六进制码点表示。")]),t._v(" "),s("p",[t._v("注意，HTML 标签本身不能使用码点表示，否则浏览器会认为这是所要显示的文本内容，而不是标签。比如，"),s("code",[t._v("<p>")]),t._v("一旦写成"),s("code",[t._v("<&#112;>")]),t._v("或者"),s("code",[t._v("&#60;&#112;&#62;")]),t._v("，浏览器就不再认为这是标签了，而会当作文本内容将其显示为"),s("code",[t._v("<p>")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"字符的实体表示法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字符的实体表示法"}},[t._v("#")]),t._v(" 字符的实体表示法")]),t._v(" "),s("p",[t._v("数字表示法的不方便之处，在于必须知道每个字符的码点，很难记忆。为了能够快速输入，HTML 为一些特殊字符，规定了容易记忆的名字，允许通过名字来表示它们，这称为实体表示法（entity）。")]),t._v(" "),s("p",[t._v("实体的写法是"),s("code",[t._v("&name;")]),t._v("，其中的"),s("code",[t._v("name")]),t._v("是字符的名字。下面是其中一些特殊字符，及其对应的实体。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("<")]),t._v("："),s("code",[t._v("&lt;")])]),t._v(" "),s("li",[s("code",[t._v(">")]),t._v("："),s("code",[t._v("&gt;")])]),t._v(" "),s("li",[s("code",[t._v('"')]),t._v("："),s("code",[t._v("&quot;")])]),t._v(" "),s("li",[s("code",[t._v("'")]),t._v("："),s("code",[t._v("&apos;")])]),t._v(" "),s("li",[s("code",[t._v("&")]),t._v("："),s("code",[t._v("&amp;")])]),t._v(" "),s("li",[s("code",[t._v("©")]),t._v("："),s("code",[t._v("&copy;")])]),t._v(" "),s("li",[s("code",[t._v("#")]),t._v("："),s("code",[t._v("&num;")])]),t._v(" "),s("li",[s("code",[t._v("§")]),t._v("："),s("code",[t._v("&sect;")])]),t._v(" "),s("li",[s("code",[t._v("¥")]),t._v("："),s("code",[t._v("&yen;")])]),t._v(" "),s("li",[s("code",[t._v("$")]),t._v("："),s("code",[t._v("&dollar;")])]),t._v(" "),s("li",[s("code",[t._v("£")]),t._v("："),s("code",[t._v("&pound;")])]),t._v(" "),s("li",[s("code",[t._v("¢")]),t._v("："),s("code",[t._v("&cent;")])]),t._v(" "),s("li",[s("code",[t._v("%")]),t._v("："),s("code",[t._v("&percnt;")])]),t._v(" "),s("li",[s("code",[t._v("*")]),t._v("："),s("code",[t._v("$ast;")])]),t._v(" "),s("li",[s("code",[t._v("@")]),t._v("："),s("code",[t._v("&commat;")])]),t._v(" "),s("li",[s("code",[t._v("^")]),t._v("："),s("code",[t._v("&Hat;")])]),t._v(" "),s("li",[s("code",[t._v("±")]),t._v("："),s("code",[t._v("&plusmn;")])]),t._v(" "),s("li",[t._v("空格："),s("code",[t._v("&nbsp;")])])]),t._v(" "),s("p",[t._v("注意，上面最后一个特殊字符是空格，它也有对应的实体表示法。")]),t._v(" "),s("p",[t._v("字符的数字表示法和实体表示法，都可以表示正常情况无法输入的字符，逃脱了浏览器的限制，所以英语里面称为“escape”，中文翻译为“字符的转义”。")])])}),[],!1,null,null,null);e.default=v.exports}}]);