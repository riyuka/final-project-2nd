

const jwt = require("jsonwebtoken");

function getUserId(context) {
  const Authorization = context.token;
  if (Authorization) {
    const token = Authorization.replace("Bearer ", "");
    const user = jwt.verify(token, "secret");
    return user.userId;
  }

  throw new Error("Not authenticated");
}


// const AUTH_TOKEN = 'AUTH_TOKEN';

// let jtoken;

// const getToken = async () => {
//   if (jtoken) {
//     return Promise.resolve(token);
//   }

//   token = await AsyncStorage.getItem(AUTH_TOKEN);
//   return jtoken;
// };

// const signIn = (newToken) => {
//   jtoken = newToken;
//   return AsyncStorage.setItem(AUTH_TOKEN, newToken);
// };

// const signOut = () => {
//   jtoken = undefined;
//   return AsyncStorage.removeItem(AUTH_TOKEN);
// };


module.exports = {
  getUserId
  // getToken,
  // signIn,
  // signOut
};