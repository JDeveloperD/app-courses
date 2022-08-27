import Link from 'next/link';
import { FC, ReactNode } from 'react';
import { Container, Row, Col, Logo, HeadLine } from '@features/ui';
import { WrapperAuth } from './layouts.styled';

const AuthLayout:FC<{children: ReactNode}> = ({ children }) => {
  return (
    <WrapperAuth>
      <Container className='position-relative'>
        <Row className='justify-content-center justify-content-lg-start py-4 position-absolute w-100'>
          <Col sm={9} md={7} lg={6} xl={5}>
            <div className="d-flex align-items-center justify-content-between">
              <Logo />
              <div className='d-flex gap-5'>
                <Link href="/">
                  <a className='text-decoration-none'>
                    <HeadLine className='m-0' size={6} color='gray'>Home</HeadLine>
                  </a>
                </Link>
                <Link href="/auth/registro">
                  <a className='text-decoration-none'>
                    <HeadLine className='m-0' size={6} color='gray'>Unirse</HeadLine>
                  </a>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
        <Row className='justify-content-center justify-content-lg-start vh-100 align-items-center pt-5'>
          <Col sm={9} md={7} lg={6} xl={5}>
            {children}
          </Col>
        </Row>
      </Container>
    </WrapperAuth>
  );
};

export default AuthLayout;
