/*
 * @Author: chenzhizhuo
 * @Date:   2017-09-17 16:47:10
 * @Last Modified by:   chenzhizhuo
 * @Last Modified time: 2017-09-24 11:49:44
 */
import React from 'react'
import Todo from "./Todo"

const TodoList = ({
	todos,
	onTodoClick
}) => (
	<ul>
        {todos.map( todo => {
		return (<Todo 
		    key={todo.id}
		    {...todo}
		    onClick={()=>onTodoClick(todo.id)} 
                />
        )
	})
        }
	</ul>
)

export default TodoList