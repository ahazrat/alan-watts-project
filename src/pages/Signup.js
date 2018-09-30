import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = {
    root: {
        flexGrow: 1,
    },
        grow: {
        flexGrow: 1,
    },
        menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
}

class Signup extends React.Component {
    state = {}
}

export default withStyles(styles)(Signup)