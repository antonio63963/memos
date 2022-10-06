import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";

import { useTypedSelector } from "store/reducers";
import { fetchUsers, errorModalClose } from "store/action_creators/user";

import { Table, Tr, Th } from "../../styled/Table";

import Flex from "components/Flex";
import TableRow from "components/TableRow/TableRow";
import ModalMessage from "components/ModalMessage/ModalMessage";
import { Dispatch, AnyAction } from "redux";
import { sortAgeZA } from "store/actions";

const ClientsTableContainer: FC = function () {
  const { users, error } = useTypedSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Fetch clients");
    fetchUsers(dispatch);
  }, []);

  return (
    <>
      {error && (
        <Flex justify="center" align="center">
          <ModalMessage
            title="Error"
            message={error!}
            onClose={() => errorModalClose(dispatch)}
          />
        </Flex>
      )}
      <Flex>
        <Table>
          <thead>
            <Tr>
              <Th width="20%">Name</Th>
              <Th width="15%">ID</Th>
              <Th width="15%" onClick={() => sortAgeZA(dispatch)}>Age</Th>
              <Th width="30%">About</Th>
              <Th align="center" padding="20px">
                Options
              </Th>
            </Tr>
          </thead>
          <tbody>
            {users.map((cell, ind) => {
              return (
                <TableRow
                  key={`cell_${cell.id}`}
                  user={cell}
                  bg={ind % 2 === 0 ? "lightGray" : undefined}
                />
              );
            })}
          </tbody>
        </Table>
      </Flex>
    </>
  );
};

export default ClientsTableContainer;
