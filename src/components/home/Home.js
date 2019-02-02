import React from 'react';
import ContentBottom from '../content-bottom';

import GridImg from '../../images/grid-img.jpg';
import GridImg1 from '../../images/grid-img1.jpg';
import GridImg2 from '../../images/grid-img2.jpg';
import GridImg3 from '../../images/grid-img3.jpg';

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home content">
        <div className="top-grids">
          <div className="section group">
            <div className="grid_1_of_3 images_1_of_3 top_grid">
              <div className="topgrid-desc">
                <h3>Element-React</h3>
                <p>Element最初是用Vue编写的，它有许多优雅的UI组件，但是我们也喜欢React，所以我们为React社区开发了它。</p>
              </div>
              <img src={GridImg1} />
            </div>
            <div className="grid_1_of_3 images_1_of_3 top_grid">
              <div className="topgrid-desc">
                <h3>Nacos</h3>
                <p>帮助您发现、配置和管理微服务。它提供了简单易用的特性集，可实现动态服务发现、服务配置管理、服务及流量管理。</p>
              </div>
              <img src={GridImg2} />
            </div>
            <div className="grid_1_of_3 images_1_of_3 top_grid">
              <div className="topgrid-desc">
                <h3>Kalendar</h3>
                <p>这是一个不包含UI的轻量级日历组件库，它可以根据用户场景生成多种日历格式，Kalendar具有简单、扩展性强的特点。</p>
              </div>
              <img src={GridImg3} />
            </div>
          </div>
        </div>

        <div className="content-middle">
          <div className="content-middle-top">
            <h4>狙杀页面卡顿 Performance 工具指北</h4>
          </div>
          <div className="content-middle-desc">
            <div className="section group">
              <div className="lsidebar span_3_of_1">
                <img src={GridImg} />
              </div>
              <div className="cont span_3_of_2">
                <h3>什么会影响你的页面性能</h3>
                <p>
                  近年来，WEB 开发者们为缩短用户等待时间做出了一系列方案，
                  以期「短益求短」。比如用 PWA 缓存更多可用的离线资源，让网页应用打开更快；
                  借助 WebAssembly 规范缩小资源体积，提高执行效率。这些方案分别着眼于网络链路，
                  前端资源处理速度等维度上，致力提高用户体验。
                </p>
                <div className="more-info more-info2">
                  <a href="https://zhuanlan.zhihu.com/p/41017888" target="_blank">查看详情</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ContentBottom />
      </div>
    )
  }
}

export default Home;
