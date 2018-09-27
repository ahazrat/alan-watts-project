import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

const styles = {
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    }
}

class Post extends Component {
    render() {
        return <Grid item xs={12} sm={6} md={4} lg={3}>
            <Paper>
                <h3>{this.props.id + 1}: {this.props.title}</h3>
                <p>Post Author</p>
                <p>Post Text</p>
                <Button variant='contained' color='primary'>
                    Edit Post
                </Button>
            </Paper>
        </Grid>
    }
}

Post.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
}

export default withStyles(styles)(Post)