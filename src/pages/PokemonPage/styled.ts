import styled from 'styled-components';

export const BgCard = styled.div`
  color: white;
`;

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

export const PokemonBg1 = styled.div<ICardContainerProps>`
  background-color: ${({ bgColor }) => colors[bgColor]};
  color: ${({ bgColor }) =>
    fontColors[bgColor] ? fontColors[bgColor] : fontColors.default};
`;

export const PokemonBg2 = styled.div`
  border-radius: 20px;
  background-color: white;
  color: black;
  font-size: 0.8rem;
`;

export const TypesBg = styled.span`
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
`;

export const Description = styled.h2<ICardContainerProps>`
  color: ${({ bgColor }) => colors[bgColor]};
`;
