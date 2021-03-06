import React from 'react'
export var IntervalEnhance = ComposedComponent => class extends React.Component {

	constructor(props){
		super(props);
		this.state ={
			seconds:0
		};
	}

	componentDidMount(){
		this.interval = setInterval(this.tick.bind(this),1000);
	}
	componentWillUnmount(){
		this.clearInterval(this.interval);
	}
	tick(){
		this.setState({seconds:this.state.seconds+1});
	}

	render(){
		return <ComposedComponent {...this.props} {...this.state} />
	}
};