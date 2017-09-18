/*
 * @Author: chenzhizhuo
 * @Date:   2017-09-17 16:12:00
 * @Last Modified by:   chenzhizhuo
 * @Last Modified time: 2017-09-17 16:19:17
 */

const visibilityFilter = (state = "SHOW_ALL", action) => {
	switch (action.type) {
		case "SET_VISIBILITY_FILTER":
			return action.visiblityFilter
		default:
			return state
	}
}

export default visibilityFilter