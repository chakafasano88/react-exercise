import React, {Component} from 'react';

class BlogSingle extends Component {
  render(){
    return(
      <div>
        <h2>Blog Single </h2>
        {this.props.match.params.postId}
      </div>
    );
  }

}

export default BlogSingle;
