/*
 * @Author: chenzhizhuo
 * @Date:   2017-09-17 16:39:17
 * @Last Modified by:   chenzhizhuo
 * @Last Modified time: 2017-09-17 20:22:03
 */

import {
	connect
} from "react-redux"
import {
	toggleTodo
} from "../actions"
import TodoList from "../components/TodoList"

const getVisibleTodos = (todos, filter) => {
	switch (filter) {
		case "SHOW_ALL":
			return todos
		case "SHOW_COMPLETED":
			return todos.filter(t => t.completed)
		case "SHOW_ACTIVE":
			return todos.filter(t => !t.completed)
	}
}
const mapStateToProps = (state) => {
	return {
		todos: getVisibleTodos(state.todos, state.visibilityFilter)
	}
}


const mapDispatchToProps = (dispatch) => {
	return {
		onTodoClick: (id) => {
			dispatch(toggleTodo(id))
		}
	}
}

const VisibleTodoList = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList)