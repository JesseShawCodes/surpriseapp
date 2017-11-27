import React from 'react';

import SurpriseButton from './surprise-button';
import SurpriseImage from './surprise-image';

export default class Surprise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'button',
            type: 'cat'
        }
    }

    showImage() {
        this.setState({
            display: 'image'
        });
    }

    showButton() {
        this.setState({
            display: 'button'
        });
    }

    render() {
        if (this.state.display === 'button') {
            return <SurpriseButton onClick={e => this.showImage()} />;
        }
        else if (this.state.display === 'image') {
            return <SurpriseImage onClick={e => this.showButton()} type={this.state.type} />;
        }
    }
}
