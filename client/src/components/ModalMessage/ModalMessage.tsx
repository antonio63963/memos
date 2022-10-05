import { FC } from "react";
import { Button } from "styled/Button";
import { Modal } from "styled/Modal";

type ModalMessageType = {
  title: string;
  message: string;
  onClose: (data?: boolean) => void;
};

const ModalMessage: FC<ModalMessageType> = ({ title, message, onClose }) => {
  return (
    <Modal title={title} close={onClose}>
      <p>{message}</p>
      <Button mt="20px" onClick={() => onClose()}>
        Close
      </Button>
    </Modal>
  );
};

export default ModalMessage;
