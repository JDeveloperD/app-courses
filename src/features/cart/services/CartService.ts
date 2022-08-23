import { Cart, CartRepository } from '../domain';
import { Course } from '@features/course';

export class CartService implements CartRepository {
  readonly cartState: any = {};
  readonly courses: any[] = [];

  constructor (cartState: Cart, courses: any[]) {
    this.cartState = cartState;
    this.courses = courses;
  }

  addToCart(id: number): Cart {
    const courseFound: Course = this.courses
      .find((course: Course) => course.id === id);
    const itemAdded: Course[] = [...this.cartState.itemsOnCart, courseFound];

    const amount = this.getPriceOfCourse(courseFound);
    const total = this.cartState.total + amount;

    const cart: Cart = { itemsOnCart: itemAdded, total: parseFloat(total) };
    return cart;
  }

  removeToCart(id: number): Cart {
    const newItems = this.cartState.itemsOnCart
      .filter((course: Course) => course.id !== id);

    const courseFound: Course = this.courses
      .find((course: Course) => course.id === id);
    const amount = this.getPriceOfCourse(courseFound);
    const total = this.cartState.total - amount;

    const cart: Cart = { itemsOnCart: newItems, total: parseFloat(total.toString()) };
    return cart;
  }

  getPriceOfCourse(course: Course): number {
    if (course.discount?.amount) {
      return course.discount.amount;
    }

    return course.price.amount;
  }
}
