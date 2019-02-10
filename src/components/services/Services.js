import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Pagination from '../pagination'

import GridImg1 from '../../images/grid-img1.jpg';
import GridImg2 from '../../images/grid-img2.jpg';
import GridImg3 from '../../images/grid-img3.jpg';

class Services extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listConfig: [],
      size: 15,
      total: 0,
      currentPage: 1,
      articleLists: []
    };
  }

  componentDidMount() {
    this.getArticleConfig();
  }

  getArticleConfig() {
    Axios.get('/dist/data/article-config.json').then(res => {
      this.setState({ ...res.data }, () => this.getPageList());
    });
  }

  getPageList() {
    const { listConfig, currentPage } = this.state;
    Axios.get(`/dist/data/${listConfig[currentPage - 1]}`)
      .then(res => this.setState({ articleLists: res.data.articleLists }));
  }

  getImg() {
    return [GridImg1, GridImg2, GridImg3][Math.floor(Math.random() * 3)]
  }

  render() {
    const { listConfig, size, total, currentPage, articleLists } = this.state;
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
            Array.apply(null, { length: Math.ceil(articleLists.length / 3) }).map((_, row) => (
              <div className="top-grids services-grids" key={`grids-${row}`}>
                <div className="section group">
                  {
                    Array.apply(null, { length: 3 }).map((_, idx) => {
                      const index = row * 3 + idx;
                      if (index + 1 > articleLists.length) return null;
                      const article = articleLists[index];
                      return (
                        <div className="grid_1_of_3 images_1_of_3 top_grid" key={`grids-${row}-item-${idx}`}>
                          <div className="topgrid-desc">
                            <h3>{article.title}</h3>
                            <p>
                              {article.describe}
                              <Link to={article.link}>查看全部</Link>
                            </p>
                          </div>
                          <img src={article.thumbnail} />
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            ))
          }
          <Pagination
            pageCount={listConfig.length}
            pageSize={size}
            total={total}
            currentPage={currentPage}
            onClick={currentPage => this.setState({ currentPage }, () => this.getPageList())}
          />
        </div>
      </div>
    )
  }
}

export default Services;
