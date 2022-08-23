import { Course } from './Course';

export interface CourseRepository {
  getCourses(): Promise<Course[]>
  getCoursesByCategory({ category }: {category: number}): Promise<Course[]>
  getCourseById(id: number): Promise<Course>
}
