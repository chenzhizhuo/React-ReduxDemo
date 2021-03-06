/*
 * @Author: chenzhizhuo
 * @Date:   2017-09-17 16:25:04
 * @Last Modified by:   chenzhizhuo
 * @Last Modified time: 2017-09-24 11:36:10
 */
import React from 'react'
import {
	connect
} from 'react-redux'
import {
	addTodo
} from "../actions"

let AddTodo = ({
	dispatch
}) => {
	let input;
	return (
		<div>
             <form onSubmit ={
             	e =>{
　　　　　　　　　　e.preventDefault()
					if(!input.value.trim()){return}
					dispatch(addTodo(input.value))
					input.value=""
             	}}>
                 <input ref={node=>{input=node}} />
                 <button type="submit">
                    Add Todo
                 </button>
             </form>
        </div>
	)
}

AddTodo = connect()(AddTodo)

export default AddTodo