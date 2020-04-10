import React, { Component } from 'react'

export default class Header extends Component {
	render() {
		const { course } = this.props;
		return (
			<>
				<h1>{course.name}</h1>
			</>
		)
	}
}
