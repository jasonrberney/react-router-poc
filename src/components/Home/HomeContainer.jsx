import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from './Home.jsx';

class HomeContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }

    }

    componentDidMount() {

    }

    render() {

        return (
            <Fragment>
                <Home
                    title={this.props.title}
                />
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        test: state.reducer.test
    }
}

export default connect(mapStateToProps)(HomeContainer);