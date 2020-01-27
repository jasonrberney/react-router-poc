import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';

export default function Redirector(props) {
    if (props.readyToRedirect === true && props.redirectLink) {
        return <Redirect to={`/${props.redirectLink}`} />
    }

    return (
        <Fragment>
        </Fragment>
    );
}
