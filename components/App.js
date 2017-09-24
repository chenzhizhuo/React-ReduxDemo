/*
 * @Author: chenzhizhuo
 * @Date:   2017-09-17 16:21:25
 * @Last Modified by:   chenzhizhuo
 * @Last Modified time: 2017-09-24 11:16:42
 */
import React from 'react'
import AddTodo from '../container/AddTodo'
import VisibleTodoList from '../container/visibleTodoList'
import Footer from './Footer'

const App = () => (
	<div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
)

export default App