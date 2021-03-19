(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{485:function(e,v,_){"use strict";_.r(v);var a=_(15),l=Object(a.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("p",[e._v("Maven不但有标准化的项目结构，而且还有一套标准化的构建流程，可以自动化实现编译，打包，发布，等等。")]),e._v(" "),_("h3",{attrs:{id:"lifecycle和phase"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#lifecycle和phase"}},[e._v("#")]),e._v(" Lifecycle和Phase")]),e._v(" "),_("p",[e._v("使用Maven时，我们首先要了解什么是Maven的生命周期（lifecycle）。")]),e._v(" "),_("p",[e._v("Maven的生命周期由一系列阶段（phase）构成，以内置的生命周期"),_("code",[e._v("default")]),e._v("为例，它包含以下phase：")]),e._v(" "),_("ul",[_("li",[e._v("validate")]),e._v(" "),_("li",[e._v("initialize")]),e._v(" "),_("li",[e._v("generate-sources")]),e._v(" "),_("li",[e._v("process-sources")]),e._v(" "),_("li",[e._v("generate-resources")]),e._v(" "),_("li",[e._v("process-resources")]),e._v(" "),_("li",[e._v("compile")]),e._v(" "),_("li",[e._v("process-classes")]),e._v(" "),_("li",[e._v("generate-test-sources")]),e._v(" "),_("li",[e._v("process-test-sources")]),e._v(" "),_("li",[e._v("generate-test-resources")]),e._v(" "),_("li",[e._v("process-test-resources")]),e._v(" "),_("li",[e._v("test-compile")]),e._v(" "),_("li",[e._v("process-test-classes")]),e._v(" "),_("li",[e._v("test")]),e._v(" "),_("li",[e._v("prepare-package")]),e._v(" "),_("li",[e._v("package")]),e._v(" "),_("li",[e._v("pre-integration-test")]),e._v(" "),_("li",[e._v("integration-test")]),e._v(" "),_("li",[e._v("post-integration-test")]),e._v(" "),_("li",[e._v("verify")]),e._v(" "),_("li",[e._v("install")]),e._v(" "),_("li",[e._v("deploy")])]),e._v(" "),_("p",[e._v("如果我们运行"),_("code",[e._v("mvn package")]),e._v("，Maven就会执行"),_("code",[e._v("default")]),e._v("生命周期，它会从开始一直运行到"),_("code",[e._v("package")]),e._v("这个phase为止：")]),e._v(" "),_("ul",[_("li",[e._v("validate")]),e._v(" "),_("li",[e._v("...")]),e._v(" "),_("li",[e._v("package")])]),e._v(" "),_("p",[e._v("如果我们运行"),_("code",[e._v("mvn compile")]),e._v("，Maven也会执行"),_("code",[e._v("default")]),e._v("生命周期，但这次它只会运行到"),_("code",[e._v("compile")]),e._v("，即以下几个phase：")]),e._v(" "),_("ul",[_("li",[e._v("validate")]),e._v(" "),_("li",[e._v("...")]),e._v(" "),_("li",[e._v("compile")])]),e._v(" "),_("p",[e._v("Maven另一个常用的生命周期是"),_("code",[e._v("clean")]),e._v("，它会执行3个phase：")]),e._v(" "),_("ul",[_("li",[e._v("pre-clean")]),e._v(" "),_("li",[e._v("clean （注意这个clean不是lifecycle而是phase）")]),e._v(" "),_("li",[e._v("post-clean")])]),e._v(" "),_("p",[e._v("所以，我们使用"),_("code",[e._v("mvn")]),e._v("这个命令时，后面的参数是phase，Maven自动根据生命周期运行到指定的phase。")]),e._v(" "),_("p",[e._v("更复杂的例子是指定多个phase，例如，运行"),_("code",[e._v("mvn clean package")]),e._v("，Maven先执行"),_("code",[e._v("clean")]),e._v("生命周期并运行到"),_("code",[e._v("clean")]),e._v("这个phase，然后执行"),_("code",[e._v("default")]),e._v("生命周期并运行到"),_("code",[e._v("package")]),e._v("这个phase，实际执行的phase如下：")]),e._v(" "),_("ul",[_("li",[e._v("pre-clean")]),e._v(" "),_("li",[e._v("clean （注意这个clean是phase）")]),e._v(" "),_("li",[e._v("validate")]),e._v(" "),_("li",[e._v("...")]),e._v(" "),_("li",[e._v("package")])]),e._v(" "),_("p",[e._v("在实际开发过程中，经常使用的命令有：")]),e._v(" "),_("p",[_("code",[e._v("mvn clean")]),e._v("：清理所有生成的class和jar；")]),e._v(" "),_("p",[_("code",[e._v("mvn clean compile")]),e._v("：先清理，再执行到"),_("code",[e._v("compile")]),e._v("；")]),e._v(" "),_("p",[_("code",[e._v("mvn clean test")]),e._v("：先清理，再执行到"),_("code",[e._v("test")]),e._v("，因为执行"),_("code",[e._v("test")]),e._v("前必须执行"),_("code",[e._v("compile")]),e._v("，所以这里不必指定"),_("code",[e._v("compile")]),e._v("；")]),e._v(" "),_("p",[_("code",[e._v("mvn clean package")]),e._v("：先清理，再执行到"),_("code",[e._v("package")]),e._v("。")]),e._v(" "),_("p",[e._v("大多数phase在执行过程中，因为我们通常没有在"),_("code",[e._v("pom.xml")]),e._v("中配置相关的设置，所以这些phase什么事情都不做。")]),e._v(" "),_("p",[e._v("经常用到的phase其实只有几个：")]),e._v(" "),_("ul",[_("li",[e._v("clean：清理")]),e._v(" "),_("li",[e._v("compile：编译")]),e._v(" "),_("li",[e._v("test：运行测试")]),e._v(" "),_("li",[e._v("package：打包")])]),e._v(" "),_("h3",{attrs:{id:"goal"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#goal"}},[e._v("#")]),e._v(" Goal")]),e._v(" "),_("p",[e._v("执行一个phase又会触发一个或多个goal：")]),e._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"left"}},[e._v("执行的Phase")]),e._v(" "),_("th",{staticStyle:{"text-align":"left"}},[e._v("对应执行的Goal")])])]),e._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"left"}},[e._v("compile")]),e._v(" "),_("td",{staticStyle:{"text-align":"left"}},[e._v("compiler:compile")])]),e._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[e._v("test")]),e._v(" "),_("td",{staticStyle:{"text-align":"left"}},[e._v("compiler:testCompile surefire:test")])])])]),e._v(" "),_("p",[e._v("goal的命名总是"),_("code",[e._v("abc:xyz")]),e._v("这种形式。")]),e._v(" "),_("p",[e._v("看到这里，相信大家对lifecycle、phase和goal已经明白了吧？")]),e._v(" "),_("p",[_("img",{attrs:{src:"https://zeroone-bucket.oss-cn-beijing.aliyuncs.com/cloud/20200902163833.jpeg",alt:""}})]),e._v(" "),_("p",[e._v("其实我们类比一下就明白了：")]),e._v(" "),_("ul",[_("li",[e._v("lifecycle相当于Java的package，它包含一个或多个phase；")]),e._v(" "),_("li",[e._v("phase相当于Java的class，它包含一个或多个goal；")]),e._v(" "),_("li",[e._v("goal相当于class的method，它其实才是真正干活的。")])]),e._v(" "),_("p",[e._v("大多数情况，我们只要指定phase，就默认执行这些phase默认绑定的goal，只有少数情况，我们可以直接指定运行一个goal，例如，启动Tomcat服务器：")]),e._v(" "),_("div",{staticClass:"language-shell line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-shell"}},[_("code",[e._v("mvn tomcat:run\n")])]),e._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[e._v("1")]),_("br")])]),_("h3",{attrs:{id:"小结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[e._v("#")]),e._v(" 小结")]),e._v(" "),_("p",[e._v("Maven通过lifecycle、phase和goal来提供标准的构建流程。")]),e._v(" "),_("p",[e._v("最常用的构建命令是指定phase，然后让Maven执行到指定的phase：")]),e._v(" "),_("ul",[_("li",[e._v("mvn clean")]),e._v(" "),_("li",[e._v("mvn clean compile")]),e._v(" "),_("li",[e._v("mvn clean test")]),e._v(" "),_("li",[e._v("mvn clean package")])]),e._v(" "),_("p",[e._v("通常情况，我们总是执行phase默认绑定的goal，因此不必指定goal。")])])}),[],!1,null,null,null);v.default=l.exports}}]);