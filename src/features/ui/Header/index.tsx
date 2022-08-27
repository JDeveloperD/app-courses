import {
  Button,
  Col,
  Container,
  Row,
  Logo,
  FiSearch,
  GoThreeBars
} from '@features/ui';
import { useToggle } from '@hooks';
import NavBar from './NavBar';
import { UserSignInInfo } from '@features/user';
import HeaderStyled from './header.styled';
import { CartButtonCounter, CartLateral } from '@features/cart';
import { useRouter } from 'next/router';

const Header = () => {
  const { pathname } = useRouter();
  const [openNav, toggleNav] = useToggle();
  const [openCartLateral, toggleOpenCartLateral] = useToggle();

  const isLight = pathname === '/' || pathname === '/clases/[id]';

  return (
    <HeaderStyled.Wrapper ligth={isLight}>
      <Container fluid="xxl">
        <Row className='align-items-center'>
          <Col xs={6} lg={8} xl={8} className="d-flex align-items-center gap-3" >
            <Button
              color={isLight ? 'light' : undefined}
              variant='icon'
              className='ms-2 d-lg-none p-0 bg-transparent'
              onClick={toggleNav}
            >
              <GoThreeBars />
            </Button>
            <Logo />
            <NavBar
              openNav={openNav}
              handleClose={toggleNav}
              light={isLight}
            />
          </Col>
          <Col xs={6} lg={4} xl={4}>
            <div className="d-flex justify-content-end align-items-center">
              <Button
                color={isLight ? 'light' : undefined}
                variant='icon'>
                <FiSearch />
              </Button>

              <CartButtonCounter
                light={isLight}
                openMiniCart={toggleOpenCartLateral}
                className='me-3'
              />

              <UserSignInInfo light={isLight} />
            </div>
          </Col>
        </Row>
      </Container>
      <CartLateral
        active={openCartLateral}
        closeFunction={toggleOpenCartLateral}
      />
    </HeaderStyled.Wrapper>
  );
};

export default Header;
