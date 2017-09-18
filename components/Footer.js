/*
 * @Author: chenzhizhuo
 * @Date:   2017-09-17 16:53:11
 * @Last Modified by:   chenzhizhuo
 * @Last Modified time: 2017-09-17 16:56:05
 */

import FilterLink form "../containers/FilterLink"

const Footer = () => (
	<p>
     Show:
     {" "}
     <FilterLink filter="SHOW_ALL">
       All
     </FilterLink>
      <FilterLink filter="SHOW_ACTIVY">
       Active
     </FilterLink>
      <FilterLink filter="SHOW_COMPLETED">
       Completed
     </FilterLink>
    </p>
)

export default Footer