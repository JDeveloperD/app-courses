import {
  Button,
  HeadLine,
  Lead,
  MarkSection,
  Col,
  Container,
  Row
} from '@features/ui';
import { BsArrowRight } from 'react-icons/bs';
import { CardSpecialist } from '@features/specialist';
import { EspecialistSectionBackground } from './section.styled';

const SpecialistsSection = () => {
  return (
    <EspecialistSectionBackground>
      <MarkSection className='d-none d-md-block'>Especialistas</MarkSection>
      <Container>
        <Row className="justify-content-between">
          <Col md={5} lg={4} xl={3}>
            <CardSpecialist name="James David" excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula sit amet enim ac sagittis. Curabitur…" position="Marketing Manager" photo="/img/image.jpg" />
          </Col>
          <Col md={7} lg={7} className='text-center text-md-start'>
            <HeadLine
              color='light'
              size={1}>
              ¡Trabajamos con los mejores para  brindarte una mejor educación!
            </HeadLine>
            <Lead
              color='gray'
              className='mb-4 mb-md-5'>
              Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Lead>
            <Button
              color='secondary'
              variant='filled'>
              Ver Especialistas <BsArrowRight />
            </Button>
            <Button
              color='light'
              variant='outlined'
              className='mt-4 ms-md-3'>
              Quiero ser un especialista
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-end g-4 gap-xl-5 mt-5">
          <Col sm={6} md={5} lg={4} xl={3}>
            <CardSpecialist name="James David" excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula sit amet enim ac sagittis. Curabitur…" position="Marketing Manager" photo="/img/image.jpg" />
          </Col>
          <Col sm={6} md={5} lg={4} xl={3}>
            <CardSpecialist name="James David" excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula sit amet enim ac sagittis. Curabitur…" position="Marketing Manager" photo="/img/image.jpg" />
          </Col>
        </Row>
      </Container>
    </EspecialistSectionBackground>
  );
};

export default SpecialistsSection;
