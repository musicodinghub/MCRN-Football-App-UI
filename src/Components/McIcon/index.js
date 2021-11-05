import styled from 'styled-components/native';
import { Metrics } from 'Constants';

const McIcon = styled.Image`
  width: ${props => props.size || Metrics.images.small}px;
  height: ${props => props.size || Metrics.images.small}px;
  border-radius: ${(props) =>
    props.round
      ? props.size
        ? `${props.size}px`
        : `${Metrics.images.small}px`
      : `0px`};
`;

export default McIcon;
