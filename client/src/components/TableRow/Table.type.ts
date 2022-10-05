type User = {
  name: string;
  age: number;
  id: string;
  aboutPerson: string;
};

type TableProps = {
  user: User;
  bg?: string;
}

export type {
  User,
  TableProps,
}