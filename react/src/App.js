import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { getChangeInputValue, getAddItem, getDeleteItem, getlList } from './store/actionCreator';
import { CHANGE_INPUT_VALUE, DELETE_ITEM, ADD_ITEM, INITIAL_LIST } from './store/actionTypes';
import axios from 'axios';

class App extends Component {
  render() {
    let { inputVal, list, handleChange, handleBtnClick, handleBtnDelete } = this.props;
    return (
      <div className="App">
                <div>
                <input type="text" value= {inputVal} onChange = {handleChange}/>
                <button onClick = {handleBtnClick}>按钮</button>
                </div>
                <ul>
                {
                    list.map((item,index) => {
                        return (
                        <li key={index} index = {index} onClick = {() => {handleBtnDelete(index)}}>{item}</li>
                        )
                    })
                }
                </ul>
        </div>
    );
  }
  componentDidMout = () => {
  
  }
}
// state是store里面的数据，把store里面的state数据映射到组件中
const mapStateToProps = (state) => {
  return {
    inputVal: state.inputVal,
    list: state.list
  }
}
// 把store.dispatch 方法挂载到dispatch 上面
const mapDispatchToProps = (dispatch) => {
  return {
    // handleChange = (e) => {   // 对象里面不能是等号
    handleChange(e){
      const action = {
        type:CHANGE_INPUT_VALUE,
        value:e.target.value
      }
      dispatch(action);
    },
    handleBtnClick() {
      const action = {
        type:ADD_ITEM
      }
      dispatch(action)
    },
    handleBtnDelete(index) {
      console.log(index)
      const action = {
        type:DELETE_ITEM,
        index
      };
      dispatch(action)
    },
    handleAjax(){
      axios.get("/list.json").then( (res) => {
        console.log(res)
      })
    }
  }
}

// connect 让组件和sore做连接
export default connect(mapStateToProps, mapDispatchToProps)(App);
