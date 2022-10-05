import { Control, FieldValues } from "react-hook-form";

type NewUserProps = {
  register: any;
  onClose: () => void;
  onSubmit: () => void;
  formErrors: {
    [x: string]: any;
  };
};

export type { NewUserProps };