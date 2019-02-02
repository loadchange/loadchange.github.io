import React from 'react';
import { Link } from 'react-router-dom';

import GridImg1 from '../../images/grid-img1.jpg';
import GridImg2 from '../../images/grid-img2.jpg';
import GridImg3 from '../../images/grid-img3.jpg';

class Services extends React.Component {

  getImg() {
    return [GridImg1, GridImg2, GridImg3][Math.floor(Math.random() * 3)]
  }

  render() {
    return (
      <div className="services content">
        <div className="about-data">
          <h2>中国梦</h2>
          <p>
            中国梦，是中国共产党第十八次全国代表大会召开以来，习近平总书记所提出的重要指导思想和重要执政理念，
            正式提出于2012年11月29日。习总书记把“中国梦”定义为“实现中华民族伟大复兴，就是中华民族近代以来最伟大梦想”，
            并且表示这个梦“一定能实现”。“中国梦”的核心目标也可以概括为“两个一百年”的目标，
            也就是：到2021年中国共产党成立100周年和2049年中华人民共和国成立100周年时，逐步并最终顺利实现中华民族的伟大复兴，
            具体表现是国家富强、民族振兴、人民幸福，实现途径是走中国特色的社会主义道路、坚持中国特色社会主义理论体系、弘扬民族精神、凝聚中国力量，
            实施手段是政治、经济、文化、社会、生态文明五位一体建设。
          </p>
          {
            Array.apply(null, { length: 5 }).map((_, row) => (
              <div className="top-grids services-grids" key={`grids-${row}`}>
                <div className="section group">
                  {
                    Array.apply(null, { length: 3 }).map((_, item) => (
                      <div className="grid_1_of_3 images_1_of_3 top_grid" key={`grids-${row}-item-${item}`}>
                        <div className="topgrid-desc">
                          <h3>基本路线</h3>
                          <p>
                            全面把握群众路线与实现中国梦的内在联系：群众路线体现了党伟大的中国梦、人民梦！伟大的中国梦、人民梦！的性质与宗旨，....
                            <Link to="/single">查看全部</Link>
                          </p>
                        </div>
                        <img src={this.getImg()} />
                      </div>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default Services;
