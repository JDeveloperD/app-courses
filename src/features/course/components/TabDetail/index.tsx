import { ModuleListAccordeon } from '@features/modules';
import {
  Tab,
  BsCameraVideo,
  BsFolder,
  BsFiles
} from '@features/ui';
import { useState } from 'react';
import Presentation from '../Presentation';

const TabDetail = () => {
  const [tabActive, setTabActive] = useState(0);

  const head = [
    {
      id: 'tab-features-1',
      nameTab: 'Presentación',
      icon: <BsCameraVideo />
    },
    {
      id: 'tab-features-2',
      nameTab: 'Módulos y clases',
      icon: <BsFolder />
    },
    {
      id: 'tab-features-3',
      nameTab: 'Recursos',
      icon: <BsFiles />
    }
  ];

  const body = [
    {
      id: 'tab-features-content-1',
      content: <Presentation />
    },
    {
      id: 'tab-features-content-2',
      content: <ModuleListAccordeon />
    },
    {
      id: 'tab-features-content-3',
      content: 'CONTENIDO DE RECURSOS'
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
