import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = {
    mainDiv: {
        height: '300px',
        backgroundImage: 'url(https://i.imgur.com/itpZjYQ.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    p: {
        margin: '0',
        padding: '100px 0'
    }
}

function Intro(props) {
    const { classes } = props
    return (
        <div className={classes.mainDiv}>
            <p className={classes.p}>
                the vision is a website that is a constantly updated resource<br />
                for material by and relating to the work of Alan Watts<br />
                <code>Derivative writings, brainpickings articles, dance, music, and art videos</code><br />
                using his words<br />
                Tons of resources out there to pool them in one place<br />
                and serves as a meaningful way for people to connect<br />
                people interested in curating and posting the content<br />
            </p>
        </div>
    )
}

export default withStyles(styles)(Intro)