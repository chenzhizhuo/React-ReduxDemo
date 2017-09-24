/*
 * @Author: chenzhizhuo
 * @Date:   2017-09-17 17:01:08
 * @Last Modified by:   chenzhizhuo
 * @Last Modified time: 2017-09-23 22:18:37
 */
import React from 'react'
const Link = ({
	active,
	children,
	onClick
}) => {
	if (active)
		return <span>{children}</span>

	return ( < a href = "#"
		onClick = {
			e => {
				e.preventDefault()
				onClick()
			}
		} > {
			children
		} < /a>
	)
}

export default Link