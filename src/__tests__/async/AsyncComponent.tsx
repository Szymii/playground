import { useEffect, useState } from "react";

import { getUser } from "./getUser";

interface IUser {
  name: string;
  id: string;
  age: number;
}

export const AsyncComponent = () => {
  const [user, setUser] = useState<IUser | undefined>();

  useEffect(() => {
    getUser("123").then((res) => setUser(res));
  }, []);

  if (!user?.name) {
    return <>Loading...</>;
  }

  return <div>Hello</div>;
};
