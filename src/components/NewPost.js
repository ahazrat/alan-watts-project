import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'

const getModalStyle = () => {
    const rand = () => Math.round(Math.random() * 20) - 10
    const top = 50 + rand()
    const left = 50 + rand()
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    }
}

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },
});

class NewPost extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.props.open}
                onClose={this.handleClose}
            >
                <div style={getModalStyle()} className={classes.paper}>
                    <Typography variant="title" id="modal-title">
                        Create a new post
                    </Typography>
                    <Typography variant="subheading" id="simple-modal-description">
                        A post requires at least a title, a description and an image
                    </Typography>
                    <Button onClick={this.props.handleClose}>Close New Post</Button>
                </div>
            </Modal>
        )
    }

}

export default withStyles(styles)(NewPost)