import { HeadLine, Lead, MarkSection, FeatureIcon, Col, Container, Row } from '@features/ui';
import FeaturesSectionStyled from './featuresSection.styled';

const AgroClubWhySection = () => {
  return (
    <FeaturesSectionStyled.Wrapper>
      <MarkSection>¿POR QUE?</MarkSection>
      <Container className='position-relative'>
        <HeadLine
          color='light'
          size={2}
          maxWidth="750px"
          className='mx-auto text-center'>
          ¿Por que miles de estudiantes escogen AgroClub?
        </HeadLine>
        <Lead
          color='gray'
          maxWidth="750px"
          className='mx-auto text-center pb-5'>Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Lead>
        <Row className='mt-5 pt-5'>
          <Col xs={12} md={6} lg={3}>
            <FeatureIcon
              urlIcon='/svg/conferance-lesson-people.svg'
              title='La mejor metodologia en español'
              caption='Vivamus suscipit tortor eget felis porttitor volutpat.'
            />
          </Col>
          <Col xs={12} md={6} lg={3}>
            <FeatureIcon
              urlIcon='/svg/world.svg'
              title='La mejor metodologia en español'
              caption='Vivamus suscipit tortor eget felis porttitor volutpat.'
            />
          </Col>
          <Col xs={12} md={6} lg={3}>
            <FeatureIcon
              urlIcon='/svg/research.svg'
              title='La mejor experiencia en educacion online'
              caption='Vivamus suscipit tortor eget felis porttitor volutpat.'
            />
          </Col>
          <Col xs={12} md={6} lg={3}>
            <FeatureIcon
              urlIcon='/svg/advertising.svg'
              title='Somos autenticos, somos como tu'
              caption='Vivamus suscipit tortor eget felis porttitor volutpat.'
            />
          </Col>
        </Row>
      </Container>
    </FeaturesSectionStyled.Wrapper>
  );
};

export default AgroClubWhySection;
