import React, { Component } from 'react';
import { Input, Button } from 'antd';
import TodoItem from './TodoItem';
import 'antd/dist/antd.css';

class App extends Component {
  constructor(props){
		super(props);
		this.state = {
			inputVal:"666",
			list:["Dell","Lee","App"]
		};
		this.handleClick = this.handleClick.bind(this);
		this.handleBtnClick = this.handleBtnClick.bind(this);
	}
  render() {
    return (
      <div className="App" style={{marginTop:"20px",marginLeft:"15px"}}>
				<Input 
					style={{width:300,marginRight:"10px"}} 
					value={this.state.inputVal}
					onChange={this.handleClick}
				/>
				<Button 
					type="primary"
					onClick = {this.handleBtnClick}
					>提交
				</Button>  
				<ul>
				{
					this.state.list.map((item,index) => {
						return <TodoItem 
									key = {index}
									index = {index}
									content={item}
									deleteItem = {this.handleDelete.bind(this)}
									/>
					})
				}     
				</ul>
				
      </div>
    );
	}
	
	handleClick(e) {	
		// this.setState({
		// 	inputVal:e.target.value
		// })
		// 新版react代码优化
		const value = e.target.value;
		this.setState(() => {
			return {
				inputVal:value
			}
		})
	};
	handleBtnClick() {		
		// this.setState({
		// 	list:[...this.state.list,this.state.inputVal],
		// 	inputVal:""
		// })	
		// 代码优化 接受一个参数，prevState = this.props （prevState等价于上一个参数）
		this.setState((prevState) => {
			return {
				// list:[...this.state.list,this.state.inputVal],
				list:[...prevState.list,this.state.inputVal],
				inputVal:""
			}
		})	
	};
	handleDelete(index) {
		// const arr = [...this.state.list];
		// arr.splice(index,1);
		// this.setState({
		// 	list:arr
		// })

		// 代码优化
		this.setState((prevState) => {
			const arr = [...prevState.list];
			arr.splice(index,1);
			return {
				list:arr
			}
		})
	}

}

export default App;
