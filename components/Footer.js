/*
 * @Author: chenzhizhuo
 * @Date:   2017-09-17 16:53:11
 * @Last Modified by:   chenzhizhuo
 * @Last Modified time: 2017-09-24 15:21:25
 */
import React from 'react'
import FilterLink from "../container/FilterLink"

const Footer = () => (
  <p>
     Show:
     {" "}
     <FilterLink filter="SHOW_ALL">
       All
     </FilterLink>
     {", "}
      <FilterLink filter="SHOW_ACTIVE">
       Active
     </FilterLink>
     {", "}
      <FilterLink filter="SHOW_COMPLETED">
       Completed
     </FilterLink>
    </p>
)

export default Footer