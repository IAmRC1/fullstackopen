import React, { Component } from 'react'

export default class Part extends Component {
	render() {
		const { parts } = this.props.course;
		return parts.map(part => <h3 key={part.id}>{part.name}</h3>)
	}
}
