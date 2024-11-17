import dummyUsers from "../data/dummyUsers";

const initiState = {
  users: dummyUsers.map((user) => ({
    ...user,
    errorGameScore: -1,
  })),
};

const userReducer = (state = initiState, action) => {
  switch (action.type) {
    case "UPDATE_SCORE":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.userId
            ? { ...user, errorGameScore: action.payload.score }
            : user
        ),
      };
    case "RESET_SCORES":
      return {
        ...state,
        users: state.users.map((user) => ({
          ...user,
          errorGameScore: -1,
        })),
      };
    default:
      return state;
  }
};

export default userReducer;
