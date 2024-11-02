(window.webpackJsonp=window.webpackJsonp||[]).push([[245],{586:function(t,e,r){"use strict";r.r(e);var o=r(1),n=Object(o.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#简介"}},[t._v("简介")])]),e("li",[e("a",{attrs:{href:"#前提"}},[t._v("前提")])]),e("li",[e("a",{attrs:{href:"#扩展"}},[t._v("扩展")])]),e("li",[e("a",{attrs:{href:"#null-值安全"}},[t._v("Null 值安全")])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://kotlinlang.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kotlin"),e("OutboundLink")],1),t._v(" 是一种运行于 JVM（及其他平台）上的静态（statically-typed）语言。 使用它可以在拥有与现有 Java 库良好 "),e("a",{attrs:{href:"https://kotlinlang.org/docs/reference/java-interop.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("互操作性"),e("OutboundLink")],1),t._v(" 的同时编写简介优雅的代码。")]),t._v(" "),e("p",[t._v("本内容介绍了 Reactor 3.1 如何能够完美支持 Kotlin。")]),t._v(" "),e("h2",{attrs:{id:"前提"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前提"}},[t._v("#")]),t._v(" 前提")]),t._v(" "),e("p",[t._v("Kotlin 支持 Kotlin 1.1+ 及依赖 "),e("a",{attrs:{href:"https://bintray.com/bintray/jcenter/org.jetbrains.kotlin%3Akotlin-stdlib",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("kotlin-stdlib")]),e("OutboundLink")],1),t._v(" （或 "),e("a",{attrs:{href:"https://bintray.com/bintray/jcenter/org.jetbrains.kotlin%3Akotlin-stdlib-jre7",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("kotlin-stdlib-jre7")]),e("OutboundLink")],1),t._v(" / "),e("a",{attrs:{href:"https://bintray.com/bintray/jcenter/org.jetbrains.kotlin%3Akotlin-stdlib-jre8",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("kotlin-stdlib-jre8")]),e("OutboundLink")],1),t._v(" 之一）")]),t._v(" "),e("h2",{attrs:{id:"扩展"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#扩展"}},[t._v("#")]),t._v(" 扩展")]),t._v(" "),e("p",[t._v("多亏了其良好的 "),e("a",{attrs:{href:"https://kotlinlang.org/docs/reference/java-interop.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java 互操作性"),e("OutboundLink")],1),t._v(" 以及 "),e("a",{attrs:{href:"https://kotlinlang.org/docs/reference/extensions.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kotlin 扩展（extensions）"),e("OutboundLink")],1),t._v(", Reactor Kotlin APIs 既可使用 Java APIs，还能够收益于一些 Reactor 内置的专门支持 Kotlin 的 APIs。")]),t._v(" "),e("blockquote",[e("p",[t._v("注意 Kotlin 的扩展需要 import 才能够使用。所以比如 "),e("code",[t._v("Throwable.toFlux")]),t._v(" 的 Kotlin 扩展必须在 "),e("code",[t._v("import reactor.core.publisher.toFlux")]),t._v(" 后才可使用。多数场景下 IDE 应该能够自动给出这种类似 static import 的建议。")])]),t._v(" "),e("p",[t._v("例如，"),e("a",{attrs:{href:"https://kotlinlang.org/docs/reference/inline-functions.html#reified-type-parameters",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kotlin 参数类型推导（reified type parameters）"),e("OutboundLink")],1),t._v(" 对于 JVM 的 "),e("a",{attrs:{href:"https://docs.oracle.com/javase/tutorial/java/generics/erasure.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("通用类型擦除（generics type erasure）"),e("OutboundLink")],1),t._v("提供了一种变通解决方案，Reactor 就可以通过扩展（extension）来应用到这种特性。")]),t._v(" "),e("p",[t._v("下面是对「Reactor with Java」和「Reactor with Kotlin + extensions」的比较：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[e("strong",[t._v("Java")])]),t._v(" "),e("th",[e("strong",[t._v("Kotlin + extensions")])])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v('Mono.just("foo")')])]),t._v(" "),e("td",[e("code",[t._v('"foo".toMono()')])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("Flux.fromIterable(list)")])]),t._v(" "),e("td",[e("code",[t._v("list.toFlux()")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("Mono.error(new RuntimeException())")])]),t._v(" "),e("td",[e("code",[t._v("RuntimeException().toMono()")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("Flux.error(new RuntimeException())")])]),t._v(" "),e("td",[e("code",[t._v("RuntimeException().toFlux()")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("flux.ofType(Foo.class)")])]),t._v(" "),e("td",[e("code",[t._v("flux.ofType<Foo>()")]),t._v(" or "),e("code",[t._v("flux.ofType(Foo::class)")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("StepVerifier.create(flux).verifyComplete()")])]),t._v(" "),e("td",[e("code",[t._v("flux.test().verifyComplete()")])])])])]),t._v(" "),e("p",[t._v("可参考 "),e("a",{attrs:{href:"https://projectreactor.io/docs/core/release/kdoc-api/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Reactor KDoc API"),e("OutboundLink")],1),t._v(" 中详细的关于 Kotlin 扩展的文档。")]),t._v(" "),e("h2",{attrs:{id:"null-值安全"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#null-值安全"}},[t._v("#")]),t._v(" Null 值安全")]),t._v(" "),e("p",[t._v("Kotlin的一个关键特性就是 "),e("a",{attrs:{href:"https://kotlinlang.org/docs/reference/null-safety.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("null 值安全"),e("OutboundLink")],1),t._v(" ——从而可以在编译时处理 "),e("code",[t._v("null")]),t._v(" 值，而不是在运行时抛出著名的 "),e("code",[t._v("NullPointerException")]),t._v("。 这样，通过「可能为空（nullability）」的声明，以及能够表明「有值或空值」的语法（避免使用类似 "),e("code",[t._v("Optional")]),t._v(" 来进行包装），使得应用程序更加安全。（Kotlin允许在函数参数中使用可能为空的值， 请参考 "),e("a",{attrs:{href:"http://www.baeldung.com/kotlin-null-safety",target:"_blank",rel:"noopener noreferrer"}},[t._v("comprehensive guide to Kotlin null-safety"),e("OutboundLink")],1),t._v("）")]),t._v(" "),e("p",[t._v("尽管 Java 的类型系统不允许这样的 null 值安全的表达方式， Reactor "),e("RouterLink",{attrs:{to:"/reactor/advanced-features-and-concepts/#空值安全"}},[t._v("空值安全")]),t._v(" 对所有 Reactor API 通过工具友好的（tooling-friendly）注解（在 "),e("code",[t._v("reactor.util.annotation")]),t._v(" 包中定义）来支持。 默认情况下，Java APIs 用于 Kotlin 的话会被作为 "),e("a",{attrs:{href:"https://kotlinlang.org/docs/reference/java-interop.html#null-safety-and-platform-types",target:"_blank",rel:"noopener noreferrer"}},[t._v("平台类型（platform types）"),e("OutboundLink")],1),t._v(" 而放松对 null 的检查。 "),e("a",{attrs:{href:"https://github.com/Kotlin/KEEP/blob/jsr-305/proposals/jsr-305-custom-nullability-qualifiers.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kotlin 对 JSR 305 注解的支持"),e("OutboundLink")],1),t._v(" + Reactor 可为空（nullability）的注解，为所有 Reactor API 和 Kotlin 开发者确保「null 值安全」的特性 （在编译期处理 null 值）。")],1),t._v(" "),e("p",[t._v("JSR 305 的检查可以通过增加 "),e("code",[t._v("-Xjsr305")]),t._v(" 编译参数进行配置："),e("code",[t._v("-Xjsr305={strict|warn|ignore}")]),t._v("。")]),t._v(" "),e("p",[t._v("对于 kotlin 1.1.50+，默认的配置为 "),e("code",[t._v("-Xjsr305=warn")]),t._v("。如果希望 Reactor API 能够全面支持 null 值安全 则需要配置为 "),e("code",[t._v("strict")]),t._v("。不过你可以认为这是实验性的（experimental），因为 Reactor API 「可能为空」 的声明可能甚至在小版本的发布中都会不断改进，而且将来也可能增加新的检查。")]),t._v(" "),e("blockquote",[e("p",[t._v("目前尚不支持通用类型参数、可变类型以及数组元素的「可为空」。不过应该包含在接下来的发布中，最新信息请看 "),e("a",{attrs:{href:"https://github.com/Kotlin/KEEP/issues/79",target:"_blank",rel:"noopener noreferrer"}},[t._v("这个 Issues"),e("OutboundLink")],1),t._v("。")])])])}),[],!1,null,null,null);e.default=n.exports}}]);