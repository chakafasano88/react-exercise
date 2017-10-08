import React, {Component} from 'react';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import BlogSingle from './BlogSingle';

class Blog extends Component {
    render() {
        return (
            <Router>
                <div>
                    <h2>Blog</h2>
                    <ul>
                        <li><NavLink to="/BlogSingle/1" exact>blog1</NavLink></li>
                        <li><NavLink to="/BlogSingle/2" replace>blog2</NavLink></li>
                        <li><NavLink to="/BlogSingle/3" replace>blog3</NavLink></li>
                    </ul>
                    <Switch>
                        <Route path="/BlogSingle/:postId" component={BlogSingle} />
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default Blog;
