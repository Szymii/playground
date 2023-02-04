import { useEffect, useState } from "react";

interface IUser {
  id: string;
  name: string;
  age: number;
}

export const useUserQuery = (id: string) => {
  const [user, setUser] = useState<IUser | undefined>();
  useEffect(() => {
    (async () => {
      const res = await fetch(`http://random/api/users/${id}`);
      const user = await res.json();
      setUser(user);
    })();
  }, []);

  return user;
};
