import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import Post from './Post'

class Posts extends Component {
    render() {

        const pic_posts = this.props.posts.map((post, i) => <Post key={i} post={post} />)

        return <div style={{backgroundColor: 'grey'}}>
            <br />
            <h1>Recent Posts</h1>
            <Grid container spacing={16}>
                {pic_posts}
            </Grid>
            <br />
            <Button variant='contained' color='primary'>
                Create new Post
            </Button>
            <br />
            <br />
        </div>
    }
}

export default Posts