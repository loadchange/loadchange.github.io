import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';

@withRouter
class Article extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      article: null
    };
  }

  componentDidMount() {
    const { params = {} } = this.props.match;
    const { year, month, date, title } = params;
    import(`../../../article/${year}/${month}/${date}-${title}.md`)
      .then(res => this.setState({ article: res.default() }))
      .catch(() => this.setState({ article: (<Redirect to="/404" />) }))
  }

  render() {
    const { article } = this.state;
    return (
      <div className="article content">
        {article}
      </div>
    )
  }
}

export default Article;
