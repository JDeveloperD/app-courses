import { Grid, Modal } from '@features/ui';
import { CourseCardDefault, CourseVideoPreview, Course } from '@features/course';
import { FC, useState } from 'react';
import { useToggle } from '@hooks';

export type CourseGridDefaultProps = {
  courses: any[],
}

const CourseGridDefault: FC<CourseGridDefaultProps> = ({ courses }) => {
  const [openVideoPreview, toggleOpenVideoPreview] = useToggle();
  const [idCourse, setIdCourse] = useState<number|null>(null);

  const handleVideoPreview = (id: number) => {
    toggleOpenVideoPreview();
    setIdCourse(id);
  };

  if (courses.length < 1) {
    return (
      <div>No hay cursos por elmomento</div>
    );
  }

  return (
    <>
      <Grid
        items={courses}
        columns={3}
        render={(course: Course) => (
          <CourseCardDefault
            key={course.id}
            handleVideoPreview={() => handleVideoPreview(course.id)}
            {...course}
          />
        )}
      />
      {openVideoPreview && idCourse && (
        <Modal closeFunction={toggleOpenVideoPreview}>
          <CourseVideoPreview id={idCourse} />
        </Modal>
      )}
    </>
  );
};

export default CourseGridDefault;
