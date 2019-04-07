import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch, } from 'react-router-dom';
import Loading from './components/Loading'
import Layout from './components/layout'

import './style/main.scss'

import ExchangeRate from './components/exchange-rate'

const Home = lazy(() => import('./components/home'));
// const ExchangeRate = lazy(() => import('./components/exchange-rate/ExchangeRate.jsx'));
const Services = lazy(() => import('./components/services'));
const Single = lazy(() => import('./components/single'));
const Portfolio = lazy(() => import('./components/portfolio'));
const Calendar = lazy(() => import('./components/calendar'));
const NotFound = lazy(() => import('./components/404'));

const Article = lazy(() => import('./components/article'));

class App extends React.Component {
  get route() {
    return [
      { path: '/', exact: true, component: props => (<Home {...props} />) },
      { path: '/exchange-rate', component: props => (<ExchangeRate {...props} />) },
      { path: '/services', component: props => (<Services {...props} />) },
      { path: '/single', component: props => (<Single {...props} />) },
      { path: '/portfolio', component: props => (<Portfolio {...props} />) },
      { path: '/calendar', component: props => (<Calendar {...props} />) },
      { path: '/:year/:month/:date-:title', component: props => (<Article {...props} />) },
      { component: props => (<NotFound {...props} />) },
    ].map((item, index) => <Route key={`route-${index}`} {...item} />);
  }

  render() {
    return (
      <HashRouter>
        <Layout>
          <Suspense fallback={<Loading />}>
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
