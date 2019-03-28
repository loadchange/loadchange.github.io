import React from 'react';
import ContentBottom from '../content-bottom';

import GridImg from '../../images/grid-img.jpg';
import GridImg1 from '../../images/grid-img1.jpg';
import GridImg2 from '../../images/grid-img2.jpg';
import GridImg3 from '../../images/grid-img3.jpg';

const GRID_LIST = [{
  src: GridImg1,
  title: 'JavaScript高级程序设计',
  describe: 'JavaScript入门到精通书籍JavaScript权威指南配套前端开发工程师书web开发HTML网站JavaScript实战工具书',
  url: 'https://s.click.taobao.com/t?e=m%3D2%26s%3DpvaIaN1LxeYcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67lJERkhDtVj1J%2BAVY%2F4wKC3kejZw%2Bfpc5RaxrvxI9L0IcLS81HcdHRkHst39Fi03YsLEp6aGhltKVbSAM%2B9ETcnYvwU%2FhhjJBVzTPL4ErbSIIYULNg46oBA%3D&pvid=10_124.64.74.84_1337_1550158443808'
}, {
  src: GridImg2,
  title: '你不知道的JavaScript',
  describe: '上卷+中卷+下卷 全3册 JavaScript 编程语言类教材JavaScript语言程序开发设计教程 JavaScript并发编程',
  url: 'https://s.click.taobao.com/t?e=m%3D2%26s%3DxN4146rigkQcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67tbhcxWdYRcz8FptwqKhdbHkejZw%2Bfpc5RaxrvxI9L0IcLS81HcdHRkHst39Fi03YmdVtA4rLxkjwc0R%2B%2B4HVQTsQI13mc1NyiE8E%2BvMNgPcIYULNg46oBA%3D&pvid=10_124.64.74.84_1337_1550158443808'
}, {
  src: GridImg3,
  title: 'ES6标准入门 第3版',
  describe: '深入理解ES6 2017 JavaScript开发编程书籍 JavaScript语言程序设计编程开发书籍 ECMAScript6入门教程',
  url: 'https://s.click.taobao.com/t?e=m%3D2%26s%3D1sPKCpXyLo8cQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67rwAZZynSPFzxT40F5yyh63kejZw%2Bfpc5RaxrvxI9L0IcLS81HcdHRkHst39Fi03Yn7ZWze1p%2FHmVXR%2FER6nDSW1aUdUkT2UzIGyJlMf%2FT2QIYULNg46oBA%3D&pvid=10_124.64.74.84_1337_1550158443808'
}]

class Home extends React.Component {
  
  render() {
    return (
      <div className="home content">
        <div className="top-grids">
          <div className="section group">
            {
              GRID_LIST.map(({ src, title, describe, url },idx) => (
                <div className="grid_1_of_3 images_1_of_3 top_grid" key={idx}>
                  <div className="topgrid-desc">
                    <a href={url} target="_blank"><h3>{title}</h3></a>
                    <p>{describe}</p>
                  </div>
                  <a href={url} target="_blank"><img src={src} /></a>
                </div>
              ))
            }
          </div>
        </div>

        <div className="content-middle">
          <div className="content-middle-top">
            <h4>一分钟了解阿里云：对象存储OSS</h4>
          </div>
          <div className="content-middle-desc">
            <div className="section group">
              <div className="lsidebar span_3_of_1">
                <img src={GridImg} />
              </div>
              <div className="cont span_3_of_2">
                <h3>什么是对象存储呢？</h3>
                <p>
                  阿里云的产品种类繁多，今天让我们一起来了解下对象存储（Object Storage Service，简称OSS）吧！
                  什么是对象存储呢？简单来说，对象存储OSS是阿里云提供的海量、安全和高可靠的云存储服务。
                  存储容量和处理能力的弹性扩展，按量付费真正使您专注于核心业务。您还可以方便的
                </p>
                <div className="more-info more-info2">
                  <a href="https://yq.aliyun.com/articles/7483?userCode=kjqxfok3" target="_blank">查看详情</a>
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
