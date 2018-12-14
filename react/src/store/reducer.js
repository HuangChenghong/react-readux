import { CHANGE_INPUT_VALUE, DELETE_ITEM, ADD_ITEM, INITIAL_LIST } from './actionTypes';
const defaultState = {
  inputVal:"hello",
  list:[6,8,9]
}

export default (state = defaultState,action) => {
	// const newState = JSON.parse(JSON.stringify(state));
	if(action.type === CHANGE_INPUT_VALUE) {
		const newState = JSON.parse(JSON.stringify(state))		
		newState.inputVal = action.value;
		return newState;
	}
	if(action.type === ADD_ITEM) {
		// const newState = JSON.parse(JSON.stringify(state))
		const newState = Object.assign({},state);
		newState.list.push(newState.inputVal);
		newState.inputVal = "";
		return newState;
	}
	if(action.type === DELETE_ITEM) {
		const newState = JSON.parse(JSON.stringify(state))
		newState.list.splice(action.index,1);
		return newState;
	}
	if(action.type === INITIAL_LIST) {
		const newState = JSON.parse(JSON.stringify(state))
		newState.list = action.data;
		return newState;
	}
	return state
}