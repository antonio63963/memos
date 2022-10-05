import { FC } from "react";
import styled, { keyframes } from "styled-components";

const WrapperBar = styled.div`
  width: 100%;
  overflow: hidden;
`;
const progressAnimation = keyframes`
  0% {
    transform: translateX(-30%)
  }
  100% {
    transform: translateX(330%)
  }
`;

const Progress = styled.div`
  width: 30%;
  height: 2px;
  background: #0066ff;
  animation: ${progressAnimation} 2s infinite linear;
`;

const ProgressBar: FC = () => {
  return (
    <WrapperBar style={{ width: "100%" }}>
      <Progress />
    </WrapperBar>
  );
};

export default ProgressBar;
