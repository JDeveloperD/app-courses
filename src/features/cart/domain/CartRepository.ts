import { Course } from '@features/course';
import { Cart } from './Cart';

export interface CartRepository {
  addToCart(id: number): Cart
  removeToCart(id: number): Cart
  getPriceOfCourse(course: Course): number
}
