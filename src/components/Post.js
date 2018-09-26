import React, { Component } from 'react'

class Post extends Component {
    render() {
        const style = {
            border: '3px solid grey',
            borderRadius: '5px',
        }
        return <div style={style}>
            <h3>Post Title</h3>
            <p>Post Author</p>
            <p>Post Text</p>
        </div>
    }
}

export default Post