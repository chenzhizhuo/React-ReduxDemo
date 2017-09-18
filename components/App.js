/*
 * @Author: chenzhizhuo
 * @Date:   2017-09-17 16:21:25
 * @Last Modified by:   chenzhizhuo
 * @Last Modified time: 2017-09-17 18:58:05
 */
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import Footer from './Footer'

const App = () => (
	<div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
)

export default App