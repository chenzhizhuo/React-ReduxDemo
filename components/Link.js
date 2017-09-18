/*
 * @Author: chenzhizhuo
 * @Date:   2017-09-17 17:01:08
 * @Last Modified by:   chenzhizhuo
 * @Last Modified time: 2017-09-17 17:03:28
 */

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
		} > < /a>
	)
}