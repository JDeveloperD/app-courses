import {
  Slider,
  Row,
  Col,
  HeadLine,
  Paragraph,
  Button
} from '@features/ui';
import { SwiperSlide } from 'swiper/react';
import BannerCtaStyled from './courseSlider.styled';
import Image from 'next/image';

const BannerCourseSlider = () => {
  return (
    <Slider
    items={[1, 2, 3]}
    render={(dataBanner: any, index: number) => (
      <SwiperSlide key={index}>
        <BannerCtaStyled.Wrapper className=''>
          <Row className='flex-column flex-md-row'>
            <Col md={7} className='text-center text-md-start'>
              <div className="p-4">
                <HeadLine size={1} color="light" className='mb-4'>
                  Domina la carrera de Agro
                </HeadLine>
                <Paragraph color='gray' className='mb-4'>
                  Miles de personas han aumentado sus ingresos, encontrando su primer empleo o creado su propia empresa estudiando en Agro Club.
                  <br /><br />
                  ¡Tú puedes ser el próximo!
                </Paragraph>
                <Button
                  variant='filled'
                  color='light'
                  className='mb-3'>
                  Comienza a estudiar ahora!
                </Button>
              </div>
            </Col>
            <Col md={5} className='d-none d-md-block'>
              <BannerCtaStyled.Image>
                <Image
                  src='/img/banner/banner-1.png'
                  layout='fill'
                  objectFit='cover'
                  quality={100}
                  priority
                />
              </BannerCtaStyled.Image>
            </Col>
          </Row>
        </BannerCtaStyled.Wrapper>
      </SwiperSlide>
    )}
  />
  );
};

export default BannerCourseSlider;
