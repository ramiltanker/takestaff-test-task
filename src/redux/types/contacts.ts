type TUser = {
  id: string;
  name: string;
  email: string;
  address: string;
  phone: string;
};

export type TContacts = Array<TUser>;
