import React from 'react';

class Header extends React.Component {


    constructor(props) {
        super(props)
        this.state = { date: new Date() }

    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({ date: new Date() })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 mt-1 text-left">
                        <h2><img style={{height: 70}} src="/images/logo/logo.jpg" alt="logo" />กินข้าวกัน</h2>
                    </div>
                    <div className="col-md-4 mt-4 text-right">
                        <h5 className="text-muted">{this.state.date.toLocaleTimeString()}</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;