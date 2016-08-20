import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursesPage extends React.Component {

	constructor (props, context) {
		super(props, context);
	}

	render () {
		const {courses} = this.props;
		return (
			<div>
				<h1>Courses</h1>
				<CourseList courses={courses} />
			</div>
		);
	}

}

// This maps what is on current state in the store to props.
// Called everytime store state changes
function mapStateToProps (state, ownProps) {
	return {
		courses: state.courses
	}
}

//  'dispatch' is injected by react-redux
function mapDispatchToProps (dispatch) {
	return {
		//
		actions: bindActionCreators(courseActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
