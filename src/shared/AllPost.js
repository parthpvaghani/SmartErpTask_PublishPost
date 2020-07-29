import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import EditComponent from './EditComponent';
class AllPost extends Component {

    
    render() {

       
        if(Object.keys(this.props.posts).length>0)
        {
                let isContentPresent = "See";
                console.log(isContentPresent);
                this.isContentPresent = ""
        }
        else{
             this.isContentPresent = "No Post Available"
        }
        
        return (
            <div>
                <h1 className="post_heading">All Posts</h1>
                <h5 className={this.isContentPresent? "post" : ""}>{this.isContentPresent}</h5>
                {this.props.posts.map((post) => (
                    <div key={post.id}>
                        
                        {post.editing ? <EditComponent post={post} key={post.id} /> : <Post post={post}
                            key={post.id} />}
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    
  
    return {
        posts: state
    }
  
        
   
    
}
export default connect(mapStateToProps)(AllPost);
