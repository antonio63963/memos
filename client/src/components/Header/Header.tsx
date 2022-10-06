import { FC } from "react";
import styled from "styled-components";

import { appWidth, device } from "utils/constants";

import { FaPlus } from "react-icons/fa";
import { IconButton } from "styled/Button";
import Flex from "components/Flex";
import ProgressBar from "components/ProgressBar";
import { useTypedSelector } from "store/reducers";
import { useDispatch } from "react-redux";
import { sortAgeAZ, sortAgeZA, sortNameAZ, sortNameZA } from "store/actions";

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

const HederMenu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
`;

const ListItem = styled.li`
  margin-right: 20px;
  cursor: pointer;
  color: gray;
`

type HeaderProps = {
  onAddIcon: () => void;
};

const Header: FC<HeaderProps> = function ({ onAddIcon }) {
  const dispatch = useDispatch();
  const { isLoading } = useTypedSelector((state) => state.user);
  return (
    <Flex direction="column" align="center">
      <StyledHeader>
        <h1>Clients List</h1>
        <HederMenu>
          <ListItem onClick={() => sortNameAZ(dispatch)}>Name A-Z</ListItem>
          <ListItem onClick={() => sortNameZA(dispatch)}>Name Z-A</ListItem>
          <ListItem onClick={() => sortAgeAZ(dispatch)}>Age 0-9</ListItem>
          <ListItem onClick={() => sortAgeZA(dispatch)}>Age 9-0</ListItem>
        </HederMenu>
        <IconButton onClick={onAddIcon}>
          <FaPlus />
        </IconButton>
      </StyledHeader>
      {isLoading && <ProgressBar />}
    </Flex>
  );
};

export default Header;
