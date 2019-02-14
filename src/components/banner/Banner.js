import React from 'react';
import C from 'classnames';

import Slide1 from '../../images/slide1.jpg';
import Slide2 from '../../images/slide2.jpg';
import Slide3 from '../../images/slide3.jpg';

import './style.scss'

const IMG_LIST = [{
  src: Slide1,
  url: 'https://s.click.taobao.com/t?e=m%3D2%26s%3Dtd5bhHrRXbUcQipKwQzePCperVdZeJviEViQ0P1Vf2kguMN8XjClAvoCMRpdC9nbQolZFDdJ%2FzbERx%2FTr44bTnXSd%2BTFOdPh85TNKGbvbJjGqrEOt4MAbBmIkXBqRClNTcEU%2BDykfuSM%2BhtH71aX6uIOTs4KMj3yjpOyWSRdiSZDEm2YKA6YIrbIzrZDfgWtwGXLU4WXsy9E8FCJeumVVOABlk8WxvrvLNmFwzcjFAU%3D'
}, {
  src: Slide2,
  url: 'https://s.click.taobao.com/t?e=m%3D2%26s%3Dx85L9qadr00cQipKwQzePCperVdZeJviEViQ0P1Vf2kguMN8XjClAmwenyRkUxgTssFzRH299dzERx%2FTr44bTnXSd%2BTFOdPh85TNKGbvbJjGqrEOt4MAbBmIkXBqRClNTcEU%2BDykfuSM%2BhtH71aX6uIOTs4KMj3yjpOyWSRdiSZDEm2YKA6YIrbIzrZDfgWtwGXLU4WXsy8CZuZoOOkzXFxfvOyje0ynomfkDJRs%2BhU%3D'
}, {
  src: Slide3,
  url: 'https://s.click.taobao.com/t?e=m%3D2%26s%3DWMe0Cw57d18cQipKwQzePCperVdZeJviEViQ0P1Vf2kguMN8XjClAmwenyRkUxgTRPRZn0hn1zvERx%2FTr44bTnXSd%2BTFOdPh85TNKGbvbJjGqrEOt4MAbBmIkXBqRClNTcEU%2BDykfuSM%2BhtH71aX6htm26afTqZhX2AelcDTwouII%2BH4AtnKmf9aAWiTxsBWI8xs9INDEPvGJe8N%2FwNpGw%3D%3D'
}];

class Banner extends React.Component {

  constructor(props) {
    super(props);
    this.imgWrap = React.createRef();
    this.state = {
      current: 1,
      delay: true,
      bannerWidth: 0,
      imgList: []
    }
  }

  componentDidMount() {
    this.init();
  }

  init() {
    this.setState({ imgList: [IMG_LIST[IMG_LIST.length - 1], ...IMG_LIST, IMG_LIST[0]] }, () => {
      const listDom = this.imgWrap.current;
      const { offsetWidth } = listDom;
      const slides = listDom.firstChild;
      for (let i = 0; i < slides.children.length; i++) {
        const img = slides.children[i].firstChild;
        img.style.width = `${offsetWidth}px`;
      }
      this.setState({
        bannerWidth: offsetWidth
      }, () => {
        slides.style.width = `${slides.children.length * offsetWidth}px`;
      });
    });
    if (this.timer) {
      clearInterval(this.timer);
    }
    this.timer = setInterval(() => this.turn(true), 3500);
  }

  turn(next) {
    const { current, imgList } = this.state;
    let newCurrent = next ? current + 1 : current - 1;
    this.setState({
      current: newCurrent
    }, () => {
      if (newCurrent >= imgList.length - 1 || !newCurrent) {
        setTimeout(() => {
          this.setState({ delay: false }, () => {
            this.setState({ current: !newCurrent ? imgList.length - 2 : 1 })
            setTimeout(() => {
              this.setState({ delay: true });
            }, 18);
          })
        }, 300);
      }
    });
  }

  get seat() {
    const { bannerWidth, current } = this.state;
    return { transform: `translateX(-${bannerWidth * current}px)` };
  }

  render() {
    const { imgList, delay } = this.state;
    return (
      <div className="banner">
        <div className="banner-text">
          <h2><span>宴安鸩毒，不可怀也。</span></h2>
          <h2>不管前方的路有多苦，只要走的方向正确，都比站在原地更接近幸福。</h2>
        </div>
        <div className="img-list" ref={this.imgWrap}>
          <ul className={C('slides', { delay })} style={this.seat}>
            {
              imgList.map((img, idx) => (
                <li key={`img-${idx}`}><img src={img.src} onClick={() => open(img.url, '_blank')} /></li>
              ))
            }
          </ul>
          <button className="slides-left" onClick={() => this.turn()}>前</button>
          <button className="slides-right" onClick={() => this.turn(true)}>后</button>
        </div>
      </div>
    )
  }
}

export default Banner;
