import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

type InputProps = {
  margin?: string;
  ml?: string;
  mr?: string;
  mt?: string;
  mb?: string;
}

const Input = styled.input<InputProps>`
  width: 100%;
  max-width: 100%;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 10px;
  margin: ${(props) => props.margin || "0"};
  margin-left: ${(props) => props.ml || "0"};
  margin-right: ${(props) => props.mr || "0"};
  margin-top: ${(props) => props.mt || "0"};
  margin-bottom: ${(props) => props.mb || "0"};
`;

const Textarea = styled.textarea<InputProps>`
  width: 100%;
  max-width: 100%;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 10px;
  margin: ${(props) => props.margin || "0"};
  margin-left: ${(props) => props.ml || "0"};
  margin-right: ${(props) => props.mr || "0"};
  margin-top: ${(props) => props.mt || "0"};
  margin-bottom: ${(props) => props.mb || "0"};
`;

export { Form, Input, Textarea };
