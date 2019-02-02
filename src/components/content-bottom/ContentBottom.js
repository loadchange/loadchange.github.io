import React from 'react';

class ContentBottom extends React.Component {

  render() {
    return (
      <div className="content-bottom">
        <div className="section group">
          <div className="cont span_2_of_3">
            <div className="services-desc-block">
              <h3>浏览器输入 URL 后发生了什么？</h3>
              <p>
                这是一道非常经典的题目，相信你被面试或者面试别人有非常大的概率接触过，
                也可能只是其中某一部分进行提问。这道题涵盖的知识点非常多，考察得比较全面，
                网上一搜也有成百上千篇文章，不同的人有不同的见解，然而大部分都是千篇一律。如果你没有深入透彻系统性地研究过...
              </p>
              <div className="more-info">
                <a href="https://zhuanlan.zhihu.com/p/43369093" target="_blank">查看详情</a>
              </div>
            </div>
            <div className="services-desc-block">
              <h3>Event Loop 这个循环你晓得么？</h3>
              <p>
                我们都知道JavaScript是一门单线程、非阻塞的脚本语言，目的是为了实现与浏览器交互。
                这里我们提到了两点：一是单线程，二是非阻塞。
                单线程是指JavaScript在执行的时候，有且只有一个主线程来处理所有的任务。
                但是他为什么一定是单线程，而不是多线程的呢？
              </p>
              <div className="more-info">
                <a href="https://zhuanlan.zhihu.com/p/41543963" target="_blank">查看详情</a>
              </div>
            </div>
          </div>
          <div className="rsidebar span_1_of_3">
            <h3>留言</h3>
            <div className="news-letter">
              <div>
                <span><label>姓名</label></span>
                <span><input name="userName" type="text" className="textbox" /></span>
                <span><label>邮箱</label></span>
                <span><input name="userEmail" type="text" className="textbox" /></span>
                <span><label>消息</label></span>
                <span><textarea name="userMsg" defaultValue="" /></span>
                <span><input type="submit" value="Submit" /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContentBottom;
