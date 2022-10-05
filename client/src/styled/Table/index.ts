import styled, { css } from "styled-components";
import { device } from 'utils/constants';

type ThProps = {
  width?: string;
  direction?: string;
  align?: string;
  justify?: string;
  padding?: string;
};

type TrProps = {
  bg?: string;
  flex?: boolean;
  direction?: string;
  justify?: string;
  align?: string;
};

const Table = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  color: grey;
`;

const Th = styled.th<ThProps>`
  padding: 20px;
  width: ${(props) => props.width || "auto"};
  text-align: ${props => props.align || "start"};
  @media ${device.laptop} {
    padding: 10px;
    font-size: .9rem;
  }
  @media ${device.mobileM} {
    padding: 10px 0;
  }
`;

const Tr = styled.tr<TrProps>`
  background: ${(props) => props.bg || "transparent"};
  flex-direction: ${({ direction }) => direction || "row"};
  justify-content: ${({ justify }) => justify || "start"};
  align-items: ${({ align }) => align || "start"};
  ${(props) =>
    props.flex &&
    css`
      display: flex;
      width: 100%;
    `};
`;

const Td = styled.td`
  padding: 20px;
  @media ${device.laptop} {
    padding: 10px;
    font-size: 0.8rem;
  }
`;

export { Table, Th, Tr, Td };
