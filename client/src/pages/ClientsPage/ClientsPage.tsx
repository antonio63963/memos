import { FC, useState } from "react";

import styled from "styled-components";

import Header from "../../components/Header";
import ClientsTableContainer from "containers/ClientsTableContainer/ClientsTableContainer";
import Flex from "components/Flex";
import { ContentContainer } from "styled/ContentContainer";

import NewUserContainer from "containers/NewUserContainer/NewUserContainer";

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  background: #eee;

  -webkit-box-shadow: 0px 3px 12px -4px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 3px 12px -4px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 3px 12px -4px rgba(0, 0, 0, 0.5);
`;

const ClientsPage: FC = function () {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      {isModalOpen && (
        <NewUserContainer onClose={() => setIsModalOpen(false)} />
      )}
      <HeaderWrapper className="header">
        <Header onAddIcon={() => setIsModalOpen(true)} />
      </HeaderWrapper>
      <Flex justify="center" pt="100px">
        <ContentContainer>
          <ClientsTableContainer />
        </ContentContainer>
      </Flex>
    </>
  );
};

export default ClientsPage;
