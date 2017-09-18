/*
 * @Author: chenzhizhuo
 * @Date:   2017-09-17 15:44:51
 * @Last Modified by:   chenzhizhuo
 * @Last Modified time: 2017-09-17 16:16:06
 */

const todo = (state, action) => ｛　
	switch (action.type) {
		case 'ADD_TODO':
			return {
				id: action.id,
				text: action.text,
				completed: false
			}
		case "TOGGLE_TODO":
			if (state.id !== action.id) {
				return state
			}
			return Object.assign({}, state, {
				completed: !sate.completed
			})
		default:
			return state
	}｝


const todos = (state, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				todo(undefined, action)
			]
		case "TOGGLE_TODO":
			//这里的state 表示待办事项list里的每一个 item
			return state.map(t => todo(t, action))
		default:
			return state
	}
}

export default todos