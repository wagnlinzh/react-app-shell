import React, { Component } from 'react';

function Block(props) {
    return (
        <div style={blockClass} onClick={props.togglePageState}>
            {props.number}
        </div>
    );
}

function BlockList(props) {
    const blockNumbers = props.blockNumbers;
    const numberList =
        blockNumbers &&
        blockNumbers.map((number, index) => {
            return (
                <Block
                    number={number}
                    key={index}
                    togglePageState={props.togglePageState}
                />
            );
        });
    return <div>{numberList}</div>;
}

export default class AppContent extends Component {
    render() {
        return (
            <div style={contentStyle}>
                <BlockList
                    blockNumbers={this.props.blockNumbers}
                    togglePageState={this.props.togglePageState}
                />
            </div>
        );
    }
}
const contentStyle = {
    flex: 1,
    overflow: 'scroll'
};

const blockClass = {
    height: '200px',
    background: '#2196F3',
    margin: '20px 0',
    color: '#FFF',
    fontSize: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};
