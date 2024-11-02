(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{463:function(t,a,s){"use strict";s.r(a);var e=s(1),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#direct-memory"}},[t._v("Direct Memory")])]),a("li",[a("a",{attrs:{href:"#非直接缓存区和缓存区"}},[t._v("非直接缓存区和缓存区")])]),a("li",[a("a",{attrs:{href:"#存在的问题"}},[t._v("存在的问题")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"direct-memory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#direct-memory"}},[t._v("#")]),t._v(" Direct Memory")]),t._v(" "),a("p",[t._v("不是虚拟机运行时数据区的一部分，也不是《Java 虚拟机规范》中定义的内存区域。")]),t._v(" "),a("p",[t._v("直接内存是在 Java 堆外的、直接向系统申请的内存区间。")]),t._v(" "),a("p",[t._v("来源于 NIO，通过存在堆中的 DirectByteBuffer 操作 Native 内存。")]),t._v(" "),a("p",[t._v("通常，访问直接内存的速度会优于 Java 堆。即读写性能高。")]),t._v(" "),a("ul",[a("li",[t._v("因此出于性能考虑，读写频繁的场合可能会考虑使用直接内存")]),t._v(" "),a("li",[t._v("Java 的 NIO 库允许 Java 程序使用直接内存，用于数据缓冲区")])]),t._v(" "),a("p",[t._v("使用下列代码，直接分配本地内存空间：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BufferTest")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BUFFER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1GB")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ByteBuffer")]),t._v(" byteBuffer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ByteBuffer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("allocateDirect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BUFFER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此时电脑的内存被该进程占用 1GB")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("h2",{attrs:{id:"非直接缓存区和缓存区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#非直接缓存区和缓存区"}},[t._v("#")]),t._v(" 非直接缓存区和缓存区")]),t._v(" "),a("p",[t._v("原来采用 BIO 的架构，我们需要从用户态切换成内核态。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Java/20220116155640.png",alt:"image-20200709170907611"}})]),t._v(" "),a("p",[t._v("NIO 的方式使用了缓存区的概念，可以看到，去掉了中间的两个地址空间，直接使用本地的物理内存")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Java/20220122233050.png",alt:"image-20220122233049383"}})]),t._v(" "),a("h2",{attrs:{id:"存在的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#存在的问题"}},[t._v("#")]),t._v(" 存在的问题")]),t._v(" "),a("p",[t._v("也可能导致 OutofMemoryError 异常。")]),t._v(" "),a("p",[t._v("由于直接内存在 Java 堆外，因此它的大小不会直接受限于 "),a("code",[t._v("-Xmx")]),t._v(" 指定的最大堆大小，但是系统内存是有限的，Java 堆和直接内存的总和依然受限于操作系统能给出的最大内存。")]),t._v(" "),a("p",[t._v("缺点：")]),t._v(" "),a("ul",[a("li",[t._v("分配回收成本较高")]),t._v(" "),a("li",[t._v("不受 JVM 内存回收管理")])]),t._v(" "),a("p",[t._v("直接内存大小可以通过 "),a("code",[t._v("MaxDirectMemorySize")]),t._v(" 设置。")]),t._v(" "),a("p",[t._v("如果不指定，默认与堆的最大值 "),a("code",[t._v("-Xmx")]),t._v(" 参数值一致")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Java/20220116155658.png",alt:"image-20200709230647277"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);