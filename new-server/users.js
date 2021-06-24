const users = [];

const addUser = ({ id, userName, room }) => {
  userName = userName.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existingUser = users.find(
    (user) => user.room === room && user.userName === userName
  );
  if (existingUser) return { error: "Chat Name is taken" };

  const user = { id, userName, room };
  users.push(user);
  return { user };
};

const getUser = (id) => users.find((user) => user.id === id);

export { addUser, getUser };
