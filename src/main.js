import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch, } from 'react-router-dom';
import Layout from './components/layout'

import './style/main.scss'


const Home = lazy(() => import('./components/home'));
const About = lazy(() => import('./components/about'));
const Services = lazy(() => import('./components/services'));
const Single = lazy(() => import('./components/single'));
const Portfolio = lazy(() => import('./components/portfolio'));
const Contact = lazy(() => import('./components/contact'));
const NotFound = lazy(() => import('./components/404'));

const Article = lazy(() => import('./components/article'));

class App extends React.Component {
  get route() {
    return [
      { path: '/', exact: true, component: props => (<Home {...props} />) },
      { path: '/about', component: props => (<About {...props} />) },
      { path: '/services', component: props => (<Services {...props} />) },
      { path: '/single', component: props => (<Single {...props} />) },
      { path: '/portfolio', component: props => (<Portfolio {...props} />) },
      { path: '/contact', component: props => (<Contact {...props} />) },
      { path: '/:year/:month/:date-:title', component: props => (<Article {...props} />) },
      { component: props => (<NotFound {...props} />) },
    ].map((item, index) => <Route key={`route-${index}`} {...item} />);
  }

  render() {
    return (
      <HashRouter>
        <Layout>
          <Suspense fallback="Loading...">
            <Switch>
              {this.route}
            </Switch>
          </Suspense>
        </Layout>
      </HashRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
