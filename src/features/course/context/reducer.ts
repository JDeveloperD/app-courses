import CourseTypes from './types';

const courseReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CourseTypes.ADD_COURSES:
      return {
        ...state,
        initialCourses: payload
      };
    default:
      return state;
  }
};

export default courseReducer;
