(window.webpackJsonp=window.webpackJsonp||[]).push([[300],{642:function(t,s,a){"use strict";a.r(s);var i=a(1),e=Object(i.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("笔记")]),t._v(" "),s("p",[t._v("实际开发上，我们更愿意利用图形化界面如 IDEA 来进行 Git 的操作。")]),t._v(" "),s("div",{staticClass:"custom-block right"},[s("p",[t._v("2022-02-08 @Young Kbt")])])]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#idea集成git"}},[t._v("IDEA集成Git")]),s("ul",[s("li",[s("a",{attrs:{href:"#配置git忽略文件"}},[t._v("配置Git忽略文件")])]),s("li",[s("a",{attrs:{href:"#定位git程序"}},[t._v("定位Git程序")])]),s("li",[s("a",{attrs:{href:"#初始化本地库"}},[t._v("初始化本地库")])]),s("li",[s("a",{attrs:{href:"#添加到暂存区"}},[t._v("添加到暂存区")])]),s("li",[s("a",{attrs:{href:"#提交到本地库"}},[t._v("提交到本地库")])]),s("li",[s("a",{attrs:{href:"#切换版本"}},[t._v("切换版本")])]),s("li",[s("a",{attrs:{href:"#创建分支"}},[t._v("创建分支")])]),s("li",[s("a",{attrs:{href:"#切换分支"}},[t._v("切换分支")])]),s("li",[s("a",{attrs:{href:"#合并分支"}},[t._v("合并分支")])]),s("li",[s("a",{attrs:{href:"#解决冲突"}},[t._v("解决冲突")])])])]),s("li",[s("a",{attrs:{href:"#idea集成github"}},[t._v("IDEA集成GitHub")]),s("ul",[s("li",[s("a",{attrs:{href:"#设置github账号"}},[t._v("设置GitHub账号")])]),s("li",[s("a",{attrs:{href:"#分享工程到github"}},[t._v("分享工程到GitHub")])]),s("li",[s("a",{attrs:{href:"#推送本地库到远程库"}},[t._v("推送本地库到远程库")])]),s("li",[s("a",{attrs:{href:"#拉取远程库到本地库"}},[t._v("拉取远程库到本地库")])]),s("li",[s("a",{attrs:{href:"#克隆远程库到本地"}},[t._v("克隆远程库到本地")])])])]),s("li",[s("a",{attrs:{href:"#idea集成gitee"}},[t._v("IDEA集成Gitee")]),s("ul",[s("li",[s("a",{attrs:{href:"#idea安装gitee插件"}},[t._v("IDEA安装Gitee插件")])]),s("li",[s("a",{attrs:{href:"#本地库推送到远程库"}},[t._v("本地库推送到远程库")])]),s("li",[s("a",{attrs:{href:"#码云复制github项目"}},[t._v("码云复制GitHub项目")])])])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"idea集成git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#idea集成git"}},[t._v("#")]),t._v(" IDEA集成Git")]),t._v(" "),s("h3",{attrs:{id:"配置git忽略文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置git忽略文件"}},[t._v("#")]),t._v(" 配置Git忽略文件")]),t._v(" "),s("p",[t._v("有些文件如 .class、.war、.jar 等与项目的实际功能无关，不参与服务器上部署运行，那么我们需要忽略他们。")]),t._v(" "),s("p",[t._v("忽略文件有两种：")]),t._v(" "),s("ul",[s("li",[t._v("电脑全局忽略，即只要在本电脑创建的 Git 项目，都会忽略特点文件")]),t._v(" "),s("li",[t._v("项目局部忽略，即配置只有该项目的特点文件被忽略")])]),t._v(" "),s("p",[t._v("建议先配置电脑全局忽略，因为一些固定的文件是不需要上传 Git 的，而局部忽略可以选择性得进行文件忽略。")]),t._v(" "),s("blockquote",[s("p",[t._v("全局忽略")])]),t._v(" "),s("p",[t._v("创建忽略规则文件 "),s("code",[t._v("xxxx.ignore")]),t._v("（前缀名随便起，建议是 "),s("code",[t._v("git.ignore")]),t._v("）")]),t._v(" "),s("p",[t._v("这个文件的存放位置原则上在哪里都可以，为了便于让 "),s("code",[t._v("~/.gitconfig")]),t._v(" 文件引用，建议也放在用户家目录下（C/Users/用户名）。")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("git.ignore 文件模版内容如下：")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Compiled class file")]),t._v("\n*.class\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Log file")]),t._v("\n*.log\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# BlueJ files")]),t._v("\n*.ctxt\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Mobile Tools for Java (J2ME)")]),t._v("\n.mtj.tmp/\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Package Files #")]),t._v("\n*.jar\n*.war\n*.nar\n*.ear\n*.zip\n*.tar.gz\n*.rar\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# virtual machine crash logs, see ")]),t._v("\nhttp://www.java.com/en/download/help/error_hotspot.xml\nhs_err_pid*\n.classpath\n.project\n.settings\ntarget\n.idea\n*.iml\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("在 .gitconfig 文件中引用忽略配置文件（此文件在 Windows 的家目录中）")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\tname "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 【git config user.name 的用户名】\n\temail "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 【git config user.email 的邮箱】\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("core"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\texcludesfile "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" C:/Users/asus/git.ignore\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("注意：这里要使用正斜线（/），不要使用反斜线（\\）。")])])]),t._v(" "),s("blockquote",[s("p",[t._v("局部忽略")])]),t._v(" "),s("p",[t._v("在项目的根目录下创建 "),s("code",[t._v(".gitignore")]),t._v(" 文件，模板如下：")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("HELP.md\ntarget/\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(".mvn/wrapper/maven-wrapper.jar\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("**/src/main/**/target/\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("**/src/test/**/target/\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("### STS ###")]),t._v("\n.apt_generated\n.classpath\n.factorypath\n.project\n.settings\n.springBeans\n.sts4-cache\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("### IntelliJ IDEA ###")]),t._v("\n.idea\n*.iws\n*.iml\n*.ipr\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("### NetBeans ###")]),t._v("\n/nbproject/private/\n/nbbuild/\n/dist/\n/nbdist/\n/.nb-gradle/\nbuild/\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("**/src/main/**/build/\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("**/src/test/**/build/\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("### VS Code ###")]),t._v("\n.vscode/\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br")])]),s("h3",{attrs:{id:"定位git程序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定位git程序"}},[t._v("#")]),t._v(" 定位Git程序")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208182814.png",alt:"image-20220208182812373"}})]),t._v(" "),s("h3",{attrs:{id:"初始化本地库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初始化本地库"}},[t._v("#")]),t._v(" 初始化本地库")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208182836.png",alt:"image-20220208182835239"}})]),t._v(" "),s("p",[t._v("选择要创建 Git 本地仓库的工程")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208182857.png",alt:"image-20220208182856349"}})]),t._v(" "),s("h3",{attrs:{id:"添加到暂存区"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加到暂存区"}},[t._v("#")]),t._v(" 添加到暂存区")]),t._v(" "),s("p",[t._v("右键点击项目选择 Git -> Add 将项目添加到暂存区")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208182920.png",alt:"image-20220208182919064"}})]),t._v(" "),s("h3",{attrs:{id:"提交到本地库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提交到本地库"}},[t._v("#")]),t._v(" 提交到本地库")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208182932.png",alt:"image-20220208182931919"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208182941.png",alt:"image-20220208182940536"}})]),t._v(" "),s("h3",{attrs:{id:"切换版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#切换版本"}},[t._v("#")]),t._v(" 切换版本")]),t._v(" "),s("p",[t._v("在 IDEA 的左下角，点击 Version Control（新版是 Git），然后点击 Log 查看版本")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208183017.png",alt:"image-20220208183016663"}})]),t._v(" "),s("p",[t._v("右键选择要切换的版本，然后在菜单里点击 Checkout Revision")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208183036.png",alt:"image-20220208183035607"}})]),t._v(" "),s("h3",{attrs:{id:"创建分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建分支"}},[t._v("#")]),t._v(" 创建分支")]),t._v(" "),s("p",[t._v("选择 Git，在 Repository 里面，点击 Branches 按钮")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208183052.png",alt:"image-20220208183051704"}})]),t._v(" "),s("p",[t._v("在弹出的 Git Branches 框里，点击 New Branch 按钮")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208183104.png",alt:"image-20220208183103952"}})]),t._v(" "),s("p",[t._v("填写分支名称，创建 hot-fix 分支")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208183116.png",alt:"image-20220208183115614"}})]),t._v(" "),s("p",[t._v("然后再 IDEA 的右下角看到 hot-fix，说明分支创建成功，并且当前已经切换成 hot-fix 分支")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208183129.png",alt:"image-20220208183128260"}})]),t._v(" "),s("h3",{attrs:{id:"切换分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#切换分支"}},[t._v("#")]),t._v(" 切换分支")]),t._v(" "),s("p",[t._v("在 IDEA 窗口的右下角，切换到 master 分支")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208183240.png",alt:"image-20220208183239520"}})]),t._v(" "),s("p",[t._v("然后在 IDEA 窗口的右下角看到了 master，说明 master 分支切换成功")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208183252.png",alt:"image-20220208183252031"}})]),t._v(" "),s("h3",{attrs:{id:"合并分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#合并分支"}},[t._v("#")]),t._v(" 合并分支")]),t._v(" "),s("p",[t._v("在 IDEA 窗口的右下角，将 hot-fix 分支合并到当前 master 分支")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208183307.png",alt:"image-20220208183306521"}})]),t._v(" "),s("p",[t._v("如果代码没有冲突，分支直接合并成功，分支合并成功以后，代码自动提交，无需手动提交本地库。")]),t._v(" "),s("h3",{attrs:{id:"解决冲突"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决冲突"}},[t._v("#")]),t._v(" 解决冲突")]),t._v(" "),s("p",[t._v("如图所示，如果 master 分支和 hot-fix 分支都修改了代码，在合并分支的时候就会发生冲突")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208183350.png",alt:"image-20220208183349687"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208183401.png",alt:"image-20220208183400329"}})]),t._v(" "),s("p",[t._v("我们现在站在 master 分支上合并 hot-fix 分支，就会发生代码冲突")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208183414.png",alt:"image-20220208183413144"}})]),t._v(" "),s("p",[t._v("点击 Conflicts 框里的 Merge 按钮，进行手动合并代码")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208183427.png",alt:"image-20220208183426643"}})]),t._v(" "),s("p",[t._v("手动合并完代码以后，点击右下角的 Apply 按钮")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208183438.png",alt:"image-20220208183437376"}})]),t._v(" "),s("p",[t._v("代码冲突解决，自动提交本地库")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208183447.png",alt:"image-20220208183447095"}})]),t._v(" "),s("h2",{attrs:{id:"idea集成github"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#idea集成github"}},[t._v("#")]),t._v(" IDEA集成GitHub")]),t._v(" "),s("h3",{attrs:{id:"设置github账号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置github账号"}},[t._v("#")]),t._v(" 设置GitHub账号")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208183625.png",alt:"image-20220208183622208"}})]),t._v(" "),s("p",[t._v("如果出现 401 等情况连接不上的，是因为网络原因，可以使用以下方式连接：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208183639.png",alt:"image-20220208183638206"}})]),t._v(" "),s("p",[t._v("然后去 GitHub 账户上设置 token")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208183654.png",alt:"image-20220208183653462"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208183702.png",alt:"image-20220208183701134"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208183712.png",alt:"image-20220208183708119"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208183723.png",alt:"image-20220208183722476"}})]),t._v(" "),s("p",[t._v("点击生成 token")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208183743.png",alt:"image-20220208183742333"}})]),t._v(" "),s("p",[t._v("复制红框中的字符串到 idea 中")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208183749.png",alt:"image-20220208183748534"}})]),t._v(" "),s("p",[t._v("点击登录")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208183800.png",alt:"image-20220208183759988"}})]),t._v(" "),s("h3",{attrs:{id:"分享工程到github"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分享工程到github"}},[t._v("#")]),t._v(" 分享工程到GitHub")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208183817.png",alt:"image-20220208183816814"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208183823.png",alt:"image-20220208183822876"}})]),t._v(" "),s("p",[t._v("来到 GitHub 中发现已经帮我们创建好了 gitTest 的远程仓库")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208183847.png",alt:"image-20220208183845525"}})]),t._v(" "),s("h3",{attrs:{id:"推送本地库到远程库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#推送本地库到远程库"}},[t._v("#")]),t._v(" 推送本地库到远程库")]),t._v(" "),s("p",[t._v("右键点击项目，可以将当前分支的内容 push 到 GitHub 的远程仓库中")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208183916.png",alt:"image-20220208183915262"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208183924.png",alt:"image-20220208183923958"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208183933.png",alt:"image-20220208183932702"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208183940.png",alt:"image-20220208183939636"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208183948.png",alt:"image-20220208183947933"}})]),t._v(" "),s("p",[t._v("注意：push 是将本地库代码推送到远程库，如果本地库代码跟远程库代码版本不一致，push 的操作是会被拒绝的。也就是说，要想 push 成功，一定要保证本地库的版本要比远程库的版本高。")]),t._v(" "),s("p",[t._v("因此一个成熟的程序员在动手改本地代码之前，一定会先检查下远程库跟本地代码的区别。如果本地的代码版本已经落后，切记要先 pull 拉取一下远程库的代码，将本地代码更新到最新以后，然后再修改，提交，推送。")]),t._v(" "),s("h3",{attrs:{id:"拉取远程库到本地库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#拉取远程库到本地库"}},[t._v("#")]),t._v(" 拉取远程库到本地库")]),t._v(" "),s("p",[t._v("右键点击项目，可以将远程仓库的内容 pull 到本地仓库")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208184033.png",alt:"image-20220208184032348"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208184039.png",alt:"image-20220208184039037"}})]),t._v(" "),s("p",[t._v("注意：pull 是拉取远端仓库代码到本地，如果远程库代码和本地库代码不一致，会自动合并，如果自动合并失败，还会涉及到手动解决冲突的问题。")]),t._v(" "),s("h3",{attrs:{id:"克隆远程库到本地"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#克隆远程库到本地"}},[t._v("#")]),t._v(" 克隆远程库到本地")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208184104.png",alt:"image-20220208184103854"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208184111.png",alt:"image-20220208184111142"}})]),t._v(" "),s("p",[t._v("为 clone 下来的项目创建一个工程，然后点击 Next")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208184128.png",alt:"image-20220208184127990"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208184136.png",alt:"image-20220208184135500"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208184156.png",alt:"image-20220208184155575"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208184150.png",alt:"image-20220208184149924"}})]),t._v(" "),s("h2",{attrs:{id:"idea集成gitee"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#idea集成gitee"}},[t._v("#")]),t._v(" IDEA集成Gitee")]),t._v(" "),s("p",[t._v("众所周知，GitHub 服务器在国外，使用 GitHub 作为项目托管网站，如果网速不好的话，严重影响使用体验，甚至会出现登录不上的情况。针对这个情况，可以使用国内的项目托管网站：码云（Gitee）。")]),t._v(" "),s("p",[t._v("码云是开源中国推出的基于 Git 的代码托管服务中心，网址是 "),s("code",[t._v("https://gitee.com/")]),t._v("，使用方式跟 GitHub 一样，而且它还是一个中文网站，如果你英文不是很好它是最好的选择。")]),t._v(" "),s("h3",{attrs:{id:"idea安装gitee插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#idea安装gitee插件"}},[t._v("#")]),t._v(" IDEA安装Gitee插件")]),t._v(" "),s("p",[t._v("IDEA 默认不带码云插件，我们第一步要安装 Gitee 插件。")]),t._v(" "),s("p",[t._v("如图所示，在 IDEA 插件商店搜索 Gitee，然后点击右侧的 Install 按钮。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208184402.png",alt:"image-20220208184401317"}})]),t._v(" "),s("p",[t._v("IDEA 链接码云和链接 GitHub 几乎一样，安装成功后，重启 IDEA")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208184422.png",alt:"image-20220208184421471"}})]),t._v(" "),s("p",[t._v("IDEA 重启以后在 Version Control 设置里面看到 Gitee，说明码云插件安装成功")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208184437.png",alt:"image-20220208184436677"}})]),t._v(" "),s("p",[t._v("然后在码云插件里面添加码云帐号，我们就可以用 IDEA 连接码云了")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208184451.png",alt:"image-20220208184450863"}})]),t._v(" "),s("h3",{attrs:{id:"本地库推送到远程库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本地库推送到远程库"}},[t._v("#")]),t._v(" 本地库推送到远程库")]),t._v(" "),s("p",[t._v("IDEA 连接码云和连接 GitHub 几乎一样，首先在 Idea 里面创建一个工程，初始化 Git 工程，然后将代码添加到暂存区，提交到本地库，这些步骤上面已经讲过，此处不再赘述。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208184645.png",alt:"image-20220208184643772"}})]),t._v(" "),s("p",[t._v("自定义远程库链接")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208184657.png",alt:"image-20220208184656996"}})]),t._v(" "),s("p",[t._v("给远程库链接定义个 name，然后再 URL 里面填入码云远程库的 HTTPS 链接即可。码云服务器在国内，用 HTTPS 链接即可，没必要用 SSH 免密链接")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208184717.png",alt:"image-20220208184716829"}})]),t._v(" "),s("p",[t._v("然后选择定义好的远程链接，点击 Push 即可")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208184728.png",alt:"image-20220208184727596"}})]),t._v(" "),s("p",[t._v("看到提示就说明 Push 远程库成功。")]),t._v(" "),s("p",[t._v("只要码云远程库链接定义好以后，对码云远程库进行 pull 和 clone 的操作和 Github 一致，此处不再赘述。")]),t._v(" "),s("h3",{attrs:{id:"码云复制github项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#码云复制github项目"}},[t._v("#")]),t._v(" 码云复制GitHub项目")]),t._v(" "),s("p",[t._v("码云提供了直接复制 GitHub 项目的功能，方便我们做项目的迁移和下载。")]),t._v(" "),s("p",[t._v("具体操作如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208184822.png",alt:"image-20220208184821581"}})]),t._v(" "),s("p",[t._v("将 GitHub 的远程库 HTTPS 链接复制过来，点击创建按钮即可\n"),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208184833.png",alt:"image-20220208184832837"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208184840.png",alt:"image-20220208184839708"}})]),t._v(" "),s("p",[t._v("如果 GitHub 项目更新了以后，在码云项目端可以手动重新同步，进行更新")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208184853.png",alt:"image-20220208184853116"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208184901.png",alt:"image-20220208184901276"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);