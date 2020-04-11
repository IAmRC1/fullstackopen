import React, { Component } from 'react'
import Header from './Header'
import Content from './content/Content'
import Total from './Total'

export default class Course extends Component {
	render() {
    const { course } = this.props;
		return (
      <>
			<Header course={course} />
      <Content course={course} />
      <Total course={course} />
      </>
		)
	}
}
