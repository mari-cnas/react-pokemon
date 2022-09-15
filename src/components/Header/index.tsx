import { memo } from 'react';

import { Col, Container, Row } from 'react-bootstrap';

import profile from 'assets/profile.jpg';

import { Bg } from './styled';

interface IBaseComponentProps {
  children?: React.ReactNode;
}

const Header: React.FC<IBaseComponentProps> = () => {
  return (
    <Bg>
      <Container>
        <Row>
          <Col className="my-5">
            <h2>Olá, Mariana</h2>
            <h3>Bem Vinda! 😄</h3>
          </Col>
          <Col className="d-flex justify-content-end  my-5">
            {' '}
            <img className="img-fluid" src={profile} alt="profilepicture" />
          </Col>
        </Row>
      </Container>
    </Bg>
  );
};

export default memo(Header);
