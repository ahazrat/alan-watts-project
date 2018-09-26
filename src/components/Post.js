import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

class Post extends Component {
    render() {
        
        return <Grid item xs={12} sm={4}>
            <Paper>
                <h3>{this.props.id}: Post Title</h3>
                <p>Post Author</p>
                <p>Post Text</p>
                <Button variant='contained' color='primary'>
                  Edit Post
                </Button>
            </Paper>
        </Grid>
    }
}

export default Post