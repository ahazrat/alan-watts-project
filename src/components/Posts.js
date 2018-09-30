import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import Post from './Post'
import NewPost from './NewPost'

const styles = {}

class Posts extends Component {
    
    state = {
        open: false,
    }

    handleOpen = () => {
        this.setState({ open: true })
    }

    handleClose = () => {
        this.setState({ open: false })
    }

    render() {

        // const { classes } = this.props;
        const pic_posts = this.props.posts.map((post, i) => <Post key={i} post={post} />)

        return <div style={{backgroundColor: 'grey'}}>
            <br />
            <h1>Recent Posts</h1>
            <Grid container spacing={16}>
                {pic_posts}
            </Grid>
            <br />
            <Button variant='contained' color='primary' onClick={this.handleOpen}>
                Create new Post
            </Button>
            <NewPost open={this.state.open} handleClose={this.handleClose} />
            <br />
            <br />
        </div>
    }
}

export default withStyles(styles)(Posts)