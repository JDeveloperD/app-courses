import { Course } from '@features/course';

export type ItemCart = Pick<Course,
'id' | 'name' | 'instructor' | 'slug' | 'price' | 'discount'
>

export interface Cart {
  itemsOnCart: ItemCart[];
  total: number;
  coupon?: string;
  igv?: number;
  user?: number | undefined;
}
