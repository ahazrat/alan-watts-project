import React, { Component } from 'react'
import Button from '@material-ui/core/Button'

class Post extends Component {
    render() {
        const style = {
            border: '3px solid grey',
            borderRadius: '5px',
        }
        return <div style={style}>
            <h3>{this.props.id}: Post Title</h3>
            <p>Post Author</p>
            <p>Post Text</p>
            <Button variant='contained' color='primary'>
              Edit Post
            </Button>
        </div>
    }
}

export default Post