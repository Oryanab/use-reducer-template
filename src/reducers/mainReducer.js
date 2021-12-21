// CRUD: CREATE, READ, UPDATE, DELETE
const shortid = require("shortid");

export const mainReducer = (state, action) => {
  let currentFriend;
  switch (action.type) {
    case "TOGGLE":
      let newFriends = state.filter(
        (friend) => friend.name !== action.payload.name
      );
      let newFriend = action.payload.friend;
      return [...newFriends, { ...newFriend, blacklist: !newFriend.blacklist }];
    case "CREATE_FRIEND":
      return [
        ...state,
        {
          id: shortid.generate(),
          name: action.payload.name,
          age: action.payload.age,
          blacklist: false,
        },
      ];
    case "UPDATE_FRIEND":
      currentFriend = state.find(
        (product) => product.name === action.payload.name
      );
      currentFriend.age = action.payload.age;
      return [...state];
    case "DELETE_FRIEND":
      let newDel = state.filter(
        (friend) => friend.name !== action.payload.name
      );
      return [...newDel];
    default:
      return state;
  }
};
