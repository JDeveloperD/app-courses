import { CourseCardShort } from '@features/course';
import { ModuleListAccordeon } from '@features/modules';
import { Container } from 'react-bootstrap';
import {
  AiOutlineHeart,
  BsFiles,
  BsShare,
  Button,
  Col,
  FiUsers,
  GoCommentDiscussion,
  HeadLine,
  LineDividerText,
  Player,
  Row,
  Section
} from '@features/ui';
import dataCourses from '@database/courses.json';
import dataComments from '@database/comments.json';
import { UserAvatar } from '@features/user';
import { LessonComments } from '@features/lesson';
export const getServerSideProps = () => {
  return {
    props: {
      recommendedCourse: dataCourses[0],
      comments: dataComments
    }
  };
};

const LessonPage = ({ recommendedCourse, comments }) => {
  return (
    <Section>
      <Container fluid>
        <Row className='pt-5'>
          <Col xl={9}>
            <Player
              thumb='https://crehana-public-catalog.imgix.net/images/courses/promo-images/954d2f1e/f40fa18d.jpeg?auto=format&w=322&h=219&q=55&fit=crop&dpr=2'
              src='https://cdn.int64ago.org/p26nad4i.mp4'
              className='mb-4'
            />
            <div className="d-flex justify-content-between align-items-center mb-4">
              <UserAvatar
                src='/img/profile/fiorela.jpg'
                name='David Sandoval'
                profession='Ing. Sistemas'
              />
              <div className='d-flex gap-3'>
                <Button variant='link' color='light'>
                  <FiUsers /> 99 <span className='d-none d-lg-inline'>Alumnos</span>
                </Button>
                <Button variant='link' color='light'>
                  <AiOutlineHeart /> 5 <span className='d-none d-lg-inline'>Me gusta</span>
                </Button>
                <Button variant='link' color='light'>
                  <BsShare /> <span className='d-none d-lg-inline'>Compartir</span>
                </Button>
              </div>
            </div>
            <LineDividerText color='gray'/>
            <div className="my-4">
              <div className='mb-3 d-flex gap-3'>
                <Button color='secondary' variant='outlined'>
                  <BsFiles /> 2 <span className='d-none d-lg-inline'>Recursos</span>
                </Button>
                <Button color='secondary' variant='outlined'>
                  <GoCommentDiscussion /> 5 <span className='d-none d-lg-inline'>Comentarios</span>
                </Button>
              </div>
              <LessonComments comments={comments} />
            </div>
          </Col>
          <Col xl={3}>
            <ModuleListAccordeon className='mb-5' />
            <CourseCardShort {...recommendedCourse} />
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

LessonPage.layout = 'player';

export default LessonPage;
