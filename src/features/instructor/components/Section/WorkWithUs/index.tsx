import {
  Container,
  Section,
  Row,
  Col,
  HeadLine,
  Lead,
  Button,
  BsEnvelope
} from '@features/ui';
import { routesPage } from '@routes';
import Link from 'next/link';

const InstructorSectionWorkWithUs = () => {
  return (
    <Section>
      <Container>
        <Row className="justify-content-around align-items-center">
          <Col lg={5} xl={4}></Col>
          <Col lg={5} xl={4}>
            <HeadLine className='mb-4' size={1} as="h1">Trabaja con Nosotros</HeadLine>
            <Lead className='mb-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel.
            </Lead>
            <Link href={routesPage.contact.index} passHref>
              <Button
                as='a'
                variant='filled'
                color='primary'
              >
                  Comunícate con nosotros <BsEnvelope />
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default InstructorSectionWorkWithUs;
