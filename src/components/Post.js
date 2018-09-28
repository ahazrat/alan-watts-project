import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

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

// class Post extends Component {
//     render() {
//         return <Grid item xs={12} sm={6} md={4} lg={3}>
//             <Card>
//                 <h3>{this.props.id + 1}: {this.props.title}</h3>
//                 <p>Post Author</p>
//                 <p>Post Text</p>
//                 <Button variant='contained' color='primary'>
//                     Edit Post
//                 </Button>
//             </Card>
//         </Grid>
//     }
// }

function Post(props) {
    const { classes } = props
    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className={classes.card}>
                <CardActionArea>
                <CardMedia
                    component="img"
                    className={classes.media}
                    height="140"
                    image={props.image_url}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                    Lizard
                    </Typography>
                    <Typography component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default withStyles(styles)(Post)