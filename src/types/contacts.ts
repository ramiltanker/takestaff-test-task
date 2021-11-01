export type TUser = {
  id: string;
  name: string;
  email: string;
  address: string;
  phone: string;
  [key: string]: any;
};

export type TContacts = Array<TUser>;
