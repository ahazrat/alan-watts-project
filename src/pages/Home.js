import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Header from '../components/Header'
import Intro from '../components/Intro'
import Posts from '../components/Posts'
import NewPost from '../components/NewPost'

const styles = {
}

class Home extends React.Component {

    state = {}

    render() {

        const posts = [
            {
                title: 'Who Are You?',
                text: 'Trying to define yourself is like trying to bite your own teeth',
                img: 'https://i.imgur.com/snV3aGU.png'
            },
            {
                title: 'Trust The Water',
                text: 'To have faith is to trust yourself to the water. When you swim you dont grab hold of the water, because if you do you will sink and drown. Instead you relax, and float.',
                img: 'https://i.imgur.com/sktvznU.png'
            },
            {
                title: 'Living Now',
                text: 'No work or love will flourish out of guilt, fear, or hollowness of heart, just as no valid plans for the future can be made by those who have no capacity for living now.',
                img: 'https://i.imgur.com/laYPizP.jpg'
            },
        ]

        return (
            <div>
                <Header />
                <Intro />
                <Posts posts={posts} />
                <div>
                {this.state.showBadEmailMsg && <h3>Bad Email Address</h3>}
                <form onSubmit={this.handleSubmit}>
                    <input type='text' value={this.state.email} placeholder='Email' onChange={this.handleEmailChange} />
                    <input type='password' value={this.state.password} placeholder='Password' onChange={this.handlePasswordChange} />
                    <input type='submit' />
                </form>
                </div>
                <NewPost open={false} />
            </div>
        )

    }

}

export default withStyles(styles)(Home)