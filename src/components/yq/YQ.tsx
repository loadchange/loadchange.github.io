import * as React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

export interface Props {}
class YQ extends React.Component<Props, object> {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    Axios.get('/dist/data/aliyun-config.json').then(res => this.setState({ ...res.data }));
  }

  render() {
    const { list } = this.state;
    return (
      <div className="services content">
        <div className="about-data">
          {Array.apply(null, { length: Math.ceil(list.length / 3) }).map((_, row) => (
            <div className="top-grids services-grids" key={`grids-${row}`}>
              <div className="section group">
                {Array.apply(null, { length: 3 }).map((_, idx) => {
                  const index = row * 3 + idx;
                  if (index + 1 > list.length) return null;
                  const article = list[index];
                  return (
                    <div className="grid_1_of_3 images_1_of_3 top_grid" key={`grids-${row}-item-${idx}`}>
                      <div className="topgrid-desc">
                        <a href={article.link} className="yq-link">
                          {article.title}
                        </a>
                      </div>
                      <div className="yq-pic-wrapper">
                        <a href={article.link} className="yq-pic" style={{ backgroundImage: `url(${article.pic})` }} target="_blank" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default YQ;
