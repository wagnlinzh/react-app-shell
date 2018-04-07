import React, { Component } from 'react';
import AppConent from './components/app-content';
import AppHeader from './components/app-header';
import AppFooter from './components/app-footer';
import Page from './components/page';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerIn: false,
            pageShow: false,
            blockNumbers: [1, 2, 3, 4, 5, 6]
        };
    }
    toggleInState = () => {
        if (!this.state.headerIn) {
            this.setState({ headerIn: true });
        } else {
            this.setState({ headerIn: false });
        }
    };
    togglePageState = () => {
        if (!this.state.pageShow) {
            this.setState({ pageShow: true });
        } else {
            this.setState({ pageShow: false });
        }
    };
    render() {
        return (
            <div className="App">
                <AppHeader/>
                <AppConent
                    togglePageState={this.togglePageState}
                    blockNumbers={this.state.blockNumbers}
                />
                <AppFooter />
                <Page
                    in={this.state.pageShow}
                    togglePageState={this.togglePageState}
                />
            </div>
        );
    }
}

export default App;
