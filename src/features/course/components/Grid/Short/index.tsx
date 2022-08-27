import { Grid } from '@features/ui';
import { CourseCardShort, Course } from '@features/course';
import { FC } from 'react';

export type CourseGridShortProps = {
  courses: any[],
}

const CourseGridShort: FC<CourseGridShortProps> = ({ courses }) => {
  if (courses.length < 1) {
    return (
      <div>No hay cursos por elmomento</div>
    );
  }

  return (
    <Grid
      items={courses}
      columns={3}
      render={(course: Course) => (
        <CourseCardShort
          key={course.id}
          {...course}
        />
      )}
    />
  );
};

export default CourseGridShort;
