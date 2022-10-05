import { FC } from "react";
import styled from "styled-components";

import { appWidth, device } from "utils/constants";

import { FaPlus } from "react-icons/fa";
import { IconButton } from "styled/Button";
import Flex from "components/Flex";
import ProgressBar from "components/ProgressBar";
import { useTypedSelector } from "store/reducers";

const StyledHeader = styled.header`
  width: 100%;
  max-width: ${appWidth};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px;
  color: rgb(112, 112, 112);
  @media ${device.laptop} {
    font-size: 15px;
  }
  @media ${device.tablet} {
    font-size: 12px;
  }
`;

type HeaderProps = {
  onAddIcon: () => void;
};

const Header: FC<HeaderProps> = function ({ onAddIcon }) {
  const { isLoading } = useTypedSelector((state) => state.user);
  return (
    <Flex direction="column" align="center">
      <StyledHeader>
        <h1>Clients List</h1>
        <IconButton onClick={onAddIcon}>
          <FaPlus />
        </IconButton>
      </StyledHeader>
      {isLoading && <ProgressBar />}
    </Flex>
  );
};

export default Header;
