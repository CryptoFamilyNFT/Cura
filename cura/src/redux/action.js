export const SIGNUP = 'SIGN_UP';
export const SIGNIN = 'SIGN_IN';

export const signIn = (user) => ({
  type: SIGNIN,
  payload: user,
});

export const signUp = (userId) => ({
  type: SIGNUP,
  payload: userId,
});