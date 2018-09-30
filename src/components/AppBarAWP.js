import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'

const styles = {
    root: {}
  }

// function AppBarAWP(props) {
class AppBarAWP extends React.Component {

    state = {
        auth: true,
        anchorEl: null,
    }

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget })
    }

    handleClose = () => {
        this.setState({ anchorEl: null })
    }

    logout = () => {
        this.handleClose()
        this.props.handleLogout()
    }

    render() {

        const { classes } = this.props

        return (
            <div className={classes.root}>
                <AppBar>
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.grow}>
                            News
                        </Typography>
                        {this.props.auth && (
                            <div>
                                <IconButton
                                    aria-owns={Boolean(this.state.anchorEl) ? 'menu-appbar' : null}
                                    aria-haspopup="true"
                                    onClick={this.handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={this.state.anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(this.state.anchorEl)}
                                    onClose={this.handleClose}
                                >
                                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                                    <MenuItem onClick={this.logout}>Logout</MenuItem>
                                </Menu>
                            </div>
                        )}
                        <div>
                            <Button color="inherit" onClick={this.props.signup}>Signup</Button>
                            <Button color="inherit" onClick={this.props.handleLogin}>Login</Button>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        )

    }

}

AppBarAWP.propTypes = {
    classes: PropTypes.object.isRequired,
}
  
export default withStyles(styles)(AppBarAWP)