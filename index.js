/*
 * @Author: chenzhizhuo
 * @Date:   2017-09-17 14:51:00
 * @Last Modified by:   chenzhizhuo
 * @Last Modified time: 2017-09-17 17:05:31
 */

import 'babel-polyfill'
import React from 'react'
import {
	render
} from 'react-dom'
import {
	Provider
} from 'react-redux'
import {
	createStore
} from 'redux'
import todoApp from './reducers'
import App from './components/App'

//createStore 通过reduce推断出我们需要的store
let store = createStore(todoApp)

//渲染通过Provider 包装后的顶层 App 组件
render(
	<Provider store={store}>
     <App />
    </Provider>,
	document.getElementById('root')
)