/*
 * @Author: chenzhizhuo
 * @Date:   2017-09-17 15:36:08
 * @Last Modified by:   chenzhizhuo
 * @Last Modified time: 2017-09-23 21:57:51
 */
let nextTodoId = 0

//添加代办项
export const addTodo = (text) => {
	return {
		type: "ADD_TODO",
		id: nextTodoId++,
		text
	}
}

//过滤切换已处理/未处理 代办项数据
export const setVisibility = (filter) => {
	return {
		type: "SET_VISIBILITY_FILTER",
		filter
	}
}

// 设置代办项状态
export const toggleTodo = (id) => {
	return {
		type: 'TOGGLE_TODO',
		id
	}
}