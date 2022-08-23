import { ModuleListAccordeon } from '@features/modules';
import { Col, Container, HeadLine, Player, Row, Section } from '@features/ui';

const LessonPage = () => {
  return (
    <Section topSection>
      <Container>
        <Row>
          <Col lg={8}>
            <Player
              thumb='https://crehana-public-catalog.imgix.net/images/courses/promo-images/954d2f1e/f40fa18d.jpeg?auto=format&w=322&h=219&q=55&fit=crop&dpr=2'
              src='https://cdn.int64ago.org/p26nad4i.mp4'
              className='mb-4'
            />
            <HeadLine
              size={2}
              as='h1'
              color='light'
              className='mb-0'
            >Python intermedio: funciones y algoritmosas</HeadLine>
            <hr className='mb-4' />
          </Col>
          <Col lg={4}>
            <ModuleListAccordeon />
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default LessonPage;
