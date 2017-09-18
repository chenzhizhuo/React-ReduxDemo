/*
 * @Author: chenzhizhuo
 * @Date:   2017-09-17 16:56:44
 * @Last Modified by:   chenzhizhuo
 * @Last Modified time: 2017-09-17 17:00:33
 */
import {
	connect
} from "react-redux"
import Link from "../components/Link"
import {
	setVisibility
} from "../actins"

const mapStateToProps = (state, ownProps) => {
	return {
		active: ownProps.filter === state.visibilityFilter
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClick: () => {
			dispatch(setVisibility(ownProps.filter))
		}
	}
}

const FilterLink = connect(
	mapStateToProps,
	mapDispatchToProps
)(Link)