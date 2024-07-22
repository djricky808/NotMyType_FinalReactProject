import { TUser } from "../Types";

const baseURL = `http://localhost:3000/users`;

export const LoginRequests = {
  registerFetch: ({ username, password }: TUser): Promise<TUser> => {
    return fetch(baseURL, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Failed to register user");
      }
      return response.json();
    });
  },

  getUserFromServer: (username: string): Promise<TUser> =>
    fetch(baseURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not get user");
        }
        return response.json();
      })
      .then((users: TUser[]) =>
        users.find((user: TUser) => user.username === username)
      )
      .then((user) => {
        if (!user) {
          throw new Error("User does not exist");
        }
        return user;
      }),
};
