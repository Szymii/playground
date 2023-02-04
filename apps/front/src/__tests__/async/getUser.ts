interface IUser {
  id: string;
  name: string;
  age: number;
}

export const getUser = async (id: string) => {
  const res = await fetch(`http://random/api/users/${id}`);
  const user = await res.json();
  return user as IUser;
};
