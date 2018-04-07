import React, { Component } from 'react';

export default class AppHeader extends Component {
    render() {
        return (
            <div
                style={{
                    ...header
                }}
                onClick={this.props.togglePageState}
            >
                <div style={backIcon}/>
                header
            </div>
        );
    }
}

const header = {
    height: '60px',
    textAlign: 'center',
    borderBottom: '1px solid #ccc',
    display: 'flex',
    alignItems: 'center',
    justifyContent: ' space-evenly',
    boxShadow: '3px 4px 19px 0px #e4e4e4',
    background:'#fff'
};
const backIcon = {
    position: 'absolute',
    top: '20px',
    left: '20px',
    borderLeft: '1px solid #000',
    borderBottom: '1px solid #000',
    transform: 'rotate(45deg)',
    width: '20px',
    height: '20px'
};
