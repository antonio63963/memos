import styled, { css } from "styled-components";
import { device } from 'utils/constants';

type ButtonProps = {
  type?: string;
  width?: string;
  color?: string;
  bg?: string;
  fontSize?: string;
  fontWeight?: string;
  padding?: string;
  margin?: string;
  ml?: string;
  mr?: string;
  mt?: string;
  mb?: string;
  radius?: string;
  primary?: boolean;
  outlined?: boolean;
  tablet?: boolean;
  mobile?: boolean;
  children?: React.ReactNode;
};

const Button = styled.button<ButtonProps>`
  display: inline-block;
  width: ${(props) => props.width || "auto"};
  color: ${(props) => props.color || "white"};
  border: none;
  background: ${(props) => props.bg || "#0066ff"};
  font-weight: ${(props) => props.fontWeight || "400"};
  font-size: ${(props) => props.fontSize || "1rem"};
  padding: ${(props) => props.padding || "10px 15px"};
  margin: ${(props) => props.margin || "0"};
  margin-left: ${(props) => props.ml || "0"};
  margin-right: ${(props) => props.mr || "0"};
  margin-top: ${(props) => props.mt || "0"};
  margin-bottom: ${(props) => props.mb || "0"};
  border-radius: ${(props) => props.radius || "5px"};
  &:hover {
    opacity: 0.5;
  }
  cursor: pointer;

  ${(props) =>
    props.primary &&
    css`
      background: #0066ff;
      border: none;
    `};
  ${(props) =>
    props.outlined &&
    css`
      background: transparent;
      border: 1px solid ${props.color};
    `};
  ${(props) => props.tablet && css`
    @media ${device.laptop} {
      padding: 5px 10px;
    };
    @media ${device.tablet} {
      display: none;
    }
  `};
  ${props => props.mobile && css`
    display: none;
    @media ${device.tablet} {
      display: inline-block;
      padding: 5px 10px;
    };
    @media ${device.mobileM} {
      font-size: 12px;
      padding: 5px 7px;
    }
  `}

`;

type IcontButtonProps = {
  pos?: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;

}

const IconButton = styled.button<IcontButtonProps>`
  position: ${props => props.pos};
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  right: ${props => props.right};
  border: none;
  background: none;
  color: gray;
  cursor: pointer;
  font-size: 20px;
`;

export {
  Button,
  IconButton,
};
