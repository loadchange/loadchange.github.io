import React from 'react';
import Axios from 'axios';
import marked from 'marked';
import { withRouter, Redirect } from 'react-router-dom';

import 'github-markdown-css'

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
    Axios.get(`/article/${year}/${month}/${date}-${title}.txt`)
      .then(res => {
        let markdownBody = res.data;
        markdownBody = markdownBody.replace(/^-{3}(.|\n)*-{3}\n/, '');
        console.log(markdownBody)
        const htmlContent = marked(markdownBody);
        this.setState({ article: <div className="markdown-body" dangerouslySetInnerHTML={{ __html: htmlContent }} /> })
      })
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
