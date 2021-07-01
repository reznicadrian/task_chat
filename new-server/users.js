const users = [];

const addUser = ({ id, me, channelId }) => {

  const existingUser = users.find(
    (user) => user.channelId === channelId && user.me === me
  );
  if (existingUser) return { error: "Chat Name is taken" };

  const user = { id, me, channelId };
  users.push(user);
  return { user };
};

const getUser = (id) => users.find((user) => user.id === id);

export { addUser, getUser };
