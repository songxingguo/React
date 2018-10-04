import React, { Component } from 'react';
import ClickCounter from '../pages/chapter-01/ClickCounter'

class Index extends Component {
    render() {
        return (
            <ul>
                <li><a>例子一</a></li>
                <ClickCounter></ClickCounter>
            </ul>
        );
    }
}

export default Index;
