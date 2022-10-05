import { FC, ReactNode } from "react";
import styled from "styled-components";

type FlexProps = {
  children?: ReactNode;
  direction?: string;
  align?: string;
  justify?: string;
  pt?: string;
  pb?: string;
  pr?: string;
  pl?: string;
};

const AlignContainer = styled.div<FlexProps>`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.align || "flex-start"};
  justify-content: ${(props) => props.justify || "start"};
  padding-top: ${(props) => props.pt || "0"};
  padding-bottom: ${(props) => props.pb || "0"};
  padding-left: ${(props) => props.pl || "0"};
  padding-right: ${(props) => props.pr || "0"};
`;

const Flex: FC<FlexProps> = function (props) {
  return <AlignContainer {...props}></AlignContainer>;
};

export default Flex;
