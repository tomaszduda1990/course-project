import React from 'react'
import img from '../../assets/404.png'
class NotFound extends React.Component {
    componentDidMount() {
        setTimeout(() => this.props.history.push('/'), 5000)
    }
    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <h2>PLEASE WAIT, YOU WILL BE REDIRECTED TO MAIN PAGE</h2>
                <img src={img} alt="not found" />
            </div>
        )
    }
}

export default NotFound
