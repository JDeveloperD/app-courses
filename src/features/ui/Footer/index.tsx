import {
  HeadLine,
  Paragraph,
  Small,
  Logo,
  Container,
  Row,
  Col,
  SocialLink
} from '@features/ui';
import FooterStyled from './footer.styled';
import { IoMailOutline, IoPhonePortraitOutline, IoLocationOutline } from 'react-icons/io5';
import FormEmail from './FormEmail';
import Link from 'next/link';
import { routesPage } from '@routes';

const Footer = () => {
  return (
    <FooterStyled.Wrapper>
      <Container fluid="xxl">
        <Row>
          <Col sm={6} lg={3}>
            <Logo size="lg" />
            <Paragraph color='gray' className='mt-3'>
            Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc quam ac sed turpis volutpat. Cursus sed massa non nisi, placerat.
            </Paragraph>
            <SocialLink />
          </Col>
          <Col sm={6} lg={2} xl={3}>
            <HeadLine size={4} color='light' className='mb-4'>Acerca de</HeadLine>
            <Link href={routesPage.agroClub.index} passHref>
              <Paragraph
                as='a'
                className='text-decoration-none d-block mb-3'
                color="gray">
                  ¿Por que Agro Club?
              </Paragraph>
            </Link>

            <Link href={routesPage.blog.index} passHref>
              <Paragraph
                as='a'
                className='text-decoration-none d-block mb-3'
                color="gray">
                  Blog
              </Paragraph>
            </Link>

            <Link href={routesPage.contact.index} passHref>
              <Paragraph
                as='a'
                className='text-decoration-none d-block mb-3'
                color="gray">
                  Contacto
              </Paragraph>
            </Link>

            <Link href={routesPage.memberships.index} passHref>
              <Paragraph
                as='a'
                className='text-decoration-none d-block mb-3'
                color="gray">
                  Membresias
              </Paragraph>
            </Link>

            <Link href={routesPage.instructor.index} passHref>
              <Paragraph
                as='a'
                className='text-decoration-none d-block mb-3'
                color="gray">
                  Especialistas
              </Paragraph>
            </Link>

          </Col>
          <Col sm={6} lg={3}>
            <HeadLine size={4} color='light' className='mb-4'>Contactanos</HeadLine>
            <Paragraph
              className='d-block mb-3 text-decoration-none'
              color="gray"
              as='a'
              href='mailto:hello@agrouclub.pe'> <IoMailOutline /> hello@agrouclub.pe</Paragraph>
            <Paragraph
              className='d-block mb-3 text-decoration-none'
              color="gray"
              as='a'
              href='tel:+51973643140'> <IoPhonePortraitOutline /> +91 98765 43210</Paragraph>
            <Paragraph color="gray" > <IoLocationOutline /> 772 Agroavenida Av.Guashinton, Calle 222</Paragraph>
          </Col>
          <Col sm={6} lg={4} xl={3}>
            <HeadLine size={4} color='light' className='mb-4'>Suscribete ahora!</HeadLine>
            <FormEmail placeholder="Enviar email" />
          </Col>
        </Row>
      </Container>
      <FooterStyled.Copy>
        <Container fluid="xxl" className='text-center'>
          <Row className='g-3'>
            <Col lg={6} className="text-md-start">
              <Small color="gray">
                &copy; {new Date().getFullYear()} Agro Club. Todos los derechos reservados
              </Small>
            </Col>
            <Col lg={6} className='text-md-end'>
              <Small color="gray">
                Terminos y condiciones | Politica de privacidad
              </Small>
            </Col>
          </Row>
        </Container>
      </FooterStyled.Copy>
    </FooterStyled.Wrapper>
  );
};

export default Footer;
