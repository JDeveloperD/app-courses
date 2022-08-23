import { Course } from '../domain';

export interface CourseGlobalState {
  initialCourses: Course[]
}

const courseStateDefault: CourseGlobalState = {
  initialCourses: []
};

export default courseStateDefault;
