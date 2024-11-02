(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{511:function(s,v,t){"use strict";t.r(v);var e=t(1),a=Object(e.a)({},(function(){var s=this,v=s._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[s._v("笔记")]),s._v(" "),v("p",[s._v("持久化能让数据「备份」，防止 Redis 突然宕机后，数据消失。")]),s._v(" "),v("div",{staticClass:"custom-block right"},[v("p",[s._v("2021-12-26 @Young Kbt")])])]),s._v(" "),v("p"),v("div",{staticClass:"table-of-contents"},[v("ul",[v("li",[v("a",{attrs:{href:"#持久化"}},[s._v("持久化")])]),v("li",[v("a",{attrs:{href:"#持久化之rdb"}},[s._v("持久化之RDB")]),v("ul",[v("li",[v("a",{attrs:{href:"#什么是rdb"}},[s._v("什么是RDB")])]),v("li",[v("a",{attrs:{href:"#备份是如何执行的"}},[s._v("备份是如何执行的")])]),v("li",[v("a",{attrs:{href:"#fork"}},[s._v("Fork")])]),v("li",[v("a",{attrs:{href:"#rdb持久化流程"}},[s._v("RDB持久化流程")])]),v("li",[v("a",{attrs:{href:"#rdb禁用"}},[s._v("RDB禁用")])]),v("li",[v("a",{attrs:{href:"#rdb备份"}},[s._v("RDB备份")])]),v("li",[v("a",{attrs:{href:"#rdb恢复"}},[s._v("RDB恢复")])]),v("li",[v("a",{attrs:{href:"#rdb优缺点"}},[s._v("RDB优缺点")])])])]),v("li",[v("a",{attrs:{href:"#持久化之aof"}},[s._v("持久化之AOF")]),v("ul",[v("li",[v("a",{attrs:{href:"#什么是aof"}},[s._v("什么是AOF")])]),v("li",[v("a",{attrs:{href:"#aof持久化流程"}},[s._v("AOF持久化流程")])]),v("li",[v("a",{attrs:{href:"#aof开启"}},[s._v("AOF开启")])]),v("li",[v("a",{attrs:{href:"#rewrite重写"}},[s._v("Rewrite重写")])]),v("li",[v("a",{attrs:{href:"#aof优缺点"}},[s._v("AOF优缺点")])])])]),v("li",[v("a",{attrs:{href:"#两者总结"}},[s._v("两者总结")]),v("ul",[v("li",[v("a",{attrs:{href:"#用哪个好"}},[s._v("用哪个好")])]),v("li",[v("a",{attrs:{href:"#总结"}},[s._v("总结")])])])])])]),v("p"),s._v(" "),v("h2",{attrs:{id:"持久化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#持久化"}},[s._v("#")]),s._v(" 持久化")]),s._v(" "),v("p",[s._v("Redis 提供了 2 个不同形式的持久化方式")]),s._v(" "),v("ul",[v("li",[s._v("RDB（Redis DataBase）")]),s._v(" "),v("li",[s._v("AOF（Append Of File）")])]),s._v(" "),v("h2",{attrs:{id:"持久化之rdb"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#持久化之rdb"}},[s._v("#")]),s._v(" 持久化之RDB")]),s._v(" "),v("h3",{attrs:{id:"什么是rdb"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是rdb"}},[s._v("#")]),s._v(" 什么是RDB")]),s._v(" "),v("p",[s._v("在指定的时间间隔内将内存中的数据集快照写入磁盘，也就是俗话讲的 Snapshot 快照，它恢复时是将快照文件直接读到内存里。")]),s._v(" "),v("h3",{attrs:{id:"备份是如何执行的"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#备份是如何执行的"}},[s._v("#")]),s._v(" 备份是如何执行的")]),s._v(" "),v("p",[s._v("Redis 会单独创建（fork）一个子进程来进行持久化，会先将数据写入到一个临时文件中，待持久化过程都结束了，再用这个临时文件替换上次持久化好的文件。整个过程中，主进程是不进行任何 IO 操作的，这就确保了极高的性能，如果需要进行大规模数据的恢复，且对于数据恢复的完整性不是非常敏感，那 RDB 方式要比 AOF 方式更加的高效。")]),s._v(" "),v("p",[s._v("RDB 的缺点 "),v("strong",[s._v("是最后一次持久化后的数据可能丢失")]),s._v("。")]),s._v(" "),v("h3",{attrs:{id:"fork"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#fork"}},[s._v("#")]),s._v(" Fork")]),s._v(" "),v("p",[s._v("Fork 的作用是复制一个与当前进程一样的进程。新进程的所有数据（变量、环境变量、程序计数器等）数值都和原进程一致，但是这是一个全新的进程，并作为原进程的子进程。")]),s._v(" "),v("p",[s._v("在 Linux 程序中，fork() 会产生一个和父进程完全相同的子进程，但子进程在此后多会 exec 系统调用，出于效率考虑，Linux 中引入了「写时复制技术」。")]),s._v(" "),v("p",[s._v("一般情况父进程和子进程会共用同一段物理内存，只有进程空间的各段的内容要发生变化时，才会将父进程的内容复制一份给子进程。")]),s._v(" "),v("h3",{attrs:{id:"rdb持久化流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#rdb持久化流程"}},[s._v("#")]),s._v(" RDB持久化流程")]),s._v(" "),v("p",[s._v("流程图：")]),s._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211226182931.png",alt:"image-20211226182905494"}})]),s._v(" "),v("blockquote",[v("p",[v("strong",[s._v("文件名")])])]),s._v(" "),v("p",[s._v("redis.conf 中默认的 RDB 配置文件名为 dump.rdb，可以修改文件名，但是一般默认就可以了")]),s._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211226183058.png",alt:"image-20211226183056958"}})]),s._v(" "),v("blockquote",[v("p",[v("strong",[s._v("文件路径")])])]),s._v(" "),v("p",[s._v("rdb 文件的保存路径，也可以修改。默认为 Redis 启动时命令行所在的目录下")]),s._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211226183330.png",alt:"image-20211226183237142"}})]),s._v(" "),v("blockquote",[v("p",[v("strong",[s._v("备份策略")])])]),s._v(" "),v("p",[s._v("RDB 是整个内存的压缩过的 Snapshot，RDB 的数据结构，可以配置复合的快照触发条件，默认：")]),s._v(" "),v("ul",[v("li",[s._v("如果 1 个 key 发生改变（新增，删除，修改），则 1 个小时后备份一次")]),s._v(" "),v("li",[s._v("如果 100 个 key 发生改变（新增，删除，修改），则 5 分钟后备份一次")]),s._v(" "),v("li",[s._v("如果 10000 个 key 发生改变（新增，删除，修改），则 1 分钟后备份一次")])]),s._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211226183645.png",alt:"image-20211226183643561"}})]),s._v(" "),v("p",[s._v("格式：")]),s._v(" "),v("div",{staticClass:"language-sh line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-sh"}},[v("code",[s._v("save "),v("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("秒钟"),v("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("写操作次数"),v("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[s._v("1")]),v("br")])]),v("blockquote",[v("p",[v("strong",[s._v("手动保存")])])]),s._v(" "),v("p",[s._v("我们可以使用两个命令手动备份，分别是 "),v("code",[s._v("save")]),s._v(" 和 "),v("code",[s._v("bgsave")]),s._v("。前提是需要连接上 Redis 服务")]),s._v(" "),v("ul",[v("li",[s._v("save：save 时只管保存，其它不管，全部阻塞。手动保存。"),v("strong",[s._v("不建议")])]),s._v(" "),v("li",[s._v("bgsave：Redis 会在后台异步进行快照操作，快照同时还可以响应客户端请求。"),v("strong",[s._v("推荐")])])]),s._v(" "),v("p",[s._v("进入 Redis 客户端后，可以通过 lastsave 命令获取最后一次成功执行快照的时间。")]),s._v(" "),v("blockquote",[v("p",[v("strong",[s._v("其他优化命令")])])]),s._v(" "),v("p",[s._v("执行 flushall 命令，也会产生 dump.rdb 文件，但里面是空的，无意义。")]),s._v(" "),v("p",[s._v("Stop-writes-on-bgsave-error：如果配置为 no，表示不在乎数据不一致或者有其他的手段发现和控制，默认为 yes。")]),s._v(" "),v("p",[s._v("rbdcompression：压缩文件。对于存储到磁盘中的快照，可以设置是否进行压缩存储。如果是的话，Redis 会采用 LZF 算法进行压缩，如果你不想消耗 CPU 来进行压缩的话，可以设置为关闭此功能。")]),s._v(" "),v("p",[s._v("rdbchecksum：检查完整性。在存储快照后，还可以让 Redis 使用 CRC64 算法来进行数据校验，但是这样做会增加大约 10% 的性能消耗，如果希望获取到最大的性能提升，可以关闭此功能。默认为 yes。")]),s._v(" "),v("h3",{attrs:{id:"rdb禁用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#rdb禁用"}},[s._v("#")]),s._v(" RDB禁用")]),s._v(" "),v("p",[s._v("如果想禁用 RDB 持久化的策略，有两种方式：")]),s._v(" "),v("p",[s._v("配置文件禁用：只要在配置文件不设置任何 save 指令，或者给 save 传入一个空字符串参数也可以。")]),s._v(" "),v("p",[s._v("命令禁用：连接上 Redis 服务，执行如下命令禁用：")]),s._v(" "),v("div",{staticClass:"language-sh line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-sh"}},[v("code",[s._v("redis-cli config "),v("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" save "),v("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("    "),v("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# save 后给空值，表示禁用保存策略")]),s._v("\n")])]),s._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[s._v("1")]),v("br")])]),v("h3",{attrs:{id:"rdb备份"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#rdb备份"}},[s._v("#")]),s._v(" RDB备份")]),s._v(" "),v("p",[s._v("先通过 "),v("code",[s._v("config get dir")]),s._v(" 查询 rdb 文件的目录，然后将 .rdb 文件拷贝到别的地方")]),s._v(" "),v("div",{staticClass:"language-sh line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-sh"}},[v("code",[v("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),v("span",{pre:!0,attrs:{class:"token operator"}},[v("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" config get "),v("span",{pre:!0,attrs:{class:"token function"}},[s._v("dir")]),s._v("\n"),v("span",{pre:!0,attrs:{class:"token function"}},[s._v("dir")]),s._v("\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 文件所在的目录")]),s._v("\n/usr/local/bin\n\n"),v("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /usr/local/bin/dump.rdb /opt\n")])]),s._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[s._v("1")]),v("br"),v("span",{staticClass:"line-number"},[s._v("2")]),v("br"),v("span",{staticClass:"line-number"},[s._v("3")]),v("br"),v("span",{staticClass:"line-number"},[s._v("4")]),v("br"),v("span",{staticClass:"line-number"},[s._v("5")]),v("br"),v("span",{staticClass:"line-number"},[s._v("6")]),v("br")])]),v("h3",{attrs:{id:"rdb恢复"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#rdb恢复"}},[s._v("#")]),s._v(" RDB恢复")]),s._v(" "),v("ul",[v("li",[v("p",[s._v("关闭 Redis 服务")])]),s._v(" "),v("li",[v("p",[s._v("把备份的文件拷贝到 Redis 工作 / 安装目录下")]),s._v(" "),v("div",{staticClass:"language-sh line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-sh"}},[v("code",[v("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /opt/dump.rdb /usr/local/bin/dump.rdb\n")])]),s._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[s._v("1")]),v("br")])])]),s._v(" "),v("li",[v("p",[s._v("重新启动 Redis，备份数据会直接加载")])])]),s._v(" "),v("h3",{attrs:{id:"rdb优缺点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#rdb优缺点"}},[s._v("#")]),s._v(" RDB优缺点")]),s._v(" "),v("p",[s._v("优点：")]),s._v(" "),v("ul",[v("li",[s._v("适合大规模的数据恢复")]),s._v(" "),v("li",[s._v("对数据完整性和一致性要求不高更适合使用")]),s._v(" "),v("li",[s._v("节省磁盘空间")]),s._v(" "),v("li",[s._v("恢复速度快")])]),s._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211226185438.png",alt:"image-20211226185412966"}})]),s._v(" "),v("p",[s._v("缺点：")]),s._v(" "),v("ul",[v("li",[s._v("Fork 的时候，内存中的数据被克隆了一份，大致 2 倍的膨胀性需要考虑")]),s._v(" "),v("li",[s._v("虽然 Redis 在 fork 时使用了写时拷贝技术,但是如果数据庞大时还是比较消耗性能")]),s._v(" "),v("li",[s._v("在备份周期在一定间隔时间做一次备份，所以如果 Redis 意外 down 掉的话，就会丢失最后一次快照后的所有修改")])]),s._v(" "),v("h2",{attrs:{id:"持久化之aof"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#持久化之aof"}},[s._v("#")]),s._v(" 持久化之AOF")]),s._v(" "),v("h3",{attrs:{id:"什么是aof"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是aof"}},[s._v("#")]),s._v(" 什么是AOF")]),s._v(" "),v("p",[s._v("以日志的形式来记录每个写操作（增量保存），将 Redis 执行过的所有写指令记录下来（读操作不记录），只许追加文件但不可以改写文件，Redis 启动之初会读取该文件重新构建数据，换言之，redis 重启的话就根据日志文件的内容将写指令从前到后执行一次以完成数据的恢复工作。")]),s._v(" "),v("h3",{attrs:{id:"aof持久化流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#aof持久化流程"}},[s._v("#")]),s._v(" AOF持久化流程")]),s._v(" "),v("p",[s._v("（1）客户端的请求写命令会被 append 追加到 AOF 缓冲区内；")]),s._v(" "),v("p",[s._v("（2）AOF 缓冲区根据 AOF 持久化策略 [always,everysec,no] 将操作 sync 同步到磁盘的 AOF 文件中；")]),s._v(" "),v("p",[s._v("（3）AOF 文件大小超过重写策略或手动重写时，会对 AOF 文件 Rewrite 重写，压缩 AOF 文件容量；")]),s._v(" "),v("p",[s._v("（4）Redis 服务重启时，会重新 load 加载 AOF 文件中的写操作达到数据恢复的目的；")]),s._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211226200544.png",alt:"image-20211226200543735"}})]),s._v(" "),v("h3",{attrs:{id:"aof开启"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#aof开启"}},[s._v("#")]),s._v(" AOF开启")]),s._v(" "),v("p",[s._v("首先要知道 AOF 的默认配置文件名叫 appendonly.aof，如果想修改配置名，那么在 redis.conf 中配置文件里修改。")]),s._v(" "),v("p",[s._v("AOF "),v("strong",[s._v("默认不开启")]),s._v("，如果想开启，在 redis.conf 中配置文件里，将 "),v("code",[s._v("appendonly no")]),s._v(" 改为 "),v("code",[s._v("appendonly yes")]),s._v("。")]),s._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211226201235.png",alt:"image-20211226201015594"}})]),s._v(" "),v("p",[s._v("AOF 文件默认的保存路径，同 RDB 的路径一致，如果修改，可以在配置文件修改。")]),s._v(" "),v("blockquote",[v("p",[v("strong",[s._v("AOF 和 RDB 同时开启，redis 听谁的？")])])]),s._v(" "),v("p",[s._v("AOF 和 RDB 同时开启：")]),s._v(" "),v("ul",[v("li",[s._v("备份数据时，只要满足自己的备份条件，两个都会进行备份")]),s._v(" "),v("li",[s._v("恢复数据时，系统默认取 AOF 的数据（数据不会存在丢失）")])]),s._v(" "),v("blockquote",[v("p",[v("strong",[s._v("AOF 同步频率设置")])])]),s._v(" "),v("p",[s._v("AOF 同步频率设置只能三选一：")]),s._v(" "),v("ul",[v("li",[v("p",[s._v("appendfsync always：始终同步，每次 Redis 的写入都会立刻记入日志；性能较差但数据完整性比较好")])]),s._v(" "),v("li",[v("p",[s._v("appendfsync everysec 每秒同步，每秒记入日志一次，如果宕机，本秒的数据可能丢失")])]),s._v(" "),v("li",[v("p",[s._v("appendfsync no redis 不主动进行同步，把同步时机交给操作系统")])])]),s._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211226201650.png",alt:"image-20211226201649384"}})]),s._v(" "),v("blockquote",[v("p",[v("strong",[s._v("AOF 启动/修复/恢复")])])]),s._v(" "),v("p",[s._v("AOF 的备份机制和性能虽然和 RDB 不同，但是备份和恢复的操作同 RDB 一样，都是拷贝备份文件，需要恢复时再拷贝到 Redis 工作目录下，启动系统即加载。")]),s._v(" "),v("p",[s._v("正常恢复")]),s._v(" "),v("ul",[v("li",[s._v("修改默认的 appendonly no，改为 yes")]),s._v(" "),v("li",[s._v("将有数据的 aof 文件复制一份保存到对应目录（查看目录命令："),v("code",[s._v("config get dir")]),s._v("）")]),s._v(" "),v("li",[s._v("恢复：重启 Redis 然后重新加载")])]),s._v(" "),v("p",[s._v("异常恢复")]),s._v(" "),v("ul",[v("li",[s._v("修改默认的 appendonly no，改为 yes")]),s._v(" "),v("li",[s._v("如遇到 AOF 文件损坏，通过 "),v("code",[s._v("/usr/local/bin/redis-check-aof--fix appendonly.aof")]),s._v(" 进行恢复")]),s._v(" "),v("li",[s._v("备份被写坏的 AOF 文件")]),s._v(" "),v("li",[s._v("恢复：重启 Redis，然后重新加载")])]),s._v(" "),v("h3",{attrs:{id:"rewrite重写"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#rewrite重写"}},[s._v("#")]),s._v(" Rewrite重写")]),s._v(" "),v("p",[s._v("AOF 采用文件追加方式，文件会越来越大，为避免出现此种情况，新增了重写机制，当 AOF 文件的大小超过所设定的阈值时，Redis 就会启动 AOF 文件的内容压缩，只保留可以恢复数据的最小指令集，可以使用命令 "),v("code",[s._v("bgrewriteaof")]),s._v("。")]),s._v(" "),v("blockquote",[v("p",[v("strong",[s._v("重写原理，如何实现重写？")])])]),s._v(" "),v("p",[s._v("AOF 文件持续增长而过大时，会 fork 出一条新进程来将文件重写（也是先写临时文件最后再 rename），redis4.0 版本后的重写，是指上就是把 rdb 的快照，以二级制的形式附在新的 aof 头部，作为已有的历史数据，替换掉原来的流水账操作。")]),s._v(" "),v("p",[s._v("需要用到新的指令 "),v("code",[s._v("no-appendfsync-on-rewrite：")])]),s._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211226202106.png",alt:"image-20211226202105122"}})]),s._v(" "),v("p",[s._v("如果 "),v("code",[s._v("no-appendfsync-on-rewrite")]),s._v(" 改为 yes，代表不写入 AOF 文件，只写入缓存，用户请求不会阻塞，但是在这段时间如果宕机会丢失这段时间的缓存数据。（降低数据安全性，提高性能）")]),s._v(" "),v("p",[s._v("如果 "),v("code",[s._v("no-appendfsync-on-rewrite")]),s._v(" 改为 no，还是会把数据往磁盘里刷，但是遇到重写操作，可能会发生阻塞。（数据安全，但是性能降低）")]),s._v(" "),v("blockquote",[v("p",[v("strong",[s._v("触发机制，何时重写？")])])]),s._v(" "),v("p",[s._v("Redis 会记录上次重写时的 AOF 大小，默认配置是当 AOF 文件大小是上次 rewrite 后大小的一倍且文件大于 64M 时触发。")]),s._v(" "),v("p",[s._v("重写虽然可以节约大量磁盘空间，减少恢复时间。但是每次重写还是有一定的负担的，因此设定 Redis 要满足一定条件才会进行重写。")]),s._v(" "),v("p",[s._v("触发条件需要用到 "),v("code",[s._v("auto-aof-rewrite-percentage")]),s._v(" 和 "),v("code",[s._v("auto-aof-rewrite-min-size")]),s._v(" 指令：")]),s._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211226202450.png",alt:"image-20211226202449082"}})]),s._v(" "),v("ul",[v("li",[v("p",[v("code",[s._v("auto-aof-rewrite-percentage")]),s._v("：设置重写的基准值，文件达到 100% 时开始重写（文件是原来重写后文件的 2 倍时触发）")])]),s._v(" "),v("li",[v("p",[v("code",[s._v("auto-aof-rewrite-min-size")]),s._v("：设置重写的基准值，最小文件 64MB。达到这个值开始重写")])])]),s._v(" "),v("p",[s._v("例如：文件达到 64MB 开始重写，降到 50MB，下次什么时候开始重写？100MB，因为重写大小后的两倍 = 50 * 2")]),s._v(" "),v("p",[s._v("系统载入时或者上次重写完毕时，Redis 会记录此时 AOF 大小，设为 base_size，如果 Redis 的 AOF 当前大小 >= "),v("code",[s._v("base_size + base_size * 100%")]),s._v("（默认）且当前大小 >= 64mb（默认）的情况下，Redis 会对 AOF 进行重写。")]),s._v(" "),v("blockquote",[v("p",[v("strong",[s._v("重写流程")])])]),s._v(" "),v("ul",[v("li",[v("p",[s._v("bgrewriteaof 触发重写，判断是否当前有 bgsave 或 bgrewriteaof 在运行，如果有，则等待该命令结束后再继续执行")])]),s._v(" "),v("li",[v("p",[s._v("主进程 fork 出子进程执行重写操作，保证主进程不会阻塞")])]),s._v(" "),v("li",[v("p",[s._v("子进程遍历 redis 内存中数据到临时文件，客户端的写请求同时写入 "),v("code",[s._v("aof_buf")]),s._v(" 缓冲区（旧文件继续存储数据）和 "),v("code",[s._v("aof_rewrite_buf")]),s._v(" 重写缓冲区（新文件的数据），保证原 AOF 文件完整以及新 AOF 文件生成期间的新的数据修改动作不会丢失")])]),s._v(" "),v("li",[v("p",[s._v("子进程写完新的 AOF 文件后，向主进程发信号，父进程更新统计信息")])]),s._v(" "),v("li",[v("p",[s._v("主进程把 "),v("code",[s._v("aof_rewrite_buf")]),s._v(" 中的数据写入到新的 AOF 文件。")])]),s._v(" "),v("li",[v("p",[s._v("使用新的 AOF 文件覆盖旧的 AOF 文件，完成 AOF 重写")])])]),s._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211226203142.png",alt:"image-20211226203140779"}})]),s._v(" "),v("h3",{attrs:{id:"aof优缺点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#aof优缺点"}},[s._v("#")]),s._v(" AOF优缺点")]),s._v(" "),v("p",[s._v("优点：")]),s._v(" "),v("ul",[v("li",[v("p",[s._v("备份机制更稳健，丢失数据概率更低")])]),s._v(" "),v("li",[v("p",[s._v("可读的日志文本，通过操作 AOF 稳健，可以处理误操作")])])]),s._v(" "),v("p",[s._v("缺点：")]),s._v(" "),v("ul",[v("li",[s._v("比起 RDB 占用更多的磁盘空间")]),s._v(" "),v("li",[s._v("恢复备份速度要慢")]),s._v(" "),v("li",[s._v("每次读写都同步的话，有一定的性能压力")]),s._v(" "),v("li",[s._v("存在个别 Bug，可能造成无法恢复")])]),s._v(" "),v("p",[s._v("AOF 的日志文件内容基本都是敲的命令，所以日志非常容易阅读。")]),s._v(" "),v("h2",{attrs:{id:"两者总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#两者总结"}},[s._v("#")]),s._v(" 两者总结")]),s._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211226203503.png",alt:"image-20210408230339879"}})]),s._v(" "),v("h3",{attrs:{id:"用哪个好"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#用哪个好"}},[s._v("#")]),s._v(" 用哪个好")]),s._v(" "),v("p",[s._v("官方推荐两个都启用。")]),s._v(" "),v("p",[s._v("AOF 和 RDB 同时开启：")]),s._v(" "),v("ul",[v("li",[s._v("备份数据时，只要满足自己的备份条件，两个都会进行备份")]),s._v(" "),v("li",[s._v("恢复数据时，系统默认取 AOF 的数据（数据不会存在丢失）")])]),s._v(" "),v("p",[s._v("如果对数据不敏感，可以选单独用 RDB。")]),s._v(" "),v("p",[s._v("不建议单独用 AOF，因为可能会出现 Bug。")]),s._v(" "),v("p",[s._v("如果只是做纯内存缓存，可以都不用。")]),s._v(" "),v("h3",{attrs:{id:"总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),v("ul",[v("li",[v("p",[s._v("RDB 持久化方式能够在指定的时间间隔内对数据进行快照存储")])]),s._v(" "),v("li",[v("p",[s._v("AOF 持久化方式记录每次对服务器写的操作，当服务器重启的时候会重新执行这些命令来恢复原始的数据，AOF 命令以 Redis 协议追加保存每次写的操作到文件末尾")])]),s._v(" "),v("li",[v("p",[s._v("Redis 还能对 AOF 文件进行后台重写，使得 AOF 文件的体积不至于过大")])]),s._v(" "),v("li",[v("p",[s._v("只做缓存，如果你只希望你的数据在服务器运行的时候存在，你也可以不使用任何持久化")])]),s._v(" "),v("li",[v("p",[s._v("同时开启两种持久化方式")]),s._v(" "),v("ul",[v("li",[v("p",[s._v("在这种情况下，当 Redis 重启的时候会优先载入 AOF 文件来恢复原始的数据，因为在通常情况下 AOF 文件保存的数据集要比 RDB 文件保存的数据集要完整")])]),s._v(" "),v("li",[v("p",[s._v("RDB 的数据不实时，同时使用两者时服务器重启也只会找 AOF 文件，那要不要只使用 AOF 呢？建议不要，因为 RDB 更适合用于备份数据库（AOF 在不变化时不好备份），快速重启，而且不会有 AOF 可能潜在的 Bug，留着作为一个万一的手段")])])])])]),s._v(" "),v("blockquote",[v("p",[s._v("性能建议")])]),s._v(" "),v("ul",[v("li",[v("p",[s._v("因为 RDB 文件只用作后备用途，建议只在 Slave 上持久化 RDB 文件，而且只要 15 分钟备份一次就够了，只保留 "),v("code",[s._v("save 900 1")]),s._v(" 这条规则")])]),s._v(" "),v("li",[v("p",[s._v("如果使用 AOF ，好处是在最恶劣情况下也只会丢失不超过两秒数据，启动脚本较简单只 load 自己的 AOF 文件就可以了，代价：")]),s._v(" "),v("ul",[v("li",[s._v("一是带来了持续的 IO")]),s._v(" "),v("li",[s._v("二是 AOF Rewrite，将 Rewrite 过程中产生的新数据写到新文件造成的阻塞几乎是不可避免的")])])]),s._v(" "),v("li",[v("p",[s._v("只要硬盘许可，应该尽量减少 AOF Rewrite 的频率，AOF 重写的基础大小默认值 64M 太小了，可以设到 5G 以上，默认超过原大小 100% 大小重 写可以改到适当的数值")])]),s._v(" "),v("li",[v("p",[s._v("如果不使用 AOF ，仅靠 "),v("code",[s._v("Master-Slave Repllcation")]),s._v(" 实现高可用性也可以，能省掉一大笔 IO，也减少了 Rewrite 时带来的系统波动。代价是如果 Master/Slave 同时倒掉，会丢失十几分钟的数据，启动脚本也要比较两个 Master/Slave 中的 RDB 文件，载入较新的那个，微博就是这种架构")])])])])}),[],!1,null,null,null);v.default=a.exports}}]);