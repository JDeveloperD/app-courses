import { Col, Container, HeadLine, Lead, Row, Section } from '@features/ui';
import { InstructorCardDefault } from '@features/instructor';

const InstructorSectionGroup = () => {
  return (
    <Section>
      <Container>
        <div className='text-center'>
          <HeadLine size={1} className="mb-1">Especialistas en Agrou Club</HeadLine>
          <Lead maxWidth="540px" className='mb-4 mx-auto'>
          Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.
          </Lead>
        </div>
        <Row className='justify-content-center'>
          <Col lg={4}>
            <InstructorCardDefault
              name="James David"
              excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula sit amet enim ac sagittis. Curabitur…"
              position="Marketing Manager"
              photo="/img/profile/fiorela.jpg" />
          </Col>
          <Col lg={4}>
            <InstructorCardDefault
              name="James David"
              excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula sit amet enim ac sagittis. Curabitur…"
              position="Marketing Manager"
              photo="/img/profile/fiorela.jpg" />
          </Col>
          <Col lg={4}>
            <InstructorCardDefault
              name="James David"
              excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula sit amet enim ac sagittis. Curabitur…"
              position="Marketing Manager"
              photo="/img/profile/fiorela.jpg" />
          </Col>
          <Col lg={4}>
            <InstructorCardDefault
              name="James David"
              excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula sit amet enim ac sagittis. Curabitur…"
              position="Marketing Manager"
              photo="/img/profile/fiorela.jpg" />
          </Col>
          <Col lg={4}>
            <InstructorCardDefault
              name="James David"
              excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula sit amet enim ac sagittis. Curabitur…"
              position="Marketing Manager"
              photo="/img/profile/fiorela.jpg" />
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default InstructorSectionGroup;
