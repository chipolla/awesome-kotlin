const data = [{
    name: "Links",
    subcategories: [{
        name: "Official Links",
        links: [{
            name: 'Home Page',
            href: 'http://kotlinlang.org/'
        }, {
            name: 'Language Reference',
            href: 'http://kotlinlang.org/docs/reference/'
        }, {
            name: 'Slack (1400+ users)',
            href: 'http://kotlinslackin.herokuapp.com/'
        }, {
            name: 'Try Kotlin!',
            href: 'http://try.kotlinlang.org/'
        }, {
            name: 'Blog',
            href: 'http://blog.jetbrains.com/kotlin/'
        }, {
            name: 'Issue Tracker',
            href: 'http://youtrack.jetbrains.com/issues/KT'
        }, {
            name: 'Kotlin Repository',
            href: 'https://github.com/jetbrains/kotlin'
        }, {
            name: 'Twitter',
            href: 'https://twitter.com/project_kotlin'
        }]
    }, {
        name: "Resources",
        links: [{
            name: '/r/Kotlin',
            href: 'https://www.reddit.com/r/Kotlin/'
        }, {
            name: 'Quora Kotlin',
            href: 'https://www.quora.com/Kotlin?share=1'
        }, {
            name: 'Trending Kotlin on Github',
            href: 'https://github.com/trending?l=kotlin'
        }, {
            name: 'Antonio Leiva - Android and any other monsters',
            href: 'http://antonioleiva.com/',
            type: 'blog'
        }, {
            name: 'LinkedIn: Kotlin Developers (Join!)',
            href: 'https://www.linkedin.com/topic/group/kotlin-developers?gid=7417237'
        }, {
            name: 'Kotlin - Google+',
            href: 'https://plus.google.com/communities/104597899765146112928'
        }]
    }, {
        name: "Books",
        links: [{
            name: 'Kotlin in Action - Dmitry Jemerov, Svetlana Isakova',
            href: 'https://manning.com/books/kotlin-in-action'
        }, {
            name: 'Kotlin for Android Developers - Antonio Leiva',
            href: 'https://leanpub.com/kotlin-for-android-developers'
        }]
    }]
}, {
    name: "Libraries/Frameworks",
    subcategories: [{
        name: "Android",
        links: [{
            name: 'JetBrains/anko',
            desc: 'Pleasant Android application development.',
            href: 'https://github.com/JetBrains/anko',
            type: 'github'
        }, {
            name: 'JakeWharton/kotterknife',
            desc: 'View injection library for Android',
            href: 'https://github.com/JakeWharton/kotterknife',
            type: 'github'
        }, {
            name: 'nsk-mironov/kotlin-jetpack',
            desc: 'A collection of useful extension methods for Android.',
            href: 'https://github.com/nsk-mironov/kotlin-jetpack',
            type: 'github',
            tags: ['android', 'bindings']
        }, {
            name: 'pawegio/KAndroid',
            desc: 'Kotlin library for Android',
            href: 'https://github.com/pawegio/KAndroid',
            type: 'github'
        }, {
            name: 'chibatching/Kotpref',
            desc: 'Android SharedPreference delegation for Kotlin.',
            href: 'https://github.com/chibatching/Kotpref',
            type: 'github',
            tags: ['android']
        }]
    }, {
        name: "Web",
        links: [{
            name: 'Kotlin/ktor',
            desc: 'Web backend framework for Kotlin.',
            href: 'https://github.com/Kotlin/ktor',
            type: 'github'
        }, {
            name: 'TinyMission/kara',
            desc: 'Web framework written in Kotlin.',
            href: 'https://github.com/TinyMission/kara',
            type: 'github'
        }, {
            name: 'jean79/yested',
            desc: 'A Kotlin framework for building web applications in Javascript.',
            href: 'https://github.com/jean79/yested',
            type: 'github'
        }, {
            name: 'hhariri/wasabi',
            desc: 'An HTTP Framework built with Kotlin for the JVM.',
            href: 'https://github.com/hhariri/wasabi',
            type: 'github'
        }, {
            name: 'Kotlin/kotlinx.html',
            desc: 'Kotlin DSL for HTML.',
            href: 'https://github.com/Kotlin/kotlinx.html',
            type: 'github',
            tags: ['html']
        }]
    }, {
        name: "Tests",
        links: [{
            name: 'JetBrains/spek',
            desc: 'A specification framework for Kotlin.',
            href: 'https://github.com/JetBrains/spek',
            type: 'github'
        }]
    }, {
        name: "Dependency Injection",
        links: [{
            name: 'SalomonBrys/Kodein',
            desc: 'Painless Kotlin Dependency Injection .',
            href: 'https://github.com/SalomonBrys/Kodein',
            type: 'github'
        }]
    }, {
        name: "JSON",
        links: [{
            name: 'cbeust/klaxon',
            desc: 'Lightweight library to parse JSON in Kotlin.',
            href: 'https://github.com/cbeust/klaxon',
            type: 'github'
        }, {
            name: 'SalomonBrys/Kotson',
            desc: 'Gson for Kotlin.',
            href: 'https://github.com/SalomonBrys/Kotson',
            type: 'github'
        }, {
            name: 'FasterXML/jackson-module-kotlin',
            desc: 'Jackson module that adds support for serialization/deserialization of Kotlin classes and data classes.',
            href: 'https://github.com/FasterXML/jackson-module-kotlin',
            type: 'github'
        }]
    }, {
        name: "Database",
        links: [{
            name: 'cheptsov/kotlin-nosql',
            desc: 'NoSQL database query and access library for Kotlin.',
            href: 'https://github.com/cheptsov/kotlin-nosql',
            type: 'github'
        }, {
            name: 'jankotek/mapdb',
            desc: 'MapDB provides concurrent Maps, Sets and Queues backed by disk storage or off-heap-memory. It is a fast and easy to use embedded Java database engine.',
            href: 'https://github.com/jankotek/mapdb/tree/mapdb3',
            type: 'github'
        }]
    }, {
        name: "Tools",
        links: [{
            name: 'Kotlin/dokka',
            desc: 'Documentation Engine for Kotlin.',
            href: 'https://github.com/Kotlin/dokka',
            type: 'github'
        }, {
            name: 'Levelmoney/kbuilders',
            desc: 'KBuilders turns your Java builders into beautiful Type-Safe Builders.',
            href: 'https://github.com/Levelmoney/kbuilders',
            type: 'github'
        }]
    }, {
        name: "Misc",
        links: [{
            name: 'Kotlin/kotlinx.reflect.lite',
            desc: 'Lightweight library allowing to introspect basic stuff about Kotlin symbols.',
            href: 'https://github.com/Kotlin/kotlinx.reflect.lite',
            type: 'github',
            tags: ['reflection']
        }, {
            name: 'ReactiveX/RxKotlin',
            desc: 'RxJava bindings for Kotlin.',
            href: 'https://github.com/ReactiveX/RxKotlin',
            type: 'github'
        }, {
            name: 'puniverse/quasar',
            desc: 'Fibers, Channels and Actors for the JVM.',
            href: 'https://github.com/puniverse/quasar/tree/master/quasar-kotlin',
            type: 'github'
        }, {
            name: 'mplatvoet/kovenant',
            desc: 'Kovenant. Promises for Kotlin.',
            href: 'https://github.com/mplatvoet/kovenant',
            type: 'github'
        }, {
            name: 'klutter/klutter',
            desc: 'A mix of random small libraries for Kotlin, the smallest reside here until big enough for their own repository.',
            href: 'https://github.com/klutter/klutter',
            type: 'github'
        }]
    }]
}, {
    name: "Projects",
    subcategories: [{
        name: "Android",
        links: [{
            name: 'antoniolg/Bandhook-Kotlin',
            desc: 'A showcase music app for Android entirely written using Kotlin language.',
            href: 'https://github.com/antoniolg/Bandhook-Kotlin',
            type: 'github'
        }, {
            name: 'damianpetla/kotlin-dagger-example',
            desc: 'Example of Android project showing integration with Kotlin and Dagger 2.',
            href: 'https://github.com/damianpetla/kotlin-dagger-example',
            type: 'github'
        }]
    }, {
        name: "Web",
        links: [{
            name: 'ssoudan/ktSpringTest',
            desc: 'Basic Spring Boot app in Kotlin.',
            href: 'https://github.com/ssoudan/ktSpringTest',
            type: 'github'
        }]
    }, {
        name: "Build tools",
        links: [{
            name: 'cbeust/kobalt',
            desc: 'Build system inspired by Gradle.',
            href: 'https://github.com/cbeust/kobalt',
            type: 'github'
        }, {
            name: 'IRus/kotlin-dev-proxy',
            desc: 'Simple server for proxy requests and host static files written in Kotlin, Spark Java and Apache HttpClient.',
            href: 'https://github.com/IRus/kotlin-dev-proxy',
            type: 'github'
        }]
    }, {
        name: "Examples",
        links: [{
            name: 'Kotlin/kotlin-koans',
            desc: 'Kotlin Koans are a series of exercises to get you familiar with the Kotlin Syntax.',
            href: 'https://github.com/Kotlin/kotlin-koans',
            type: 'github',
            tags: ['koans']
        }, {
            name: 'JetBrains/swot',
            desc: 'Identify email addresses or domains names that belong to colleges or universities. Help automate the process of approving or rejecting academic discounts.',
            href: 'https://github.com/JetBrains/swot',
            type: 'github'
        }, {
            name: 'robfletcher/midcentury-ipsum',
            desc: 'Swingin’ filler text for your jet-age web page.',
            href: 'https://github.com/robfletcher/midcentury-ipsum',
            type: 'github',
            tags: ['ratpack']
        }, {
            name: 'robfletcher/lazybones-kotlin',
            desc: 'The Lazybones app migrated to Kotlin as a learning exercise.',
            href: 'https://github.com/robfletcher/lazybones-kotlin',
            type: 'github',
            tags: ['ratpack']
        }, {
            name: 'wangjiegulu/ KotlinAndroidSample',
            desc: 'Android sample with kotlin.',
            href: 'https://github.com/wangjiegulu/KotlinAndroidSample',
            type: 'github',
            tags: ['android', 'sample']
        }]
    }]
}, {
    name: "Articles, Videos, Blog Posts",
    subcategories: [{
        name: "Posts",
        links: [{
            name: 'Exploring the Kotlin Standard Library',
            desc: 'Jan 22, 2013',
            href: 'http://jamie.mccrindle.org/2013/01/exploring-kotlin-standard-library-part-1.html',
            tags: []
        }, {
            name: 'The Adventurous Developer’s Guide to JVM languages – Kotlin',
            desc: 'Jan 23, 2013',
            href: 'http://zeroturnaround.com/rebellabs/the-adventurous-developers-guide-to-jvm-languages-kotlin/'
        }, {
            name: 'The Advent of Kotlin: A Conversation with JetBrains\' Andrey Breslav',
            desc: 'Apr 02, 2013',
            href: 'http://www.oracle.com/technetwork/articles/java/breslav-1932170.html'
        }, {
            name: 'Non-trivial constructors in Kotlin',
            desc: 'Dec 1, 2014',
            hred: 'http://alexshabanov.com/category/languages/kotlin/'
        }, {
            name: 'Why Kotlin is my next programming language',
            desc: 'Jul 06, 2015',
            href: 'https://medium.com/@octskyward/why-kotlin-is-my-next-programming-language-c25c001e26e3'
        }, {
            name: 'Android + Kotlin = <3',
            desc: 'Jul 20, 2015',
            href: 'http://blog.zuehlke.com/en/android-kotlin/'
        }, {
            name: 'Без слайдов: интервью с Дмитрием Жемеровым из JetBrains (Russian)',
            desc: 'Jul 31, 2015',
            href: 'http://habrahabr.ru/company/jugru/blog/263905/'
        }, {
            name: 'Building APIs on the JVM Using Kotlin and Spark – Part 1',
            desc: 'Aug 06, 2015',
            href: 'http://nordicapis.com/building-apis-on-the-jvm-using-kotlin-and-spark-part-1/'
        }, {
            name: 'Production Ready Kotlin',
            desc: 'Aug 26, 2015',
            href: 'https://www.linkedin.com/grp/post/7417237-6042285669181648896'
        }, {
            name: 'Kotlin: New Hope in a Java 6 Wasteland',
            desc: 'Aug 27, 2015',
            href: 'https://realm.io/news/droidcon-michael-pardo-kotlin/'
        }, {
            name: 'Kotlin ❤ FP',
            desc: 'Sep 18, 2015',
            href: 'https://medium.com/@octskyward/kotlin-fp-3bf63a17d64a',
            tags: ['functional']
        }, {
            name: 'Blog about Kotlin language and Android development.',
            desc: 'Oct 21, 2015',
            href: 'http://kotlin4android.com/',
            type: 'blog',
            tags: ['android']
        }, {
            name: 'Mimicking Kotlin Builders in Java and Python.',
            desc: 'Jan 16, 2016',
            href: 'https://programmingideaswithjake.wordpress.com/2016/01/16/mimicking-kotlin-builders-in-java-and-python/',
            type: 'post',
            tags: ['builders']
        }]
    }, {
        name: "Youtube",
        links: [{
            name: 'JVMLS 2015 - Flexible Types of Kotlin - Andrey Breslav',
            desc: 'Aug 12, 2015',
            href: 'https://www.youtube.com/watch?v=2IhT8HACc2E',
            type: 'youtube'
        }, {
            name: 'vJUG: Kotlin for Java developers.',
            desc: 'Dec 11, 2014',
            href: 'https://www.youtube.com/watch?v=vmjfIRsawlg',
            type: 'youtube'
        }, {
            name: 'GeeCON Prague 2014: Andrey Cheptsov - A Reactive and Type-safe Kotlin DSL for NoSQL and SQL',
            desc: 'Nov 03, 2014',
            href: 'https://vimeo.com/110781020',
            type: 'vimeo'
        }, {
            name: 'Kotlin NoSQL for MongoDB in Action.',
            desc: 'Oct 22, 2014',
            href: 'https://www.youtube.com/watch?v=80xgl3KThvM',
            type: 'youtube',
            tags: ['nosql', 'database', 'mondodb']
        }]
    }]
}];

exports.default = data;
