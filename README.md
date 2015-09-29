# awesome-android

## Introduction
android libs from github

## System requirements
Android

## Notice
If the lib is no longer being maintained,please do not add it here.

## How To Contribute
Step 1. Add a Item as follows:
```
**Library Name**[one space]Short Description[at least four space,then press enter]
[link](link)
```

Step 2. The item should fall under the appropriate category.


## Libs
### Table of contents
* [Framework](#Framework)
* [EventBus](#EventBus)
* [Orm](#Orm)
* [Image Loading](#Image_Loading)
* [Animations](#Animations)
* [Network](#Network)
* [Widget](#Widget)
  * [Material](#Material)
  * [UI](#UI)
  * [TextView/EditText](#TextView/EditText)
  * [ImageView](#ImageView)
  * [Button](#Button)
  * [Progressbar/Progress View](#Progressbar/Progress_View)
  * [Menu](#Menu)
  * [Dialog](#Dialog)
  * [ListView/ScrollView](#ListView/ScrollView)
  * [GridView](#GridView)
  * [RatingView](#RatingView)
  * [Recyclerview](#Recyclerview)
  * [SearchView](#SearchView)
  * [ViewPager](#ViewPager)
  * [ActionBar](#ActionBar)
  * [Fragment](#Fragment)
  * [Activity](#Activity)
  * [Tabs](#Tabs)
  * [Toast](#Toast)
  * [SeekBar](#SeekBar)
  * [Time View](#Time_View)
  * [Layout](#Layout)
  * [Toolbar](#Toolbar)
  * [VideoView](#VideoView)
  * [Mapview](#Mapview)
  * [Choreographer](#Choreographer)
  * [Other](#Other)
* [Plugin](#Plugin)
  * [Gradle](#Gradle)
  * [Maven](#Maven)
  * [SBT](#SBT)
  * [Intellij IDEA / Android Studio](#Intellij_IDEA_/_Android_Studio)
  * [Other](#Other-Plugin)
* [Intent](#Intent)
* [Injector](#Injector)
* [Template](#Template)
* [Adapter](#Adapter)
* [Validation](#Validation)
* [Gesture](#Gesture)
* [Game Engine](#Game_Engine)
* [Bluetooth](#Bluetooth)
* [SocialNetworks](#SocialNetworks)
* [XMPP](#XMPP)
* [Code Generation](#Code_Generation)
* [Media](#Media)
* [Embedded](#Embedded)
* [Utility](#Utility)
* [Storage](#Storage)
* [SDK](#SDK)
* [Test](#Test)
* [Chart](#Chart)
* [Icons](#Icons)
* [Colors](#Colors)
* [Font](#Font)
* [OpenGL](#OpenGL)
* [Debug](#Debug)
* [Demo](#Demo)
* [App](#App)
* [Security](#Security)
* [Tools](#Tools)
* [QRCode](#QRCode)
* [Decompiler](#Decompiler)
* [Android Wear](#Android_Wear)
* [Other](#Other1)


### <A NAME="Framework"></A>Framework
1. **dexposed** dexposed enable 'god' mode for single android application.     
[https://github.com/alibaba/dexposed](https://github.com/alibaba/dexposed)
1. **Xposed** The native part of the Xposed framework (mainly the modified app_process binary).              
[https://github.com/rovo89/Xposed](https://github.com/rovo89/Xposed)
1. **afinal**    Afinal是一个android的ioc，orm框架    
[https://github.com/yangfuhai/afinal](https://github.com/yangfuhai/afinal)
1. **xUtils****    android orm, bitmap, http, view inject...     
[https://github.com/wyouflf/xUtils](https://github.com/wyouflf/xUtils)
1. **ThinkAndroid** ThinkAndroid是一个免费的开源的、简易的、遵循Apache2开源协议发布的Android开发框架，其开发宗旨是简单、快速的进行 Android应用程序的开发    
[https://github.com/white-cat/ThinkAndroid](https://github.com/white-cat/ThinkAndroid)
1. **KJFrameForAndroid** KJFrameForAndroid 又叫KJLibrary，是一个android的orm 和 ioc 框架。        
[https://github.com/kymjs/KJFrameForAndroid](https://github.com/kymjs/KJFrameForAndroid)
1. **droidparts**    DI, ORM, JSON, ...  
[https://github.com/yanchenko/droidparts](https://github.com/yanchenko/droidparts)
1. **android-common**      Android common lib, include ImageCache, HttpCache, DropDownListView, DownloadManager, Utils and so on  
[https://github.com/Trinea/android-common](https://github.com/Trinea/android-common)
1. **android-priority-jobqueue**  A Job Queue specifically written for Android to easily schedule jobs (tasks) that run in the background, improving UX and application stability.     
[https://github.com/path/android-priority-jobqueue](https://github.com/path/android-priority-jobqueue)
1. **SAF**   SAF(Simple Android Framework)是一个简单的android框架，它为开发Android app提供了基础性组件。    
[https://github.com/fengzhizi715/SAF](https://github.com/fengzhizi715/SAF)
1. **AndroidBinding**  MVVM for Android     
[https://github.com/gueei/AndroidBinding](https://github.com/gueei/AndroidBinding)
1. **RoboBinding** A data-binding Presentation Model(MVVM) framework for the Android platform.     
[https://github.com/RoboBinding/RoboBinding](https://github.com/RoboBinding/RoboBinding)
1. **androidkit** android开发框架，可以帮助你大量提高android应用开发效率。    
[https://github.com/msdx/androidkit](https://github.com/msdx/androidkit)
1. **transfuse** Transfuse - A Dependency Injection and Integration framework for Google Android      
[https://github.com/johncarl81/transfuse](https://github.com/johncarl81/transfuse)
1. **xCombine** Android Plugin Framework       
[https://github.com/wyouflf/xCombine](https://github.com/wyouflf/xCombine)
1. **AndroidDynamicLoader**   A plugin system that runs like a browser, but instead of load web pages, it load plugins which runs natively on Android system.   
[https://github.com/mmin18/AndroidDynamicLoader](https://github.com/mmin18/AndroidDynamicLoader)
1. **apf**  Android Plugin Framework      
[https://github.com/umeng/apf](https://github.com/umeng/apf)
1. **LoonAndroid** 整个框架式不同于androidannotations，Roboguice等ioc框架，这是一个类似spring的实现方式。在整应用的生命周期中找到切入点，然后对activity的生命周期进行拦截，然后插入自己的功能。     
[https://github.com/gdpancheng/LoonAndroid](https://github.com/gdpancheng/LoonAndroid)
1. **UltimateAndroid** UltimateAndroid is a framework to help developing Android apps in a fast way     
[https://github.com/cymcsg/UltimateAndroid](https://github.com/cymcsg/UltimateAndroid)
1. **BeeFramework_Android**  极简化的Android App开发框架和App内调试工具      
[https://github.com/BeeFramework/BeeFramework_Android](https://github.com/BeeFramework/BeeFramework_Android)
1. **RoboMVVM**   MVVM framework for Android          
[https://github.com/debdattabasu/RoboMVVM](https://github.com/debdattabasu/RoboMVVM)
1. **Android-Next**  A Android Commons Library, include task, cache, http, custom views, utils, and so on.           
[https://github.com/mcxiaoke/Android-Next](https://github.com/mcxiaoke/Android-Next)
1. **SwissKnife** A multi-purpose library containing view injection and threading for Android using annotations        
[https://github.com/Arasthel/SwissKnife](https://github.com/Arasthel/SwissKnife)
1. **QuickAndroid** 一个快速、完善的Android开发框架整合实践             
[https://github.com/alafighting/QuickAndroid](https://github.com/alafighting/QuickAndroid)
1. **CJFrameForAndroid**  CJFrameForAndroid 是一个实现android插件化开发的框架。使用CJFrameForAndroid，apk动态加载不再是难题，更重要的是可以轻松实现插件与APP项目之间的解耦。           
[https://github.com/kymjs/CJFrameForAndroid](https://github.com/kymjs/CJFrameForAndroid)
1. **ignition** Ignition helps you getting your Android applications off the ground quickly, by offering ready-to-use components and utility classes that wrap a lot of the boilerplate that's involved when writing Android apps.      
[https://github.com/mttkay/ignition](https://github.com/mttkay/ignition)
1. **AndroidQuickUtils**   Android Development Framework               
[https://github.com/cesarferreira/AndroidQuickUtils](https://github.com/cesarferreira/AndroidQuickUtils)
1. **Elf Framework** Android Framework to simplify the android development process.             
[https://github.com/fenli/elf](https://github.com/fenli/elf)
1. **nucleus**  Nucleus is an Android library which helps to use the MVP (Model-View-Presenter) pattern
[https://github.com/konmik/nucleus/](https://github.com/konmik/nucleus/)
1. **MultipleTheme**  Android换肤／夜间模式的Android框架，配合theme和换肤控件框架可以做到无缝切换换肤（无需重启应用和当前页面）。 This framework of Android app support multiple theme(such as day/night mode) and needn’t finish current application or current activity.            
[https://github.com/dersoncheng/MultipleTheme](https://github.com/dersoncheng/MultipleTheme)
1. **DroidPlugin**   DroidPlugin 是360手机助手在Android系统上实现了一种新的插件机制:它可以在无需安装、修改的情况下运行APK文件,此机制对改进大型APP的架构，实现多团队协作开发具有一定的好处。              
[https://github.com/Qihoo360/DroidPlugin](https://github.com/Qihoo360/DroidPlugin)
1. **Carpaccio**   Data Mapping & Smarter Views framework for android https://github.com/florent37/Carpaccio/wiki        
[https://github.com/florent37/Carpaccio](https://github.com/florent37/Carpaccio)
1. **ACDD** ACDD，Android Component Dynamic Deployment(plugin) Solution,if any question,send me e-mail Solution http://bunnyblue.github.io/ACDD/            
[https://github.com/bunnyblue/ACDD](https://github.com/bunnyblue/ACDD)
1. **powermock**  PowerMock is a Java framework that allows you to unit test code normally regarded as untestable.              
[https://github.com/jayway/powermock](https://github.com/jayway/powermock)



### <A NAME="EventBus"></A>EventBus
1. **EventBus** Android optimized event bus that simplifies communication between Activities, Fragments, Threads, Services, etc. Less code, better quality.           
[https://github.com/greenrobot/EventBus](https://github.com/greenrobot/EventBus)
1. **otto**   An enhanced Guava-based event bus with emphasis on Android support.     
[https://github.com/square/otto](https://github.com/square/otto)
1. **Guava's event bus** Guava's event bus utility, explained.     
[https://code.google.com/p/guava-libraries/wiki/EventBusExplained](https://code.google.com/p/guava-libraries/wiki/EventBusExplained)
1. **RxJava**  RxJava – Reactive Extensions for the JVM – a library for composing asynchronous and event-based programs using observable sequences for the Java VM.  
[https://github.com/ReactiveX/RxJava](https://github.com/ReactiveX/RxJava)
1. **RxAndroid**  RxJava bindings for Android       
[https://github.com/ReactiveX/RxAndroid](https://github.com/ReactiveX/RxAndroid)
1. **tinybus** A lightweight and simple event bus optimized for Android     
[https://github.com/beworker/tinybus](https://github.com/beworker/tinybus)
1. **NetworkEvents**  Android library listening network connection state and change of the Wifi signal strength                 
[https://github.com/pwittchen/NetworkEvents](https://github.com/pwittchen/NetworkEvents)
1. **AndroidEventBus**  A lightweight eventbus library for android, simplifies communication between Activities, Fragments, Threads, Services, etc.         
[https://github.com/bboyfeiyu/AndroidEventBus](https://github.com/bboyfeiyu/AndroidEventBus)



### <A NAME="Orm"></A>Orm 
1. **greenDAO**    greenDAO is a light & fast ORM solution for Android that maps objects to SQLite databases.       
[https://github.com/greenrobot/greenDAO](https://github.com/greenrobot/greenDAO)
1. **ormlite**    ORMLite Android functionality used in conjunction with ormlite-core     
[https://github.com/j256/ormlite-android](https://github.com/j256/ormlite-android) 
1. **ActiveAndroid**    Active record style SQLite persistence for Android    
[https://github.com/pardom/ActiveAndroid](https://github.com/pardom/ActiveAndroid)
1. **sugar**     Insanely easy way to work with Android Database.     
[https://github.com/satyan/sugar](https://github.com/satyan/sugar)    
1. **androrm**   An Object Relational Mapper for Android.      
[https://github.com/androrm/androrm/](https://github.com/androrm/androrm/)
1. **orman**     lightweight and practical ORM for Java/Android. works with SQLite & MySQL.     
[https://github.com/ahmetalpbalkan/orman](https://github.com/ahmetalpbalkan/orman)
1. **ormdroid** ORMDroid is a simple ORM persistence framework for your Android applications.       
[https://github.com/roscopeco/ormdroid](https://github.com/roscopeco/ormdroid)
1. **android-sqlite-asset-helper**   An Android helper class to manage database creation and version management using an application's raw asset files   
[https://github.com/jgilfelt/android-sqlite-asset-helper](https://github.com/jgilfelt/android-sqlite-asset-helper)
1. **sprinkles**  Sprinkles is a boiler-plate-reduction-library for dealing with databases in android applications           
[https://github.com/emilsjolander/sprinkles](https://github.com/emilsjolander/sprinkles)
1. **android-database-sqlcipher**  Android SQLite API based on SQLCipher     
[https://github.com/sqlcipher/android-database-sqlcipher](https://github.com/sqlcipher/android-database-sqlcipher)
1. **couchbase-lite-android**  Lightweight, embedded, syncable NoSQL database engine for Android.    
[https://github.com/couchbase/couchbase-lite-android](https://github.com/couchbase/couchbase-lite-android)
1. **SimpleNoSQL** A simple NoSQL client for Android. Meant as a document store using key/value pairs and some rudimentary querying. Useful for avoiding the hassle of SQL code.      
[https://github.com/Jearil/SimpleNoSQL](https://github.com/Jearil/SimpleNoSQL)
1. **SQLiteProvider** Extended SQLite functionality for Android            
[https://github.com/novoda/SQLiteProvider](https://github.com/novoda/SQLiteProvider)
1. **Android-AnnotatedSQL**  Android library for auto generating SQL schema and Content provider         
[https://github.com/hamsterksu/Android-AnnotatedSQL](https://github.com/hamsterksu/Android-AnnotatedSQL)
1. **DBExecutor** DBExecutor            
[https://github.com/LuckyJayce/DBExecutor](https://github.com/LuckyJayce/DBExecutor)
1. **LitePal** An Android library that allows developers to use SQLite database extremely easy.            
[https://github.com/LitePalFramework/LitePal](https://github.com/LitePalFramework/LitePal)
1. **realm-java** Realm is a mobile database: a replacement for SQLite & ORMs     
[https://github.com/realm/realm-java](https://github.com/realm/realm-java) 
1. **DBFlow**   A blazing fast, powerful, and very simple ORM android database library that writes database code for you.               
[https://github.com/agrosner/DBFlow](https://github.com/agrosner/DBFlow)
1. **sqlbrite**  A lightweight wrapper around SQLiteOpenHelper which introduces reactive stream semantics to SQL operations.                
[https://github.com/square/sqlbrite](https://github.com/square/sqlbrite)
1. **RestorableSQLiteDatabase**    A wrapper to replicate android's SQLiteDatabase with restoring capability.                
[https://github.com/yaa110/RestorableSQLiteDatabase](https://github.com/yaa110/RestorableSQLiteDatabase)
+1. **Cupboard**   Simple persistence that gets out of your way and is easy to add to your existing code base
+[https://bitbucket.org/qbusict/cupboard](https://bitbucket.org/qbusict/cupboard)


### <A NAME="Image_Loading"></A>Image Loading
1. **Android-Universal-Image-Loader**  Powerful and flexible library for loading, caching and displaying images on Android.             
[https://github.com/nostra13/Android-Universal-Image-Loader](https://github.com/nostra13/Android-Universal-Image-Loader)   
1. **picasso**  A powerful image downloading and caching library for Android   
[https://github.com/square/picasso](https://github.com/square/picasso)
1. **picasso-transformations** An Android transformation library providing a variety of image transformations for Picasso             
[https://github.com/wasabeef/picasso-transformations](https://github.com/wasabeef/picasso-transformations)
1. **ion**   Android Asynchronous Networking and Image Loading    
[https://github.com/koush/ion](https://github.com/koush/ion)
1. **glide**   An image loading and caching library for Android focused on smooth scrolling     
[https://github.com/bumptech/glide](https://github.com/bumptech/glide)
1. **glide-transformations**  An Android transformation library providing a variety of image transformations for Glide.          
[https://github.com/wasabeef/glide-transformations](https://github.com/wasabeef/glide-transformations)
1. **ImageLoader**  Library for async image loading and caching on Android   
[https://github.com/novoda/ImageLoader](https://github.com/novoda/ImageLoader)
1. **webimageloader** Library to handle asynchronous image loading on Android.  
[https://github.com/lexs/webimageloader](https://github.com/lexs/webimageloader)
1. **AndroidImageLoader** Andorid library that loads images asynchronously into cache using a thread pool      
[https://github.com/wuman/AndroidImageLoader](https://github.com/wuman/AndroidImageLoader)
1. **SoBitmap** Bitmap decoder, handle resize & quality & compress stuff following user's configurations.     [https://github.com/airk000/SoBitmap](https://github.com/airk000/SoBitmap)
1. **Fresco**   An image management library by FaceBook     [https://github.com/facebook/fresco](https://github.com/facebook/fresco)


### <A NAME="Animations"></A>Animations
1. **ListViewAnimations**   An Android library which allows developers to easily add animations to ListView items     
[https://github.com/nhaarman/ListViewAnimations](https://github.com/nhaarman/ListViewAnimations)
1. **NineOldAndroids** Android library for using the Honeycomb animation API on all versions of the platform back to 1.0!      
[https://github.com/JakeWharton/NineOldAndroids](https://github.com/JakeWharton/NineOldAndroids)
1. **android-flip** A component for flip animation on Android, which is similar to the effect in Flipboard iPhone/Android    
[https://github.com/openaphid/android-flip](https://github.com/openaphid/android-flip)
1. **AndroidViewAnimations** Cute view animation collection.     
[https://github.com/daimajia/AndroidViewAnimations](https://github.com/daimajia/AndroidViewAnimations)
1. **AnimationEasingFunctions**    Android Animation Easing Functions. Let's make animation more real!       
[https://github.com/daimajia/AnimationEasingFunctions](https://github.com/daimajia/AnimationEasingFunctions)
1. **ViewPagerTransforms**  Library containing common animations needed for transforming ViewPager scrolling for Android v13+.       
[https://github.com/ToxicBakery/ViewPagerTransforms](https://github.com/ToxicBakery/ViewPagerTransforms)
1. **TransitionsBackport**  A backport of the new Transitions API for Android  
[https://github.com/guerwan/TransitionsBackport](https://github.com/guerwan/TransitionsBackport)
1. **RecyclerViewItemAnimators**  This repo provides simple animators for the item views in the RecyclerView This code is cloned from DefaultItemAnimator provided by Google customizing the animations.             
[https://github.com/gabrielemariotti/RecyclerViewItemAnimators](https://github.com/gabrielemariotti/RecyclerViewItemAnimators)
1. **ParallaxPagerTransformer**  A pager for Android with parallax effect    
[https://github.com/xgc1986/ParallaxPagerTransformer](https://github.com/xgc1986/ParallaxPagerTransformer)
1. **android-page-curl**  Page Curl for Android        
[https://github.com/MysticTreeGames/android-page-curl](https://github.com/MysticTreeGames/android-page-curl)
1. **android-cubic-bezier-interpolator** An Android Library that helps you implement bezier animations in you application     
[https://github.com/codesoup/android-cubic-bezier-interpolator](https://github.com/codesoup/android-cubic-bezier-interpolator)
1. **ActivityTransition** An android project presenting some transitions you can use between activities    
[https://github.com/ophilbert/ActivityTransition](https://github.com/ophilbert/ActivityTransition)
1. **EasyAndroidAnimations** Easy Android Animations is an animation library that aims to make android animations easier, with 50+ builtin animations, it allows you to introduce many complex animation effects in your application with one or two lines of code.          
[https://github.com/2359media/EasyAndroidAnimations](https://github.com/2359media/EasyAndroidAnimations)
1. **AndroidImageSlider**  An amazing and convenient Android image slider.   
[https://github.com/daimajia/AndroidImageSlider](https://github.com/daimajia/AndroidImageSlider)
1. **transitions-everywhere** Backport of Transitions API from Android 4.4. Compatible with Android 2.2+            
[https://github.com/andkulikov/transitions-everywhere](https://github.com/andkulikov/transitions-everywhere)
1. **android-ripple-background**  A beautiful ripple animation for your app       
[https://github.com/skyfishjy/android-ripple-background](https://github.com/skyfishjy/android-ripple-background)
1. **CircleIndicator**  a lightweight viewpager indicator like in nexus 5 launcher          
[https://github.com/ongakuer/CircleIndicator](https://github.com/ongakuer/CircleIndicator)
1. **Interactive-animation**  Collect android animation                   
[https://github.com/Rano1/Interactive-animation](https://github.com/Rano1/Interactive-animation)
1. **Slidr**  Easily add slide to dismiss functionality to an Activity   
[https://github.com/r0adkll/Slidr](https://github.com/r0adkll/Slidr)
1. **CircularReveal**  Lollipop ViewAnimationUtils.createCircularReveal for everyone 2.3+          
[https://github.com/ozodrukh/CircularReveal](https://github.com/ozodrukh/CircularReveal)
1. **BaseAnimation**  BaseAnimation network Android animation set, custom controls, nearly 200 kinds of source code！ BaseAnimation, if a new version is updated automatically to remind everyone, I hope everyone will contribute their animated XML files or other source, together to create this open source app！          
[https://github.com/z56402344/BaseAnimation](https://github.com/z56402344/BaseAnimation)
1. **ArcAnimator**  ArcAnimator helps to create arc transition animation: 2.3.+       
[https://github.com/asyl/ArcAnimator](https://github.com/asyl/ArcAnimator)
1. **shimmer-android**  An easy, flexible way to add a shimmering effect to any view in an Android app.        
[https://github.com/facebook/shimmer-android](https://github.com/facebook/shimmer-android)
1. **Material-Animations**  Android Transition animations explanation with examples.             
[https://github.com/lgvalle/Material-Animations](https://github.com/lgvalle/Material-Animations)
1. **Rebound**  A Java library that models spring dynamics and adds real world physics to your app.
[https://github.com/facebook/rebound](https://github.com/facebook/rebound)
1. **CircularReveal**  Lollipop ViewAnimationUtils.createCircularReveal for everyone 2.3+              
[https://github.com/ozodrukh/CircularReveal](https://github.com/ozodrukh/CircularReveal)
1. **PreLollipopTransition**  Simple tool which help you to implement activity transition for pre-Lollipop devices.                 
[https://github.com/takahirom/PreLollipopTransition](https://github.com/takahirom/PreLollipopTransition) 
1. **WaveCompat**  Wave effect of activity animation              
[https://github.com/wangjiegulu/WaveCompat](https://github.com/wangjiegulu/WaveCompat)
1. **MultiStateAnimation**  Android library to create complex multi-state animations.        
[https://github.com/KeepSafe/MultiStateAnimation](https://github.com/KeepSafe/MultiStateAnimation)
1. **Android-Transition**  Allows the easy creation of view transitions that react to user inputs.        
[https://github.com/kaichunlin/android-transition](https://github.com/kaichunlin/android-transition)
1. **CircularTools** Material reveal and readial reaction animation library. Min. API 11    
[https://github.com/AutSoft/CircularTools](https://github.com/AutSoft/CircularTools)
1. **fab-transformation**  Support Floating Action Button transformation for Android                
[https://github.com/konifar/fab-transformation](https://github.com/konifar/fab-transformation)
1. **AppIntroAnimation**  AppIntroAnimation is a set of code snippets to make cool intro screen for your app with special Image Translation and Transformation animation effects. It is very easy to use and customize without adding third party library integrations.            
[https://github.com/TakeoffAndroid/AppIntroAnimation](https://github.com/TakeoffAndroid/AppIntroAnimation)
1. **TransitionPlayer**  Android library to control Transition animates. A simple way to create a interactive animation.                      
[https://github.com/XMFE-TEAM/TransitionPlayer](https://github.com/XMFE-TEAM/TransitionPlayer)
1. **Backboard**  A motion-driven animation framework for Android.          
[https://github.com/tumblr/Backboard](https://github.com/tumblr/Backboard)
1. **ActivityOptionsICS**    The lib can make the ActivityOptions animations use in Android api3.1+ http://www.cnblogs.com/tianzhijiexian/p/4128045.html     
[https://github.com/tianzhijiexian/ActivityOptionsICS](https://github.com/tianzhijiexian/ActivityOptionsICS)
1. **AndroidAnimationsActions**  Actions for android animations. Inspired by libgdx scene2d actions.                   
[https://github.com/dtx12/AndroidAnimationsActions](https://github.com/dtx12/AndroidAnimationsActions)
1. **material-scrolling**  Android library for material scrolling techniques.                             
[https://github.com/satorufujiwara/material-scrolling](https://github.com/satorufujiwara/material-scrolling)
1. **ExplosionField**  explosive dust effect for views                          
[https://github.com/tyrantgit/ExplosionField](https://github.com/tyrantgit/ExplosionField)





### <A NAME="Network"></A>Network
1. **android-async-http**    An Asynchronous HTTP Library for Android    
[https://github.com/loopj/android-async-http](https://github.com/loopj/android-async-http)
1. **okhttp**    An HTTP+SPDY client for Android and Java applications.    
[https://github.com/square/okhttp](https://github.com/square/okhttp)
1. **retrofit**   Type-safe REST client for Android and Java by Square, Inc.   
[https://github.com/square/retrofit](https://github.com/square/retrofit)
1. **AndroidAsync**    Asynchronous socket, http (client+server), websocket, and socket.io library for android. Based on nio, not threads.    
[https://github.com/koush/AndroidAsync](https://github.com/koush/AndroidAsync)
1. **async-http-client**    Asynchronous Http and WebSocket Client library for Java    
[https://github.com/AsyncHttpClient/async-http-client](https://github.com/AsyncHttpClient/async-http-client)
1. **http-request**    Java HTTP Request Library    
[https://github.com/kevinsawicki/http-request](https://github.com/kevinsawicki/http-request)
1. **node-android**    Run Node.js on Android    
[https://github.com/InstantWebP2P/node-android](https://github.com/InstantWebP2P/node-android)
1. **android-lite-http** Arrow(LiteHttp) is a simple, intelligent and flexible HTTP client for Android.     
[https://github.com/litesuits/android-lite-http](https://github.com/litesuits/android-lite-http) 
1. **robospice**      Repo of the Open Source Android library : RoboSpice. RoboSpice is a modular android library that makes writing asynchronous long running tasks easy. It is specialized in network requests, supports caching and offers REST requests out-of-the box using extension modules.         
[https://github.com/stephanenicolas/robospice](https://github.com/stephanenicolas/robospice)
1. **volley**  volley 
[https://github.com/mcxiaoke/android-volley](https://github.com/mcxiaoke/android-volley)
1. **enhanced-volley**  An enhanced version of the Volley Networking Toolkit for Android     
[https://github.com/vinaysshenoy/enhanced-volley](https://github.com/vinaysshenoy/enhanced-volley)
1. **unirest-java**  Unirest in Java: Simplified, lightweight HTTP client library.           
[https://github.com/mashape/unirest-java/](https://github.com/mashape/unirest-java/)
1. **wasp**  Android Network Solution              
[https://github.com/orhanobut/wasp](https://github.com/orhanobut/wasp)
1. **NetworkEvents** Android library listening network connection state and change of the Wifi signal strength            
[https://github.com/pwittchen/NetworkEvents](https://github.com/pwittchen/NetworkEvents)



### <A NAME="Widget"></A>Widget
#### <A NAME="Material"></A>Material
1. **MaterialDesignLibrary**  This is a library with components of Android L to you use in android 4.0     
[https://github.com/navasmdc/MaterialDesignLibrary#flat-button](https://github.com/navasmdc/MaterialDesignLibrary#flat-button)
1. **Carbon** Material Design implementation for Android 2.1+. Realtime shadows, ripples, animations, SVGs and more.
[https://github.com/ZieIony/Carbon](https://github.com/ZieIony/Carbon)
1. **MaterialEverywhere**  Showcase of the new AppCompat 21, which includes new Material Theme, working in pre-21 devices.                          
[https://github.com/antoniolg/MaterialEverywhere](https://github.com/antoniolg/MaterialEverywhere)
1. **MaterialWidget** Android L design widget in Android 4.0 ~ 4.4.         
[https://github.com/keithellis/MaterialWidget](https://github.com/keithellis/MaterialWidget)
1. **MaterialTabs** Custom Tabs with Material Design effects. It requires 14+ API and android support v7 (Toolbar)      
[https://github.com/neokree/MaterialTabs](https://github.com/neokree/MaterialTabs)
1. **material-ripple**    Android L Ripple effect wrapper for Views       
[https://github.com/balysv/material-ripple](https://github.com/balysv/material-ripple)
1. **RippleEffect**   Implementation of Ripple effect from Material Design for Android API 14+             
[https://github.com/traex/RippleEffect](https://github.com/traex/RippleEffect)
1. **LDrawer**   Android drawer icon with material design animation    
[https://github.com/ikimuhendis/LDrawer](https://github.com/ikimuhendis/LDrawer)
1. **material-design-icons** Material Design icons by Google         
[https://github.com/google/material-design-icons](https://github.com/google/material-design-icons)
1. **AndroidMaterialDesignToolbar** Android Sample Project with Material Design and Toolbar.          
[https://github.com/tekinarslan/AndroidMaterialDesignToolbar](https://github.com/tekinarslan/AndroidMaterialDesignToolbar)
1. **MaterialEditText**  EditText in Material Design               
[https://github.com/rengwuxian/MaterialEditText](https://github.com/rengwuxian/MaterialEditText)
1. **material-menu**  Morphing Android menu, back, dismiss and check buttons   
[https://github.com/balysv/material-menu](https://github.com/balysv/material-menu)
1. **material-dialogs** Not even AppCompat uses Material theming for AlertDialogs on pre-Lollipop. This is a beautiful and easy solution.          
[https://github.com/afollestad/material-dialogs](https://github.com/afollestad/material-dialogs)
1. **MaterialNavigationDrawer**    Navigation Drawer Activity with material design style and simplified methods        
[https://github.com/neokree/MaterialNavigationDrawer](https://github.com/neokree/MaterialNavigationDrawer)
1. **MaterialDialog** An Android library for conveniently building Material Design Dialog in Android version 2.2 ~ L.       
[https://github.com/drakeet/MaterialDialog](https://github.com/drakeet/MaterialDialog)
1. **materialish-progress**  A material style progress wheel compatible with 2.3            
[https://github.com/pnikosis/materialish-progress](https://github.com/pnikosis/materialish-progress)
1. **MaterialList**  An Android library aimed to get the beautiful CardViews that Google shows at its official design specifications               
[https://github.com/dexafree/MaterialList](https://github.com/dexafree/MaterialList)
1. **android-floating-action-button**  Floating Action Button for Android based on Material Design specification            
[https://github.com/futuresimple/android-floating-action-button](https://github.com/futuresimple/android-floating-action-button)
1. **Android-Material-circular-button**  Animated Material circular button     
[https://github.com/glomadrian/Android-Material-circular-button](https://github.com/glomadrian/Android-Material-circular-button)
1. **material-drawer**  DrawerLayout implementation for Material design apps   
[https://github.com/HeinrichReimer/material-drawer](https://github.com/HeinrichReimer/material-drawer)             
1. **snackbar**   Snackbar Android Library                
[https://github.com/nispok/snackbar](https://github.com/nispok/snackbar)
1. **Android-DialogFragments**  Various DialogFragments for Android.     
[https://github.com/wada811/Android-DialogFragments](https://github.com/wada811/Android-DialogFragments)
1. **material-range-bar**  Android widget for selecting a range of values.           
[https://github.com/oli107/material-range-bar](https://github.com/oli107/material-range-bar)
1. **CircularProgressView**  A Material style circular progress bar for Android  
[https://github.com/rahatarmanahmed/CircularProgressView](https://github.com/rahatarmanahmed/CircularProgressView)
1. **RippleDrawable**  A port of Ripple Effect from Android L to non L devices   
[https://github.com/ozodrukh/RippleDrawable](https://github.com/ozodrukh/RippleDrawable)
1. **MaterialDrawer** A simple take on creating a easy to use and fast material drawer implementation          
[https://github.com/mikepenz/MaterialDrawer](https://github.com/mikepenz/MaterialDrawer)
1. **android-materialshadowninepatch**  Provides 9-patch based drop shadow for view elements. Works on API level 9 or later.                                 
[https://github.com/h6ah4i/android-materialshadowninepatch](https://github.com/h6ah4i/android-materialshadowninepatch)
1. **SearchMenuAnim**  SearchMenuAnim              
[https://github.com/kongnanlive/SearchMenuAnim](https://github.com/kongnanlive/SearchMenuAnim)
1. **AdvancedMaterialDrawer**   A Material Drawer implementation (Like gMail App)               
[https://github.com/madcyph3r/AdvancedMaterialDrawer](https://github.com/madcyph3r/AdvancedMaterialDrawer)
1. **ZDepthShadowLayout**   Android - draw z-depth shadow of MaterialDesign    
[https://github.com/ShogoMizumoto/ZDepthShadowLayout](https://github.com/ShogoMizumoto/ZDepthShadowLayout)
1. **MaterialPowerMenu**  A demo of the power menu with Reveal and other animations            
[https://github.com/naman14/MaterialPowerMenu](https://github.com/naman14/MaterialPowerMenu)
1. **MaterialViewPager** A Material Design ViewPager easy to use library     
[https://github.com/florent37/MaterialViewPager](https://github.com/florent37/MaterialViewPager)
1. **MaterialProgressBar** A Material design ProgressBar with consistent appearance on Android 4.0+     
[https://github.com/DreaminginCodeZH/MaterialProgressBar](https://github.com/DreaminginCodeZH/MaterialProgressBar)


#### <A NAME="UI"></A>UI
1. **android-ui**   Android UI library.  Requires API level 14+         
[https://github.com/markushi/android-ui](https://github.com/markushi/android-ui)
1. **GreenDroid**   GreenDroid is a development library for the Android platform. It makes UI developments easier and consistent through your applications.     
[https://github.com/cyrilmottier/GreenDroid](https://github.com/cyrilmottier/GreenDroid)
1. **FlatUI**  CengaLabs - Android FlatUI Kit     
[https://github.com/eluleci/FlatUI](https://github.com/eluleci/FlatUI)
1. **EffectiveAndroidUI** Sample project created to show some of the best Android practices to work in the Android UI Layer. The UI layer of this project has been implemented using MVP or MVVM (without binding engine) to show how this patterns works. This project is used during the talk "EffectiveAndroidUI".           
[https://github.com/pedrovgs/EffectiveAndroidUI](https://github.com/pedrovgs/EffectiveAndroidUI)
1. **ParallaxEverywhere**  Parallax everywhere is a library with alternative android widgets with parallax effects.        
[https://github.com/Narfss/ParallaxEverywhere](https://github.com/Narfss/ParallaxEverywhere)
1. **ShowcaseView**  Highlight the best bits of your app to users quickly, simply, and cool...ly
[https://github.com/amlcurran/ShowcaseView](https://github.com/amlcurran/ShowcaseView)



#### <A NAME="TextView/EditText"></A>TextView/EditText
1. **richeditor-android**  RichEditor for Android is a beautiful Rich Text WYSIWYG Editor for Android.                     
[https://github.com/wasabeef/richeditor-android](https://github.com/wasabeef/richeditor-android)
1. **Shimmer-android**  An Android TextView with a shimmering effect    
[https://github.com/RomainPiel/Shimmer-android](https://github.com/RomainPiel/Shimmer-android)
1. **Titanic** Android experiment showing a sinking TextView        
[https://github.com/RomainPiel/Titanic](https://github.com/RomainPiel/Titanic)
1. **emojicon** A library to show emoji in TextView, EditText (like WhatsApp) for Android        
[https://github.com/rockerhieu/emojicon](https://github.com/rockerhieu/emojicon)
1. **android-autofittextview**  A TextView that automatically resizes text to fit perfectly within its bounds.          
[https://github.com/grantland/android-autofittextview](https://github.com/grantland/android-autofittextview)
1. **Android-RobotoTextView**   Implementation of a TextView and all its direct/indirect subclasses with native support for the Roboto fonts, includes the brand new Roboto Slab fonts.   
[https://github.com/johnkil/Android-RobotoTextView](https://github.com/johnkil/Android-RobotoTextView)
1. **SizeAdjustingTextView** This is based on an open source autosizing textview for Android.         
[https://github.com/erchenger/SizeAdjustingTextView](https://github.com/erchenger/SizeAdjustingTextView)
1. **SecretTextView** A TextView that simulates the effect from the app Secret where the characters fade in/out at different speeds.         
[https://github.com/matthewrkula/SecretTextView](https://github.com/matthewrkula/SecretTextView)
1. **anytextview**  An extension of Android's TextView and EditText that let's you use the font of your choice        
[https://github.com/hanspeide/anytextview](https://github.com/hanspeide/anytextview)
1. **android-formidable-validation**   Form validation and feedback library for Android. Provides .setText for more than just TextView and EditText widgets. Provides easy means to validate with dependencies.        
[https://github.com/coreform/android-formidable-validation](https://github.com/coreform/android-formidable-validation)
1. **android-edittext-validator** Android form edit text is an extension of EditText that brings data validation facilities to the edittext.      
[https://github.com/vekexasia/android-edittext-validator](https://github.com/vekexasia/android-edittext-validator)
1. **chips-edittext-library**      Chips EditText, Token EditText, Bubble EditText, Spannable EditText and etc.. There are many names of this control. Here I develop easy to understand , modify and integrate Chips Edit Text widget for Android     
[https://github.com/kpbird/chips-edittext-library](https://github.com/kpbird/chips-edittext-library)
1. **FloatingLabel** FloatingLabel Allows you to create a blow kind of EditText.    
[https://github.com/hardik-trivedi/FloatingLabel](https://github.com/hardik-trivedi/FloatingLabel)
1. **AndroidFloatLabel** Float Label Edit Texts for Android       
[https://github.com/weddingparty/AndroidFloatLabel](https://github.com/weddingparty/AndroidFloatLabel)
1. **AndroidFloatLabel**  Library project with a custom view that implements the Float Label pattern       
[https://github.com/IanGClifton/AndroidFloatLabel](https://github.com/IanGClifton/AndroidFloatLabel)
1. **TokenAutoComplete** Gmail style MultiAutoCompleteTextView for Android   
[https://github.com/splitwise/TokenAutoComplete](https://github.com/splitwise/TokenAutoComplete)
1. **TextJustify-Android** Android Text Full Jusiftication / Wrapping / Justify    
[https://github.com/bluejamesbond/TextJustify-Android](https://github.com/bluejamesbond/TextJustify-Android)
1. **RoundedLetterView**  RoundedLetterView like the one in Android 5.0 Contacts app           
[https://github.com/pavlospt/RoundedLetterView](https://github.com/pavlospt/RoundedLetterView)
1. **Android-SingleInputForm**  A single EditText instead of a classical form. Library that implements flavienlaurent's singleinputform           
[https://github.com/HeinrichReimer/Android-SingleInputForm](https://github.com/HeinrichReimer/Android-SingleInputForm)
1. **BabushkaText**  A simpler way to style your TextViews         
[https://github.com/quiqueqs/BabushkaText](https://github.com/quiqueqs/BabushkaText)
1. **MatchView** Include MatchTextView and MatchButton..Come..you will like it      
[https://github.com/Rogero0o/MatchView](https://github.com/Rogero0o/MatchView)
1. **ExpandableTextView**  Android's TextView that can expand/collapse like the Google Play's app description            
[https://github.com/Manabu-GT/ExpandableTextView](https://github.com/Manabu-GT/ExpandableTextView)
1. **AccountAutoCompleteEditText**  Simple extension for account suggestion and auto completion.           
[https://github.com/KeithYokoma/AccountAutoCompleteEditText](https://github.com/KeithYokoma/AccountAutoCompleteEditText)
1. **AwesomeText**  A tool that facilitates working with Spans on TextViews or any extension of them (EditTexts, Buttons...).     
[https://github.com/JMPergar/AwesomeText](https://github.com/JMPergar/AwesomeText)
1. **WaitingDots**  Small library that provides... bouncing dots. This feature is used in number of messaging apps (such as Hangouts or Messenger), and lately in Android TV (for example when connecting to Wifi).                
[https://github.com/tajchert/WaitingDots](https://github.com/tajchert/WaitingDots)
1. **CurrencyEditText** A module designed to provide ease-of-use when using an EditText field for gathering currency information from a user.
[https://github.com/BlacKCaT27/CurrencyEditText](https://github.com/BlacKCaT27/CurrencyEditText)
1. **Android-Typeahead** Awesome Android Typeahead library - User mention plugin, UI widget for auto complete user mention using the at sign (@) like Twitter or Facebook..
[https://github.com/ArabAgile/android-typeahead](https://github.com/ArabAgile/android-typeahead)
1. **CircleTimerView**  Circle timer on Android platform.                     
[https://github.com/jiahuanyu/CircleTimerView](https://github.com/jiahuanyu/CircleTimerView) 
1. **AlignTextView**  字体对齐的textview           
[https://github.com/androiddevelop/AlignTextView](https://github.com/androiddevelop/AlignTextView)
1. **advanced-textview**  Advanced Android TextView          
[https://github.com/chiuki/advanced-textview](https://github.com/chiuki/advanced-textview)
1. **ParkedTextView** A editable text with a constant text/placeholder for Android.           
[https://github.com/gotokatsuya/ParkedTextView](https://github.com/gotokatsuya/ParkedTextView)
1. **SimpleLinkableText** Simple way to create linked text, such as @username or #hashtag, in Android TextView and EditText.           
[https://github.com/apradanas/simple-linkable-text](https://github.com/apradanas/simple-linkable-text)
1. **material-code-input**  A material style input for codes                  
[https://github.com/glomadrian/material-code-input](https://github.com/glomadrian/material-code-input)
1. **BubbleTextView**  Android Bubble View              
[https://github.com/dupengtao/BubbleTextView](https://github.com/dupengtao/BubbleTextView)
1. **PathEffectTextView**  PathEffectTextView              
[https://github.com/dkmeteor/PathEffectTextView](https://github.com/dkmeteor/PathEffectTextView)




#### <A NAME="ImageView"></A>ImageView
1. **PhotoView**     Implementation of ImageView for Android that supports zooming, by various touch gestures.      
[https://github.com/chrisbanes/PhotoView](https://github.com/chrisbanes/PhotoView)
1. **android-smart-image-view**    Android ImageView replacement which allows image loading from URLs or contact address book, with caching         
[https://github.com/loopj/android-smart-image-view](https://github.com/loopj/android-smart-image-view)
1. **TouchImageView**  Adds touch functionality to Android ImageView.     
[https://github.com/MikeOrtiz/TouchImageView](https://github.com/MikeOrtiz/TouchImageView)
1. **CircleImageView**  A fast circular ImageView perfect for profile images.  
[https://github.com/hdodenhof/CircleImageView](https://github.com/hdodenhof/CircleImageView)
1. **gesture-imageview** This is a simple Android View class which provides basic pinch and zoom capability for images.     
[https://github.com/jasonpolites/gesture-imageview](https://github.com/jasonpolites/gesture-imageview)
1. **android-shape-imageview** Custom shaped android imageview components    
[https://github.com/siyamed/android-shape-imageview](https://github.com/siyamed/android-shape-imageview)
1. **AndroidImageCrop** How select and crop image on Android       
[https://github.com/lorensiuswlt/AndroidImageCrop](https://github.com/lorensiuswlt/AndroidImageCrop)
1. **GifImageView** Android ImageView that handles animated GIF images     
[https://github.com/felipecsl/GifImageView](https://github.com/felipecsl/GifImageView)
1. **cropper**   Android widget for cropping and rotating an image.            
[https://github.com/edmodo/cropper](https://github.com/edmodo/cropper)
1. **ImageViewZoom**     Android ImageView widget with zoom and pan capabilities         
[https://github.com/sephiroth74/ImageViewZoom](https://github.com/sephiroth74/ImageViewZoom)
1. **CircularImageView** Custom view for circular images in Android while maintaining the best draw performance       
[https://github.com/Pkmmte/CircularImageView](https://github.com/Pkmmte/CircularImageView)
1. **CircularImageView** Create circular image view in android      
[https://github.com/lopspower/CircularImageView](https://github.com/lopspower/CircularImageView)
1. **android-crop** Android library project for cropping images     
[https://github.com/jdamcd/android-crop](https://github.com/jdamcd/android-crop)
1. **cropimage**  Replacement for deprecated official Android crop image function        
[https://github.com/biokys/cropimage](https://github.com/biokys/cropimage)
1. **android-cropimage**CropImage Activity from Gallery.apk packaged as a reusable Android library (4.0 and up).          
[https://github.com/lvillani/android-cropimage](https://github.com/lvillani/android-cropimage)
1. **android-gpuimage** Android filters based on OpenGL (idea from GPUImage for iOS)     
[https://github.com/CyberAgent/android-gpuimage](https://github.com/CyberAgent/android-gpuimage)
1. **gif-movie-view**  Android View widget for displaying GIF animations.
[https://github.com/sbakhtiarov/gif-movie-view](https://github.com/sbakhtiarov/gif-movie-view)
1. **WaveDrawable** Drawable animation inspired by Tinder.        
[https://github.com/Alexrs95/WaveDrawable](https://github.com/Alexrs95/WaveDrawable)
1. **DrawerArrowDrawable**  Visual back-port of the rotating drawer-to-arrow drawable from Android L               
[https://github.com/ChrisRenke/DrawerArrowDrawable](https://github.com/ChrisRenke/DrawerArrowDrawable)
1. **TextDrawable**  This light-weight library provides images with letter/text like the Gmail app. It extends the Drawable class thus can be used with existing/custom/network ImageView classes. Also included is a fluent interface for creating drawables and a customizable ColorGenerator.            
[https://github.com/amulyakhare/TextDrawable](https://github.com/amulyakhare/TextDrawable)
1. **SelectableRoundedImageView**  Android ImageView that supports different radiuses on each corner. It also supports oval(and circle) shape and border. This would be especially useful for using inside CardView which should be rounded only top left and top right corners(Don't forget to call setPreventCornerOverlap(false) on your cardview).                   
[https://github.com/pungrue26/SelectableRoundedImageView](https://github.com/pungrue26/SelectableRoundedImageView)
1. **avatar-android**    Rounded and Squared Avatar for Android Applications  
[https://github.com/Pedroafa/avatar-android](https://github.com/Pedroafa/avatar-android)
1. **ByakuGallery**  ByakuGallery is an open source Android library that allows the visualization of large images with gesture capabilities. This lib is based on AOSP Camera2.            
[https://github.com/diegocarloslima/ByakuGallery](https://github.com/diegocarloslima/ByakuGallery)
1. **DexMovingImageView**  DMIV aims to provide a flexible and customizable instrument for automated images moving on display. It provides scroll, gyroscope or time based moving. But you can create your own evaluator.      
[https://github.com/dexlex/DexMovingImageView](https://github.com/dexlex/DexMovingImageView)
1. **SimpleTagImageView** ImageView with a tag in android. So it's a ImageView.      
[https://github.com/wujingchao/SimpleTagImageView](https://github.com/wujingchao/SimpleTagImageView)
1. **CropImageView** Widget allows you crop from whatever side in an ImageView. Currently Android only supports centerCrop type of cropping      
[https://github.com/cesards/CropImageView](https://github.com/cesards/CropImageView)
1. **MovingImageView**  Custom ImageView for moving image around the screen (Android)                      
[https://github.com/AlbertGrobas/MovingImageView](https://github.com/AlbertGrobas/MovingImageView)
1. **PolygonImageView**  Custom ImageView for android with polygon shape (Android)                   
[https://github.com/AlbertGrobas/PolygonImageView](https://github.com/AlbertGrobas/PolygonImageView)
1. **BitmapMerger** Play with bitmaps           
[https://github.com/cooltechworks/BitmapMerger](https://github.com/cooltechworks/BitmapMerger)
1. **FlickableView**  Flickable ImageView for Android. It's like a view of twitter's detail image.         
[https://github.com/gotokatsuya/FlickableView](https://github.com/gotokatsuya/FlickableView)
1. **ImageGallery**  A gallery used to host an array of images
[https://github.com/lawloretienne/ImageGallery](https://github.com/lawloretienne/ImageGallery)




#### <A NAME="Button"></A>Button
1. **circular-progress-button**   Android Circular Progress Button     
[https://github.com/dmytrodanylyk/circular-progress-button](https://github.com/dmytrodanylyk/circular-progress-button)
1. **android-process-button** Android Buttons With Built-in Progress Meters.   
[https://github.com/dmytrodanylyk/android-process-button](https://github.com/dmytrodanylyk/android-process-button)
1. **android-circlebutton**  Circle button widget for Android           
[https://github.com/markushi/android-circlebutton](https://github.com/markushi/android-circlebutton)
1. **android-flat-button**  FButton - a flat button library for Android      
[https://github.com/hoang8f/android-flat-button](https://github.com/hoang8f/android-flat-button)
1. **FloatingActionButton**   Android Google+ like floating action button   
[https://github.com/makovkastar/FloatingActionButton](https://github.com/makovkastar/FloatingActionButton)
1. **ExpandableButtonMenu** An Android library for an expandable button menu   
[https://github.com/lemonlabs/ExpandableButtonMenu](https://github.com/lemonlabs/ExpandableButtonMenu)
1. **fancybuttons** An Android library to easily create fancy buttons without the need of drawable files.               
[https://github.com/medyo/fancybuttons](https://github.com/medyo/fancybuttons)
1. **Android-Bootstrap**    Bootstrap style buttons with Font Awesome     
[https://github.com/Bearded-Hen/Android-Bootstrap](https://github.com/Bearded-Hen/Android-Bootstrap)
1. **SwitchButton**   SwitchButton          
[https://github.com/kyleduo/SwitchButton](https://github.com/kyleduo/SwitchButton)
1. **SwitchButton**  SwitchButton            
[https://github.com/xiaopansky/SwitchButton](https://github.com/xiaopansky/SwitchButton)
1. **ToggleButton**  ToggleButton Widget For Android Dev           
[https://github.com/zcweng/ToggleButton](https://github.com/zcweng/ToggleButton)
1. **FabButton**  Android Floating ActionButton with a progress indicator ring       
[https://github.com/ckurtm/FabButton](https://github.com/ckurtm/FabButton)
1. **SlideSwitch**  A button that you can slide on or off                
[https://github.com/Leaking/SlideSwitch](https://github.com/Leaking/SlideSwitch)
1. **easyloadingbtn** This is a Material Design loading button            
[https://github.com/DevinShine/easyloadingbtn](https://github.com/DevinShine/easyloadingbtn)
1. **hkm-progress-button**  Base on android-process-button this is the advanced version of the android-process-button.             
[https://github.com/jjhesk/hkm-progress-button](https://github.com/jjhesk/hkm-progress-button)
1. **SubmitDemo**  comtomize view submit button which you use for submit operation or download operation and so on.             
[https://github.com/tuesda/SubmitDemo](https://github.com/tuesda/SubmitDemo)
1. **PlayPauseButton**  PlayPauseButton         
[https://github.com/recruit-lifestyle/PlayPauseButton](https://github.com/recruit-lifestyle/PlayPauseButton)
1. **ArrowDownloadButton**  A download button with pretty cool animation                            
[https://github.com/fenjuly/ArrowDownloadButton](https://github.com/fenjuly/ArrowDownloadButton)
1. **FABProgressCircle**  Material progress circle around any FloatingActionButton. 100% Guidelines.               
[https://github.com/JorgeCastilloPrz/FABProgressCircle](https://github.com/JorgeCastilloPrz/FABProgressCircle)


#### <A NAME="Progressbar/Progress_View"></A>Progressbar/Progress View
1. **SmoothProgressBar**  A small Android library allowing you to have a smooth and customizable horizontal indeterminate ProgressBar        
[https://github.com/castorflex/SmoothProgressBar](https://github.com/castorflex/SmoothProgressBar)
1. **ACProgressLite** A lightweight Android library to display customizable progressbar like iOS MBProgressHUD.       
[https://github.com/Cloudist/ACProgressLite](https://github.com/Cloudist/ACProgressLite)
1. **NumberProgressBar**    A beautiful, slim Android ProgressBar.        
[https://github.com/daimajia/NumberProgressBar](https://github.com/daimajia/NumberProgressBar)
1. **android-HoloCircularProgressBar**  Holo Circular ProgressBar         
[https://github.com/passsy/android-HoloCircularProgressBar](https://github.com/passsy/android-HoloCircularProgressBar)
1. **android-square-progressbar**  An android library to display a progressbar that goes around an image.        
[https://github.com/mrwonderman/android-square-progressbar](https://github.com/mrwonderman/android-square-progressbar)
1. **ProgressPieView** Android library for showing progress in a highly customizable pie.       
[https://github.com/FilipPudak/ProgressPieView](https://github.com/FilipPudak/ProgressPieView)
1. **GoogleProgressBar**  Android library to display progress like google does in some of his services.          
[https://github.com/jpardogo/GoogleProgressBar](https://github.com/jpardogo/GoogleProgressBar)
1. **ProgressWheel** A progress wheel for android, intended for use instead of the standard progress bar.     
[https://github.com/Todd-Davies/ProgressWheel](https://github.com/Todd-Davies/ProgressWheel)
1. **RefreshActionItem** Android - An action bar item which acts both as a refresh button and as a progress indicator    
[https://github.com/ManuelPeinado/RefreshActionItem](https://github.com/ManuelPeinado/RefreshActionItem)
1. **CircleProgress**  CircleProgress, DonutProgress, ArcProgress     
[https://github.com/lzyzsd/CircleProgress](https://github.com/lzyzsd/CircleProgress)
1. **WaveView**  A wave view of android,can be used as progress bar.     
[https://github.com/john990/WaveView](https://github.com/john990/WaveView)
1. **water-wave-progress**  水波按进度上升，带环形进度条     
[https://github.com/Modificator/water-wave-progress](https://github.com/Modificator/water-wave-progress)
1. **InfiniteIndicator**  This lib can be used for viewpager infinite loop with indicator easily.         
[https://github.com/lightSky/InfiniteIndicator](https://github.com/lightSky/InfiniteIndicator)
1. **Android-RoundCornerProgressBar**  Round Corner Progress Bar Library for Android        
[https://github.com/akexorcist/Android-RoundCornerProgressBar](https://github.com/akexorcist/Android-RoundCornerProgressBar)
1. **CircleProgress**  A circle progress animation view on Android                              
[https://github.com/Fichardu/CircleProgress](https://github.com/Fichardu/CircleProgress)
1. **MaterialLoadingProgressBar**  MaterialLoadingProgressBar provide a styled ProgressBar which looks like SwipeRefreshLayout's loading indicator(support-v4 v21+)                              
[https://github.com/lsjwzh/MaterialLoadingProgressBar](https://github.com/lsjwzh/MaterialLoadingProgressBar)
1. **WheelIndicatorView**  A 'Google Fit' like activity indicator for Android      
[https://github.com/dlazaro66/WheelIndicatorView](https://github.com/dlazaro66/WheelIndicatorView)
1. **MaterialProgressBar**  Material design ProgressBar with consistent appearance             
[https://github.com/DreaminginCodeZH/MaterialProgressBar](https://github.com/DreaminginCodeZH/MaterialProgressBar)
1. RopeProgressBar   Android ProgressBar that "bends" under its own weight. Inspired by http://drbl.in/nwih       
[https://github.com/cdeange/RopeProgressBar](https://github.com/cdeange/RopeProgressBar)
1. **DownloadProgressBar** Android progress bar with cool animation, inspired by : https://dribbble.com/shots/2012292-Download-Animation                 
[https://github.com/panwrona/DownloadProgressBar](https://github.com/panwrona/DownloadProgressBar)
1. **AnimatedCircleLoadingView**  An animated circle loading view             
[https://github.com/jlmd/AnimatedCircleLoadingView](https://github.com/jlmd/AnimatedCircleLoadingView)
1. **SpinnerLoader**  A loader that measures up Material Design          
[https://github.com/fenjuly/SpinnerLoader](https://github.com/fenjuly/SpinnerLoader)
1. **AndroidFillableLoaders**  Android fillable progress view working with SVG paths. This is a nice option too if you want to create an interesting branding logo for your app. Based on the iOS project: https://github.com/poolqf/FillableLoaders             
[https://github.com/JorgeCastilloPrz/AndroidFillableLoaders](https://github.com/JorgeCastilloPrz/AndroidFillableLoaders)
1. **WhorlView**   Progressbar with whorl style                  
[https://github.com/Kyson/WhorlView](https://github.com/Kyson/WhorlView)
1. **ColoringLoading**  This project provide Coloring Loading View for Android.
And this project is not using the image file!               
[https://github.com/recruit-lifestyle/ColoringLoading](https://github.com/recruit-lifestyle/ColoringLoading)
1. **RubberIndicator**       A rubber indicator for ViewPager              
[https://github.com/LyndonChin/AndroidRubberIndicator](https://github.com/LyndonChin/AndroidRubberIndicator)





#### <A NAME="Menu"></A>Menu
1. **SlidingMenu**     SlidingMenu is an Open Source Android library that allows developers to easily create applications with sliding menus like those made popular in the Google+, YouTube, and Facebook apps. Feel free to use it all you want in your Android apps provided that you cite this project and include the license in your app.     
[https://github.com/jfeinstein10/SlidingMenu](https://github.com/jfeinstein10/SlidingMenu)
1. **android-menudrawer**  A slide-out menu implementation, which allows users to navigate between views in your app.        
[https://github.com/SimonVT/android-menudrawer](https://github.com/SimonVT/android-menudrawer)
1. **ArcMenu**  An android custom view which looks like the menu in Path 2.0 (for iOS).      
[https://github.com/daCapricorn/ArcMenu](https://github.com/daCapricorn/ArcMenu)
1. **RibbonMenu**   Navigation menu for Android (based off Google+ app)     
[https://github.com/darvds/RibbonMenu](https://github.com/darvds/RibbonMenu)
1. **CircularFloatingActionMenu** an animated circular menu for Android     
[https://github.com/oguzbilgener/CircularFloatingActionMenu](https://github.com/oguzbilgener/CircularFloatingActionMenu)
1. **ActionsContentView**  ActionsContentView is an standalone library implements actions/content swiping view (AKA Side Navigation UI Pattern, AKA Facebook side menu). The library doesn't use any specific code introduced in new Android SDK versions. This allows develop an application with an action/content swiping view for every version of Android from 2.2 and up. 
[https://github.com/StevenRudenko/ActionsContentView](https://github.com/StevenRudenko/ActionsContentView)
1. **Android-NewPopupMenu**  Android-NewPopupMenu is an android library to create popup menu with GoogleMusic app-like style.      
[https://github.com/u1aryz/Android-NewPopupMenu](https://github.com/u1aryz/Android-NewPopupMenu)
1. **android-floating-action-menu** Floating Action Menu for Android. Inspired by the Google Plus floating menu.     
[https://github.com/sephiroth74/android-floating-action-menu](https://github.com/sephiroth74/android-floating-action-menu)
1. **Android-CircleMenu** Menu with items on a rotating circle      
[https://github.com/szugyi/Android-CircleMenu](https://github.com/szugyi/Android-CircleMenu)
1. **Android Wheel Menu**   Simple and easy to use circular menu widget for Android.      
[https://github.com/anupcowkur/Android-Wheel-Menu](https://github.com/anupcowkur/Android-Wheel-Menu)
1. **android-satellite-menu**    Android Satellite Menu      
[https://github.com/siyamed/android-satellite-menu](https://github.com/siyamed/android-satellite-menu)
1. **SideNavigation** Implementation of "SIde Navigation" or "Fly-in app menu" pattern for Android (based on Google+ app)    
[https://github.com/johnkil/SideNavigation](https://github.com/johnkil/SideNavigation)
1. **AndroidResideMenu** The idea of ResideMenu is from Dribbble 1 and 2. It has come true and run in iOS devices. iOS ResideMenu This project is the RefsideMenu Android version. The visual effect is partly referred to iOS version of ResideMenu. And thanks to the authors for the above idea and contribution.     
[https://github.com/SpecialCyCi/AndroidResideMenu](https://github.com/SpecialCyCi/AndroidResideMenu) 
1. **GoogleNavigationDrawerMenu**   Android Library for a DrawerLayout similar to the one in Google Apps       
[https://github.com/Arasthel/GoogleNavigationDrawerMenu](https://github.com/Arasthel/GoogleNavigationDrawerMenu)
1. **simple-side-drawer** Simple library which enable you to add a drawer(slide-out) navigation to your android application         
[https://github.com/adamrocker/simple-side-drawer](https://github.com/adamrocker/simple-side-drawer)
1. **BlurNavigationDrawer** Android - Blur Navigation Drawer like Etsy app.    
[https://github.com/charbgr/BlurNavigationDrawer](https://github.com/charbgr/BlurNavigationDrawer)
1. **ActionSheetForAndroid**    IOS UIActionSheet in Android         
[https://github.com/baoyongzhang/ActionSheetForAndroid](https://github.com/baoyongzhang/ActionSheetForAndroid)
1. **BottomSheet**  One way to present a set of actions to a user is with bottom sheets, a sheet of paper that slides up from the bottom edge of the screen. Bottom sheets offer flexibility in the display of clear and simple actions that do not need explanation.              
[https://github.com/soarcn/BottomSheet](https://github.com/soarcn/BottomSheet)
1. **Context-Menu.Android**  Context-Menu.Android   
[https://github.com/Yalantis/Context-Menu.Android](https://github.com/Yalantis/Context-Menu.Android)
1. **Side-Menu.Android**  Side-Menu.Android     
[https://github.com/Yalantis/Side-Menu.Android](https://github.com/Yalantis/Side-Menu.Android)
1. **Android-CircleMenu**   自定义ViewGroup实现的圆形旋转菜单，支持跟随手指旋转以及快速旋转。    图标请勿商用。
[https://github.com/hongyangAndroid/Android-CircleMenu](https://github.com/hongyangAndroid/Android-CircleMenu)
1. **AndroidPullMenu**  An Android Library that allows users to pull down a menu and select different actions. It can be implemented inside ScrollView, GridView, ListView.            
[https://github.com/ShkurtiA/AndroidPullMenu](https://github.com/ShkurtiA/AndroidPullMenu)
1. **FilterMenu**  An implemention of Filter Menu concept for android          
[https://github.com/linroid/FilterMenu](https://github.com/linroid/FilterMenu)
1. **OverlayMenu** Android Overlay Menu           
[https://github.com/sephiroth74/OverlayMenu](https://github.com/sephiroth74/OverlayMenu)
1. **MultiCardMenu**  A multicard menu that can open and close with animation on android                           
[https://github.com/wujingchao/MultiCardMenu](https://github.com/wujingchao/MultiCardMenu)
1. **DropDownMenu**  DropDownMenu for Android,Filter the list based on multiple condition.                
[https://github.com/JayFang1993/DropDownMenu](https://github.com/JayFang1993/DropDownMenu)
1. **Folder-ResideMenu**  An extension of ResideMenu            
[https://github.com/dkmeteor/Folder-ResideMenu](https://github.com/dkmeteor/Folder-ResideMenu)
1. **SlideBottomPanel**   底部划动菜单，滑动时背景图透明度渐变，支持嵌套 LiewView 或 ScrollView              
[https://github.com/kingideayou/SlideBottomPanel](https://github.com/kingideayou/SlideBottomPanel)
1. **CustomMenu**    CustomMenu quickly realize about the menu                 
[https://github.com/flyfei/CustomMenu](https://github.com/flyfei/CustomMenu)




#### <A NAME="Dialog"></A>Dialog
1. **QustomDialog** a quick custom android dialog project        
[https://github.com/danoz73/QustomDialog](https://github.com/danoz73/QustomDialog)
1. **Android-RateThisApp** Android library to show "Rate this app" dialog   
[https://github.com/kskkbys/Android-RateThisApp](https://github.com/kskkbys/Android-RateThisApp)
1. **AndroidSliderPreference** Android library that allows applications to add dialog-based slider widgets to their settings     
[https://github.com/jayschwa/AndroidSliderPreference](https://github.com/jayschwa/AndroidSliderPreference)
1. **L-Dialogs**  A small library replicating the new dialogs in android L.   
[https://github.com/lewisjdeane/L-Dialogs](https://github.com/lewisjdeane/L-Dialogs)
1. **LicensesDialog** LicensesDialog is an open source library to display licenses of third-party libraries in an Android app.           
[https://github.com/PSDev/LicensesDialog](https://github.com/PSDev/LicensesDialog)
1. **android-styled-dialogs**    A simple library for styling Android dialogs in the Holo theme. It also removes boilerplate code for displaying simple dialogs.     
[https://github.com/inmite/android-styled-dialogs](https://github.com/inmite/android-styled-dialogs)
1. **PostOffice**    This is a library for easily constructing Holo and Material Design Dialogs.     
[https://github.com/r0adkll/PostOffice](https://github.com/r0adkll/PostOffice)
1. **sweet-alert-dialog**  Android版的SweetAlert，清新文艺，快意灵动的甜心弹框     
[https://github.com/pedant/sweet-alert-dialog](https://github.com/pedant/sweet-alert-dialog)
1. **BlurDialogFragment** Library project to display DialogFragment with a blur effect.              
[https://github.com/tvbarthel/BlurDialogFragment](https://github.com/tvbarthel/BlurDialogFragment)
1. **dialogplus** Simple,easy dialog for android                     
[https://github.com/orhanobut/dialogplus](https://github.com/orhanobut/dialogplus)
1. **spots-dialog**  Android AlertDialog with mowing dots progress indicator    
[https://github.com/d-max/spots-dialog](https://github.com/d-max/spots-dialog)




#### <A NAME="ListView/ScrollView"></A>ListView/ScrollView
1. **pinned-section-listview** Easy to use ListView with pinned sections for Android.    
[https://github.com/beworker/pinned-section-listview](https://github.com/beworker/pinned-section-listview)
1. **PullToRefresh-ListView** A generic, customizable, open source Android ListView implementation that has 'Pull to Refresh' functionality.         
[https://github.com/erikwt/PullToRefresh-ListView](https://github.com/erikwt/PullToRefresh-ListView)
1. **FlabbyListView** Android library to display a ListView whose cells are not rigid but flabby and react to ListView scroll.         
[https://github.com/jpardogo/FlabbyListView](https://github.com/jpardogo/FlabbyListView)
1. **XListView-Android** ListView supports pull refresh and pull up to load more feature.     
[https://github.com/Maxwin-z/XListView-Android](https://github.com/Maxwin-z/XListView-Android)
1. **PinterestListView** Pinterest style ListView for Android         
[https://github.com/vladexologija/PinterestListView](https://github.com/vladexologija/PinterestListView)
1. **android-pulltorefresh-and-loadmore**   android custom listview,with interaction pattern load more and pull to refresh to load data dinamically    
[https://github.com/shontauro/android-pulltorefresh-and-loadmore](https://github.com/shontauro/android-pulltorefresh-and-loadmore)
1. **PinnedHeaderListView**  A ListView with pinned section headers for Android   
[https://github.com/JimiSmith/PinnedHeaderListView](https://github.com/JimiSmith/PinnedHeaderListView)
1. **ParallaxScroll**  Parallax ScrollView and ListView for Android         
[https://github.com/nirhart/ParallaxScroll](https://github.com/nirhart/ParallaxScroll)
1. **Android-HorizontalListView** HorizontalListView is an Android ListView widget which scrolls in a horizontal manner (in contrast with the SDK-provided ListView which scrolls vertically).         
[https://github.com/MeetMe/Android-HorizontalListView](https://github.com/MeetMe/Android-HorizontalListView)
1. **LinearListView** Android library that allows you to bind a LinearLayout with a ListAdapter.       
[https://github.com/frankiesardo/LinearListView](https://github.com/frankiesardo/LinearListView)
1. **ParallaxListView**  A Android ListView Demo with a parallax effect header like Path.         
[https://github.com/Gnod/ParallaxListView](https://github.com/Gnod/ParallaxListView)
1. **PagedHeadListView** Android boosted ListView supporting paginated header with a new material page indicator.     
[https://github.com/JorgeCastilloPrz/PagedHeadListView](https://github.com/JorgeCastilloPrz/PagedHeadListView)
1. **PullZoomView** An Android custom ListView and ScrollView with pull to zoom-in.    
[https://github.com/Frank-Zhu/PullZoomView](https://github.com/Frank-Zhu/PullZoomView)
1. **HeaderListView** Android ListView with sticky headers       
[https://github.com/applidium/HeaderListView](https://github.com/applidium/HeaderListView)
1. **ListviewFilter** Awesome Listview filter functionality in Android.     
[https://github.com/bhavyahmehta/ListviewFilter](https://github.com/bhavyahmehta/ListviewFilter)
1. **android-accordion-view** Simple ListView based Android AccordionView    
[https://github.com/hamsterready/android-accordion-view](https://github.com/hamsterready/android-accordion-view)
1. **DragNDropList** An easy to use Drag & Drop List for Android. Direct replacement of the android ListView.     
[https://github.com/terlici/DragNDropList](https://github.com/terlici/DragNDropList)
1. **QuickReturn** Android ListView that implements the QuickReturn UI pattern. Written from scratch with focus on performance.     
[https://github.com/felipecsl/QuickReturn](https://github.com/felipecsl/QuickReturn)
1. **Android-HorizontalListView**  HorizontalListView is an Android ListView widget which scrolls in a horizontal manner       
[https://github.com/MeetMe/Android-HorizontalListView](https://github.com/MeetMe/Android-HorizontalListView)
1. **ZrcListView**  一个顺滑又漂亮的Android下拉刷新与加载更多列表组件。    
[https://github.com/zarics/ZrcListView](https://github.com/zarics/ZrcListView)
1. **android-swipelistview**   An Android List View implementation with support for drawable cells and many other swipe related features        
[https://github.com/47deg/android-swipelistview](https://github.com/47deg/android-swipelistview)  
1. **android-pulltorefresh**    This project aims to provide a reusable pull to refresh widget for Android.     
[https://github.com/johannilsson/android-pulltorefresh](https://github.com/johannilsson/android-pulltorefresh)
1. **StickyListHeaders**    An android library for section headers that stick to the top       
[https://github.com/emilsjolander/StickyListHeaders](https://github.com/emilsjolander/StickyListHeaders)
1. **LazyList**  Lazy load of images in Android        
[https://github.com/thest1/LazyList](https://github.com/thest1/LazyList)   
1. **FloatingGroupExpandableListView** An open source Android library that provides a floating group view at the top of the ExpandableListView       
[https://github.com/diegocarloslima/FloatingGroupExpandableListView](https://github.com/diegocarloslima/FloatingGroupExpandableListView)
1. **PullSeparateListView** 到顶部或底部时拉动，item分离效果    
[https://github.com/chiemy/PullSeparateListView](https://github.com/chiemy/PullSeparateListView)
1. **Android-SlideExpandableListView**    A better ExpandableListView, with animated expandable views for each list item          
[https://github.com/tjerkw/Android-SlideExpandableListView](https://github.com/tjerkw/Android-SlideExpandableListView)
1. **HorizontalVariableListView** Horizontal list view for Android which allows variable items widths          
[https://github.com/sephiroth74/HorizontalVariableListView](https://github.com/sephiroth74/HorizontalVariableListView)
1. **ListBuddies** Android library to achieve in an easy way, the behaviour of the home page in the Expedia app, with a pair of auto-scroll circular parallax ListViews.     
[https://github.com/jpardogo/ListBuddies](https://github.com/jpardogo/ListBuddies)
1. **Android-Tiling-ScrollView** A tiling scrollview to display large picture (similar to iOS "CATiledLayer")       
[https://github.com/ened/Android-Tiling-ScrollView](https://github.com/ened/Android-Tiling-ScrollView)
1. **PullScrollView** 1.仿照新浪微博Android客户端个人中心的ScrollView，下拉背景伸缩回弹效果。 2.ScrollView仿IOS回弹效果。     
[https://github.com/MarkMjw/PullScrollView](https://github.com/MarkMjw/PullScrollView)
1. **StickyScrollViewItems** A small android library for tagging views inside a ScrollView as "sticky" making them stick to the top of the scroll container until a new sticky view comes and takes it's place         
[https://github.com/emilsjolander/StickyScrollViewItems](https://github.com/emilsjolander/StickyScrollViewItems)
1. **Discrollview**  Scroll + discover = DiscrollView      
[https://github.com/flavienlaurent/discrollview](https://github.com/flavienlaurent/discrollview)
1. **SwipeMenuListView**   SwipeMenuListView            
[https://github.com/baoyongzhang/SwipeMenuListView](https://github.com/baoyongzhang/SwipeMenuListView)
1. **Android-ObservableScrollView** Android library to observe scroll events on scrollable views.        
[https://github.com/ksoichiro/Android-ObservableScrollView](https://github.com/ksoichiro/Android-ObservableScrollView)
1. **Pull-to-Refresh.Rentals-Android**  This project aims to provide a simple and customizable pull to refresh implementation. Made in Yalantis        
[https://github.com/Yalantis/Pull-to-Refresh.Rentals-Android](https://github.com/Yalantis/Pull-to-Refresh.Rentals-Android)
1. **StikkyHeader**   This is a very simple library for Android that allows you to stick an header to a scrollable view and easly apply animation to it         
[https://github.com/carlonzo/StikkyHeader](https://github.com/carlonzo/StikkyHeader)     
1. **quickscroll**    Bringing extended scrolling features to Android's native ListView and ExpandableListView.       
[https://github.com/andraskindler/quickscroll](https://github.com/andraskindler/quickscroll)
1. **FilterSelectorListView**   FilterSelectorListView is useful for making multiple selection with see selection on the top of ListView.           
[https://github.com/pchauhan/FilterSelectorListView](https://github.com/pchauhan/FilterSelectorListView)






#### <A NAME="GridView"></A>GridView
1. **two-way-gridview** An Android GridView that can be configured to scroll horizontally or vertically         
[https://github.com/jess-anders/two-way-gridview](https://github.com/jess-anders/two-way-gridview)
1. **AsymmetricGridView** Android ListView that mimics a GridView with asymmetric items. Supports items with row span and column span     
[https://github.com/felipecsl/AsymmetricGridView](https://github.com/felipecsl/AsymmetricGridView)
1. **AndroidCoolDragAndDropGridView** An example of a gridview with various column span items and drag and drop support like Google keep has     
[https://github.com/theredsunrise/AndroidCoolDragAndDropGridView](https://github.com/theredsunrise/AndroidCoolDragAndDropGridView)
1. **GridViewHeader**  Android GridView with addHeader( View view ) function   
[https://github.com/munix/GridViewHeader](https://github.com/munix/GridViewHeader)
1. **DynamicGrid**     Drag and drop GridView for Android      
[https://github.com/askerov/DynamicGrid](https://github.com/askerov/DynamicGrid)
1. **PagingGridView** A Paging GridView with the same behavior as PagingListView.         
[https://github.com/nicolasjafelle/PagingGridView](https://github.com/nicolasjafelle/PagingGridView)
1. **DraggableGridView**  A drag-and-drop scrolling grid view for Android      
[https://github.com/thquinn/DraggableGridView](https://github.com/thquinn/DraggableGridView)
1. **AndroidStaggeredGrid**    An Android staggered grid view which supports multiple columns with rows of varying sizes.      
[https://github.com/etsy/AndroidStaggeredGrid](https://github.com/etsy/AndroidStaggeredGrid)
1. **StaggeredGridView**  A modified version of Android's experimental StaggeredGridView. Includes own OnItemClickListener and OnItemLongClickListener, selector, and fixed position restore.      
[https://github.com/maurycyw/StaggeredGridView](https://github.com/maurycyw/StaggeredGridView)
1. **android-GridViewWithHeaderAndFooter**  GridView with Header and Footer    
[https://github.com/liaohuqiu/android-GridViewWithHeaderAndFooter](https://github.com/liaohuqiu/android-GridViewWithHeaderAndFooter)
1. **DragExpandGrid**   可展开，可拖动，可排序，可删除，固定更多的GridView     
[https://github.com/wedcel/DragExpandGrid](https://github.com/wedcel/DragExpandGrid)




#### <A NAME="RatingView"></A>RatingView
1. **SimpleRatingView**  A rating toggle for Android which switches between 3 rating levels: positive, neutral, and negative.           
[https://github.com/xiprox/SimpleRatingView](https://github.com/xiprox/SimpleRatingView)


#### <A NAME="Recyclerview"></A>Recyclerview
1. **recyclerview-animators**  An Android library which easily add itemanimator to RecyclerView items.              
[https://github.com/wasabeef/recyclerview-animators](https://github.com/wasabeef/recyclerview-animators)
1. **SuperRecyclerView**  Pumped up RecyclerView             
[https://github.com/Malinskiy/SuperRecyclerView](https://github.com/Malinskiy/SuperRecyclerView)
1. **DynamicRecyclerView**  Set of plugable extenstions for Android RecyclerView            
[https://github.com/ismoli/DynamicRecyclerView](https://github.com/ismoli/DynamicRecyclerView)
1. **android-advancedrecyclerview**  RecyclerView extension library which provides advanced features. (ex. Google's Inbox app like swiping, Play Music app like drag and drop sorting)                            
[https://github.com/h6ah4i/android-advancedrecyclerview](https://github.com/h6ah4i/android-advancedrecyclerview)
1. **UltimateRecyclerView** A RecyclerView(advanced and flexible version of ListView) with refreshing,loading more,animation and many other features.    
[https://github.com/cymcsg/UltimateRecyclerView](https://github.com/cymcsg/UltimateRecyclerView)
1. **RecyclerView-FlexibleDivider**  Android library providing simple way to control divider items of RecyclerView                                      
[https://github.com/yqritc/RecyclerView-FlexibleDivider](https://github.com/yqritc/RecyclerView-FlexibleDivider)
1. **RecyclerView-MultipleViewTypesAdapter**  Android library defining adapter classes of RecyclerView to manage multiple view types                                      
[https://github.com/yqritc/RecyclerView-MultipleViewTypesAdapter](https://github.com/yqritc/RecyclerView-MultipleViewTypesAdapter)
1. **header-decor**  A couple of sticky header decorations for android's recycler view.                
[https://github.com/edubarr/header-decor](https://github.com/edubarr/header-decor)
1. **SectionedRecyclerView** An adapter to create Android RecyclerViews with sections, providing headers and footers.               
[https://github.com/truizlop/SectionedRecyclerView](https://github.com/truizlop/SectionedRecyclerView)
1. **RecyclerViewHeader** Super fast and easy way to create header for Android RecyclerView                 
[https://github.com/blipinsk/RecyclerViewHeader](https://github.com/blipinsk/RecyclerViewHeader)
1.  **sticky-headers-recyclerview** This decorator allows you to easily create section headers for RecyclerViews using a LinearLayoutManager in either vertical or horizontal orientation.     
[https://github.com/timehop/sticky-headers-recyclerview](https://github.com/timehop/sticky-headers-recyclerview)
1. **RecyclerItemDecoration**  ItemDecoration for RecyclerView using LinearLayoutManager
[https://github.com/magiepooh/RecyclerItemDecoration](https://github.com/magiepooh/RecyclerItemDecoration)
1. **Dividers**   Dividers is a simple Android library to create easy separators for your RecyclerViews           
[https://github.com/Karumi/Dividers](https://github.com/Karumi/Dividers)
1. **recyclerview-binder**   Android Library for RecyclerView to manage order of items and multiple view types.          
[https://github.com/satorufujiwara/recyclerview-binder)


#### <A NAME="SearchView"></A>SearchView
1. **MaterialSearchView** Cute library to implement SearchView in a Material Design Approach http://miguelcatalan.info/2015/09/23/MaterialSearchView/            
[https://github.com/MiguelCatalan/MaterialSearchView](https://github.com/MiguelCatalan/MaterialSearchView)

#### <A NAME="ViewPager"></A>ViewPager
1. **Android-ViewPagerIndicator**  Paging indicator widgets compatible with the ViewPager from the Android Support Library and ActionBarSherlock. Originally based on Patrik Åkerfeldt's ViewFlow.      
[https://github.com/JakeWharton/Android-ViewPagerIndicator](https://github.com/JakeWharton/Android-ViewPagerIndicator)
1. **ViewPagerExtensions** A set of custom views for the ViewPager from the Android Support Package          
[https://github.com/astuetz/ViewPagerExtensions](https://github.com/astuetz/ViewPagerExtensions)
1. **parallaxviewpager** An easy-to-use ViewPager subclass with parallax background effect for Android apps.         
[https://github.com/andraskindler/parallaxviewpager](https://github.com/andraskindler/parallaxviewpager)
1. **android-auto-scroll-view-pager** Android auto scroll viewpager or viewpager in viewpager           
[https://github.com/Trinea/android-auto-scroll-view-pager](https://github.com/Trinea/android-auto-scroll-view-pager)
1. **NumericPageIndicator** Android - A ViewPager page indicator that displays the current page number and (optionally) the page count           
[https://github.com/ManuelPeinado/NumericPageIndicator](https://github.com/ManuelPeinado/NumericPageIndicator)
1. **VerticalViewPager** Vertical implementation of Android ViewPager     
[https://github.com/LambergaR/VerticalViewPager](https://github.com/LambergaR/VerticalViewPager)
1. **InfiniteViewPager** Augment Android's ViewPager with wrap-around functionality.        
[https://github.com/antonyt/InfiniteViewPager](https://github.com/antonyt/InfiniteViewPager)
1. **ViewPager3D** Extension of Android ViewPager with a 3D swipe effect      
[https://github.com/inovex/ViewPager3D](https://github.com/inovex/ViewPager3D)
1. **LoopingViewPager** An android ViewPager extension allowing infinite scrolling        
[https://github.com/imbryk/LoopingViewPager](https://github.com/imbryk/LoopingViewPager)
1. **SpringIndicator**  A spring indicator like Morning Routine guide.        
[https://github.com/chenupt/SpringIndicator](https://github.com/chenupt/SpringIndicator)
1. **SpinningTabStrip** SpinningTabStrip & SpinningViewPager are android extensions allowing infinite scrolling.             
[https://github.com/eccyan/SpinningTabStrip](https://github.com/eccyan/SpinningTabStrip)
1. **Android-ScreenSlidePager**  Full screen slide pager to display images fetched from Internet by Picasso               
[https://github.com/LyndonChin/Android-ScreenSlidePager](https://github.com/LyndonChin/Android-ScreenSlidePager)
1. **RecyclerViewPager**   A ViewPager implemention base on RecyclerView's code. Support fling operation like gallary.            
[https://github.com/lsjwzh/RecyclerViewPager](https://github.com/lsjwzh/RecyclerViewPager)
1. **MultiViewPager**  The MultiViewPager is an extension of the support-v4 library's ViewPager that allows the pages to be wider or narrower than the ViewPager itself. It takes care of aligning the pages next to each other, and always keeping the selected page centered.           
[https://github.com/Pixplicity/MultiViewPager](https://github.com/Pixplicity/MultiViewPager)
1. **HollyViewPager**   HollyViewPager             
[https://github.com/florent37/HollyViewPager](https://github.com/florent37/HollyViewPager)
1. **SCViewPager**    A simple ViewPager extends that provide scroll based animation like Jazz Hands for iOS. Jazz Hands library provided by IFTTT : https://github.com/IFTTT/JazzHands               
[https://github.com/sacot41/SCViewPager](https://github.com/sacot41/SCViewPager)



#### <A NAME="ActionBar"></A>ActionBar
1. **ActionBarSherlock**   Action bar implementation which uses the native action bar on Android 4.0+ and a custom implementation on pre-4.0 through a single API and theme.     
[https://github.com/JakeWharton/ActionBarSherlock](https://github.com/JakeWharton/ActionBarSherlock)
1. **TabBarView**  An Android Library to help you create actionbar tabs like "Capitaine train" app by Cyril Mottier     
[https://github.com/Mirkoddd/TabBarView](https://github.com/Mirkoddd/TabBarView)
1. **android-extendedactionbar**  An example of how to extend the ActionBar under the status bar from the theme         
[https://github.com/Takhion/android-extendedactionbar](https://github.com/Takhion/android-extendedactionbar)
1. **FadingActionBar**    Android library implementing a fading effect for the action bar, similar to the one found in the Play Music app      
[https://github.com/ManuelPeinado/FadingActionBar](https://github.com/ManuelPeinado/FadingActionBar)
1. **GlassActionBar**    Android - a library that adds a glass-like effect to the action bar.    
[https://github.com/ManuelPeinado/GlassActionBar](https://github.com/ManuelPeinado/GlassActionBar) 


#### <A NAME="Fragment"></A>Fragment
1. **Android-CircularRevealFragment**  A demo about how to show and hide fragments using the new Android Lollipop circle reveal transitions.   Minimum API level is 21       
[https://github.com/ferdy182/Android-CircularRevealFragment](https://github.com/ferdy182/Android-CircularRevealFragment)
1. **StatedFragment**  The library is documented in http://inthecheesefactory.com/blog/best-approach-to-keep-android-fragment-state/en              
[https://github.com/nuuneoi/StatedFragment](https://github.com/nuuneoi/StatedFragment)
1. **EtsyBlur**  EtsyBlur is an Android library that allows developers to easily add a glass-like effect implemented in the Etsy app.               
[https://github.com/Manabu-GT/EtsyBlur](https://github.com/Manabu-GT/EtsyBlur)



#### <A NAME="Activity"></A>Activity
1. **CustomActivityOnCrash** Android library that allows launching a custom activity when your app crashes, instead of showing the hated "Unfortunately, X has stopped" dialog.          
[https://github.com/Ereza/CustomActivityOnCrashhttps://github.com/Ereza/CustomActivityOnCrash](https://github.com/Ereza/CustomActivityOnCrashhttps://github.com/Ereza/CustomActivityOnCrash)
1. **android-slidingactivity**      Android library which allows you to swipe down from an activity to close it.         
[https://github.com/klinker41/android-slidingactivity](https://github.com/klinker41/android-slidingactivity)


#### <A NAME="Tabs"></A>Tabs








#### <A NAME="Toast"></A>Toast
1. **Crouton**      Context sensitive notifications for Android      
[https://github.com/keyboardsurfer/Crouton](https://github.com/keyboardsurfer/Crouton)  
1. **SuperToasts** A library that extends the Android toast framework.    
[https://github.com/JohnPersano/SuperToasts](https://github.com/JohnPersano/SuperToasts) 
1. **Android-AppMsg**   In-layout notifications. Based on Toast notifications and article by Cyril Mottier      
[https://github.com/johnkil/Android-AppMsg](https://github.com/johnkil/Android-AppMsg)
1. **MessageBar** An Android Toast replacement, similar to the one seen in the GMail app.      
[https://github.com/SimonVT/MessageBar](https://github.com/SimonVT/MessageBar)
1. **SnackBar**  toast-like alert pattern for Android        
[https://github.com/MrEngineer13/SnackBar](https://github.com/MrEngineer13/SnackBar)

1. **loadtoast**  Pretty material design toasts with feedback animations     
[https://github.com/code-mc/loadtoast](https://github.com/code-mc/loadtoast)

#### <A NAME="SeekBar"></A>SeekBar
1. **HoloCircleSeekBar**     A Circle SeekBar inspired by Android Holo ColorPicker designed by Marie Schweiz and developed by Lars Werkman.     
[https://github.com/JesusM/HoloCircleSeekBar](https://github.com/JesusM/HoloCircleSeekBar)
1. **AndroidCircularSeekBar** A circular seek bar for Android        
[https://github.com/RaghavSood/AndroidCircularSeekBar](https://github.com/RaghavSood/AndroidCircularSeekBar)
1. **circularseekbar** Custom circular SeekBar (Circle, Semi-circle, and Ellipse) View/Widget for Android        
[https://github.com/devadvance/circularseekbar](https://github.com/devadvance/circularseekbar)
1. **StartPointSeekBar** StartPointSeekBar is a custom view for the Android platform that makes it possible to have a SeekBar to have custom start point.   
[https://github.com/vashisthg/StartPointSeekBar](https://github.com/vashisthg/StartPointSeekBar)
1. **SeekArc** Circular SeekBar view for Android             
[https://github.com/TriggerTrap/SeekArc](https://github.com/TriggerTrap/SeekArc)
1. **discreteSeekBar**    DiscreteSeekbar is my poor attempt to develop an android implementation of the Discrete Slider component from the Google Material Design Guidelines.           
[https://github.com/AnderWeb/discreteSeekBar](https://github.com/AnderWeb/discreteSeekBar)
1. **android-comboseekbar**  seekbar with distinct values                  
[https://github.com/karabaralex/android-comboseekbar](https://github.com/karabaralex/android-comboseekbar)
1. **RangeSeekbar** A seekbar contains two cursor(left and right). Multiple touch supported.          
[https://github.com/dolphinwang/RangeSeekbar](https://github.com/dolphinwang/RangeSeekbar)
1. **SeekBarCompat** A material based support library to bring consistent SeekBars in Android for API 16 and above.         
[https://github.com/ahmedrizwan/SeekBarCompat](https://github.com/ahmedrizwan/SeekBarCompat)


#### <A NAME="Time_View"></A>Time View
1. **Caldroid**  Caldroid is a fragment that display calendar with dates in a month. Caldroid can be used as embedded fragment, or as dialog fragment. User can also swipe left/right to navigate to different months.    
[https://github.com/roomorama/Caldroid](https://github.com/roomorama/Caldroid) 
1. **android-times-square**  Standalone Android widget for picking a single date from a calendar view.       
[https://github.com/square/android-times-square](https://github.com/square/android-times-square)
1. **calendar-widget**      The Android calendar widget is home screen widget for your Android device. It displays a list of upcoming calendar events so that you can easily have a glimpse at your upcoming appointments.       
[https://github.com/plusonelabs/calendar-widget](https://github.com/plusonelabs/calendar-widget)
1. **android-spinnerwheel**     Wheel-like spinner widget for Android     
[https://github.com/ai212983/android-spinnerwheel](https://github.com/ai212983/android-spinnerwheel)
1. **Android-MonthCalendarWidget**    A simple example of a responsive Month Calendar app widget for Android      
[https://github.com/romannurik/Android-MonthCalendarWidget](https://github.com/romannurik/Android-MonthCalendarWidget)
1. **android-betterpickers**  Android library for better Picker DialogFragments   
[https://github.com/derekbrameyer/android-betterpickers](https://github.com/derekbrameyer/android-betterpickers)
1. **android-calendar-card** Android calendar view (like card)           
[https://github.com/kenumir/android-calendar-card](https://github.com/kenumir/android-calendar-card)
1. **DateSlider**  An alternative DatePicker for Android       
[https://github.com/bendemboski/DateSlider](https://github.com/bendemboski/DateSlider)
1. **Android-Week-View** Android Week View is an android library to display calendars (week view or day view) within the app. It supports custom styling.      
[https://github.com/alamkanak/Android-Week-View](https://github.com/alamkanak/Android-Week-View)
1. **SilkCal**  Android calendar view inspired by Sunrise calendar and iOS7 stock calendar            
[https://github.com/NLMartian/SilkCal](https://github.com/NLMartian/SilkCal)
1. **TimeRangePicker** TimeRangePicker is a library which can be used to select a time range.         
[https://github.com/tittojose/TimeRangePicker](https://github.com/tittojose/TimeRangePicker)
1. **MaterialDateTimePicker** Pick a date or time on Android in style          
[https://github.com/wdullaer/MaterialDateTimePicker](https://github.com/wdullaer/MaterialDateTimePicker)
1. **TimerView** an android open source timer           
[https://github.com/pheynix/TimerView](https://github.com/pheynix/TimerView)
1. **MaterialDateRangePicker**  A material Date Range Picker based on wdullaers MaterialDateTimePicker                
[https://github.com/borax12/MaterialDateRangePicker](https://github.com/borax12/MaterialDateRangePicker)



#### <A NAME="Layout"></A>Layout
1. **FoldableLayout**      Android widgets to implement folding animation      
[https://github.com/alexvasilkov/FoldableLayout](https://github.com/alexvasilkov/FoldableLayout)
1. **ScalableLayout** Scalable Layout For Android         
[https://github.com/ssomai/ScalableLayout](https://github.com/ssomai/ScalableLayout)
1. **FlipLayout** Android Flip 3D Animation like web Google+       
[https://github.com/stormzhang/FlipLayout](https://github.com/stormzhang/FlipLayout)
1. **FlowLayout** Android implementation of FlowLayout. Layout arranges its children in multiple rows depending on their width.      
[https://github.com/blazsolar/FlowLayout](https://github.com/blazsolar/FlowLayout) 
1. **CircleLayout** Circular layout for android          
[https://github.com/dmitry-zaitsev/CircleLayout](https://github.com/dmitry-zaitsev/CircleLayout)
1. **ResideLayout** An Android Layout which has a same function like https://github.com/romaonthego/RESideMenu         
[https://github.com/kyze8439690/ResideLayout](https://github.com/kyze8439690/ResideLayout)
1. **GooglePlusLayout**  GoolgePlusLayout is a custom layout that plays animation on the children views while scrolling as the layout in the Google Plus (android) main page        
[https://github.com/Nammari/GooglePlusLayout](https://github.com/Nammari/GooglePlusLayout)
1. **android-empty-layout** A library for showing different types of layouts when a list view is empty      
[https://github.com/alamkanak/android-empty-layout](https://github.com/alamkanak/android-empty-layout)
1. **ImageLayout** Android - A layout that arranges its children in relation to a background image            
[https://github.com/ManuelPeinado/ImageLayout](https://github.com/ManuelPeinado/ImageLayout)
1. **android-flowlayout** Linear layout, that wrap its content to the next line if there is no space in the current line.       
[https://github.com/ApmeM/android-flowlayout](https://github.com/ApmeM/android-flowlayout)
1. **AndroidSwipeLayout** The Most Powerful Swipe Layout!        
[https://github.com/daimajia/AndroidSwipeLayout](https://github.com/daimajia/AndroidSwipeLayout)
1. **FreeFlow**  A layout engine for Android that decouples layouts from the View containers that manage scrolling and view recycling. FreeFlow makes it really easy to create custom layouts and beautiful transition animations as data and layouts change             
[https://github.com/Comcast/FreeFlow](https://github.com/Comcast/FreeFlow)
1. **SwipeableLayout** A swipeable - auto resizing view group for android     
[https://github.com/wmbest2/SwipeableLayout](https://github.com/wmbest2/SwipeableLayout)
1. **SwipeBackLayout**   An Android library that help you to build app with swipe back gesture.      
[https://github.com/Issacw0ng/SwipeBackLayout](https://github.com/Issacw0ng/SwipeBackLayout)
1. **android_maskable_layout**  A library that easily allows you to mask layouts/viewgroups      
[https://github.com/christophesmet/android_maskable_layout](https://github.com/christophesmet/android_maskable_layout)
1. **android-gridlayout** A backwards compatible implementation of GridLayout for Android     
[https://github.com/dlew/android-gridlayout](https://github.com/dlew/android-gridlayout)
1. **DragLayout** An Android Project       
[https://github.com/BlueMor/DragLayout](https://github.com/BlueMor/DragLayout)
1. **ExpandableLayout**  Implementation of ExpandableListview with custom header and custom content.        
[https://github.com/traex/ExpandableLayout](https://github.com/traex/ExpandableLayout)
1. **android-PullRefreshLayout**  This component like SwipeRefreshLayout, it is more beautiful than SwipeRefreshLayout.           
[https://github.com/baoyongzhang/android-PullRefreshLayout](https://github.com/baoyongzhang/android-PullRefreshLayout)
1. **DragTopLayout** Drag down to show a view on the top.              
[https://github.com/chenupt/DragTopLayout](https://github.com/chenupt/DragTopLayout)
1. **shadow-layout**  Android Shadow Layout          
[https://github.com/dmytrodanylyk/shadow-layout](https://github.com/dmytrodanylyk/shadow-layout)
1. **SmartTabLayout**  A custom ViewPager title strip which gives continuous feedback to the user when scrolling             
[https://github.com/ogaclejapan/SmartTabLayout](https://github.com/ogaclejapan/SmartTabLayout)
1. **ArcLayout**  A very simple arc layout library             
[https://github.com/ogaclejapan/ArcLayout](https://github.com/ogaclejapan/ArcLayout)
1. **Scrollable**  Android scrollable tabs              
[https://github.com/noties/Scrollable](https://github.com/noties/Scrollable)
1. **RearrangeableLayout** An android layout to re-arrange child views via dragging             
[https://github.com/rajasharan/RearrangeableLayout](https://github.com/rajasharan/RearrangeableLayout)
1. **BGAFlowLayout** Android流式布局，可配置是否将每一行的空白区域平均分配给子控件。            
[https://github.com/bingoogolapple/BGAFlowLayout-Android](https://github.com/bingoogolapple/BGAFlowLayout-Android)
1. **JellyRefreshLayout** A pull-down-to-refresh layout inspired by Lollipop overscrolled effects                   
[https://github.com/allan1st/JellyRefreshLayout](https://github.com/allan1st/JellyRefreshLayout)
1. **Dragger** The library was created in order to provide new animations for activities on Android. 
[https://github.com/ppamorim/Dragger](https://github.com/ppamorim/Dragger)
1. **PrismView** PrismView provides animations for your views, similar to Dragger, but with fragments! You can change the fragment of the PrismView any time.                
[https://github.com/ppamorim/PrismView](https://github.com/ppamorim/PrismView)
1. **BeerSwipeRefresh**  This project aims to provide a reusable Swipe to Refresh widget for Android.              
[https://github.com/recruit-lifestyle/BeerSwipeRefresh](https://github.com/recruit-lifestyle/BeerSwipeRefresh)
1. **SuperSwipeRefreshLayout** A Custom SwipeRefreshLayout          
[https://github.com/nuptboyzhb/SuperSwipeRefreshLayout](https://github.com/nuptboyzhb/SuperSwipeRefreshLayout)
1. **Android-RatioLayout**  This is a specified proportion to the size of the Layout or View support library, with which you can easily set a fixed ratio of the size of the Layout or View, internal adaptive size calculation, completely abandon the code to calculate the size! If you have any questions in the course or suggestions, please send an e-mail to the following e-mail, thank you!           
[https://github.com/devsoulwolf/Android-RatioLayout](https://github.com/devsoulwolf/Android-RatioLayout)
1. **AndroidAutoHideHeader**  A layout that hide the header when the body is scrolled down and reveal it when the header is scrolled up                     
[https://github.com/vcaen/AndroidAutoHideHeader](https://github.com/vcaen/AndroidAutoHideHeader)
1. **PhysicsLayout**  Android layout that simulates physics using JBox2D       
[https://github.com/Jawnnypoo/PhysicsLayout](https://github.com/Jawnnypoo/PhysicsLayout)
1. **FabTransitionLayout**  Provides the Floating Action Button Transition as specified in the Material Design Guide in a simple library.            
[https://github.com/bowyer-app/FabTransitionLayout](https://github.com/bowyer-app/FabTransitionLayout)
1. **Android-MaterialDeleteLayout**  Maetrial Design Delete Concept Implement             
[https://github.com/android-cjj/Android-MaterialDeleteLayout](https://github.com/android-cjj/Android-MaterialDeleteLayout)
1. **smooth-app-bar-layout**   Smooth version of Google Support Design AppBarLayout               
[https://github.com/henrytao-me/smooth-app-bar-layout](https://github.com/henrytao-me/smooth-app-bar-layout)



#### <A NAME="Toolbar"></A>Toolbar
1. **CollapsingAvatarToolbar**  Collapsing Toolbar with a moving avatar for Android.             
[https://github.com/Sloy/CollapsingAvatarToolbar](https://github.com/Sloy/CollapsingAvatarToolbar)


#### <A NAME="VideoView"></A>VideoView
1. **video-crop**  Android Video Crop                
[https://github.com/dmytrodanylyk/video-crop](https://github.com/dmytrodanylyk/video-crop)
1. **Android-ScalableVideoView** Android Texture VideoView having a variety of scale types like the scale types of ImageView such as fitCenter, centerCrop, centerTopCrop and more           
[https://github.com/yqritc/Android-ScalableVideoView](https://github.com/yqritc/Android-ScalableVideoView)


#### <A NAME="Mapview"></A>Mapview
1. **AirMapView**  A view abstraction to provide a map user interface with various underlying map providers          
[https://github.com/airbnb/AirMapView](https://github.com/airbnb/AirMapView)
2. **Google Maps Android API utility library** This open-source library contains classes that are useful for a wide range of applications using the Google Maps Android API.    
[https://github.com/googlemaps/android-maps-utils](https://github.com/googlemaps/android-maps-utils)


#### <A NAME="Choreographer"></A>Choreographer
1. **Takt**  Takt is Android library for measuring the FPS using Choreographer.      
[https://github.com/wasabeef/Takt](https://github.com/wasabeef/Takt)




#### <A NAME="Other"></A>Other
1. **Swipecards** A Tinder-like Android library to create the swipe cards effect. You can swipe left or right to like or dislike the content.       
[https://github.com/Diolor/Swipecards](https://github.com/Diolor/Swipecards)
1. **Android SlideShow Widget**  A set of widgets to create smooth slide shows with ease.       
[https://github.com/marvinlabs/android-slideshow-widget](https://github.com/marvinlabs/android-slideshow-widget)
1. **AndroidWheel**   Custom wheel widget for android     
[https://github.com/sephiroth74/AndroidWheel](https://github.com/sephiroth74/AndroidWheel)
1. **range-bar**     Android widget for selecting a range of values.       
[https://github.com/edmodo/range-bar](https://github.com/edmodo/range-bar)
1. **TileView** The TileView widget is a subclass of ViewGroup that provides a mechanism to asynchronously display tile-based images, with additional functionality for 2D dragging, flinging, pinch or double-tap to zoom, adding overlaying Views (markers), built-in Hot Spot support, dynamic path drawing, multiple levels of detail, and support for any relative positioning or coordinate system.       
[https://github.com/moagrius/TileView](https://github.com/moagrius/TileView)
1. **android-switch-backport**     A backport of the Switch widget (http://developer.android.com/reference/android/widget/Switch.html) that was introduced on Android 4. This port works on Android 2.1+.      
[https://github.com/BoD/android-switch-backport](https://github.com/BoD/android-switch-backport) 
1. **material-animated-switch**  A material Switch with icon animations and color transitions          
[https://github.com/glomadrian/material-animated-switch](https://github.com/glomadrian/material-animated-switch)    
1. **android-bootstrap**    A template/bootstrap/boilerplate application that includes tons of great open source tools and frameworks.        
[https://github.com/AndroidBootstrap/android-bootstrap](https://github.com/AndroidBootstrap/android-bootstrap)  
1. **cardslib**  Android Library to build a UI Card    
[https://github.com/gabrielemariotti/cardslib](https://github.com/gabrielemariotti/cardslib)  
1. **AndroidSlidingUpPanel**  Android Sliding Up Panel Demo      
[https://github.com/umano/AndroidSlidingUpPanel](https://github.com/umano/AndroidSlidingUpPanel)
1. **android-viewflow** A horizontal view scroller library for Android    
[https://github.com/pakerfeldt/android-viewflow](https://github.com/pakerfeldt/android-viewflow)  
1. **android-viewbadger**  A simple way to "badge" any given Android view at runtime without having to cater for it in layout      
[https://github.com/jgilfelt/android-viewbadger](https://github.com/jgilfelt/android-viewbadger)
1. **DraggablePanel**  Android library used to create an awesome Android UI based on a draggable element similar to the last YouTube graphic component.   
[https://github.com/pedrovgs/DraggablePanel](https://github.com/pedrovgs/DraggablePanel)
1. **android-stackblur** Android StackBlur is a library that can perform a blurry effect on a Bitmap based on a gradient or radius, and return the result. The library is based on the code of Mario Klingemann.        
[https://github.com/kikoso/android-stackblur](https://github.com/kikoso/android-stackblur)
1. **StickyGridHeaders** An Android Library that makes it easy to make grid views with sectioned data and headers that stick to the top.     
[https://github.com/TonicArtos/StickyGridHeaders](https://github.com/TonicArtos/StickyGridHeaders)  
1. **AndroidViewHover** An elegant way to show your menu or messages.      
[https://github.com/daimajia/AndroidViewHover](https://github.com/daimajia/AndroidViewHover)
1. **SystemBarTint** Apply background tinting to the Android system UI when using KitKat translucent modes     
[https://github.com/jgilfelt/SystemBarTint](https://github.com/jgilfelt/SystemBarTint)
1. **chromeview**  Android WebView implementation that uses the latest Chromium code      
[https://github.com/pwnall/chromeview](https://github.com/pwnall/chromeview)
1. **android-iconify** Integration of FontAwesome for Android      
[https://github.com/JoanZapata/android-iconify](https://github.com/JoanZapata/android-iconify)
1. **StandOut**  StandOut lets you easily create floating windows in your Android app.     
[https://github.com/pingpongboss/StandOut](https://github.com/pingpongboss/StandOut)
1. **android-sliding-layer-lib**  This repository host a library that provides an easy way to include an autonomous layer/view that slides from the side of your screen and which is fully gesture ready, the same way as our detail view in Wunderlist 2 does. This pattern can also be seen in Google+’s notification center or in Basecamp’s detail view.      
[https://github.com/6wunderkinder/android-sliding-layer-lib](https://github.com/6wunderkinder/android-sliding-layer-lib)
1. **Android-SwipeToDismiss** Android swipe-to-dismiss mini-library and sample code     
[https://github.com/romannurik/Android-SwipeToDismiss](https://github.com/romannurik/Android-SwipeToDismiss)
1. **HoloColorPicker** An Android Holo themed colorpicker designed by Marie Schweiz     
[https://github.com/LarsWerkman/HoloColorPicker](https://github.com/LarsWerkman/HoloColorPicker)
1. **UnifiedPreference** UnifiedPreference is a library for working with all versions of the Android Preference package from API v4 and up.         
[https://github.com/saik0/UnifiedPreference](https://github.com/saik0/UnifiedPreference)
1. **aFileChooser** Android library that provides a file explorer to let users select files on external storage.      
[https://github.com/iPaulPro/aFileChooser](https://github.com/iPaulPro/aFileChooser)
1. **NewQuickAction**   Android QuickAction             
[https://github.com/lorensiuswlt/NewQuickAction](https://github.com/lorensiuswlt/NewQuickAction)
1. **android-uitableview** Library and example project on how to use the UITableView component     
[https://github.com/thiagolocatelli/android-uitableview](https://github.com/thiagolocatelli/android-uitableview)
1. **Android-ProgressFragment**   Implementation of the fragment with the ability to display indeterminate progress indicator when you are waiting for the initial data.     
[https://github.com/johnkil/Android-ProgressFragment](https://github.com/johnkil/Android-ProgressFragment)
1. **android-pdfview** A fast PDF reader component for Android development    
[https://github.com/JoanZapata/android-pdfview](https://github.com/JoanZapata/android-pdfview)
1. **Android-Pdf-Viewer-Library**  Pdf Viewer library for Android         
[https://github.com/jblough/Android-Pdf-Viewer-Library](https://github.com/jblough/Android-Pdf-Viewer-Library)
1. **QuiltViewLibrary**   Android Quilt View Library       
[https://github.com/jacobmoncur/QuiltViewLibrary](https://github.com/jacobmoncur/QuiltViewLibrary)
1. **Android-UndoBar** An implementation of Android's Undo Bar as seen in Google's Gmail app.       
[https://github.com/jenzz/Android-UndoBar](https://github.com/jenzz/Android-UndoBar)
1. **Android-ScrollBarPanel**  Android-ScrollBarPanel allows to attach a View to a scroll indicator like it's done in Path 2.0           
[https://github.com/rno/Android-ScrollBarPanel](https://github.com/rno/Android-ScrollBarPanel)
1. **ScrollBarPanelWithClock** Path like scrollbar panel with clock.      
[https://github.com/learnNcode/ScrollBarPanelWithClock](https://github.com/learnNcode/ScrollBarPanelWithClock)
1. **changeloglib**  Android Library to display your changelog     
[https://github.com/gabrielemariotti/changeloglib](https://github.com/gabrielemariotti/changeloglib)
1. **android-FlipView**   A small, easy to use android library for implementing flipping between views as seen in the popular Flipboard application     
[https://github.com/emilsjolander/android-FlipView](https://github.com/emilsjolander/android-FlipView)
1. **discreet-app-rate**  A lightweight non intrusive app rate reminder for Android     
[https://github.com/PomepuyN/discreet-app-rate](https://github.com/PomepuyN/discreet-app-rate)
1. **KenBurnsView**  Android ImageViews animated by Ken Burns Effect     
[https://github.com/flavioarfaria/KenBurnsView](https://github.com/flavioarfaria/KenBurnsView)
1. **UndoBar**  The UI component for Android advanced UI pattern undo-bar, used in Gmail app, create by roman nurik       
[https://github.com/soarcn/UndoBar](https://github.com/soarcn/UndoBar)
1. **FancyCoverFlow**  A cool Open Source CoverFlow view for Android with several fancy effects.    
[https://github.com/davidschreiber/FancyCoverFlow](https://github.com/davidschreiber/FancyCoverFlow)
1. **AppRater**   AppRater Library for Android           
[https://github.com/codechimp-org/AppRater](https://github.com/codechimp-org/AppRater)
1. **Android-ActionItemBadge** This library offers a simple method to add a small badge icon to your ActionBar-MenuItem      
[https://github.com/mikepenz/Android-ActionItemBadge](https://github.com/mikepenz/Android-ActionItemBadge)
1. **poppyview** Android library implementing a poppy view on scroll, similar to the one found in the Google Plus app          
[https://github.com/flavienlaurent/poppyview](https://github.com/flavienlaurent/poppyview)
1. **android-segmented-control** ios7 UISegmentedControl for android        
[https://github.com/hoang8f/android-segmented-control](https://github.com/hoang8f/android-segmented-control)
1. **IconicDroid**  IconicDroid is a custom Android Drawable which allows to draw icons from several iconic fonts.       
[https://github.com/atermenji/IconicDroid](https://github.com/atermenji/IconicDroid)
1. **ParallaxPager** Add some depth to your Android scrolling.          
[https://github.com/prolificinteractive/ParallaxPager](https://github.com/prolificinteractive/ParallaxPager)
1. **AndroidPinning**  A standalone library project for certificate pinning on Android.        
[https://github.com/moxie0/AndroidPinning](https://github.com/moxie0/AndroidPinning)
1. **WizardPager** Wizard Pager is a library that provides an example implementation of a Wizard UI on Android, it's based of Roman Nurik's wizard pager    
[https://github.com/TechFreak/WizardPager](https://github.com/TechFreak/WizardPager)
1. **android-visualizer**    Takes the input from the Android MediaPlayer and displays visualizations, like in iTunes or WinAmp          
[https://github.com/felixpalmer/android-visualizer](https://github.com/felixpalmer/android-visualizer)
1. **ExpandablePanel** Android library for creating an expandable to full screen view inside a viewgroup composition.        
[https://github.com/JorgeCastilloPrz/ExpandablePanel](https://github.com/JorgeCastilloPrz/ExpandablePanel)
1. **NiftyNotification**  effects for android notifications.base on (Crouton)  
[https://github.com/sd6352051/NiftyNotification](https://github.com/sd6352051/NiftyNotification)
1. **GlowPadBackport** A backport of the Android 4.2 GlowPadView that works on the SDK on API levels 4+        
[https://github.com/frakbot/GlowPadBackport](https://github.com/frakbot/GlowPadBackport)
1. **CustomLoading**  custom loading for android        
[https://github.com/stormzhang/CustomLoading](https://github.com/stormzhang/CustomLoading)
1. **chromium_webview** Android WebView wrapper based on chromium     
[https://github.com/mogoweb/chromium_webview](https://github.com/mogoweb/chromium_webview)
1. **MagicViews** Set custom font in Android application         
[https://github.com/ikocijan/MagicViews](https://github.com/ikocijan/MagicViews)
1. **TableFixHeaders** Android library that implements a table with fixed headers.       
[https://github.com/InQBarna/TableFixHeaders](https://github.com/InQBarna/TableFixHeaders)
1. **FloatingNotification** Floating Notification for Android app - Facebook ChatHeads Notification system           
[https://github.com/marshallino16/FloatingNotification](https://github.com/marshallino16/FloatingNotification)
1. **android-slideshow-widget**  A set of widgets to create smooth slideshows with ease.        
[https://github.com/marvinlabs/android-slideshow-widget](https://github.com/marvinlabs/android-slideshow-widget)
1. **HanselAndGretel**  Android library providing bread crumbs to the support library fragments.      
[https://github.com/JakeWharton/HanselAndGretel](https://github.com/JakeWharton/HanselAndGretel)
1. **ChromaHashView** A classic password visualization concept, ported to Android      
[https://github.com/MichaelEvans/ChromaHashView](https://github.com/MichaelEvans/ChromaHashView)
1. **Android-DirectoryChooser** A directory chooser library for Android.   
[https://github.com/passy/Android-DirectoryChooser](https://github.com/passy/Android-DirectoryChooser)
1. **WheelView** An Android Widget for selecting items that rotate on a wheel.    
[https://github.com/LukeDeighton/WheelView](https://github.com/LukeDeighton/WheelView)
1. **RippleView** View that imitates Ripple Effect on click which was introduced in Android L (for Android 2.3+)        
[https://github.com/siriscac/RippleView](https://github.com/siriscac/RippleView)
1. **GaugeView** An Android library for drawing gauges on Canvas.         
[https://github.com/CodeAndMagic/GaugeView](https://github.com/CodeAndMagic/GaugeView)
1. **ATableView** Create iOS-like tables (UITableView) for Android, using UIKit object model.      
[https://github.com/dmacosta/ATableView](https://github.com/dmacosta/ATableView)
1. **Android-RecurrencePicker** Google Calendar Recurrence picker       
[https://github.com/Shusshu/Android-RecurrencePicker](https://github.com/Shusshu/Android-RecurrencePicker)
1. **ActionSheetForAndroid** IOS UIActionSheet in Android       
[https://github.com/baoyongzhang/ActionSheetForAndroid](https://github.com/baoyongzhang/ActionSheetForAndroid)
1. **ckChangeLog** ckChangeLog - An Android Library to display a Change Log    
[https://github.com/cketti/ckChangeLog](https://github.com/cketti/ckChangeLog)
1. **android-floatinglabel-widgets** Floating label input widgets      
[https://github.com/marvinlabs/android-floatinglabel-widgets](https://github.com/marvinlabs/android-floatinglabel-widgets)
1. **MarkdownView** MarkdownView is an Android webview with the capablity of loading Markdown text or file and display it as HTML, it uses MarkdownJ and extends Android webview.       
[https://github.com/falnatsheh/MarkdownView](https://github.com/falnatsheh/MarkdownView)
1. **NoNonsense-FilePicker** A file/directory-picker for android. Implemented as a library project.     
[https://github.com/spacecowboy/NoNonsense-FilePicker](https://github.com/spacecowboy/NoNonsense-FilePicker)
1. **PopoverView** A Popover Controller for Android Tablets. It's an easy solution to simulate an iOS UIPopoverController       
[https://github.com/lupidan/PopoverView](https://github.com/lupidan/PopoverView)
1. **slideuppane** A pane that slide up from the bottom of an android view    
[https://github.com/briangriffey/slideuppane](https://github.com/briangriffey/slideuppane)
1. **SwipeBack**  SwipeBack for Android Activities to do pretty the same as the android "back-button" will do, but in a really intuitive way by using a swipe gesture       
[https://github.com/sockeqwe/SwipeBack](https://github.com/sockeqwe/SwipeBack)
1. **ShowTipsView**   Highligth specific points of interest of your app      
[https://github.com/fredericojssilva/ShowTipsView](https://github.com/fredericojssilva/ShowTipsView)
1. **FancyCoverFlow**  A cool Open Source CoverFlow view for Android with several fancy effects.            
[https://github.com/davidschreiber/FancyCoverFlow](https://github.com/davidschreiber/FancyCoverFlow)
1. **WheelView**  Android滚动选择控件        
[https://github.com/wangjiegulu/WheelView](https://github.com/wangjiegulu/WheelView)
1. **CurtainView**  An android view,which can layer on any gravity for swiping.  
[https://github.com/aicaprio/CurtainView](https://github.com/aicaprio/CurtainView)
1. **android-pathview**  Android view with both path from constructed path or from svg.            
[https://github.com/geftimov/android-pathview](https://github.com/geftimov/android-pathview)
1. **DrawableView**  A view that allows to paint and saves the result as a bitmap         
[https://github.com/PaNaVTEC/DrawableView](https://github.com/PaNaVTEC/DrawableView)
1. **AndroidNotificationJson**  Convert JSON to Android Notification, useful for push notifications (GCM)  
[https://github.com/8tory/AndroidNotificationJson](https://github.com/8tory/AndroidNotificationJson)
1. **PugNotification**  A powerful library for creating notifications in android platform.              
[https://github.com/halysongoncalves/pugnotification](https://github.com/halysongoncalves/pugnotification)
1. **ValueBar**  A beautiful Android custom View that works similar to a range or seekbar. With animations.                
[https://github.com/PhilJay/ValueBar](https://github.com/PhilJay/ValueBar)
1. **CircleDisplay** Android View for displaying and selecting values in a circle-shaped View, with animations and touch gestures.                    
[https://github.com/PhilJay/CircleDisplay](https://github.com/PhilJay/CircleDisplay)
1. **android-shapeLoadingView**  高仿新版58 加载动画                    
[https://github.com/zzz40500/android-shapeLoadingView](https://github.com/zzz40500/android-shapeLoadingView)
1. **Decor** Android layout decorators : Injecting custom attributes in layout files, Using decorators to get rid of  class explosion with multiple custom views.              
[https://github.com/chemouna/decor](https://github.com/chemouna/decor)
1. **AndroidTreeView**  AndroidTreeView. TreeView implementation for android        
[https://github.com/bmelnychuk/AndroidTreeView](https://github.com/bmelnychuk/AndroidTreeView)
1. **SHSegmentControl**  segmentcontrol widget for android                 
[https://github.com/7heaven/SHSegmentControl](https://github.com/7heaven/SHSegmentControl)
1. **ElasticDownload**  Download Custom view with animation.                
[https://github.com/Tibolte/ElasticDownload](https://github.com/Tibolte/ElasticDownload)
1. **CircularCounter**  Circular Counter is an Android Widget I needed to implement for an application I was developing. As it could be useful to more people, I tried to make it generic enough to share and be used by others.     
[https://github.com/diogobernardino/CircularCounter](https://github.com/diogobernardino/CircularCounter)
1. **MarkView**  An android custom view that displays a circle with a colored arc given a mark.               
[https://github.com/xiprox/MarkView](https://github.com/xiprox/MarkView)
1. **pugnotification** A powerful library for creating notifications in android platform.                
[https://github.com/halysongoncalves/pugnotification](https://github.com/halysongoncalves/pugnotification)
1. **android-json-form-wizard**     Android Material Json Form Wizard is a library for creating beautiful form based wizards within your app just by defining json in a particular format.               
[https://github.com/vijayrawatsan/android-json-form-wizard](https://github.com/vijayrawatsan/android-json-form-wizard)
1. **FlippableStackView**  An Android library introducing a stack of Views with the first item being flippable (on dragging down).             
[https://github.com/blipinsk/FlippableStackView](https://github.com/blipinsk/FlippableStackView)
1. **ShadowViewHelper**  Shadow layout, shadow view for android.              
[https://github.com/wangjiegulu/ShadowViewHelper](https://github.com/wangjiegulu/ShadowViewHelper)
1. **velocimeter-view** A velocimeter View for Android             
[https://github.com/glomadrian/velocimeter-view](https://github.com/glomadrian/velocimeter-view)
1. **AppIntro**  Make a cool intro for your Android app.              
[https://github.com/PaoloRotolo/AppIntro](https://github.com/PaoloRotolo/AppIntro)
1. **ExpandableSelector**  ExpandableSelector is an Android library created to show a list of Button/ImageButton widgets inside a animated container which can be collapsed or expanded.             
[https://github.com/Karumi/ExpandableSelector](https://github.com/Karumi/ExpandableSelector)
1. **voice-recording-visualizer**  Simple Visualizer from mic input for Android.             
[https://github.com/tyorikan/voice-recording-visualizer](https://github.com/tyorikan/voice-recording-visualizer)
1. **TourGuide**  TourGuide is an Android library that aims to provide an easy way to add pointers with animations over a desired Android View           
[https://github.com/worker8/TourGuide](https://github.com/worker8/TourGuide)
1. **Header-View**  Create an header for android.support.design.widget.NavigationView              
[https://github.com/rebus007/Header-View](https://github.com/rebus007/Header-View)
1. **CreditCardView** CreditCardView is an Android library that allows developers to create the UI which replicates an actual Credit Card.        
[https://github.com/vinaygaba/CreditCardView](https://github.com/vinaygaba/CreditCardView)
1. **AndroidGlitterView**  A view to show bling bling stars when you touch it.     
[https://github.com/LyndonChin/AndroidGlitterView](https://github.com/LyndonChin/AndroidGlitterView)
1. **SortableTableView** An Android library containing a simple TableView and an advanced SortableTableView providing a lot of customisation possibilities to fit all needs.              
[https://github.com/ISchwarz23/SortableTableView](https://github.com/ISchwarz23/SortableTableView)
1. **hsv-alpha-color-picker-android**   This library implements a color picker and a color preference for use in Android applications.             
[https://github.com/martin-stone/hsv-alpha-color-picker-android](https://github.com/martin-stone/hsv-alpha-color-picker-android)
1. **Android-SpeedyViewSelector**  This is a change Background Or TextColor Selector support library, with which you can directly specify the Background to be displayed in different states or TextColor Layout xml, such as clicking the button effect, the conventional practice is to create Selector xml file in drawable directory but when the project becomes larger when the file bac…     
[https://github.com/devsoulwolf/Android-SpeedyViewSelector](https://github.com/devsoulwolf/Android-SpeedyViewSelector)
1. **InteractivePlayerView**  Custom android music player view.              
[https://github.com/iammert/InteractivePlayerView](https://github.com/iammert/InteractivePlayerView)
1. **tooltip-view**  Dead simple Android Tooltip Views             
[https://github.com/venmo/tooltip-view](https://github.com/venmo/tooltip-view)
1. **Android-TrackingRingWidget**  It's a tracking activity ring widget like in Apple watch for Android.          
1. **PinView**  A Pin view widget for Android            
[https://github.com/DavidPizarro/PinView](https://github.com/DavidPizarro/PinView)
1. **CamView**  Android component to display live preview from the device camera and provide preview data for any external decoding processes       
[https://github.com/LivotovLabs/CamView](https://github.com/LivotovLabs/CamView)
1. **AndroidSweetSheet**  一个富有动感的Sheet(选择器)                     
[https://github.com/zzz40500/AndroidSweetSheet](https://github.com/zzz40500/AndroidSweetSheet)
1. **SlidingCard** Sliding cards with pretty gallery effects. http://android-arsenal.com/details/1/2355            
[https://github.com/mxn21/SlidingCard](https://github.com/mxn21/SlidingCard)
1. **DraggableView** Draggable views with rotation and skew/scale effects.      
[https://github.com/elevenetc/DraggableView](https://github.com/elevenetc/DraggableView)
1. **ChatMessageView**  ChatMessageView helps you to create chat message view quickly like a typical chatting application.               
[https://github.com/himanshu-soni/ChatMessageView](https://github.com/himanshu-soni/ChatMessageView)
1. **SnailBar**  A lovely  ,you can use it as a seekbar or progressbar.       
[https://github.com/android-cjj/SnailBar](https://github.com/android-cjj/SnailBar)
1. **PickerUI**  Android library to display a list of items for pick one      
[https://github.com/DavidPizarro/PickerUI](https://github.com/DavidPizarro/PickerUI)
1. **StickerView**  单手操作图片控件 镜像、置顶、缩放、移动           
[https://github.com/nimengbo/StickerView](https://github.com/nimengbo/StickerView)
1. **DraggableFlipView**  An Android View library that flips while dragging.         
[https://github.com/sasakicks/DraggableFlipView](https://github.com/sasakicks/DraggableFlipView)
1. **WindowView**  Android ImageView you pan by tilting your device.                     
[https://github.com/justasm/WindowView](https://github.com/justasm/WindowView)
1. **RadarScanView**   android下自定义View之雷达扫描 The Radar (Scanning) View on Android 当扫描到对象的时候，通过水波纹的方式显示扫描到的对象，可以动态的随机添加，并且扫描到的对象是可以点击的……                  
[https://github.com/gpfduoduo/RadarScanView](https://github.com/gpfduoduo/RadarScanView)



### <A NAME="Template"></A>Template
1. **android-material-drawer-template**  An Android template with navigation drawer for material design         
[https://github.com/kanytu/android-material-drawer-template](https://github.com/kanytu/android-material-drawer-template)
1. **material-design-icons-adt-template**  Android Studio / Eclipse ADT template for material-design-icons resources         
[https://github.com/intrications/material-design-icons-adt-template](https://github.com/intrications/material-design-icons-adt-template)




### <A NAME="Adapter"></A>Adapter
1. **MultiChoiceAdapter**  Android - A ListView adapter with support for multiple choice modal selection        
[https://github.com/ManuelPeinado/MultiChoiceAdapter](https://github.com/ManuelPeinado/MultiChoiceAdapter)
1. **easy-adapter** Easy Adapters library for Android        
[https://github.com/ribot/easy-adapter](https://github.com/ribot/easy-adapter)
1. **Renderers** Renderers is an Android library that avoids all the boilerplate needed to create a new ListView adapter.    
[https://github.com/pedrovgs/Renderers](https://github.com/pedrovgs/Renderers)
1. **FunDapter**  Simplify Adapter creation for your Android ListViews.     
[https://github.com/amigold/FunDapter](https://github.com/amigold/FunDapter)
1. **instant-adapter**  Just like instant coffee, saves 78% of your time on Android's Custom Adapters.           
[https://github.com/ragunathjawahar/instant-adapter](https://github.com/ragunathjawahar/instant-adapter)
1. **adapter-kit**  Adapter Kit is a set of useful adapters for Android.    
[https://github.com/mobsandgeeks/adapter-kit](https://github.com/mobsandgeeks/adapter-kit)
1. **EfficientAdapter**  An efficient adapter to make the use of RecyclerView much easier for Android.          
[https://github.com/StanKocken/EfficientAdapter](https://github.com/StanKocken/EfficientAdapter)
1. **EasyListViewAdapters**  This library provides Easy Android ListView Adapters(EasyListAdapter & EasyCursorAdapter) which makes designing Multi-Row-Type ListView very simple & cleaner, It also provides many useful features for ListView.           
[https://github.com/birajpatel/EasyListViewAdapters](https://github.com/birajpatel/EasyListViewAdapters)
1. **GridListViewAdapters** This library provides GridAdapters(ListGridAdapter & CursorGridAdapter) which enable you to bind your data in grid card fashion within android.widget.ListView, Also provides many other features related to GridListView.            
[https://github.com/birajpatel/GridListViewAdapters](https://github.com/birajpatel/GridListViewAdapters)


### <A NAME="Validation"></A>Validation
1. **android-saripaar**  UI Validation Library for Android          
[https://github.com/ragunathjawahar/android-saripaar](https://github.com/ragunathjawahar/android-saripaar)


### <A NAME="Gesture"></A>Gesture
1. **android-gesture-detectors**  Gesture detector framework for multitouch handling on Android, based on Android's ScaleGestureDetector                   
[https://github.com/Almeros/android-gesture-detectors](https://github.com/Almeros/android-gesture-detectors)



### <A NAME="Game_Engine"></A>Game Engine
1. **cocos2d-x** cocos2d-x for C++            
[https://github.com/cocos2d/cocos2d-x/](https://github.com/cocos2d/cocos2d-x/) 
1. **libgdx**    Desktop/Android/HTML5/iOS Java game development framework     
[https://github.com/libgdx/libgdx](https://github.com/libgdx/libgdx)
1. **AndEngine**   Free Android 2D OpenGL Game Engine       
[https://github.com/nicolasgramlich/AndEngine](https://github.com/nicolasgramlich/AndEngine)
1. **playn** A Java game development framework that deploys to JVM, HTML5, Android and iOS.    
[https://github.com/threerings/playn](https://github.com/threerings/playn)
1. **LGame**  This is free 2d game development framework(Java Game Engine), support JavaSE/Android/IOS/WP7/HTML5/PSM/Linux/MAC/Windows.    
[https://github.com/cping/LGame](https://github.com/cping/LGame)
1. **LiquidFun** LiquidFun is a 2D physics engine for games Developed by GOOGLE    
[https://github.com/google/liquidfun](https://github.com/google/liquidfun)
1. **jbox2d**  a 2d Java physics engine, native port of the C++ physics engines Box2D and LiquidFun           
[https://github.com/jbox2d/jbox2d](https://github.com/jbox2d/jbox2d)




### <A NAME="Bluetooth"></A>Bluetooth
1. **android-beacon-library** Allows Android apps to interact with BLE beacons  
[https://github.com/AltBeacon/android-beacon-library](https://github.com/AltBeacon/android-beacon-library)
1. **Android-BluetoothSPPLibrary** Bluetooth Serial Port Profile which comfortable to developer application to communication with microcontroller via bluetooth        
[https://github.com/akexorcist/Android-BluetoothSPPLibrary](https://github.com/akexorcist/Android-BluetoothSPPLibrary)
1. **AndroidSmoothBluetooth**   Smooth communication via bluetooth with other android devices or microcontrollers such as Arduino.             
[https://github.com/palaima/AndroidSmoothBluetooth](https://github.com/palaima/AndroidSmoothBluetooth)


### <A NAME="SocialNetworks"></A>SocialNetworks
1. **AndroidSocialNetworks** Library for easy work with Facebook, Twitter, LinkedIn and Google on Android    
[https://github.com/antonkrasov/AndroidSocialNetworks#license](https://github.com/antonkrasov/AndroidSocialNetworks#license)

### <A NAME="XMPP"></A>XMPP 
1. **Smack**    An Open Source XMPP Client Library written in Java for JVMs and Android      
[https://github.com/igniterealtime/Smack](https://github.com/igniterealtime/Smack)
1. **Xabber**    Open source Jabber (XMPP) client with multi-account support, clean and simple interface. Being both free (as in freedom!) and ad-free, Xabber is designed to be the best Jabber client for Android.      
[https://github.com/redsolution/xabber-android](https://github.com/redsolution/xabber-android)
1. **Conversations** Conversations is an open source XMPP (formally known as Jabber) client for Android 4.0+ smart phones.     
[https://github.com/siacs/Conversations](https://github.com/siacs/Conversations)
1. **yaxim**  YAXIM - Yet Another XMPP Instant Messenger, a jabber client for android      
[https://github.com/pfleidi/yaxim](https://github.com/pfleidi/yaxim)
1. **androidpn**     An open source project to provide push notification support for Android -- a xmpp based notification server and a client tool kit.    
[https://github.com/dannytiehui/androidpn](https://github.com/dannytiehui/androidpn)
1. **Android-Paho-Mqtt-Service** A simple MQTT Service that will keep running for the duration of your Android application using the Paho Java MQTT Client.  
[https://github.com/JesseFarebro/Android-Mqtt](https://github.com/JesseFarebro/Android-Mqtt)


### <A NAME="Plugin"></A>Plugin
#### <A NAME="Gradle"></A>Gradle
1. **sdk-manager-plugin**  Gradle plugin which downloads and manages your Android SDK.      
[https://github.com/JakeWharton/sdk-manager-plugin](https://github.com/JakeWharton/sdk-manager-plugin)
1. **lint-cleaner-plugin**  A Gradle Plugin for removing unused resources in Android projects.      
[https://github.com/marcoRS/lint-cleaner-plugin](https://github.com/marcoRS/lint-cleaner-plugin)
1. **groovy-android-gradle-plugin**  A Gradle plugin to support the Groovy language for building Android apps        
[https://github.com/melix/groovy-android-gradle-plugin](https://github.com/melix/groovy-android-gradle-plugin)
1. **gradle-android-scala-plugin**  gradle-android-scala-plugin adds scala language support to official gradle android plugin            
[https://github.com/saturday06/gradle-android-scala-plugin](https://github.com/saturday06/gradle-android-scala-plugin)
1. **gradle-protobuf-plugin**  Gradle plugin for Google Protocol Buffers       
[https://github.com/andrewkroh/gradle-protobuf-plugin](https://github.com/andrewkroh/gradle-protobuf-plugin)
1. **gradle-play-publisher**    Gradle Plugin to upload your APK and metadata to the Google Play Store          
[https://github.com/Triple-T/gradle-play-publisher](https://github.com/Triple-T/gradle-play-publisher)



#### <A NAME="Maven"></A>Maven
1. **maven-android-plugin**  Android Maven Plugin    
[https://github.com/jayway/maven-android-plugin](https://github.com/jayway/maven-android-plugin)
1. **android-archetypes**  Maven Archetypes for Android development       
[https://github.com/akquinet/android-archetypes](https://github.com/akquinet/android-archetypes)
1. **m2e-android**  Android for Maven Eclipse                
[https://github.com/rgladwell/m2e-android](https://github.com/rgladwell/m2e-android)

#### <A NAME="SBT"></A>SBT
1. **android-sdk-plugin** An easy-to-use sbt plugin for working with all Android projects    
[https://github.com/pfn/android-sdk-plugin](https://github.com/pfn/android-sdk-plugin)

#### <A NAME="Intellij_IDEA_/_Android_Studio"></A>Intellij IDEA / Android Studio
1. **android-material-design-icon-generator-plugin**  This plugin help you to set material design icon to your project.      
[https://github.com/konifar/android-material-design-icon-generator-plugin](https://github.com/konifar/android-material-design-icon-generator-plugin)
1. **android-holo-colors-idea-plugin**    IntelliJ / Android Studio plugin for Android Holo Colors     
[https://github.com/jeromevdl/android-holo-colors-idea-plugin](https://github.com/jeromevdl/android-holo-colors-idea-plugin)
1. **android-studio-unit-test-plugin** Android Studio IDE support for Android gradle unit tests. Prepared for Robolectric.    
[https://github.com/evant/android-studio-unit-test-plugin](https://github.com/evant/android-studio-unit-test-plugin)
1. **android-selector-chapek**  Android Studio plugin which automatically generates drawable selectors from appropriately named resources.       
[https://github.com/inmite/android-selector-chapek](https://github.com/inmite/android-selector-chapek)
1. **android-parcelable-intellij-plugin**  IntelliJ Plugin for Android Parcelable boilerplate code generation.      
[https://github.com/mcharmas/android-parcelable-intellij-plugin](https://github.com/mcharmas/android-parcelable-intellij-plugin)
1. **adb-idea** A plugin for Android Studio and Intellij IDEA that speeds up your day to day android development.         
[https://github.com/pbreault/adb-idea](https://github.com/pbreault/adb-idea)
1. **android-butterknife-zelezny** Simple plug-in for Android Studio/IDEA that allows one-click creation of Butterknife view injections.       
[https://github.com/inmite/android-butterknife-zelezny](https://github.com/inmite/android-butterknife-zelezny)
1. **eventbus-intellij-plugin**  Plugin to navigate between events posted by EventBus.           
[https://github.com/kgmyshin/eventbus-intellij-plugin](https://github.com/kgmyshin/eventbus-intellij-plugin)
1. **GsonFormat**  根据Gson库使用的要求,将JSONObject格式的String 解析成实体    
[https://github.com/zzz40500/GsonFormat](https://github.com/zzz40500/GsonFormat)



#### <A NAME="Other-Plugin"></A>Other
1. **lein-droid**  A Leiningen plugin for building Clojure/Android projects    
[https://github.com/clojure-android/lein-droid](https://github.com/clojure-android/lein-droid)
1. **AndroidProguardScala** AndroidProguardScala is an Eclipse plugin that speeds up the development process when you're using Scala on Android.     
[https://github.com/banshee/AndroidProguardScala](https://github.com/banshee/AndroidProguardScala)
1. **vim-android**  Vim plugin to do android development.     
[https://github.com/bpowell/vim-android](https://github.com/bpowell/vim-android)


### <A NAME="Intent"></A>Intent
1. **PhotoPicker** 图片选择 & 图片预览                                
[https://github.com/donglua/PhotoPicker](https://github.com/donglua/PhotoPicker)



### <A NAME="Injector"></A>Injector
1. **AndroidAnnotations**  Fast Android Development. Easy maintainance.    
[https://github.com/excilys/androidannotations](https://github.com/excilys/androidannotations)
1. **roboguice** Google Guice on Android, version 2.0     
[https://github.com/roboguice/roboguice](https://github.com/roboguice/roboguice)
1. **butterknife** View "injection" library for Android.         
[https://github.com/JakeWharton/butterknife](https://github.com/JakeWharton/butterknife)
1. **dagger** A fast dependency injector for Android and Java.      
[https://github.com/square/dagger](https://github.com/square/dagger)
1. **PreferenceInjector**  A SharedPreference injection library for Android    
[https://github.com/denley/PreferenceInjector](https://github.com/denley/PreferenceInjector)




### <A NAME="Code_Generation"></A>Code Generation
1. **parceler** Android Parcelables made easy through code generation.   
[https://github.com/johncarl81/parceler](https://github.com/johncarl81/parceler)
1. **auto-parcel**  Android Parcelable models made easy     
[https://github.com/frankiesardo/auto-parcel](https://github.com/frankiesardo/auto-parcel)
1.  **RoboCoP**  Pure Java code generation tool for generating a fully functional ContentProvider for Android.        
[https://github.com/mediarain/RoboCoP](https://github.com/mediarain/RoboCoP)
1. **android-contentprovider-generator**  A small tool to generate an Android ContentProvider.   
[https://github.com/BoD/android-contentprovider-generator](https://github.com/BoD/android-contentprovider-generator)
1. **ParcelablePlease**  Annotation Processor for generating Parcelable code    
[https://github.com/sockeqwe/ParcelablePlease](https://github.com/sockeqwe/ParcelablePlease)
1. **pojobuilder** A Java Code Generator for Pojo Builders            
[https://github.com/mkarneim/pojobuilder](https://github.com/mkarneim/pojobuilder)
1. **javawriter** A utility class which aids in generating Java source files.    
[https://github.com/square/javawriter](https://github.com/square/javawriter)
1. **Barber**  A custom view styling library for Android that generates the obtainStyledAttributes() and TypedArray boilerplate code for you.              
[https://github.com/hzsweers/barber](https://github.com/hzsweers/barber)
1. **ContentProviderCodeGenerator**  A code generator to create Android ContentProvider             
[https://github.com/foxykeep/ContentProviderCodeGenerator](https://github.com/foxykeep/ContentProviderCodeGenerator)
1. **Android-AnnotatedSQL**  Android library for auto generating SQL schema and Content Provider by annotations. You will get a full-featured content provider in 5 minutes :)           
[https://github.com/hamsterksu/Android-AnnotatedSQL](https://github.com/hamsterksu/Android-AnnotatedSQL)





### <A NAME="Media"></A>Media
1. **FFmpeg** mirror of git://source.ffmpeg.org/ffmpeg.git       
[https://github.com/FFmpeg/FFmpeg](https://github.com/FFmpeg/FFmpeg)
1. **FFMpeg** this is port of ffmpeg for android (this is app, but in future i will do android lib from it and then system will be able to convert videos automatically)          
[https://github.com/havlenapetr/FFMpeg](https://github.com/havlenapetr/FFMpeg)
1. **libstreaming** A solution for streaming H.264, H.263, AMR, AAC using RTP on Android     
[https://github.com/fyhertz/libstreaming](https://github.com/fyhertz/libstreaming)
1. **AndroidFFmpeg** FFmpeg build for android random architectures with example jni        
[https://github.com/appunite/AndroidFFmpeg](https://github.com/appunite/AndroidFFmpeg)
1. **android-ffmpeg-java**  Android Java wrapper around ffmpeg command line binary        
[https://github.com/guardianproject/android-ffmpeg-java](https://github.com/guardianproject/android-ffmpeg-java)
1. **FFmpeg-Android** Script and Instructions for building FFmpeg for Android  
[https://github.com/OnlyInAmerica/FFmpeg-Android](https://github.com/OnlyInAmerica/FFmpeg-Android)
1. **android-ffmpeg** a system for building custom ffmpeg binaries for Android  
[https://github.com/guardianproject/android-ffmpeg](https://github.com/guardianproject/android-ffmpeg)
1. **android-ffmpeg-with-rtmp** This repository contains script(s) to build ffmpeg for android with RTMP (and OpenSSL) support.          
[https://github.com/cine-io/android-ffmpeg-with-rtmp](https://github.com/cine-io/android-ffmpeg-with-rtmp)
1. **mp4parser** A Java API to read, write and create MP4 files         
[https://github.com/sannies/mp4parser](https://github.com/sannies/mp4parser)
1. **jcodec** jcodec - a pure java implementation of video/audio codecs.      
[https://github.com/jcodec/jcodec](https://github.com/jcodec/jcodec)



### <A NAME="Embedded"></A>Embedded
1. **usb-serial-for-android**  Android USB host serial driver library for CDC, FTDI, Arduino and other devices.           
[https://github.com/mik3y/usb-serial-for-android](https://github.com/mik3y/usb-serial-for-android)


### <A NAME="Utility"></A>Utility
1. **smoothie**    Easy async loading for Android's ListView/GridView       
[https://github.com/lucasr/smoothie](https://github.com/lucasr/smoothie)
1. **tape**      A lightning fast, transactional, file-based FIFO for Android and Java.    
[https://github.com/square/tape](https://github.com/square/tape)
1. **ColorArt**  iTunes 11-style color matching code for Android     
[https://github.com/MichaelEvans/ColorArt](https://github.com/MichaelEvans/ColorArt)
1. **AndroidBillingLibrary**   Android Market In-app Billing Library
[https://github.com/robotmedia/AndroidBillingLibrary](https://github.com/robotmedia/AndroidBillingLibrary)
1. **android-saripaar** UI Validation Library for Android        
[https://github.com/ragunathjawahar/android-saripaar](https://github.com/ragunathjawahar/android-saripaar)
1. **timber** A logger with a small, extensible API which provides utility on top of Android's normal Log class.         
[https://github.com/JakeWharton/timber](https://github.com/JakeWharton/timber)
1. **wire** Clean, lightweight protocol buffers for Android.         
[https://github.com/square/wire](https://github.com/square/wire)
1. **motion**  An Android library allowing images to exhibit a parallax effect that reacts to the device's tilt      
[https://github.com/nvanbenschoten/motion](https://github.com/nvanbenschoten/motion)
1. **Colours** A beautiful set of predefined colors and a set of color methods to make your Android development life easier.        
[https://github.com/MatthewYork/Colours](https://github.com/MatthewYork/Colours)
1. **Android-Validator** Form Validator Library for Android          
[https://github.com/throrin19/Android-Validator](https://github.com/throrin19/Android-Validator)
1. **svg-android**  Support for scalable vector graphics in Android    
[https://github.com/pents90/svg-android](https://github.com/pents90/svg-android)
1. **davdroid**  DAVdroid – CalDAV/CardDAV synchronization for Android 4+ devices    
[https://github.com/rfc2822/davdroid](https://github.com/rfc2822/davdroid)
1. **phrase** 
[https://github.com/square/phrase](https://github.com/square/phrase)
1. **seismic**  Android device shake detection.      
[https://github.com/square/seismic](https://github.com/square/seismic)
1. **android-validation-komensky** A simple library for validating user input in forms using annotations.      
[https://github.com/inmite/android-validation-komensky](https://github.com/inmite/android-validation-komensky)    
1. **AndroidFaceCropper**    Android bitmap Face Cropper     
[https://github.com/lafosca/AndroidFaceCropper](https://github.com/lafosca/AndroidFaceCropper)
1. **AutobahnAndroid**  WebSocket & WAMP in Java for Android     
[https://github.com/tavendo/AutobahnAndroid](https://github.com/tavendo/AutobahnAndroid)
1. **android_dbinspector** Android library for viewing in app databases.   
[https://github.com/infinum/android_dbinspector](https://github.com/infinum/android_dbinspector)
1. **wishlist** Utilities I wish Android had but doesn't        
[https://github.com/kevinsawicki/wishlist](https://github.com/kevinsawicki/wishlist)
1. **joda-time-android**  Joda-Time library with Android specialization     
[https://github.com/dlew/joda-time-android](https://github.com/dlew/joda-time-android)
1. **OpenKeychain** OpenKeychain is an OpenPGP implementation for Android.    
[https://github.com/open-keychain/open-keychain](https://github.com/open-keychain/open-keychain)
1. **Silk**  A library containing a large set of utilities and views for Android apps.         
[https://github.com/afollestad/Silk](https://github.com/afollestad/Silk)
1. **Reservoir** Android library to easily serialize and cache your objects to disk using key/value pairs.             
[https://github.com/anupcowkur/Reservoir](https://github.com/anupcowkur/Reservoir)
1. **Android-Templates-And-Utilities** Collection of source codes, utilities, templates and snippets for Android development.          
[https://github.com/petrnohejl/Android-Templates-And-Utilities](https://github.com/petrnohejl/Android-Templates-And-Utilities)
1. **groundy**   Sexy way to execute async/background tasks on Android    
[https://github.com/telly/groundy](https://github.com/telly/groundy)
1. **EasyCamera** Wrapper around the android Camera class that simplifies its usage          
[https://github.com/Glamdring/EasyCamera](https://github.com/Glamdring/EasyCamera)
1. **CastCompanionLibrary-android**  CastCompanionLibrary-android is a library project to enable developers integrate Cast capabilities into their applications faster and easier.          
[https://github.com/googlecast/CastCompanionLibrary-android](https://github.com/googlecast/CastCompanionLibrary-android)
1. **cling** UPnP/DLNA library for Java and Android      
[https://github.com/4thline/cling](https://github.com/4thline/cling)
1. **dspec** A simple way to define and render UI specs on top of your Android UI.     
[https://github.com/lucasr/dspec](https://github.com/lucasr/dspec)
1. **GhostLog** Android app that displays the logcat buffer in a system overlay window        
[https://github.com/jgilfelt/GhostLog](https://github.com/jgilfelt/GhostLog)
1. **secure-preferences**  Android Shared preference wrapper than encrypts the keys and values of Shared Preferences. It's not bullet proof security but rather a quick win for incrementally making your android app more secure.   
[https://github.com/scottyab/secure-preferences](https://github.com/scottyab/secure-preferences)
1. **DebugLog** Create a simple and more understandable Android logs.   
[https://github.com/MustafaFerhan/DebugLog](https://github.com/MustafaFerhan/DebugLog)
1. **AndroidCaldavSyncAdapater** Caldav synch adapter for Android         
[https://github.com/gggard/AndroidCaldavSyncAdapater](https://github.com/gggard/AndroidCaldavSyncAdapater)
1. **routable-android** Routable, an in-app native URL router, for Android    
[https://github.com/clayallsopp/routable-android](https://github.com/clayallsopp/routable-android)
1. **fb-android-dagger** A set of helper classes for using dagger with Android components such as Applications, Activities, Fragments, BroadcastReceivers, and Services.     
[https://github.com/adennie/fb-android-dagger](https://github.com/adennie/fb-android-dagger)
1. **android-gesture-detectors**  Gesture detector framework for multitouch handling on Android, based on Android's ScaleGestureDetector     
[https://github.com/Almeros/android-gesture-detectors](https://github.com/Almeros/android-gesture-detectors)
1. **TypedPreferences**  Preference wrappers for primitive types for Android   
[https://github.com/johnjohndoe/TypedPreferences](https://github.com/johnjohndoe/TypedPreferences)
1. **android-intents** A collection of well-known Android intents for most common actions        
[https://github.com/d-tarasov/android-intents])(https://github.com/d-tarasov/android-intents)
1. **android-intents** A small library which will save you from writing the same intent creation code again and again for the most simple tasks      
[https://github.com/marvinlabs/android-intents](https://github.com/marvinlabs/android-intents)
1. **AndroidUtils** AndroidUtils        
[https://github.com/pardom/AndroidUtils](https://github.com/pardom/AndroidUtils)
1. **ASimpleCache**  a simple cache for android and java       
[https://github.com/yangfuhai/ASimpleCache](https://github.com/yangfuhai/ASimpleCache)
1. **svg-android** Fork of svg-android +SVN history +Maven +more           
[https://github.com/japgolly/svg-android](https://github.com/japgolly/svg-android)
1. **esperandro**  Easy SharedPreference Engine foR ANDROid      
[https://github.com/dkunzler/esperandro](https://github.com/dkunzler/esperandro)
1. **AndroidCommons** Various useful utilities for Android apps development         
[https://github.com/alexvasilkov/AndroidCommons](https://github.com/alexvasilkov/AndroidCommons)
1. **greenrobot-common**  General purpose utilities and hash functions for Android and Java (aka java-common)       
[https://github.com/greenrobot/greenrobot-common](https://github.com/greenrobot/greenrobot-common)
1. **puree-android**  Puree is a log collector for Android.                
[https://github.com/cookpad/puree-android](https://github.com/cookpad/puree-android)
1. **hawk**  Secure Simple Key-Value Storage for Android                       
[https://github.com/orhanobut/hawk](https://github.com/orhanobut/hawk)
1. **ExpirableDiskLruCache**  Expirable Disk Lru Cache is a wrapper for [DiskLruCache](https://github.com/JakeWharton/DiskLruCache) that allows expiring of key/value pairs by specifying evictionTimeSpan. It has very simple API.          
[https://github.com/vijayrawatsan/ExpirableDiskLruCache](https://github.com/vijayrawatsan/ExpirableDiskLruCache)
1. **Trail** A simple logging library that works in any version of Java and Android and detects the platform automatically.         
[https://github.com/mauriciotogneri/trail](https://github.com/mauriciotogneri/trail)
1. **Caffeine** A collection of utility classes that help make Android development faster (and safer!).         
[https://github.com/percolate/caffeine](https://github.com/percolate/caffeine)
1. **tray** A SharedPreferences replacement for Android with multiprocess support.
[https://github.com/grandcentrix/tray](https://github.com/grandcentrix/tray)
1. **colorize** Android quick access to 1000+ preloaded colors!             
[https://github.com/cesarferreira/colorize](https://github.com/cesarferreira/colorize)
1. **IntentBuilder**  Type safe intent building for services and activities     
[https://github.com/emilsjolander/IntentBuilder](https://github.com/emilsjolander/IntentBuilder)
1. **RoboGif**  A small utility to record Android device screen to a GIF      
[https://github.com/izacus/RoboGif](https://github.com/izacus/RoboGif)
1. **Foredroid**  Utility for detecting and notifying when your Android app goes background / becomes foreground           
[https://github.com/steveliles/Foredroid](https://github.com/steveliles/Foredroid)
1. **Slinger** Deep linking library for Android
[https://github.com/allegro/slinger](https://github.com/allegro/slinger)
1. **CacheUtilsLibrary**  A simple Android utils library to write any type of data into cache files and read them later. http://lifeofcoding.com/CacheUtilsLibrary/           
[https://github.com/westlinkin/CacheUtilsLibrary](https://github.com/westlinkin/CacheUtilsLibrary)



### <A NAME="Storage"></A>Storage 
1. **RealStoragePathLibrary**   RealStoragePathLibrary is an open source library with very minimal footprint which helps to find the real paths of the storage devices attached to the Android device.                
[https://github.com/SanDisk-Open-Source/RealStoragePathLibrary](https://github.com/SanDisk-Open-Source/RealStoragePathLibrary)


### <A NAME="SDK"></A>SDK 
1. **mapbox-android-sdk**    Open Source Maps SDK for Android    
[https://github.com/mapbox/mapbox-android-sdk](https://github.com/mapbox/mapbox-android-sdk)
1. **android-checkout**    Library for Android In-App Billing (Version 3)           
[https://github.com/serso/android-checkout](https://github.com/serso/android-checkout)
1. **WeatherLib**   Android Weather Library: android weather lib to develop weather based app fast and easily      
[https://github.com/survivingwithandroid/WeatherLib](https://github.com/survivingwithandroid/WeatherLib)
1. **Clusterkraf** A clustering library for the Google Maps Android API v2.   
[https://github.com/twotoasters/clusterkraf](https://github.com/twotoasters/clusterkraf)
1. **aws-sdk-android** Official mirror of the AWS SDK for Android.        
[https://github.com/aws/aws-sdk-android](https://github.com/aws/aws-sdk-android)
1. **evernote-sdk-android** Evernote SDK for Android          
[https://github.com/evernote/evernote-sdk-android](https://github.com/evernote/evernote-sdk-android)
1. **countly-sdk-android** Countly Mobile Analytics - Android SDK        
[https://github.com/Countly/countly-sdk-android](https://github.com/Countly/countly-sdk-android)
1. **ANE-Facebook** Air Native Extension (iOS and Android) for the Facebook mobile SDK         
[https://github.com/freshplanet/ANE-Facebook](https://github.com/freshplanet/ANE-Facebook)
1. **Office-365-SDK-for-Android**  Office 365 SDK for Android Preview by Microsoft Open Technologies, Inc.   
[https://github.com/OfficeDev/Office-365-SDK-for-Android](https://github.com/OfficeDev/Office-365-SDK-for-Android)
1. **weibo_android_sdk**  新浪微博 Android SDK          
[https://github.com/sinaweibosdk/weibo_android_sdk](https://github.com/sinaweibosdk/weibo_android_sdk)
1. **socialauth-android** SocialAuth repository which contains socialauth android version and samples             
[https://github.com/3pillarlabs/socialauth-android](https://github.com/3pillarlabs/socialauth-android)
1. **PayPal-Android-SDK** Accept PayPal and credit cards in your Android app   
[https://github.com/paypal/PayPal-Android-SDK](https://github.com/paypal/PayPal-Android-SDK)
1. **barcodescanner**  Barcode Scanner Libraries for Android         
[https://github.com/dm77/barcodescanner](https://github.com/dm77/barcodescanner)
1. **android-donations-lib** Donations Library for Android. Supports Google Play Store, Flattr, PayPal, and Bitcoin           
[https://github.com/dschuermann/android-donations-lib](https://github.com/dschuermann/android-donations-lib)
1. **card.io-Android-SDK** card.io provides fast, easy credit card scanning in mobile apps         
[https://github.com/card-io/card.io-Android-SDK](https://github.com/card-io/card.io-Android-SDK)
1. **Android-ShareEverywhere** This project is the tribute to my favorite Android Widget: the Share button. Share ALL THE THINGS!             
[https://github.com/dgmltn/Android-ShareEverywhere](https://github.com/dgmltn/Android-ShareEverywhere)
1. **android-simpl3r** Amazon S3 multipart file upload for Android, made simple   
[https://github.com/jgilfelt/android-simpl3r](https://github.com/jgilfelt/android-simpl3r)
1. **poly-picker**  Android library project for providing multiple image selection from the device.          
[https://github.com/jaydeepw/poly-picker](https://github.com/jaydeepw/poly-picker)
1. **Android-ReactiveLocation**  Small library that wraps Google Play Service API in brilliant RxJava Observables reducing boilerplate to minimum.           
[https://github.com/mcharmas/Android-ReactiveLocation](https://github.com/mcharmas/Android-ReactiveLocation)
1. **LandscapeVideoCamera**   Powerful custom Android Camera with granular control over the video quality and filesize, restricting recordings to landscape only.        
[https://github.com/jmolsmobile/LandscapeVideoCamera](https://github.com/jmolsmobile/LandscapeVideoCamera)
1. **Twiiter Helper**   A twitter helper library that makes Twitter integration very easy and painless.<br>
[https://github.com/krazykira/Twitter-Helper](https://github.com/krazykira/Twitter-Helper)
1. **Liquid-Android-SDK** Liquid - Identify behaviours through Analytics and react with real-time Personalization.<br>
[https://github.com/lqd-io/liquid-sdk-android](https://github.com/lqd-io/liquid-sdk-android)
1. **MultipleImageSelect** An android library that allows selection of multiple images from gallery.     
[https://github.com/darsh2/MultipleImageSelect](https://github.com/darsh2/MultipleImageSelect)
1. **KSYMediaPlayer-Android-SDK**  MediaPlayer for android           
[https://github.com/ks3sdk/KSYMediaPlayer-Android-SDK](https://github.com/ks3sdk/KSYMediaPlayer-Android-SDK)



### <A NAME="Test"></A>Test
1. **Junit**   A programmer-oriented testing framework for Java.    
[https://github.com/junit-team/junit](https://github.com/junit-team/junit)
1. **robotium**  Like Selenium, but for Android      
[https://github.com/RobotiumTech/robotium](https://github.com/RobotiumTech/robotium)
1. **stf**  Control and manage Android devices from your browser.             
[https://github.com/openstf/stf](https://github.com/openstf/stf)
1. **assertj-android** A set of AssertJ helpers geared toward testing Android.    
[https://github.com/square/assertj-android](https://github.com/square/assertj-android)
1. **selendroid** "Selenium for Android" (Test automate native or hybrid Android apps and the mobile web with Selendroid.)         
[https://github.com/selendroid/selendroid](https://github.com/selendroid/selendroid)
1. **Cafe** A powerful test framework for Android named Case Automated Framework for Everyone.    
[https://github.com/BaiduQA/Cafe](https://github.com/BaiduQA/Cafe)
1. **android-junit-report** A custom instrumentation test runner for Android that generates XML reports for integration with other tools.          
[https://github.com/jsankey/android-junit-report](https://github.com/jsankey/android-junit-report)
1. **robolectric**  Android Unit Testing Framework      
[https://github.com/xtremelabs/robolectric](https://github.com/xtremelabs/robolectric)


### <A NAME="Chart"></A>Chart
1. **GraphView** Android Graph Library for creating zoomable and scrollable line and bar graphs.    
[https://github.com/jjoe64/GraphView](https://github.com/jjoe64/GraphView)
1. **achartengine** This is a charting software library for Android applications. Mobile phones, tablets and other gadgets running Android will probably benefit of this charting library.                   
[http://www.achartengine.org/](http://www.achartengine.org/)
1. **MPAndroidChart**  A simple Android chart view / graph view library, supporting line- bar- pie- and candlestick charts as well as scaling, dragging and animations.   
[https://github.com/PhilJay/MPAndroidChart](https://github.com/PhilJay/MPAndroidChart)
1. **EazeGraph** An Android chart and graph library      
[https://github.com/blackfizz/EazeGraph](https://github.com/blackfizz/EazeGraph)
1. **AndroidCharts** An easy-to-use Android charts library with animation.     
[https://github.com/HackPlan/AndroidCharts](https://github.com/HackPlan/AndroidCharts)
1. **WilliamChart** Android library to create charts.        
[https://github.com/diogobernardino/WilliamChart](https://github.com/diogobernardino/WilliamChart)
1. **Android-Charts** Open-source native Android graph/chart framework includes line chart,stick chart,candlestick chart,pie chart,spider-web chart etc.     
[https://github.com/limccn/Android-Charts](https://github.com/limccn/Android-Charts)
1. **XCL-Charts**      Android开源图表库(XCL-Charts is a free charting library for Android platform.)      
[https://github.com/xcltapestry/XCL-Charts](https://github.com/xcltapestry/XCL-Charts)
1. **desCharts**  Android Charting Library     
[https://github.com/bradipao/desCharts](https://github.com/bradipao/desCharts)
1. **HelloCharts**   Charts/graphs library for Android compatible with API 8+    
[https://github.com/lecho/hellocharts-android](https://github.com/lecho/hellocharts-android)
1. **HoloGraphLibrary** Fork of the HoloGraphLibrary by Daniel Nadeau with additionnal features            
[https://github.com/Androguide/HoloGraphLibrary](https://github.com/Androguide/HoloGraphLibrary)


### <A NAME="Icons"></A>Icons
1. **Skycons** Forecast / DarkSky's Skycons, Animated Weather icons recreated for Android      
[https://github.com/torryharris/Skycons](https://github.com/torryharris/Skycons)
1. **droidicon**  Over 1600 customizable icons for Android including 750+ Google Material Design icons, 25 ready-made social badges, and more!          
[https://github.com/theDazzler/droidicon](https://github.com/theDazzler/droidicon)
1. **Android-Iconics**  Android-Iconics is a library to use (almost) any alternative iconfont in your projects. It allows you to add any Android-Iconics compatible typeface-library-addon to your project and you are able to start using that font.                 
[https://github.com/mikepenz/Android-Iconics](https://github.com/mikepenz/Android-Iconics)
1. **android-material-icons**  Easy to use material icons for Android       
[https://github.com/Malinskiy/android-material-icons](https://github.com/Malinskiy/android-material-icons)
1. **androidicons**       Androidicons is a professional, handcrafted icon set with 250 icons in 14 different colors and 5 sizes, including an icon font and all sources.         
[https://github.com/opoloo/androidicons](https://github.com/opoloo/androidicons)



### <A NAME="Colors"></A>Colors
1. **Android-Material-Design-Colors**  Android Material Design Colors       
[https://github.com/wada811/Android-Material-Design-Colors](https://github.com/wada811/Android-Material-Design-Colors)


### <A NAME="Font"></A>Font 
1. **Calligraphy**    Custom fonts in Android the easy way...        
[https://github.com/chrisjenx/Calligraphy](https://github.com/chrisjenx/Calligraphy)
1. **android-typeface-helper** Typeface helper for Android        
[https://github.com/norbsoft/android-typeface-helper](https://github.com/norbsoft/android-typeface-helper)
1. **Android-Icon-Fonts**  Material and Holo iconic fonts.        
[https://github.com/johnkil/Android-Icon-Fonts](https://github.com/johnkil/Android-Icon-Fonts)
1. **Print**  A lightweight Android library for use iconic fonts.       
[https://github.com/johnkil/Print/](https://github.com/johnkil/Print/)
1. **TypefaceHelper**  Helper object for injecting typeface into various text views of android.             
[https://github.com/Drivemode/TypefaceHelper](https://github.com/Drivemode/TypefaceHelper)
1. **AndroidFontsManager**  字体管理器，方便快速的为应用内所有组件更换字体。    
[https://github.com/GcsSloop/AndroidFontsManager](https://github.com/GcsSloop/AndroidFontsManager)




### <A NAME="OpenGL"></A>OpenGL
1. **Rajawali** Rajawali is a 3D engine for Android based on OpenGL ES 2.0/3.0. It can be used for normal apps as well as live wallpapers.         
[https://github.com/MasDennis/Rajawali](https://github.com/MasDennis/Rajawali)

### <A NAME="Debug"></A>Debug
1. **android-grid-wichterle** This app will show grid overlay over whole system which helps you to verify your excellent app design.          
[https://github.com/inmite/android-grid-wichterle](https://github.com/inmite/android-grid-wichterle)

1. **leakcanary** A memory leak detection library for Android and Java.  
[https://github.com/square/leakcanary](https://github.com/square/leakcanary)
1. **Goreinu** Goreinu allows to copy application files on sdcard.  
[https://github.com/kgmyshin/Goreinu](https://github.com/kgmyshin/Goreinu)

### <A NAME="Demo"></A>Demo
1. **android-demos**  Examples of Android applications           
[https://github.com/novoda/android-demos](https://github.com/novoda/android-demos)
1. **u2020** A sample Android app which showcases advanced usage of Dagger among other open source libraries.     
[https://github.com/JakeWharton/u2020](https://github.com/JakeWharton/u2020)
1. **BlurEffectForAndroidDesign** Sample to show how to implement blur graphical tricks     
[https://github.com/PomepuyN/BlurEffectForAndroidDesign](https://github.com/PomepuyN/BlurEffectForAndroidDesign)
1. **maven-android-plugin-samples** Usage examples for Android Maven Plugin   
[https://github.com/jayway/maven-android-plugin-samples](https://github.com/jayway/maven-android-plugin-samples)
1. **Android-WizardPager**  Android pager-style wizard flow sample code    
[https://github.com/romannurik/Android-WizardPager](https://github.com/romannurik/Android-WizardPager)
1. **AndroidPushNotificationsDemo**  A example of an android app that receives push notifications using MQTT.          
[https://github.com/tokudu/AndroidPushNotificationsDemo](https://github.com/tokudu/AndroidPushNotificationsDemo)
1. **android-basic-samples**   Google Play game services - Android samples    
[https://github.com/playgameservices/android-basic-samples](https://github.com/playgameservices/android-basic-samples)
1. **RobolectricSample**   Sample project demonstrating use of the Robolectric Android testing project       
[https://github.com/robolectric/RobolectricSample](https://github.com/robolectric/RobolectricSample)
1. **android-demo** Android common lib demo, include ImageCache, HttpCache, DropDownListView, DownloadManager, install apk silent and so on, you can find description         
[https://github.com/Trinea/android-demo](https://github.com/Trinea/android-demo)
1. **android-movies-demo** Sample application demonstrating Android design and animation          
[https://github.com/dlew/android-movies-demo](https://github.com/dlew/android-movies-demo) 
1. **maven-android-plugin-samples** Usage examples for Android Maven Plugin   
[https://github.com/jayway/maven-android-plugin-samples](https://github.com/jayway/maven-android-plugin-samples)
1. **android-http-examples** Sample code for HTTP on Android.        
[https://github.com/swankjesse/android-http-examples](https://github.com/swankjesse/android-http-examples)
1. **ProgrammingAndroidExamples** This repo contains example code for O'Reilly's "Programming Android" by Zigured Mednieks, Laird Dornin, Blake Meike and Masumi Nakamura      
[https://github.com/bmeike/ProgrammingAndroidExamples](https://github.com/bmeike/ProgrammingAndroidExamples)
1. **android-layout-samples** Explorations around Android custom layouts   
[https://github.com/lucasr/android-layout-samples](https://github.com/lucasr/android-layout-samples)
1. **LearningAndroidYamba** This is the code that goes along with Learning Android book.       
[https://github.com/twitter-university/LearningAndroidYamba](https://github.com/twitter-university/LearningAndroidYamba)
1. **RoboDemo**  RoboDemo is a ShowCase library for Android to demonstrate to users how a given Activity works.        
[https://github.com/stephanenicolas/RoboDemo](https://github.com/stephanenicolas/RoboDemo)
1. **ProgrammingAndroid2Examples** This repo contains example code for O'Reilly's "Programming Android" by Zigured Mednieks, Laird Dornin, Blake Meike and Masumi Nakamura      
[https://github.com/bmeike/ProgrammingAndroid2Examples](https://github.com/bmeike/ProgrammingAndroid2Examples)
1. **hellomap-android**  Quick start with the Google Maps Android API     
[https://github.com/googlemaps/hellomap-android](https://github.com/googlemaps/hellomap-android) 
1. **GraphView-Demos**  Examples for my Android GraphView library        
[https://github.com/jjoe64/GraphView-Demos](https://github.com/jjoe64/GraphView-Demos)
1. **Android-Volley-Example**  Android volley library examples         
[https://github.com/PareshMayani/Android-Volley-Example](https://github.com/PareshMayani/Android-Volley-Example)
1. **android-demos** Google Drive Android API Demos     
[https://github.com/googledrive/android-demos](https://github.com/googledrive/android-demos)
1. **AndroidDemoProjects**  Collection of Small Android Projects        
[https://github.com/PaulTR/AndroidDemoProjects](https://github.com/PaulTR/AndroidDemoProjects)
1. **android-ActivitySceneTransition** Demonstrates how to the use Activity scene transitions when transitions from one Activity to another. Uses a combination of moveImage and changeBounds to nicely transition a grid of images to an Activity with a large image and detail text.     
[https://github.com/googlesamples/android-ActivitySceneTransition](https://github.com/googlesamples/android-ActivitySceneTransition)
1. **android_L_preview_example** This project is focused on the sample using the API's new preview version of Android-L, use of transitions, shadows etc... 
[https://github.com/saulmm/android_L_preview_example](https://github.com/saulmm/android_L_preview_example)
1. **googletv-android-samples** Source for many GoogleTV Example applications.   
[https://github.com/google/googletv-android-samples](https://github.com/google/googletv-android-samples)
1. **Android-RxJava**  Learning RxJava for Android by example       
[https://github.com/kaushikgopal/Android-RxJava](https://github.com/kaushikgopal/Android-RxJava)
1. **Android-LollipopShowcase**  A simple app to showcase some of the cool new cool stuff in Android L. RecyclerView, CardView, ActionBarDrawerToggle, DrawerLayout, Animations, Android Compat Design, Toolbar           
[https://github.com/mikepenz/Android-LollipopShowcase](https://github.com/mikepenz/Android-LollipopShowcase)
1. **QuickNews** This is a news client, similar to netease, news headlines    
[https://github.com/tigerguixh/QuickNews](https://github.com/tigerguixh/QuickNews)
1. **android-best-practices**   Do's and Don'ts for Android development, by Futurice developers          
[https://github.com/futurice/android-best-practices](https://github.com/futurice/android-best-practices)
1. **ToolbarMenudrawer**  Quick example for the new Toolbar (and Menudrawer) API. Thanks for starring / forking me. :')        
[https://github.com/I-am-Reinvented/ToolbarMenudrawer](https://github.com/I-am-Reinvented/ToolbarMenudrawer)
1. **Android-PullLayout**  仿UC天气下拉和微信下拉眼睛        
[https://github.com/BlueMor/Android-PullLayout](https://github.com/BlueMor/Android-PullLayout)
1. **DragLayout** An Android Project.ViewDragHelper.QQ.QQ5.0.侧滑     
[https://github.com/BlueMor/DragLayout](https://github.com/BlueMor/DragLayout)
1. **rx-android-architecture**   An example project of an Android architecture built on RxJava               
[https://github.com/tehmou/rx-android-architecture](https://github.com/tehmou/rx-android-architecture)
1. **AndroidCoolDragAndDropGridView**  An example of a gridview with various column span items and drag and drop support like Google keep has               
[https://github.com/theredsunrise/AndroidCoolDragAndDropGridView](https://github.com/theredsunrise/AndroidCoolDragAndDropGridView)
1. **Demo-GoogleBook-Android**  An android demo about searching and displaying books details using Google book api.         
[https://github.com/Jungerr/Demo-GoogleBook-Android](https://github.com/Jungerr/Demo-GoogleBook-Android)
1. **Demo-YouTuBe-Android**  An android demo about searching and playing youtube videos with youtube player or videoview.          
[https://github.com/Jungerr/Demo-YouTuBe-Android](https://github.com/Jungerr/Demo-YouTuBe-Android)
1. **android-proguard-snippets**  Proguard configurations for common Android libraries            
[https://github.com/krschultz/android-proguard-snippets](https://github.com/krschultz/android-proguard-snippets)
1. **ViewPagerHeaderScrollDemo**  ViewPagerHeaderScrollDemo      
[https://github.com/ongakuer/ViewPagerHeaderScrollDemo](https://github.com/ongakuer/ViewPagerHeaderScrollDemo)
 1. **Quality-Tools-for-Android**  This is an Android sample app + tests that will be used to work on various project to increase the quality of the Android platform.           
[https://github.com/stephanenicolas/Quality-Tools-for-Android](https://github.com/stephanenicolas/Quality-Tools-for-Android)
1. **socket.io-android-chat**  A simple chat demo for socket.io and Android    
[https://github.com/nkzawa/socket.io-android-chat](https://github.com/nkzawa/socket.io-android-chat)
1. **AndroidTVExplorer**   A sample project which can be used as a base in order to develop Media Library applications for Android TV. Follow the series of blogs starting at http://www.malmstein.com/blog/2014/10/21/building-applications-for-android-tv/ in order to keep up to date with the process    
[https://github.com/malmstein/AndroidTVExplorer](https://github.com/malmstein/AndroidTVExplorer)
1. **Android-Notification-Example**   A simple sample showing the different types of notifications on Andoid     
[https://github.com/saulmm/Android-Notification-Example](https://github.com/saulmm/Android-Notification-Example)
1. **androidmvp**  MVP Android Example used to explain how to use this pattern in our Android apps. This code was created to support an article explanation.        
[https://github.com/antoniolg/androidmvp](https://github.com/antoniolg/androidmvp)
1. **PlayPauseDrawable** This is a sample Play & Pause Drawable with morphing animation for Android            
[https://github.com/tarek360/PlayPauseDrawable](https://github.com/tarek360/PlayPauseDrawable)
1. **u2020-mvp** Port of Jake Wharton's U2020 sample app with use of MVP and Dagger 2
[https://github.com/LiveTyping/u2020-mvp](https://github.com/LiveTyping/u2020-mvp)
1. **Material-Animation-Samples**  In this repository i will add more of samples in material animation           
[https://github.com/tarek360/Material-Animation-Samples](https://github.com/tarek360/Material-Animation-Samples)
1. **MaterialTransitions**   Sample material transition animations for Android       
[https://github.com/toddway/MaterialTransitions](https://github.com/toddway/MaterialTransitions)
1. **Watch**   A project which demonstrate how to develop a custom client on android for drbbble.com              
[https://github.com/tuesda/Watch](https://github.com/tuesda/Watch)
1. **MaterialDesignExample**  本APP用来演示Material Design控件的使用。 http://www.aswifter.com/2015/07/02/Material-Design-Example-5/                 
[https://github.com/chenyangcun/MaterialDesignExample](https://github.com/chenyangcun/MaterialDesignExample)
1. **MaterialPowerMenu**   A demo of the power menu with Reveal and other animations        
[https://github.com/naman14/MaterialPowerMenu](https://github.com/naman14/MaterialPowerMenu)


### <A NAME="App"></A>App
1. **2048-android** The android port of the 2048 game (for offline playing)    
[https://github.com/uberspot/2048-android](https://github.com/uberspot/2048-android)
1. **FeedEx** FeedEx News Reader is a light and modern Android feed reader, based on Sparse rss.         
[https://github.com/HoloAddict/FeedEx](https://github.com/HoloAddict/FeedEx)
1. **rubychina4android**  Ruby-China的Android客户端       
[https://github.com/gonjay/rubychina4android](https://github.com/gonjay/rubychina4android)
1. **HackerNews** An open source Hacker News client for Android.        
[https://github.com/bishopmatthew/HackerNews](https://github.com/bishopmatthew/HackerNews)
1. **News-Android-App** ownCloud News Reader - Android App         
[https://github.com/owncloud/News-Android-App](https://github.com/owncloud/News-Android-App)
1. **android-delicious**  Delicious Android is an Android app which helps you access and save bookmarks via Delicious. It's available over at Google Play.    
[https://github.com/lexs/android-delicious](https://github.com/lexs/android-delicious)
1. **droidplanner** Ground Control Station for Android Devices       
[https://github.com/DroidPlanner/droidplanner](https://github.com/DroidPlanner/droidplanner)
1. **FoldingNavigationDrawer-Android**   This is a sample project present how to use Folding-Android to add Folding Efect to Navigation Drawer.          
[https://github.com/tibi1712/FoldingNavigationDrawer-Android](https://github.com/tibi1712/FoldingNavigationDrawer-Android)
1. **play-android**   Stream music and control the queue of a play server from your Android device.        
[https://github.com/play/play-android](https://github.com/play/play-android)
1. **vanilla** Vanilla Music Player for Android (abandoned)       
[https://github.com/kreed/vanilla](https://github.com/kreed/vanilla)
1. **OpenFlappyBird** An open source clone of a famous flappy bird game for Android using AndEngine         
[https://github.com/deano2390/OpenFlappyBird](https://github.com/deano2390/OpenFlappyBird)
1. **TurtlePlayer** A Free, Fully Fledged, Open-Source Music Player for Android    
[https://github.com/eddturtle/TurtlePlayer](https://github.com/eddturtle/TurtlePlayer)
1. **seadroid** Android client for Seafile       
[https://github.com/haiwen/seadroid](https://github.com/haiwen/seadroid)
1. **freegemas-gdx** Freegemas libGDX is an Android and Java desktop port of Freegemas, which in turn is an open source version of the well known Bejeweled.   
[https://github.com/siondream/freegemas-gdx](https://github.com/siondream/freegemas-gdx)
1. **kanxue-android-app** 看雪安全论坛 Android 客户端    
[https://github.com/kanxue-team/kanxue-android-app](https://github.com/kanxue-team/kanxue-android-app)
1. **FlappyCow**   Android game in "Flappy Bird" Style      
[https://github.com/cubei/FlappyCow](https://github.com/cubei/FlappyCow)
1.**wakao-app** 哇靠百科 － 一款聚合了众多笑话段子、妹子图、微信公众号文章的Android App。     
[https://github.com/yongbo000/wakao-app](https://github.com/yongbo000/wakao-app)
1. **Twidere-Android** Twidere is a powerful twitter client for Android 1.6+ 1 , which gives you a full Holo experience and nearly full Twitter's feature.    
[https://github.com/TwidereProject/Twidere-Android](https://github.com/TwidereProject/Twidere-Android)
1. **Telecine**  Record full-resolution video on your Android devices.         
[https://github.com/JakeWharton/Telecine](https://github.com/JakeWharton/Telecine)
1. **TopNews** 高仿“今日头条”客户端，实现它大部分的功能，练习之作，目的了解怎么发开一个新闻类客户端，从涉及的相关知识点中提升自我水平。         
[https://github.com/Rano1/TopNews](https://github.com/Rano1/TopNews)
1. **WaniKani-for-Android**  An Android client application for the awesome kanji learning website wanikani.com           
[https://github.com/xiprox/WaniKani-for-Android](https://github.com/xiprox/WaniKani-for-Android)
1. **OpenLibra-Material**  OpenLibra client on Material Design             
[https://github.com/saulmm/OpenLibra-Material](https://github.com/saulmm/OpenLibra-Material)
1. **superCleanMaster**  一键清理 开源版，包括内存加速，缓存清理，自启管理，软件管理等。          
[https://github.com/joyoyao/superCleanMaster](https://github.com/joyoyao/superCleanMaster)
1. **XhsWelcomeAnim**  小红书欢迎引导第二版           
[https://github.com/w446108264/XhsWelcomeAnim](https://github.com/w446108264/XhsWelcomeAnim)
1. **palettehelper**  Utility Android app for generating color palettes of images using the Palette library. Written in Kotlin.              
[https://github.com/hzsweers/palettehelper](https://github.com/hzsweers/palettehelper)
1. **OpenImgur**  Open source Imgur Android App                 
[https://github.com/Kennyc1012/OpenImgur](https://github.com/Kennyc1012/OpenImgur)
1. **WordPress-Android**  WordPress for Android                 
[https://github.com/wordpress-mobile/WordPress-Android](https://github.com/wordpress-mobile/WordPress-Android)
1. **sgtpuzzles**  a port of Simon Tatham's Portable Puzzle Collection, a collection of 36 single-player logic games.             
[https://github.com/chrisboyle/sgtpuzzles](https://github.com/chrisboyle/sgtpuzzles)
1. **keepassdroid**  a free, open source, light-weight and easy-to-use password manager app.
[https://github.com/bpellin/keepassdroid](https://github.com/bpellin/keepassdroid)
1. **Banjen** Open source brazilian banjo tunner, example to play local sounds.
[https://github.com/MakinGiants/android_banjo_tuner](https://github.com/MakinGiants/android_banjo_tuner)
1. **LiveView Funny** LiveView app that play sounds in the phone from the watch.
[https://github.com/MakinGiants/LiveView-Funny-Plugin](https://github.com/MakinGiants/LiveView-Funny-Plugin)
1. **LiveView Answer-it** LiveView app that send sms to call history contacts.
[https://github.com/MakinGiants/LiveView-Answer-it](https://github.com/MakinGiants/LiveView-Answer-it)
1. **LiveView Tell-it** LiveView app that send default sms to favorite contacts.
[https://github.com/MakinGiants/LiveView-Tell-it](https://github.com/MakinGiants/LiveView-Tell-it)
1. **Piclice** A practical tool which helps users to slice and share their pictures.
[https://github.com/yaa110/Piclice](https://github.com/yaa110/Piclice)
1. **FlyRefresh** The Android implementation of Replace, designed by Zee Youn. I implement this as a FlyRefresh layout. The content of the layout can be any view, such as a ListView, RecyclerView, ScrollView, etc.                 
[https://github.com/race604/FlyRefresh](https://github.com/race604/FlyRefresh)
1. **InstaMaterial** Implementation of Instagram with Material Design (originally based on Emmanuel Pacamalan's concept)                
[https://github.com/frogermcs/InstaMaterial](https://github.com/frogermcs/InstaMaterial)
1. **wechat** A High Copy WeChat ,SNS APP (高仿微信)               
[https://github.com/motianhuo/wechat](https://github.com/motianhuo/wechat)
1. **MaterialUp** MaterialUp Android App     
[https://github.com/jariz/MaterialUp](https://github.com/jariz/MaterialUp)
1. **Android-Jigsaw-Puzzle**    This is an Android app where a user draws something and use it to generate and solve jigsaw puzzles of various difficulties (easy, medium, hard). I have been slowly adding features and plan to complete it at some point.          
[https://github.com/julesbond007/Android-Jigsaw-Puzzle](https://github.com/julesbond007/Android-Jigsaw-Puzzle)
1. **AmazeFileManager**  Amaze File Manager source code           
[https://github.com/arpitkh96/AmazeFileManager](https://github.com/arpitkh96/AmazeFileManager)
1. **SimplifyReader**  一款基于Google Material Design设计开发的Android客户端，包括新闻简读，图片浏览，视频爽看 ，音乐轻听以及二维码扫描五个子模块。                    
[https://github.com/SkillCollege/SimplifyReader](https://github.com/SkillCollege/SimplifyReader)
1. **clean-status-bar**  Tidy up your Android status bar before taking screenshots for the Play Store               
[https://github.com/emmaguy/clean-status-bar](https://github.com/emmaguy/clean-status-bar)
1. **Etar Calendar**  OpenSource calendar with Material Design               
[https://github.com/xsoh/Etar-Calendar](https://github.com/xsoh/Etar-Calendar)
1. **HomeMirror**  Android application powering the mirror in my house         
[https://github.com/HannahMitt/HomeMirror](https://github.com/HannahMitt/HomeMirror)
1. **JNote** 一款支持部分Markdown语法的轻量级便签软件。                      
[https://github.com/Jhuster/JNote](https://github.com/Jhuster/JNote)
1. **TextSecure**   TextSecure is a messaging app for simple private communication with friends.              
[https://github.com/WhisperSystems/TextSecure](https://github.com/WhisperSystems/TextSecure)


### <A NAME="Security"></A>Security
1. **gnupg-for-android** A port of gnupg to Android     
[https://github.com/guardianproject/gnupg-for-android](https://github.com/guardianproject/gnupg-for-android)
1. **openssl-android**  a version of the official Android openssl setup to build standalone for use in app       
[https://github.com/guardianproject/openssl-android](https://github.com/guardianproject/openssl-android)
1. **apg** OpenPGP for Android          
[https://github.com/thialfihar/apg](https://github.com/thialfihar/apg)
1. **android-grid-wichterle**    This app will show grid overlay over whole system which helps you to verify your excellent app design.        
[https://github.com/inmite/android-grid-wichterle](https://github.com/inmite/android-grid-wichterle)





### <A NAME="Tools"></A>Tools
1. **maven-android-sdk-deployer**  A tool to install components of the Android SDK to use with the Maven Android Plugin.      
[https://github.com/mosabua/maven-android-sdk-deployer](https://github.com/mosabua/maven-android-sdk-deployer)
1. **scrollscreenshot**  Make Android screenshots of scrollable screen content    
[https://github.com/PGSSoft/scrollscreenshot](https://github.com/PGSSoft/scrollscreenshot)

1. **dex-method-counts** Command-line tool to count per-package methods in Android .dex files         
[https://github.com/mihaip/dex-method-counts](https://github.com/mihaip/dex-method-counts)
1. **osmtracker-android** GPS tracking tool for OpenStreetMap       
[https://github.com/nguillaumin/osmtracker-android](https://github.com/nguillaumin/osmtracker-android)
1. **ProMosaic**   Make mosaic effect on android         
[https://github.com/coderkiss/ProMosaic](https://github.com/coderkiss/ProMosaic)
1. **enroscar** A set of Android tools that facilitate apps development       
[https://github.com/stanfy/enroscar](https://github.com/stanfy/enroscar)
1. **android-device-frame-generator** Wrap your app screenshots in real device artwork       
[http://f2prateek.com/android-device-frame-generator/](http://f2prateek.com/android-device-frame-generator/)
1. **AndroidGradleStarter** Android Gradle Starter      
[https://github.com/ravidsrk/AndroidGradleStarter](https://github.com/ravidsrk/AndroidGradleStarter)
1. **android-gradle-template** Combines Android Studio, Gradle, Espresso, Robolectric, AndroidAnnotations, RoboCoP, JaCoCo        
[https://github.com/nenick/android-gradle-template](https://github.com/nenick/android-gradle-template)
1. **swiftp** FTP server for your android device.       
[https://github.com/ppareit/swiftp](https://github.com/ppareit/swiftp)
1. **NotificationLog** Use an expanded notification as a makeshift Android log output console.       
[https://github.com/jgilfelt/NotificationLog](https://github.com/jgilfelt/NotificationLog)
1. **Java7-on-Android** Java 7 features backported to Android 2.2+      
[https://github.com/yareally/Java7-on-Android](https://github.com/yareally/Java7-on-Android)
1. **Genius-Android** 一个在Android中能经常使用的库集合，包括日志，命令行语句执行；Ping,DNS,Telnet,TraceRoute等网络包；同时包含一套UI主题。      
[https://github.com/qiujuer/Genius-Android](https://github.com/qiujuer/Genius-Android)
1. **TaggerString** TaggerString is very light library which allows to build dynamic string resource in much more readable way.        
[https://github.com/polok/TaggerString](https://github.com/polok/TaggerString)
1. **svg2android**  SVG to Android VectorDrawable XML resource file          
[https://github.com/inloop/svg2android](https://github.com/inloop/svg2android)
1. **gplay.ws** create a badge to promote your own Android application in a single step         
[http://gplay.ws/](http://gplay.ws/)
1. **android-lifecycle** A diagram of the Android Activity / Fragment lifecycle     
[https://github.com/xxv/android-lifecycle][https://github.com/xxv/android-lifecycle]
1. **AndroidDevTools**  收集整理Android开发所需的Android SDK、开发中用到的工具、Android开发教程、Android设计规范，免费的设计素材等。    
[https://github.com/inferjay/AndroidDevTools](https://github.com/inferjay/AndroidDevTools)
1. **gradle-packer-plugin**  Android Packer Gradle Plugin          
[https://github.com/mcxiaoke/gradle-packer-plugin](https://github.com/mcxiaoke/gradle-packer-plugin)
1. **AndroidLocalizationer**  This is a Android Studio/ IntelliJ IDEA plugin to localize your Android app, translate your string resources automactically.   
 [https://github.com/westlinkin/AndroidLocalizationer](https://github.com/westlinkin/AndroidLocalizationer)
1. **release-android-library**  Remote script to create a maven compatible release of an android library (aar)                 
[https://github.com/blundell/release-android-library](https://github.com/blundell/release-android-library)
1. **android-resource-remover**  A simple utility to remove unused resources in your Android app to lower the size of the APK. It's based on the Android lint tool output.          
[https://github.com/KeepSafe/android-resource-remover](https://github.com/KeepSafe/android-resource-remover)
1. **alfi**  Android Library Finder.           
[https://github.com/cesarferreira/alfi](https://github.com/cesarferreira/alfi)
1. **AnUitor**  AnUitor is a result of my rebranding experiences of one android app.             
[https://github.com/jbruchanov/anuitor](https://github.com/jbruchanov/anuitor)
1. **SVG2Drawable**  Use a jar executable to create a Drawable class to display a SVG on Android.              
[https://github.com/StanKocken/SVG2Drawable](https://github.com/StanKocken/SVG2Drawable)
1. **Layout-to-Image** Android Layout (Relative Layout, Linear Layout etc) to Image               
[https://github.com/vipulasri/Layout-to-Image](https://github.com/vipulasri/Layout-to-Image)
1. **shareloginlib** android 第三方分享和登录组件(支持微信,QQ,微博)               
[https://github.com/lingochamp/ShareLoginLib](https://github.com/lingochamp/ShareLoginLib)
1. **vectalign**   Tool for create complex morphing animations using VectorDrawables (allows morphing between any pair of SVG image)              
[https://github.com/bonnyfone/vectalign](https://github.com/bonnyfone/vectalign)




### <A NAME="QRCode"></A>QRCode
1. **QRGen**  a simple QRCode generation api for java built on top ZXING http://glxn.net/2012/03/10/qrgen-a-small-wrapper-on-top-of-zxing-for-generating-qrcodes-in-java/              
[https://github.com/kenglxn/QRGen](https://github.com/kenglxn/QRGen)
1. **barcodescanner** Barcode Scanner Libraries for Android            
[https://github.com/dm77/barcodescanner](https://github.com/dm77/barcodescanner)


### <A NAME="Decompiler"></A>Decompiler
1. **jadx**  Dex to Java decompiler                  
[https://github.com/skylot/jadx](https://github.com/skylot/jadx)
1. **simplify**  Generic Android Deobfuscator         
[https://github.com/CalebFenton/simplify](https://github.com/CalebFenton/simplify)
1. **apk2gold**  CLI tool for decompiling Android apps to Java. It does resources! It does Java! Its real easy! 
[https://github.com/lxdvs/apk2gold](https://github.com/lxdvs/apk2gold)
1. **procyon**  Java metaprogramming suite, including Java decompiler.         [https://bitbucket.org/mstrobel/procyon](https://bitbucket.org/mstrobel/procyon)


### <A NAME="Android_Wear"></A>Android Wear
1. **BusWear**  EventBus for Android Wear devices.          
[https://github.com/tajchert/BusWear](https://github.com/tajchert/BusWear)
1. **CuXtom Cam**  An open source camera for google glass. This is a an alternative to the default camera on Glass. CuXtom Cam provides you the default behaviour along with some special features.          
[https://github.com/krazykira/CuXtomCam](https://github.com/krazykira/CuXtomCam)
1. **DaVinci**  DaVinci is an image downloading and caching library for Android Wear              
[https://github.com/florent37/DaVinci](https://github.com/florent37/DaVinci)
1. **WearMenu**  An Android Wear Menu implementation                      
[https://github.com/florent37/WearMenu](https://github.com/florent37/WearMenu)
1. **Teleport**  Data Sync & Messaging Library for Android Wear                      
[https://github.com/Mariuxtheone/Teleport](https://github.com/Mariuxtheone/Teleport)


### <A NAME="Other1"></A>Other
1. **Colorful**  基于Theme的Android动态换肤库，无需重启Activity、无需自定义View，方便的实现日间、夜间模式。                          
[https://github.com/bboyfeiyu/Colorful](https://github.com/bboyfeiyu/Colorful)
1. **DiskLruCache**   Java implementation of a Disk-based LRU cache which specifically targets Android compatibility.      
[https://github.com/JakeWharton/DiskLruCache](https://github.com/JakeWharton/DiskLruCache)
1. **anode**  Android framework for node.js applications        
[https://github.com/paddybyers/anode](https://github.com/paddybyers/anode)
1. **Fragment-Switcher** An instance-state saving fragment switcher, intended for use with navigation drawers or tabs.       
[https://github.com/jacobtabak/Fragment-Switcher](https://github.com/jacobtabak/Fragment-Switcher)
1. **AwesomeValidation**  Implement validation for Android within only 3 steps. Developers should focus on their awesome code, and let the library do the boilerplate. And what's more, this could help keep your layout file clean.
[https://github.com/thyrlian/AwesomeValidation](https://github.com/thyrlian/AwesomeValidation)
1. **validation**   Fire eye - Android 输入校验库 - A validation library for android              
[https://github.com/yoojia/FireEye](https://github.com/yoojia/FireEye)
1. **WeakHandler** helps to have a clean handler without memmory issues.
[https://github.com/badoo/android-weak-handler](https://github.com/badoo/android-weak-handler)
1. **JsonToJava**  I was fed up with writing Java classes to mirror json models. So I wrote this Java app to automate the process.            
[https://github.com/jonfhancock/JsonToJava](https://github.com/jonfhancock/JsonToJava)
1. **sixpack-java** A/B testing client for Android and Java applications        
[https://github.com/seatgeek/sixpack-java](https://github.com/seatgeek/sixpack-java)
1. **Android-Skin-Loader**  一个通过动态加载本地皮肤包进行换肤的皮肤框架             
[https://github.com/fengjundev/Android-Skin-Loader](https://github.com/fengjundev/Android-Skin-Loader)


## License
```
Copyright (C) 2014 Snowdream Mobile <yanghui1986527@gmail.com>

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
