/**
 * 在页面中画一个canvas，然后在居中位置写上蓝色'Hello Canvas'，并加上文字描边
 * @type {HTMLElement}
 */
var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');
//设置字体格式
context.font = '38pt Arial';
//fillStyle设置或返回填充canvas的颜色、渐变、模式，其中CornflowerBlue 矢车菊蓝
context.fillStyle = 'cornflowerblue';
//strokeStyle用于设置或返回笔触的颜色、渐变、模式
context.strokeStyle = 'blue';
//设置文字的内容和位置
context.fillText('Hello Canvas', canvas.width / 2 - 150, canvas.height / 2 + 15);
context.strokeText("Hello Canvas", canvas.width / 2 - 150, canvas.height / 2 + 15);


