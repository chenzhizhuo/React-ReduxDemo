/*
 * @Author: chenzhizhuo
 * @Date:   2017-09-17 16:50:45
 * @Last Modified by:   chenzhizhuo
 * @Last Modified time: 2017-09-17 16:52:07
 */

const Todo = ({
		onClick,
		completed,
		text
	}) => (
		<li
      onClick={onClick}
      style={{textDecoration:completed?"line-trough":"none"}}>
)