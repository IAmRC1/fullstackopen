import React, { Component } from 'react'

export default class Total extends Component {
	render() {
		const { parts } = this.props.course;
		let total = parts.reduce((acc, part) => {
			return acc + part.exercises },0)
		return (
			<p>
				Number of exercises: {total}
			</p>
	)
	}
}
