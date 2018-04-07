import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';
import AppHeader from '../components/app-header';
const duration = 300;

export default class Page extends Component {
    render() {
        return (
            <Transition in={this.props.in} timeout={duration}>
                {state => (
                    <div
                        style={{
                            ...defaultStyle,
                            ...transitionStyles[state],
                            ...contianer
                        }}
                    >
                        <AppHeader
                            togglePageState={this.props.togglePageState}
                        />
                        <div style={content}>
                            <span>Page1</span>
                        </div>
                    </div>
                )}
            </Transition>
        );
    }
}

const defaultStyle = {
    transition: `transform ${duration}ms ease-in-out`,
    transform: 'translateX(100%)'
};

const transitionStyles = {
    entering: { transform: 'translateX(100%)' },
    entered: { transform: 'translateX(0)' }
};

const contianer = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: '#2196F3',
    zIndex: 1,
    textAlgin: 'center'
};

const content = {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    fontSize:'30px',
    color:'#fff'
};
