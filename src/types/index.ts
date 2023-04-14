export interface UpdateUserInput {
  avatar: string;
  email: string;
  first_name: string;
  last_name: string;
}

export interface User extends UpdateUserInput {
  id: number;
}

export interface ReponseType<D> {
  support?: {
    text?: string;
    url?: string;
  };
  data: D;
}

export interface UserOneResponse extends ReponseType<User> {}