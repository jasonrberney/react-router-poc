import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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

export default withRouter(connect(mapStateToProps)(HomeContainer));