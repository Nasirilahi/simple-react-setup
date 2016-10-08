import React,{Component} from 'react';
import List from './List';
export default class MainList extends Component{
constructor(){
	super();
	this.state = {
		initialItems: [
         "Apples",
         "Broccoli",
         "Chicken",
         "Duck",
         "Eggs",
         "Fish",
         "Granola",
         "Hash Browns"
       ],
       items:[]
	};
	this.filterList = this.filterList.bind(this);
}
filterList(e){
	var updateList = this.state.initialItems;
	updateList = updateList.filter((item)=>{
		return item.toLowerCase().search(e.target.value.toLowerCase())!==-1;
	});	
	this.setState({items:updateList});  
}
componentWillMount(){
		this.setState({items:this.state.initialItems});
}
render(){
	return(
		<div className="filter-list">
		<input type="text" placeholder="Search" onChange ={ this.filterList } />
		<List items={ this.state.items }/>
		</div>
		);
		
}
} 