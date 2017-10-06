import React, {Component} from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

class Blog extends Component {
  render(){
    return(
      <div>
        <h2>Blog</h2>
        <ul>
          <li><Link to="/blog/12">blog1</Link></li>
          <li><Link to="/blog/34">blog2</Link></li>
          <li><Link to="/blog/56">blog3</Link></li>
        </ul>
        {this.props.match.params.postId}
      </div>
    );
  }

}

export default Blog;
