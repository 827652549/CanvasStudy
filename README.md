# CanvasStudy


## 关于Canvas（About Canvas）
>Canvas API 提供了一个通过JavaScript和HTML的&lt;canvas&gt;元素来绘制图形的方式。它可以用于动画、游戏画面、数据可视化、图片编辑以及实时视频处理等方面。

>Canvas API主要聚焦于2D图形。而同样使用&lt;canvas&gt;元素的 WebGL API 则用于绘制硬件加速的2D和3D图形。

Canvas可操作的层面是像素级别的，你觉得还有什么它做不到吗？

## 介绍（Introduce）
&emsp;&emsp;本教程是一套详细介绍Canvas的系列学习教程同时也是查阅工具，以实例为主，采用由泛到精的学习结构，所有的小节都有单独的教程页面和HTML文件。

**如果你想直接开始学习，请直接下拉到[目录区](#contents)。**

**注意：该教程并未完结，以下是正式版的README说明。**

现在，所有教程的讲解均在CSDN博客里书写，以Github Pages在线演示（你可能需要翻墙）。

未来，会将所有的教程搬运到一个专门的网站供访问和探讨。
## 适用人群(For people)
- 如果你是想**系统性地学习Canvas**，那么该教程适合你，它拥有全套的Canvas细节介绍。
- 如果你想要**进一步Canvas某一个特性**，那么此教程适合你，它涵盖了Canvas所有的特性。
- 如果你在**开发Canvas中遇到了某个bug**，那么此教程适合你，它针对于每个特性都有相应的在线示例。

## 预备知识（Knowledge）
&emsp;&emsp;你最好能熟练运用HTML、JavaScript与CSS技术，举例来说，假设你已经知道如何使用JavaScript语言的原型继承实现一个对象。

&emsp;&emsp;另外也需要你具备一些基本的数学知识，注如基本的代数运算、三角函数、向量数学以及计量单位的换算。在第一章的末尾，你能找到涵盖上述基础数学知识的讲解。

&emsp;&emsp;当然，如果你保持一颗积极向上的心，你也可以边学习Canvas边补充你的预备知识技能。因为，这并不难，不是吗？


## 创作背景（Creative Background）
&emsp;&emsp;在浏览了国内主要的Canvas系列讲解后，发现对于Canvas的教程是不健全的，除此之外，那些更适合作为一个查阅工具，而不是适合系统学习。为了让更多的人学习和使用Canvas，我决定出一篇Canvas教程当作自己的处女座，写作的过程中会有不成熟的地方，希望能得到大家的指正和批评。

&emsp;&emsp;我以《HTML5 Canvas核心技术(图形、动画与游戏开发)》机械工业出版社 为Canvas系列教程的核心参考资料，另外在某些书中没有说明白的，再引用其他平台如MDN来补充和总结。

&emsp;&emsp;在这里感谢David Geary创作这本书，感谢爱飞翔翻译。

&emsp;&emsp;为了让所有人都能理解，我尽量精简我的语言和措辞，在阅读完第一章之后，我发现其实这本书还是有很多可以精简和“通俗化”的语句的，于是我就直接总结到我的教程之中。

&emsp;&emsp;目前本仓库仍在更新中，相应的Demo演示直接打开对应html文件即可。

&emsp;&emsp;每个文件都在我都CSDN博客专栏中对应都有教程文章
[Canvas系列教程
](https://blog.csdn.net/huoyihengyuan/article/category/9294371)。

&emsp;&emsp;在之后都更新中，会将所有的演示Demo的在线链接和说明都贴到README中方便大家使用。

---

- 如果你打算系统性学习Canvas，推荐您按照顺序学习，在一定程度上能够节省您的时间。
- 如果你是要了解某个特性或定位BUG，直接找到对应教程，进入链接查看详细说明和示例。

## 另外（Additional）

&emsp;&emsp;在教程之中，我省略了一部分方法的参数介绍，因为你能很容易在网上找到更权威的参数说明，便不再过多解释。

&emsp;&emsp;**更新顺序会按照章节顺序更新，更新仍在继续，请保持关注和支持**。

## <span id="contents"></span> 教程目录（Contents） 
### 第一章·基础知识
1. [设置Canvas元素width和height的两种不同方式](https://blog.csdn.net/HuoYiHengYuan/article/details/98768351)
2. [toDataUrl()的使用](https://blog.csdn.net/HuoYiHengYuan/article/details/99671708)
3. [toBlob()的使用](https://blog.csdn.net/HuoYiHengYuan/article/details/99674215)
4. [绘图环境CanvasRenderingContext2D的使用](https://blog.csdn.net/HuoYiHengYuan/article/details/99690179)
5. [save()和restore()的使用/Canvas状态的保存和恢复](https://blog.csdn.net/HuoYiHengYuan/article/details/99710761)
6. [让老版本IE6、IE7、IE8支持Canvas的两种方法](https://blog.csdn.net/HuoYiHengYuan/article/details/99710962)
7. [【项目】Canvas时钟](https://blog.csdn.net/HuoYiHengYuan/article/details/99713943)
8. [鼠标事件](https://blog.csdn.net/HuoYiHengYuan/article/details/99819255)
9. [canvas.width和context.canvas.width的区别和使用](https://blog.csdn.net/HuoYiHengYuan/article/details/99836728)
10. [【项目】精灵表坐标查看器](https://blog.csdn.net/HuoYiHengYuan/article/details/99855314)
11. [键盘事件](https://blog.csdn.net/HuoYiHengYuan/article/details/99864431)
12. [绘制表面的保存与恢复](https://blog.csdn.net/HuoYiHengYuan/article/details/99887366)
13. [【项目】100个弹射小球](https://blog.csdn.net/HuoYiHengYuan/article/details/100005577)
14. [【项目】橡皮筋选框局部放大器](https://blog.csdn.net/HuoYiHengYuan/article/details/100012229)
15. [打印Canvas的内容](https://blog.csdn.net/HuoYiHengYuan/article/details/100017900)
16. [学习Canvas需要的数学知识:代数方程、三角函数、向量运算等](https://blog.csdn.net/HuoYiHengYuan/article/details/100045570)
17. [Canvas基础知识章末小结](https://blog.csdn.net/HuoYiHengYuan/article/details/100048001)
### 第二章·绘制
1. [Canvas绘制模型：canvas的浏览器渲染过程原理](https://blog.csdn.net/HuoYiHengYuan/article/details/100051229)
2. [矩形的绘制](https://blog.csdn.net/HuoYiHengYuan/article/details/100060912)
3. [颜色与透明度](https://blog.csdn.net/HuoYiHengYuan/article/details/100080538)
4. [渐变色和图案](https://blog.csdn.net/HuoYiHengYuan/article/details/100083546)
5. [阴影](https://blog.csdn.net/HuoYiHengYuan/article/details/100093188)
6. [路径(path)、描边(stroke)与填充(fill)详细介绍](https://blog.csdn.net/HuoYiHengYuan/article/details/100097238)
7. [剪纸效果/镂空效果](https://blog.csdn.net/HuoYiHengYuan/article/details/100127744)
8. [线段、网格、像素边界](https://blog.csdn.net/HuoYiHengYuan/article/details/100133611)
9. [坐标轴的绘制(带刻度线)](https://blog.csdn.net/HuoYiHengYuan/article/details/100152080)
10. [【项目】画板——直线和矩形选区的实现](https://blog.csdn.net/HuoYiHengYuan/article/details/100179518)
11. [虚线和蚂蚁线](https://blog.csdn.net/HuoYiHengYuan/article/details/100188987)
12. [CanvasRenderingContext2D扩展新方法和新属性](https://blog.csdn.net/HuoYiHengYuan/article/details/100190323)
13. [线段端点和连接点](https://blog.csdn.net/HuoYiHengYuan/article/details/100377904)
14. [圆和圆弧](https://blog.csdn.net/HuoYiHengYuan/article/details/100516741)
15. [【项目】画板——圆的实现](https://blog.csdn.net/HuoYiHengYuan/article/details/100529003)
16. [【项目】数字刻度仪表盘](https://blog.csdn.net/HuoYiHengYuan/article/details/100547808)
17. [【项目】网格线背景（可作为HTML模版来用）](https://blog.csdn.net/HuoYiHengYuan/article/details/100556626)
18. [二次方贝塞尔曲线(复选框对勾和圆角三角形)](https://blog.csdn.net/HuoYiHengYuan/article/details/100679648)
19. [三次方贝塞尔曲线](https://blog.csdn.net/HuoYiHengYuan/article/details/100713817)
20. [多边形(三角形、矩形、五边形、六边形……)](https://blog.csdn.net/HuoYiHengYuan/article/details/100748594)
21. [【项目】画板——多边形的实现](https://blog.csdn.net/HuoYiHengYuan/article/details/100788013)
22. [isPointInPath()判断在路径内。（实现拖拽小方块）](https://blog.csdn.net/HuoYiHengYuan/article/details/100836422)
23. [【项目】画板——可编辑贝塞尔曲线](https://blog.csdn.net/HuoYiHengYuan/article/details/100862959)
24. [坐标轴的平移(translate)、缩放(scale)、旋转(totate)、镜像](https://blog.csdn.net/HuoYiHengYuan/article/details/100907020)
25. [【项目】画板——交互式旋转多边形](https://blog.csdn.net/HuoYiHengYuan/article/details/100972961)
26. [自定义坐标变换，transform()和setTransform()](https://blog.csdn.net/HuoYiHengYuan/article/details/101023950)
27. [图像合成，globalCompositeOperation属性](https://blog.csdn.net/HuoYiHengYuan/article/details/101056448)
28. [【项目】鼠标控制文字旋转缩放](https://blog.csdn.net/HuoYiHengYuan/article/details/101397222)
29. [剪辑区域，使用clip()实现橡皮擦](https://blog.csdn.net/HuoYiHengYuan/article/details/101467804)
### 第三章·文本
### 第四章·图像与视频
### 第五章·动画
### 第六章·精灵
### 第七章·物理效果
### 第八章·碰撞检测
### 第九章·游戏开发
### 第十章·自定义控件
### 第十一章·移动平台开发
## 联系（Contact）
&emsp;&emsp;**欢迎联系我提建议。**
- 作者：苏一恒
- Email：827652549@qq.com
- QQ：827652549
- QQ群：865327862，在这里我们共同探讨关于Canvas的有趣技术、感谢支持。
<div align="center"><img src="https://827652549.github.io/CanvasStudy/images/QQGroup.jpg" width="200" art="qq群二维码865327862"></div>



## 欢迎修订（Join me）
&emsp;&emsp;如果您对代码中的细节有更合适的修改，欢迎和我一起完善这套教程。

&emsp;&emsp;感谢所有人关注和支持的人，欢迎手动点star。
## 本教程的完善计划（Doing）
&emsp;&emsp;因为该教程是本人的处女作，所以会有很多不完善的地方，希望大家体谅。我虽然能在写作中完善，但是在不断地学习“如果写一篇好教程”的过程中，不能总是折返修改之前的文章，这样会带来太多的时间成本的浪费。

&emsp;&emsp;我希望在能尽量减少浪费时间成本的情况下，一步步将本教程完善起来。

&emsp;&emsp;于是我决定分阶段不断地完善该教程。

- [ ] 第一阶段：**创作文章的内容**。以CSDN博客为文章载体，以Github Pages为在线演示载体，通过链接跳转，达到教程“容易理解”的目的。
- [ ] 第二阶段：**统一每篇教程的格式，修正所有的链接**。例如在前面某些章节中，关于代码的说明有的是直接引入的代码块，有的是链接到Github中；目录有的有，有的没有……
- [ ] 第三阶段：**将教程移植到个人网站，专门服务该教程**。太依托CSDN对于教程的推广，移植到个人网站后，便能够统一化管理，建立各级目录和锚点，在线演示等等都变得方便起来。总的来说，就是让读者更容易学习Canvas这门技术。
- [ ] 第四阶段：**精炼教程，推敲文字，使之更易学习和专业**。在创作初期，受我本人的语言表达能力影响，有些措辞可以更加精确，这就需要下点功夫去修改那些措辞，以追求高质量教程。
- [ ] 第五阶段：**紧跟Canvas标准，添加新特性相关教程**。这个时代，HTML5的标准是Living Standard，来自[WAHTWG](https://html.spec.whatwg.org/multipage/canvas.html)，所以要不断地紧跟潮流，推陈出新，以更加完备的姿态去面临未来的挑战。

