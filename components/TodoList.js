/*
 * @Author: chenzhizhuo
 * @Date:   2017-09-17 16:47:10
 * @Last Modified by:   chenzhizhuo
 * @Last Modified time: 2017-09-17 16:49:20
 */

import Todo from "../Todo"

const TodoList = ({
	todos,
	onTodoClick
}) => {
	<ul>
        {
        	todos.map( todo => {
        		<Todo 
        		    key={todo.id}
        		    {...todo}
        		    onClick={()=>onTodoClick(todo.id)}
        	})
        }
	</ul>
}