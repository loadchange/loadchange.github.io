import React from 'react';
import { Link } from 'react-router-dom';
import C from 'classnames';

const IMG_LIST = [];
Array.apply(null, { length: 8 }).forEach((_, idx) => IMG_LIST.push(require(`../../images/s${idx + 1}.jpg`)));

class Portfolio extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      current: 'All',
      filter: {
        All: ['app', 'card', 'icon', 'web'],
        App: ['app', 'icon'],
        Card: ['card'],
        Web: ['web', 'card', 'icon'],
      },
      portfolioList: [
        { cat: 'logo', className: 'logo1', img: IMG_LIST[0], textCategory: 'Logo' },
        { cat: 'app', className: 'app', img: IMG_LIST[1], textCategory: 'APP' },
        { cat: 'web', className: 'web', img: IMG_LIST[2], textCategory: 'Web design' },
        { cat: 'card', className: 'card', img: IMG_LIST[3], textCategory: 'Business card' },
        { cat: 'app', className: 'app', img: IMG_LIST[4], textCategory: 'APP' },
        { cat: 'card', className: 'card', img: IMG_LIST[5], textCategory: 'Business card' },
        { cat: 'card', className: 'card', img: IMG_LIST[6], textCategory: 'Business card' },
        { cat: 'logo', className: 'web1', img: IMG_LIST[7], textCategory: 'Logo' },
        { cat: 'app', className: 'app', img: IMG_LIST[1], textCategory: 'APP' },
        { cat: 'card', className: 'card', img: IMG_LIST[4], textCategory: 'Business card' },
        { cat: 'logo', className: 'icon', img: IMG_LIST[0], textCategory: 'Logo' },
        { cat: 'web', className: 'logo1', img: IMG_LIST[4], textCategory: 'Web design' },
      ]
    }
  }

  render() {
    const { filter, current, portfolioList } = this.state;
    return (
      <div className="portfolio content">
        <div className="about-data">
          <h2>主要动力</h2>
          <p>
            2012年11月15日中共新一届领导集体上任以来，“中国梦”一词正式进入官方词汇并迅速走红。
            所谓“共同支点”，首先应考察梦想的动力源。既然是一个梦想，那么它必然是关乎人们尚未实现但又在努力争取实现的事情，并由此催生强烈的奋斗动机和动力。
            中国人民实现中国梦的愿望是强烈而迫切的，这也从宏观角度有力解释了为什么实行改革开放才33年的中国，却已经取得了突飞猛进的跨越式进步。
            “中国梦”的主要动力有三大来源：第一、追求经济腾飞，生活改善，物质进步，环境提升；第二、追求公平正义，民主法制，公民成长，文化繁荣，教育进步，科技创新；第三、追求富国强兵，民族尊严，主权完整，国家统一，世界和平。
            在三大动力来源的基础之上，中国有远见、有胆识、有智慧、有爱国情操的公民、团体及领导人，应该及时准确地找到整合协调这三大动力源的共同支点，形成发展进步的兼容合力，造就众志成城的“中国梦”。
          </p>
          <div className="portfolio_main">
            <ul id="filters" className="clearfix">
              {
                Object.keys(filter).map(key => (
                  <li key={key} onClick={() => this.setState({ current: key })}>
                    <span className={C('filter', { active: key === current })}>{key}</span>
                  </li>
                ))
              }
            </ul>
            <div id="portfoliolist">
              {
                portfolioList.map((item, idx) => (
                  <div
                    className={C('portfolio', item.className)}
                    key={idx}
                    style={{ display: filter[current].indexOf(item.cat) < 0 ? 'none' : 'block' }}
                  >
                    <div className="portfolio-wrapper">
                      <div className="fancyDemo">
                        <Link to="/single" rel="group">
                          <img src={item.img} className="img-responsive" />
                        </Link>
                      </div>
                      <div className="label">
                        <div className="label-text">
                          <span className="text-category">{item.textCategory}</span>
                        </div>
                        <div className="label-bg" />
                      </div>
                    </div>
                  </div>
                ))
              }
              <div className="clear" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio;
