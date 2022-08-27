import { Badge } from '@features/ui';

const CourseLevel = ({ level, ...props }: {level: number}) => {
  if (level === 1) {
    return (
      <Badge {...props} color='success'>Básico</Badge>
    );
  }

  if (level === 2) {
    return (
      <Badge {...props} color='warning'>Intermedio</Badge>
    );
  }

  if (level === 3) {
    return (
      <Badge {...props} color='danger'>Avanzado</Badge>
    );
  }

  return (
    <Badge {...props} color='gray'>No tiene nivel</Badge>
  );
};

export default CourseLevel;
