import { FC, ReactNode, useState } from "react";
import {
  FaEllipsisV,
  FaRegEdit,
  FaRegTimesCircle,
  FaRegTrashAlt,
} from "react-icons/fa";
import styled from "styled-components";

import { Button, IconButton } from "styled/Button";

const Popup = styled.div`
  position: absolute;
  z-index: 1000;
  border-radius: 5px;
  padding: 10px;
  background: #fff;
  display: flex;
  flex-direction: column;

  -webkit-box-shadow: 0px 3px 12px -4px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 3px 12px -4px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 3px 12px -4px rgba(0, 0, 0, 0.5);
`;

type PopupProps = {
  children: ReactNode;
  onClose?: () => void;
};

const MoreButton: FC<PopupProps> = ({ onClose, children }) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);

  return (
    <>
      {showOptions && (
        <Popup>
          {children}
          <Button
            bg="transparent"
            color="blue"
            onClick={
              onClose
                ? () => {
                    onClose();
                    setShowOptions(false);
                  }
                : () => setShowOptions(false)
            }
          >
            <FaRegTimesCircle />
          </Button>
        </Popup>
      )}
      <Button mobile primary onClick={() => setShowOptions(true)}>
        <FaEllipsisV />
      </Button>
    </>
  );
};

export default MoreButton;
