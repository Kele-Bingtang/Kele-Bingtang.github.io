(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{548:function(v,_,t){"use strict";t.r(_);var i=t(1),l=Object(i.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("p"),_("div",{staticClass:"table-of-contents"},[_("ul",[_("li",[_("a",{attrs:{href:"#什么是中间件"}},[v._v("什么是中间件")])]),_("li",[_("a",{attrs:{href:"#中间件技术及架构的概述"}},[v._v("中间件技术及架构的概述")])]),_("li",[_("a",{attrs:{href:"#基于消息中间件的分布式系统的架构"}},[v._v("基于消息中间件的分布式系统的架构")])])])]),_("p"),v._v(" "),_("h2",{attrs:{id:"什么是中间件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是中间件"}},[v._v("#")]),v._v(" 什么是中间件")]),v._v(" "),_("p",[v._v("Middleware")]),v._v(" "),_("blockquote",[_("p",[v._v("什么是中间件")])]),v._v(" "),_("p",[v._v("我国企业从 20 世纪 80 年代开始就逐渐进行信息化建设，由于方法和体系的不成熟，以及企业业务的市场需求的不断变化，一个企业可能同时运行着多个不同的业务系统，这些系统可能基于不同的操作系统、不同的数据库、异构的网络环境。现在的问题是，如何把这些信息系统结合成一个有机地协同工作的整体，真正实现企业跨平台、分布式应用。中间件便是解决之道，它用自己的复杂换取了企业应用的简单。")]),v._v(" "),_("p",[v._v("中间件（Middleware）是处于操作系统和应用程序之间的软件，也有人认为它应该属于操作系统中的一部分。人们在使用中间件时，往往是一组中间件集成在一起，构成一个平台（包括开发平台和运行平台），但在这组中间件中必须要有一个通信中间件，即中间件+平台+通信，这个定义也限定了只有用于分布式系统中才能称为中间件，同时还可以把它与支撑软件和使用软件区分开来")]),v._v(" "),_("blockquote",[_("p",[v._v("为什么需要使用消息中间件")])]),v._v(" "),_("p",[v._v("具体地说，中间件屏蔽了底层操作系统的复杂性，使程序开发人员面对一个简单而统一的开发环境，减少程序设计的复杂性，将注意力集中在自己的业务上，不必再为程序在不同系统软件上的移植而重复工作，从而大大减少了技术上的负担，中间件带给应用系统的，不只是开发的简便、开发周期的缩短，也减少了系统的维护、运行和管理的工作量，还减少了计算机总体费用的投入。")]),v._v(" "),_("blockquote",[_("p",[v._v("中间件特点")])]),v._v(" "),_("p",[v._v("为解决分布异构问题，人们提出了中间件（middleware)的概念。中间件时位于平台（硬件和操作系统）和应用之间的通用服务，如下图所示，这些服务具有标准的程序接口和协议。针对不同的操作系统和硬件平台，它们可以有符合接口的协议规范的多种实现。")]),v._v(" "),_("p",[v._v("也很难给中间件一个严格的定义，但中间件应具有如下的一些特点：")]),v._v(" "),_("ol",[_("li",[v._v("满足大量应用的需要")]),v._v(" "),_("li",[v._v("运行于多种硬件和 OS 平台")]),v._v(" "),_("li",[v._v("支持分布计算，提供跨网络、硬件和 OS 平台的透明性的应用或服务的交互")]),v._v(" "),_("li",[v._v("支持标准的协议")]),v._v(" "),_("li",[v._v("支持标准的接口")])]),v._v(" "),_("p",[v._v("由于标准接口对于可移植性和标准协议对于互操作性的重要性，中间件已成为许多标准化工作的主要部分。对于应用软件开发，中间件远比操作系统和网络服务更为重要，中间件提供的程序接口定义了一个相对稳定的高层应用环境，不管底层的计算机硬件和系统软件怎样更新换代，只要将中间件升级更新，并保持中间件对外的接口定义不变，应用软件几乎不需任何修改，从而保护了企业在应用软件开发和维护中的重大投资。")]),v._v(" "),_("p",[v._v("简单说：中间件有个很大的特点，是脱离于具体设计目标，而具备提供普遍独立功能需求的模块。这使得中间件一定是可替换的。如果一个系统设计中，中间件是不可替代的，不是架构、框架设计有问题，那么就是这个中间件，在别处可能是个中间件，在这个系统内是引擎。")]),v._v(" "),_("blockquote",[_("p",[v._v("在项目中什么时候使用中间件技术")])]),v._v(" "),_("p",[v._v("在项目的架构和重构中，使用任何技术和架构的改变我们都需要谨慎斟酌和思考，因为任何技术的融入和变化都可能人员，技术，和成本的增加，中间件的技术一般现在一些互联网公司或者项目中使用比较多，如果你仅仅还只是一个初创公司建议还是使用单体架构，最多加个缓存中间件即可，不要盲目追求新或者所谓的高性能，而追求的背后一定是业务的驱动和项目的驱动，因为一旦追求就意味着你的学习成本，公司的人员结构以及服务器成本，维护和运维的成本都会增加，所以需要谨慎选择和考虑。")]),v._v(" "),_("p",[v._v("但是作为一个开放人员，一定要有学习中间件技术的能力和思维，否则很容易当项目发展到一个阶段在去掌握估计或者在面试中提及，就会给自己带来不小的困扰，在当今这个时代这些技术也并不是什么新鲜的东西，如果去掌握和挖掘最关键的还是自己花时间和经历去探讨和研究。")]),v._v(" "),_("h2",{attrs:{id:"中间件技术及架构的概述"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#中间件技术及架构的概述"}},[v._v("#")]),v._v(" 中间件技术及架构的概述")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/RabbitMQ/20211108220823.png",alt:"image-20211108220724987"}})]),v._v(" "),_("blockquote",[_("p",[v._v("单体架构")])]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/RabbitMQ/20211108220900.png",alt:"image-20211108220900"}})]),v._v(" "),_("p",[v._v("在企业开发当中，大部分的初期架构都采用的是单体架构的模式进行架构，而这种架构的典型的特点：就是把所有的业务和模块，源代码，静态资源文件等都放在一个工程中，如果其中的一个模块升级或者迭代发生一个很小的变动都会重新编译和重新部署项目。这种存在的问题是：")]),v._v(" "),_("ol",[_("li",[v._v("耦合度太高")]),v._v(" "),_("li",[v._v("不易维护")]),v._v(" "),_("li",[v._v("服务器的成本高")]),v._v(" "),_("li",[v._v("以及升级架构的复杂度也会增大")])]),v._v(" "),_("p",[v._v("这样就有后续的分布式架构系统。如下")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/RabbitMQ/20211108221246.png",alt:"image-20210625223659487"}})]),v._v(" "),_("p",[v._v("分布式系统：通俗一点，就是一个请求由服务器端的多个服务（服务或者系统）协同处理完成")]),v._v(" "),_("p",[v._v("和单体架构不同的是，单体架构是一个请求发起 jvm 调度线程（确切的是 tomcat 线程池）分配线程 Thread 来处理请求直到释放，而分布式系统是：一个请求时由多个系统共同来协同完成，jvm 和环境都可能是独立。如果生活中的比喻的话，单体架构就像建设一个小房子很快就能够搞定，如果你要建设一个鸟巢或者大型的建筑，你就必须是各个环节的协同和分布，这样目的也是项目发展到后期的时候要去部署和思考的问题。我们也不难看出来：分布式架构系统存在的特点和问题如下：")]),v._v(" "),_("p",[_("strong",[v._v("存在问题：")])]),v._v(" "),_("ol",[_("li",[v._v("学习成本高，技术栈过多")]),v._v(" "),_("li",[v._v("运维成本和服务器成本增高")]),v._v(" "),_("li",[v._v("人员的成本也会增高")]),v._v(" "),_("li",[v._v("项目的负载度也会上升")]),v._v(" "),_("li",[v._v("面临的错误和容错性也会成倍增加")]),v._v(" "),_("li",[v._v("占用的服务器端口和通讯的选择的成本高")]),v._v(" "),_("li",[v._v("安全性的考虑和因素逼迫可能选择 RMI/MQ相关的服务器端通讯")])]),v._v(" "),_("p",[_("strong",[v._v("好处：")])]),v._v(" "),_("ol",[_("li",[_("p",[v._v("服务系统的独立，占用的服务器资源减少和占用的硬件成本减少")]),v._v(" "),_("p",[v._v("确切的说是：可以合理的分配服务资源，不造成服务器资源的浪费")])]),v._v(" "),_("li",[_("p",[v._v("系统的独立维护和部署，耦合度降低，可插拔性")])]),v._v(" "),_("li",[_("p",[v._v("系统的架构和技术栈的选择可以变的灵活（而不是单纯地选择 java）")])]),v._v(" "),_("li",[_("p",[v._v("弹性的部署，不会造成平台因部署造成的瘫痪和停服的状态")])])]),v._v(" "),_("h2",{attrs:{id:"基于消息中间件的分布式系统的架构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基于消息中间件的分布式系统的架构"}},[v._v("#")]),v._v(" 基于消息中间件的分布式系统的架构")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/RabbitMQ/20211108221007.png",alt:"image-20211108221007"}})]),v._v(" "),_("p",[v._v("从上图中可以看出来，消息中间件的是")]),v._v(" "),_("ol",[_("li",[v._v("利用可靠的消息传递机制进行系统和系统直接的通讯")]),v._v(" "),_("li",[v._v("通过提供消息传递和消息的派对机制，它可以在分布式系统环境下扩展进程间的通讯")])]),v._v(" "),_("blockquote",[_("p",[v._v("消息中间件应用的场景")])]),v._v(" "),_("ol",[_("li",[v._v("跨系统数据传递")]),v._v(" "),_("li",[v._v("高并发的流量削峰")]),v._v(" "),_("li",[v._v("数据的并发和异步处理")]),v._v(" "),_("li",[v._v("大数据分析与传递")]),v._v(" "),_("li",[v._v("分布式事务")])]),v._v(" "),_("p",[v._v("比如你有一个数据要进行迁移或者请求并发过多的时候，比如你有 10 W 的并发请求下订单，我们可以在这些订单入库之前，我们可以把订单请求堆积到消息队列中，让它稳健可靠的入库和执行")])])}),[],!1,null,null,null);_.default=l.exports}}]);