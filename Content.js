import React, { Component } from 'react'
import Part from './Part.js'

export default class Content extends Component {
    render() {
        const { course} = this.props;
        return (
            <Part course={course} />
         )
    }
}
