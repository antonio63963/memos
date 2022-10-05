import { FC, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Modal } from "styled/Modal";
import NewUser from "components/NewUser/NewUser";
import { useDispatch } from "react-redux";
import { fetchCreateUser } from "store/action_creators/user";

type ContainerProps = {
  onClose: (data?: boolean) => void;
};

const NewUserContainer: FC<ContainerProps> = ({ onClose }) => {
  const dispatch = useDispatch();

  const validationSchema = z.object({
    name: z
      .string()
      .min(1)
      .max(10)
      .transform((val) => val.trim()),
    age: z.string().superRefine((val, ctx) => {
      if (typeof Number(val) !== "number") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Must be a number",
        });
      } else if (Number(val) < 18) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Younger than 18!",
        });
      }
    }),
    aboutPerson: z.string().min(5).max(20),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = useCallback(
    (formData: any) => {
      console.log("FormDat: ", formData);
      fetchCreateUser(dispatch, formData);
    },
    [dispatch]
  );

  useEffect(() => {
    console.log("Errorr form: ", errors);
  }, [errors]);

  return (
    <>
      <Modal title="Create new user" close={onClose}>
        <NewUser
          onSubmit={handleSubmit(onSubmit)}
          formErrors={errors}
          onClose={onClose}
          register={register}
        />
      </Modal>
    </>
  );
};

export default NewUserContainer;
