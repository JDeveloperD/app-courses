import { Course, CourseRepository } from '../domain';

export default class CourseService implements CourseRepository {
  readonly courseState = {};

  constructor(courseState) {
    this.courseState = courseState;
  }

  getCourses(): Promise<Course[]> {
    throw new Error('Method not implemented.');
  }

  getCoursesByCategory({ category }: { category: number; }): Promise<Course[]> {
    throw new Error('Method not implemented.');
  }

  getCourseById(id: number): Promise<Course> {
    throw new Error('Method not implemented.');
  }
}
