1. 处理事件的回调 click...事件   
2. 处理计时器的回调（EventLoop 事件循环）  
3. 开始帧  
4. 执行 requestAnimationFrame 动画的回调  
5. 计算机页面布局计算 合并到主线程  
6. 绘制  
7. 如果此时还有空闲时间，执行 requestIdleCallback  