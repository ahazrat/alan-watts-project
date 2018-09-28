import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = {
    mainDiv: {
        height: '300px',
        backgroundImage: 'url(https://i.imgur.com/itpZjYQ.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
}

function Intro(props) {
    const { classes } = props
    return (
        <div className={classes.mainDiv}>
            
        </div>
    )
}

export default withStyles(styles)(Intro)