interface ICreateUserDTO {
  id?: string;
  username: string;
  name: string;
  password: string;
  email: string;
  avatar?: string;
  createAt?: Date;
  birthday: string;
  urlOrigin?: string;
}

export { ICreateUserDTO };
