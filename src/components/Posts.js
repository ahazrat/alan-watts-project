import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import Post from './Post'

class Posts extends Component {
    render() {

        const posts = this.props.data.map((p, i) => <Post key={i} id={i} title={p} />)

        return <div style={{backgroundColor: 'grey'}}>
            <br />
            <h1>These are the posts</h1>
            <Grid container spacing={16}>
                {posts}
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