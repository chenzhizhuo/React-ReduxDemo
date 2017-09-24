/*
 * @Author: chenzhizhuo
 * @Date:   2017-09-17 16:15:45
 * @Last Modified by:   chenzhizhuo
 * @Last Modified time: 2017-09-23 17:35:44
 */
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import {
	combineReducers
} from 'redux'

//通过 combineReducers 合并所有的reducer
const todoApp = combineReducers({
	todos,
	visibilityFilter
})

export default todoApp