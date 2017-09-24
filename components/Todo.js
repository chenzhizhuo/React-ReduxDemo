/*
 * @Author: chenzhizhuo
 * @Date:   2017-09-17 16:50:45
 * @Last Modified by:   chenzhizhuo
 * @Last Modified time: 2017-09-24 14:19:40
 */
import React from 'react'
const Todo = ({
	onClick,
	completed,
	text
}) => ( < li onClick = {
		onClick
	}
	style = {
		{
			textDecoration: completed ? "line-through" : "none"
		}
	} > {
		text
	} < /li>
)

export default Todo