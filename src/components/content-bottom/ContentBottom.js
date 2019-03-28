import React from 'react';

class ContentBottom extends React.Component {

  render() {
    return (
      <div className="content-bottom">
        <div className="section group">
          <div className="cont span_2_of_3">
            <div className="services-desc-block">
              <h3>t5 实例CPU积分耗尽被限速？</h3>
              <p>
                t5实例基本概念 突发性能实例（Burstable instance，以下简称为t5实例），是一种能应对突发 CPU 性能需求的实例。每台 t5 实例都有一个基准 CPU 计算性能，并会根据实例规格以指定速度持续获取 CPU 积分。
              </p>
              <div className="more-info">
                <a href="https://yq.aliyun.com/articles/664219?userCode=kjqxfok3" target="_blank">查看详情</a>
              </div>
            </div>
            <div className="services-desc-block">
              <h3>【云计算的1024种玩法】让ECS掺金坷垃，轻松打造离线下载服务器</h3>
              <p>
                随着迅雷远程下载的关闭，旋风下载的停止服务，某度网盘不开会员又没速度，下载一些冷门资源的时候，看着几kb甚至几B的情况是不是很绝望？别担心，全民云计算的ECS可以帮你解决哟！
              </p>
              <div className="more-info">
                <a href="https://yq.aliyun.com/articles/182949?userCode=kjqxfok3" target="_blank">查看详情</a>
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
