import React, { Component } from 'react'

export default class Total extends Component {
	render() {
		const { course } = this.props;
		const total = course.parts[0].exercises+course.parts[1].exercises+course.parts[2].exercises;
		return (
			<p>
				Number of exercises: {total}
			</p>
	)
	}
}
