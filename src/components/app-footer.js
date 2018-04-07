import React, { Component } from 'react';
function Dot() {
    return <div style={dotClass} />;
}

export default class AppFooter extends Component {
    render() {
        return (
            <div style={footerStyle}>
                <Dot />
                <Dot />
                <Dot />
                <Dot />
            </div>
        );
    }
}

const footerStyle = {
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: ' space-evenly',
    borderTop: '1px solid #ccc',
    boxShadow: 'rgb(228, 228, 228) 6px -7px 19px 0px'
};

const dotClass = {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    borderColor: '#2196F3',
    borderWidth: '1px',
    borderStyle: 'solid',
    margin: '0 20px'
};
