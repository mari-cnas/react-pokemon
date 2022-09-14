import styled from 'styled-components';

type colorsType = {
  [index: string]: string;
};

interface ICardContainerProps {
  bgColor: string;
}

const colors: colorsType = {
  blue: '#79e3f7',
  red: '#fa847f',
  green: '#6dd2af',
  white: '#e8e8e8',
  yellow: '#fffa65',
  purple: '#cd84f1',
  brown: '#a08679',
  pink: '#f5aee1',
  gray: '#787a7a',
  black: '#2e3333',
};

const fontColors: colorsType = {
  white: 'black',
  yellow: 'black',
  default: 'white',
};

export const CardBg = styled.div<ICardContainerProps>`
  background-color: ${({ bgColor }) => colors[bgColor]};
  border-radius: 10px;
  float: left;
  transition: box-shadow 0.3s;

  h2 {
    font-size: 1.8rem;
  }
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 11px black;
  }
  color: ${({ bgColor }) =>
    fontColors[bgColor] ? fontColors[bgColor] : fontColors.default};
`;

export const TypesBg = styled.li`
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
`;

export const IdBg = styled.div<ICardContainerProps>`
  //color: ${({ bgColor }) => colors[bgColor]};
  //opacity: 0.5;
  color: rgba(0, 0, 0, 0.2);
`;
