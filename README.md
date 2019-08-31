# CanvasStudy


## 关于Canvas（About Canvas）
>Canvas API 提供了一个通过JavaScript和HTML的&lt;canvas&gt;元素来绘制图形的方式。它可以用于动画、游戏画面、数据可视化、图片编辑以及实时视频处理等方面。

>Canvas API主要聚焦于2D图形。而同样使用&lt;canvas&gt;元素的 WebGL API 则用于绘制硬件加速的2D和3D图形。

Canvas可操作的层面是像素级别的，你觉得还有什么它做不到吗？

## 介绍（Introduce）
&emsp;&emsp;本教程是一套详细介绍Canvas的系列学习教程同时也是查阅工具，以实例为主，采用由泛到精的学习结构，所有的小节都有单独的教程页面和HTML文件。

**如果你想直接开始学习，请直接下拉到[目录区](#contents)。**

**注意：该教程并未完结，以下是正式版的README说明。**

现在，所有教程的讲解均用CSDN的富文本编辑器书写，以Github Pages在线演示（你可能需要翻墙）。

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

&emsp;&emsp;我以《HTML5 Canvas核心技术(图形、动画与游戏开发)》机械工业出版社 为Canvas系列教程的核心参考资料，另外再某些书中没有说明白的，再引用其他平台如MDN来补充和总结。

&emsp;&emsp;在这里感谢David Geary创作这本书，感谢爱飞翔翻译。

&emsp;&emsp;为了让所有人都能理解，我尽量精简我的语言和措辞，再阅读完第一章之后，我发现其实这本书还是有很多可以精简和“通俗化”的语句的，于是我就直接总结到我的教程之中。

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
7. [Canvas时钟的简单实现](https://blog.csdn.net/HuoYiHengYuan/article/details/99713943)
8. [Canvas鼠标事件](https://blog.csdn.net/HuoYiHengYuan/article/details/99819255)
9. [canvas.width和context.canvas.width的区别和使用](https://blog.csdn.net/HuoYiHengYuan/article/details/99836728)
10. [Canvas精灵表坐标查看器](https://blog.csdn.net/HuoYiHengYuan/article/details/99855314)
11. [Canvas键盘事件](https://blog.csdn.net/HuoYiHengYuan/article/details/99864431)
12. [在Canvas中绘制表面的保存与恢复](https://blog.csdn.net/HuoYiHengYuan/article/details/99887366)
13. [Canvas动画-100个弹射小球](https://blog.csdn.net/HuoYiHengYuan/article/details/100005577)
14. [Canvas项目橡皮筋选框局部放大器](https://blog.csdn.net/HuoYiHengYuan/article/details/100012229)
15. [打印Canvas的内容](https://blog.csdn.net/HuoYiHengYuan/article/details/100017900)
16. [学习Canvas需要的数学知识:代数方程、三角函数、向量运算等](https://blog.csdn.net/HuoYiHengYuan/article/details/100045570)
17. [Canvas基础知识章末小结](https://blog.csdn.net/HuoYiHengYuan/article/details/100048001)
### 第二章·绘制
1. [Canvas绘制模型：canvas的浏览器渲染过程原理](https://blog.csdn.net/HuoYiHengYuan/article/details/100051229)
2. [矩形的绘制](https://blog.csdn.net/HuoYiHengYuan/article/details/100060912)
3. [颜色与透明度](https://blog.csdn.net/HuoYiHengYuan/article/details/100080538)
4. [渐变色和图案](https://blog.csdn.net/HuoYiHengYuan/article/details/100083546)
5. [阴影](https://blog.csdn.net/HuoYiHengYuan/article/details/100093188)
6. [Canvas中路径(path)、描边(stroke)与填充(fill)详细介绍](https://blog.csdn.net/HuoYiHengYuan/article/details/100097238)
7. [剪纸效果/镂空效果](https://blog.csdn.net/HuoYiHengYuan/article/details/100127744)
8. [线段、网格、像素边界](https://blog.csdn.net/HuoYiHengYuan/article/details/100133611)
9. [坐标轴的绘制(带刻度线)](https://blog.csdn.net/HuoYiHengYuan/article/details/100152080)
10. [画板上直线和矩形选区的实现](https://blog.csdn.net/HuoYiHengYuan/article/details/100179518)
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
- 群：因为教程本身还不够成熟，等到教程完结的时候再建群，厚积而薄发，感谢支持。

## 欢迎修订（Join me）
&emsp;&emsp;如果您对代码中的细节有更合适的修改，欢迎和我一起完善这套教程。

&emsp;&emsp;感谢所有人关注和支持的人，欢迎手动点star。

