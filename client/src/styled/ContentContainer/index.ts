import { ReactNode } from "react";
import styled from "styled-components";

type Container = {
  children?: ReactNode;
  direction?: string;
  align?: string;
  justify?: string;
  pt?: string;
  pb?: string;
  pr?: string;
  pl?: string;
};

export const ContentContainer = styled.div<Container>`
max-width: 1200px;
padding-top: ${(props) => props.pt || "0"};
padding-bottom: ${(props) => props.pb || "0"};
padding-left: ${(props) => props.pl || "0"};
padding-right: ${(props) => props.pr || "0"};
`;
