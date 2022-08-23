import {
  Button,
  Col,
  Container,
  Row,
  Display,
  HeadLine,
  Paragraph
} from '@features/ui';
import BannerMainStyled from './bannerMain.styled';

const BannerMain = () => {
  return (
    <BannerMainStyled.Wrapper>
      <Container className='h-100'>
        <Row className='h-100 align-items-center'>
          <Col lg={8} xl={6}>
            <Display size={3} color='light'>¡Black Friday 2021!</Display>
            <HeadLine size={3} color='secondary'>Hasta 50% de descuento para que #NoTeDetengas</HeadLine>
            <Paragraph color='gray'>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</Paragraph>
            <Button color='secondary' variant='filled'>¡Aprovecha los descuentos del Black Friday!</Button>
          </Col>
        </Row>
      </Container>
    </BannerMainStyled.Wrapper>
  );
};

export default BannerMain;
