import { Button, HeadLine, Lead, Col, Container, Row } from '@features/ui';
import Link from 'next/link';
import AppMobileStyled from './appMobile.styled';

const BannerAppMobile = () => {
  return (
    <AppMobileStyled.Wrapper>
      <Container>
        <AppMobileStyled.Background>
          <Row>
            <Col md={6}>
              <HeadLine size={1} color='primary' className='mb-md-4'>Instala Nuestra aplicacion</HeadLine>
              <Lead color='light' className='mb-md-4'>Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</Lead>
              <Button color='secondary' variant='filled' className='mb-3 mb-md-0 me-3'>Conseguir membresia</Button>
              <Link href='/' passHref>
                <Button as='a' color='light' >O comprar un curso</Button>
              </Link>
            </Col>
          </Row>
        </AppMobileStyled.Background>
      </Container>
    </AppMobileStyled.Wrapper>
  );
};

export default BannerAppMobile;
