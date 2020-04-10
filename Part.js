import React, { Component } from 'react'

export default class Part extends Component {
	render() {
		const { parts } = this.props.course;
		let part = parts.map((val, i) => (
					<p key={i} className="text-blue-700">
						{val.name} : {val.exercises}
					</p>
			)
		)
		return part;
	}
}
