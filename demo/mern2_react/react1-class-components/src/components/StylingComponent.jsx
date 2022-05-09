// 1. Bootstrap -- index.html
// 2. 3 ways of css

import React, { Component } from 'react'
// 1. direct import 
import '../styles/directimport.css'

// 3. css module
import styles from './StylingComponent.module.css'


const inlineStyle3 = {
    color: 'white',
    backgroundColor: "gainsboro"
}

export class StylingComponent extends Component {
    render() {
        const inlineStyle2 = {
            color: 'white',
            backgroundColor: this.props.color
        }

        return (
            <div>
                <button className='btn btn-primary'> Testing Bootstrap</button>
                <div className='directimport'> 1. Direct import</div>
                <div style={{color: "red"}}> 2.1 Inline styles</div>
                <div style={inlineStyle2}> 2.2 Inline styles</div>
                <div style={inlineStyle3}> 2.3 Inline styles</div>
                <div className={styles.cssModule}> 3. css module</div>
            </div>
        )
    }
}

export default StylingComponent

