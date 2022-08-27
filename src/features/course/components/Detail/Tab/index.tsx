import { ModuleListAccordeon } from '@features/modules';
import {
  Tab,
  BsCameraVideo,
  BsFolder,
  BsFiles
} from '@features/ui';
import { useState } from 'react';
import CourseDetailPresentation from '../Presentation';
import CourseDetailResources from '../Resources';

const TabDetail = () => {
  const [tabActive, setTabActive] = useState(0);

  const head = [
    {
      id: 'tab-detail-1',
      nameTab: 'Presentación',
      icon: <BsCameraVideo />
    },
    {
      id: 'tab-detail-2',
      nameTab: 'Módulos y clases',
      icon: <BsFolder />
    },
    {
      id: 'tab-detail-3',
      nameTab: 'Recursos',
      icon: <BsFiles />
    }
  ];

  const body = [
    {
      id: 'tab-detail-content-1',
      content: <CourseDetailPresentation />
    },
    {
      id: 'tab-detail-content-2',
      content: <ModuleListAccordeon />
    },
    {
      id: 'tab-detail-content-3',
      content: <CourseDetailResources />
    }
  ];

  return (
    <Tab.Wrapper>
      <Tab.Head>
        {head.map((headItem, key) => (
          <Tab.Button
            key={headItem.id}
            active={key === tabActive}
            onClick={() => setTabActive(key)}
          >
            {headItem.icon} {headItem.nameTab}
          </Tab.Button>
        ))}
      </Tab.Head>
      <Tab.Body>
        {body.map((bodyItem, key) => (
          <Tab.Content key={bodyItem.id}>
            {key === tabActive && bodyItem.content}
          </Tab.Content>
        ))}
      </Tab.Body>
    </Tab.Wrapper>
  );
};

export default TabDetail;
