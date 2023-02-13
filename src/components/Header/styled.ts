import styled from 'styled-components';

export const Bg = styled.div`
  background-color: #3e434a;
  border-radius: 0px 0px 20px 20px;
  color: white;
`;

export const ProfileImg = styled.span`
  display: inline-block;
  overflow: hidden;
  width: 100%;
  padding-bottom: 100%;
  height: 0;
  position: relative;

  @media (min-width: 576px) {
    width: 70%;
    padding-bottom: 70%;
  }

  @media (min-width: 768px) {
    width: 40%;
    padding-bottom: 40%;
  }
  @media (min-width: 1400px) {
    width: 30%;
    padding-bottom: 30%;
  }
  img {
    width: 100%;
    height: 100%;
    position: absolute;
    clip-path: circle(50%);
    object-fit: cover;
  }
`;
