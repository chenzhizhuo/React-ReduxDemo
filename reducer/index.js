/*
 * @Author: chenzhizhuo
 * @Date:   2017-09-17 16:15:45
 * @Last Modified by:   chenzhizhuo
 * @Last Modified time: 2017-09-17 16:20:38
 */
import todos from './todos'
import visiblityFilter from './visibilityFilter'
import {
	combinerReducers
} from 'redux'

//通过 combinerReducers 合并所有的reducer
const totoApp = combinerReducers({
	todos,
	visibilityFilter
})

export default totoApp