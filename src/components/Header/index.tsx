import React, { useState, memo } from 'react';

import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap';

import profile from 'assets/misty.jpg';

import { Bg, ProfileImg } from './styled';

interface IBaseComponentProps {
  children?: React.ReactNode;
}

const Header: React.FC<IBaseComponentProps> = () => {
  const [show, setShow] = useState(true);
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const [user, setUser] = useState('');

  return (
    <Bg>
      <Container>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Pokémon, Eu Escolho Você! </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Qual o seu nome?</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Digite seu nome"
                  onChange={(e) => setUser(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
        </Modal>
        <Row>
          <Col className="d-flex flex-column justify-content-center my-5">
            <h2>Olá, {user}</h2>
            <h3>Bem Vindo(a)! 😄</h3>
          </Col>
          <Col className="d-flex justify-content-end  my-5">
            {' '}
            <ProfileImg src={profile} className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </Bg>
  );
};

export default memo(Header);
