import { FC } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import styled from "styled-components";
import { IconButton } from "./Button";

const ModalBlur = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalBody = styled.div`
  position: relative;
  min-width: 300px;
  padding: 20px;
  border-radius: 5px;
  background-color: rgb(236, 236, 236);
  /* text-align: center; */
  -webkit-box-shadow: 0px 3px 12px -4px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 3px 12px -4px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 3px 12px -4px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h3`
  margin-bottom: 20px;
`;

type ModalProps = {
  title: string;
  close: (data?: boolean) => void;
  children: React.ReactNode;
};

export const Modal: FC<ModalProps> = ({ title, close, children }) => {
  return (
    <ModalBlur>
      <ModalBody>
        <Title>{title}</Title>
        <IconButton
          pos="absolute"
          right="20px"
          top="20px"
          onClick={() => close()}
        >
          <FaRegTimesCircle />
        </IconButton>
        {children}
      </ModalBody>
    </ModalBlur>
  );
};
