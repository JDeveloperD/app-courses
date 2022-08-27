import {
  Col,
  Container,
  Row
} from '@features/ui';
import { CourseFilterLateral } from '@features/course';
import { AgroClubBannerCourseSlider } from '@features/agro-club';
import LayoutPublic from './Public';
import { ReactNode, FC } from 'react';

type LayoutStoreProps = {
  children: ReactNode
}

const StoreLayout: FC<LayoutStoreProps> = ({ children }) => {
  return (
    <LayoutPublic>
        <Container>
          <Row>
            <Col lg={3}>
              <CourseFilterLateral />
            </Col>
            <Col lg={9}>
              <AgroClubBannerCourseSlider />
              {children}
            </Col>
          </Row>
        </Container>
    </LayoutPublic>
  );
};

export default StoreLayout;
