import { TUser } from "../Types";

const baseURL = `http://localhost:3000/users`;

export const LoginRequests = {
  registerFetch: ({ username, password, profilePic }: TUser): Promise<TUser> => {
    return fetch(baseURL, {
      method: "POST",
      body: JSON.stringify({ username, password, profilePic }),
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

  checkServerIfUsernameExists: (username: string): Promise<void | TUser> => {
    return fetch(baseURL)
    .then((response) => {
      if(!response.ok){
        throw new Error('Could not verify username')
      }
      return response.json()
    })
    .then((users: TUser[]) => 
    users.find((user: TUser) => user.username === username))
    .then((user) => {
      if(user){
        throw new Error("This username is already taken, please create a different username")
      }
      return;
    }
  )
  }
};
