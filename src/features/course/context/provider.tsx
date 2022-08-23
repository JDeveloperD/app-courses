import { CourseContext } from './context';
import { FC, ReactNode, useReducer } from 'react';
import courseReducer from './reducer';
import courseStateDefault from './state';

const CourseProvider: FC<{children: ReactNode}> = ({ children }) => {
  const [state, dispatch] = useReducer(courseReducer, courseStateDefault);
  return (
    <CourseContext.Provider value={[state, dispatch]}>
      {children}
    </CourseContext.Provider>
  );
};

export default CourseProvider;
