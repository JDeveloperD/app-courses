import { BsFolder2Open, HeadLine, LineDividerText } from '@features/ui';
import { formatTimeDefault } from '@utils/formatTime';
import Link from 'next/link';
import { FC } from 'react';
import {
  Wrapper,
  Accordion,
  AccordionItem,
  Summary,
  ListLesson,
  Lesson
} from './listAccordeon.styled';

const modules = [
  {
    id: 'module-1',
    title: 'Donec rutrum congue leo eget malesuada.',
    locked: false,
    lessons: [
      {
        id: 'module-1-lesson-1',
        title: 'Donec rutrum congue leo eget malesuada.',
        duration: {
          hour: 0,
          minute: 12,
          second: 26
        },
        comments: [],
        numLikes: 99,
        resources: [],
        slug: 'codelesson-name-lesson'
      },
      {
        id: 'module-1-lesson-2',
        title: 'Donec rutrum congue leo eget malesuada.',
        duration: {
          hour: 0,
          minute: 12,
          second: 26
        },
        comments: [],
        numLikes: 99,
        resources: [],
        slug: 'codelesson-name-lesson'
      },
      {
        id: 'module-1-lesson-3',
        title: 'Donec rutrum congue leo eget malesuada.',
        duration: {
          hour: 0,
          minute: 12,
          second: 26
        },
        comments: [],
        numLikes: 99,
        resources: [],
        slug: 'codelesson-name-lesson'
      }
    ]
  },
  {
    id: 'module-2',
    title: 'Donec rutrum congue leo eget malesuada.',
    locked: false,
    lessons: [
      {
        id: 'module-2-lesson-1',
        title: 'Donec rutrum congue leo eget malesuada.',
        duration: {
          hour: 0,
          minute: 12,
          second: 26
        },
        comments: [],
        numLikes: 99,
        resources: [],
        slug: 'codelesson-name-lesson'
      },
      {
        id: 'module-2-lesson-2',
        title: 'Donec rutrum congue leo eget malesuada.',
        duration: {
          hour: 0,
          minute: 12,
          second: 26
        },
        comments: [],
        numLikes: 99,
        resources: [],
        slug: 'codelesson-name-lesson'
      },
      {
        id: 'module-2-lesson-3',
        title: 'Donec rutrum congue leo eget malesuada.',
        duration: {
          hour: 0,
          minute: 12,
          second: 26
        },
        comments: [],
        numLikes: 99,
        resources: [],
        slug: 'codelesson-name-lesson'
      }
    ]
  },
  {
    id: 'module-3',
    title: 'Donec rutrum congue leo eget malesuada.',
    locked: false,
    lessons: [
      {
        id: 'module-3-lesson-1',
        title: 'Donec rutrum congue leo eget malesuada.',
        duration: {
          hour: 0,
          minute: 12,
          second: 26
        },
        comments: [],
        numLikes: 99,
        resources: [],
        slug: 'codelesson-name-lesson'
      },
      {
        id: 'module-3-lesson-2',
        title: 'Donec rutrum congue leo eget malesuada.',
        duration: {
          hour: 0,
          minute: 12,
          second: 26
        },
        comments: [],
        numLikes: 99,
        resources: [],
        slug: 'codelesson-name-lesson'
      },
      {
        id: 'module-3-lesson-3',
        title: 'Donec rutrum congue leo eget malesuada.',
        duration: {
          hour: 0,
          minute: 12,
          second: 26
        },
        comments: [],
        numLikes: 99,
        resources: [],
        slug: 'codelesson-name-lesson'
      }
    ]
  }
];

type ModuleListAccordeonProps = {
  className?: string
}

const ModuleListAccordeon: FC<ModuleListAccordeonProps> = ({ className }) => {
  return (
    <Wrapper className={className}>
      <div className='d-flex justify-content-between align-items-center mb-3'>
        <HeadLine size={5} color='light' className='d-flex align-items-center gap-2'> <BsFolder2Open /> Módulos</HeadLine>
        <HeadLine size={5} color='light'> 5h 23m</HeadLine>
      </div>
      <LineDividerText color='gray' className='mb-4'/>
      <Accordion>
        {modules.map((module, key) => {
          const moduleOrder = ++key;
          const { lessons } = module;

          return (
            <AccordionItem key={module.id}>
              <Summary>{moduleOrder}. Donec rutrum congue leo eget malesuada.</Summary>
              <ListLesson>

                {lessons.map((lesson, key) => {
                  const lessonOrder = ++key;
                  return (
                    <Lesson key={lesson.id}>
                      <Link href={`/clases/${lesson.slug}`}>
                        <a className='d-flex gap-2 w-100 justify-content-between'>
                          {moduleOrder}.{lessonOrder}. {lesson.title}
                          <span>
                            {formatTimeDefault(lesson.duration)}
                          </span>
                        </a>
                      </Link>
                    </Lesson>
                  );
                })}
              </ListLesson>
            </AccordionItem>
          );
        })}
      </Accordion>
    </Wrapper>
  );
};

export default ModuleListAccordeon;
