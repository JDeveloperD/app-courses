import { createContext, useContext } from 'react';

export const CourseContext = createContext<any>(null);

export const useCourseContext = () => useContext(CourseContext);
