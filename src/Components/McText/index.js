import styled from 'styled-components/native';
import { Fonts, Colors, Metrics } from 'Constants';

const McText = styled.Text`
  /* default black */
  color: ${props => props.color || Colors.white};
  /* default 16px */
  font-size: ${props => props.size || Metrics.s16}px;
  /* default left */
  text-align: ${props => props.align || 'left'};
  
  ${({ regular, bold, semi, extra, black, medium }) => {
    switch (true) {
      case regular: {
        return { fontFamily: Fonts.type.primary };
      }
      case bold: {
        return { fontFamily: Fonts.type.bold };
      }
      case semi: {
        return { fontFamily: Fonts.type.semi };
      }
      case extra: {
        return { fontFamily: Fonts.type.extra };
      }
      case black: {
        return { fontFamily: Fonts.type.black };
      }
      case medium: {
        return { fontFamily: Fonts.type.medium };
      }
    }
  }}
  ${({ h1, h2, h3, h4, h5, h6 }) => {
    switch (true) {
      case h1: {
        return { fontFamily: Fonts.type.bold, fontSize: `${Metrics.h1}px` };
      }
      case h2: {
        return { fontFamily: Fonts.type.bold, fontSize: `${Metrics.h2}px` };
      }
      case h3: {
        return { fontFamily: Fonts.type.bold, fontSize: `${Metrics.h3}px` };
      }
      case h4: {
        return { fontFamily: Fonts.type.bold, fontSize: `${Metrics.h4}px` };
      }
      case h5: {
        return { fontFamily: Fonts.type.bold, fontSize: `${Metrics.h5}px` };
      }
      case h6: {
        return { fontFamily: Fonts.type.bold, fontSize: `${Metrics.h6}px` };
      }
    }
  }}
  ${({ body1, body2, body3, body4, body5, body6 }) => {
    switch (true) {
      case body1: {
        return {
          fontFamily: Fonts.type.regular,
          fontSize: `${Metrics.body1}px`,
        };
      }
      case body2: {
        return {
          fontFamily: Fonts.type.regular,
          fontSize: `${Metrics.body2}px`,
        };
      }
      case body3: {
        return {
          fontFamily: Fonts.type.regular,
          fontSize: `${Metrics.body3}px`,
        };
      }
      case body4: {
        return {
          fontFamily: Fonts.type.regular,
          fontSize: `${Metrics.body4}px`,
        };
      }
      case body5: {
        return {
          fontFamily: Fonts.type.regular,
          fontSize: `${Metrics.body5}px`,
        };
      }
      case body6: {
        return {
          fontFamily: Fonts.type.regular,
          fontSize: `${Metrics.body6}px`,
        };
      }
    }
  }}
`;

export default McText;
