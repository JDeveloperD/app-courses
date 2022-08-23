import faker from '@faker-js/faker';
import { Course } from '@features/course';
import { generateSlug } from '@utils/generateSlug';
import dataCourses from '@database/courses.json';

export const getCourseFake = (): Course => {
  const id = faker.datatype.number({ min: 10000000, max: 99999999 });
  const name = faker.commerce.productName();
  const slug = generateSlug(id, name);

  return {
    id,
    name,
    slug,
    level: faker.datatype.number({ min: 1, max: 3 }),
    duration: {
      hour: 1,
      minute: 40,
      second: 20
    },
    category: 1,
    video: {
      id: faker.datatype.number({ min: 10000000, max: 99999999 }),
      thumb: faker.image.image(1280, 768, true),
      alt: faker.lorem.text(),
      title: faker.lorem.words(10),
      src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    price: {
      amount: faker.datatype.float({ min: 340, max: 400, precision: 0.01 }),
      currency: 'USD'
    },
    discount: {
      amount: faker.datatype.float({ min: 100, max: 350, precision: 0.01 }),
      currency: 'USD'
    },
    instructor: {
      id: faker.datatype.number({ min: 10000000, max: 99999999 }),
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      email: faker.internet.email(),
      photo: faker.internet.avatar(),
      profile: 'instructor'
    },
    totalStudents: faker.datatype.number({ min: 143, max: 9873 }),
    excerpt: faker.lorem.paragraph(2),
    rating: faker.datatype.number({ min: 2, max: 5 })
  };
};

export const getCourses = async () => {
  // const courses = [1, 2, 3, 4, 5, 6, 7, 8]
  //   .map((): Course => getCourseFake());

  return { code: 200, data: dataCourses };
};

export const getCourseById = async (id: number) => {
  const courseFound = dataCourses.find((course) => course.id === id);

  return courseFound;
};
