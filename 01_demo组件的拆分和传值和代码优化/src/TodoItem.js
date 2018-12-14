import React, { Component } from 'react';

class TodoItem extends Component {
    constructor(props){
        super(props)
        this.handleBtnDelete = this.handleBtnDelete.bind(this)
    }
  render(){
       //   代码优化 结构复制，一定要在前面加花括号 {}
       const { content } = this.props;

      return(      
        <li 
            key={this.props.index} 
            onClick = {this.handleBtnDelete}
            >
            {content}
        </li>
      )
  }
  
  handleBtnDelete() {
    //  this.props.deleteItem(this.props.index);

    //  优化代码
    // const { delete,index} = this.props;
    const { deleteItem, index} = this.props;
    deleteItem(index); 
  }
}

export default TodoItem;