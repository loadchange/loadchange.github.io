import React, { lazy, Suspense } from 'react';
import { Link, withRouter } from 'react-router-dom';
import C from 'classnames';

const Banner = lazy(() => import('../banner'));

@withRouter
class Layout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      openMenu: false
    }
  }

  render() {
    const { openMenu } = this.state;
    const { history = {} } = this.props;
    const { location = {} } = history;
    return (
      <div className="main-container">
        <div className="header">
          <div className="wrap">
            <div className="header-top">
              <div className="top-nav">
                <div className="top-header">
                  <div className="logo">
                    <Link to="/"><h1>彦辅</h1></Link>
                  </div>
                </div>
                <nav className="nav clearfix">
                  <div className="anchor-link" onClick={() => this.setState({ openMenu: !openMenu })} />
                  <ul className={C('simple-toggle', { open: openMenu })}>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/about">关于</Link></li>
                    <li><Link to="/services">服务</Link></li>
                    <li className="logo">
                      <Link to="/"><h1>彦辅</h1></Link>
                    </li>
                    <li><Link to="/portfolio">组合</Link></li>
                    <li><Link to="/single">职业</Link></li>
                    <li><Link to="/contact">联系</Link></li>
                  </ul>
                </nav>
                {
                  location.pathname === '/' && (
                    <Suspense fallback="Loading..."><Banner /></Suspense>
                  )
                }
              </div>
            </div>
          </div>
        </div>
        <div className="wrap">
          {this.props.children}
        </div>
        <div className="footer">
          <div className="wrap">
            <div className="copy-right">
              <p>Copyright &copy; 2019.Yanfu.vip All rights reserved.</p>
            </div>
            <div className="clear" />
          </div>
        </div>
      </div>
    )
  }
}

export default Layout;
