import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'

export class Container extends Component {
    render() {
        return (
            <fieldset>
                <legend> Container.jsx</legend>
                {this.props.children}
                <Header />
                <Main />
                <Footer />
            </fieldset>
        )
    }
}

export default Container