import React, { Component } from 'react';
import {Card , Button} from 'react-bootstrap';
import UserDashBoard from '../UserDashBoard/UserDashBoard'
export default class Candidate extends Component {
    render() {
        return (
            <div>
                <UserDashBoard/>
            </div>
        )
    }
}
