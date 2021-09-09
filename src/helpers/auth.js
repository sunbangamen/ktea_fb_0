import { authService } from "../services/firebase";

export const signUp = (email, password) => {
  return authService.createUserWithEmailAndPassword(email, password);
};

export const signIn = (email, password) => {
  return authService.signInWithEmailAndPassword(email, password);
};

export const logout = () => {
  return authService.signOut();
};
