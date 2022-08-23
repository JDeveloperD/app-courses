export interface User {
  id?: number
  email: string
  photo: string | null
  profile: 'administrator' | 'student' | 'instructor'
  name: string
}

export interface Estudent extends User { }

export interface Instructor extends User { }

export interface Video {
  id: number
  alt: string
  title: string
  thumb: string
  src: string
}

export type Price = {
  amount: number
  currency: 'PEN' | 'USD'
}

export type Time = {
  hour: number
  minute: number
  second: number
}

export interface Course {
  id: number;
  slug: string;
  name: string;
  excerpt: string | null;
  duration: Time;
  instructor: Instructor;
  category: number;
  level: number;
  price: Price;
  discount?: Price;
  video: Video;
  totalStudents: number;
  rating: number;
}
