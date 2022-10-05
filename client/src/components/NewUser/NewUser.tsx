import { FC, useState } from "react";
import styled from "styled-components";

import { Button } from "styled/Button";
import NoticeLength from "components/NoticeLength";
import { Form, Input, Textarea } from "styled/Form";
import { NewUserProps } from "./NewUser.type";

const ErrorRow = styled.div`
  width: 100%;
  display: flex;
  color: red;
  font-size: 14px;
`;

const NewUser: FC<NewUserProps> = ({
  register,
  onSubmit,
  formErrors,
  onClose,
}) => {
  const [nameLength, setNameLength] = useState<number>(0);
  const [aboutLength, setAboutLength] = useState<number>(0);
  return (
    <Form
      onSubmit={(data) => {
        onSubmit();
        onClose();
      }}
    >
      {formErrors.name && <ErrorRow>{formErrors.name.message}</ErrorRow>}
      <Input
        {...register("name")}
        onChange={(e) => setNameLength(e.target.value?.length)}
        placeholder="Enter name"
        mt="10px"
      />
      <NoticeLength lengthState={nameLength} lengthConst={10} />

      {/*age */}
      {formErrors.age && <ErrorRow>{formErrors.age.message}</ErrorRow>}
      <Input
        {...register("age")}
        onChange={(e) => console.log(typeof e.target.value)}
        type="number"
        placeholder="Enter age"
        mt="10px"
        mb="20px"
      />

      {/* about */}
      {formErrors.about && <ErrorRow>{formErrors.about.message}</ErrorRow>}
      <Textarea
        {...register("aboutPerson")}
        placeholder="Enter about..."
        mt="10px"
        rows={5}
        onChange={(e) => setAboutLength(e.target.value.length)}
      />
      <NoticeLength lengthState={aboutLength} lengthConst={20} />

      <Button type="submit" mt="30px" width="100%">
        Submit
      </Button>
      <Button onClick={onClose} mt="20px" bg="red" width="100%">
        Cancel
      </Button>
    </Form>
  );
};

export default NewUser;
