import { FC, useState, ChangeEvent, useCallback } from "react";

import {
  FaRegTrashAlt,
  FaRegSave,
  FaRegEdit,
  FaRegTimesCircle,
  FaEllipsisV,
} from "react-icons/fa";

import { TableProps } from "./Table.type";

import { Tr, Td } from "styled/Table";
import { Button } from "styled/Button";
import { Input, Textarea } from "styled/Form";
import { useDispatch } from "react-redux";
import { fetchDeleteUser, fetchEditUser } from "store/action_creators/user";
import Flex from "components/Flex";

const TableRow: FC<TableProps> = function (props) {
  const dispatch = useDispatch();

  const { id, name, age, aboutPerson } = props.user;
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [inputName, setInputName] = useState<string>(name);
  const [inputAge, setInputAge] = useState<number>(age);
  const [inputAbout, setInputAbout] = useState<string>(aboutPerson);

  const onSubmit = useCallback(async () => {
    const result = await fetchEditUser(dispatch, {
      id,
      name: inputName,
      age: inputAge,
      aboutPerson: inputAbout,
    });
    if (result) {
      setIsEdit(false);
    }
  }, [dispatch, id, inputAbout, inputAge, inputName]);

  const onDelete = () => {
    fetchDeleteUser(dispatch, id);
  };

  return (
    <>
      {isEdit ? (
        <Tr bg="#eee">
          <Td>
            <Input
              name="name"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setInputName(e.currentTarget.value);
              }}
              value={inputName}
            />
          </Td>
          <Td>{id}</Td>
          <Td>
            <Input
              type="number"
              name="age"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setInputAge(Number(e.target.value))
              }
              value={inputAge}
            />
          </Td>
          <Td>
            <Textarea
              rows={1}
              name="about"
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setInputAbout(e.target.value)
              }
              value={inputAbout}
            />
          </Td>
          <Td>
          <Flex justify="space-evenly">
              <Button
                outlined
                color="blue"
                onClick={() => {
                  setInputName(name);
                  setInputAge(age);
                  setInputAbout(aboutPerson);
                  setIsEdit(false);
                }}
              >
                <FaRegTimesCircle />
              </Button>
              <Button onClick={onSubmit}>
                <FaRegSave />
              </Button>
          </Flex>
          </Td>
        </Tr>
      ) : (
        <Tr {...props}>
          <Td>{name}</Td>
          <Td>{id}</Td>
          <Td>{age}</Td>
          <Td>{aboutPerson}</Td>
          <Td>
            <Flex justify="space-evenly">
              
              <Button mobile primary onClick={() =>{}}>
              <FaEllipsisV />
              </Button>
              <Button tablet primary onClick={() => setIsEdit(true)}>
                <FaRegEdit />
              </Button>
              <Button tablet bg="red" onClick={onDelete}>
                <FaRegTrashAlt />
              </Button>
            </Flex>
          </Td>
        </Tr>
      )}
    </>
  );
};

export default TableRow;
