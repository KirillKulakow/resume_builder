import { auth } from "../../configFirebase";
import { registerUser, userError, logInUser, logOutUser} from "../actions/user";
import { paths } from "../../constants/index";
import storage from "../../helpers/storage";

export const createUserRegistration = (user, history) => async (dispatch) => {
  const { email, password } = user;
  try {
    const registerResult = await auth.createUserWithEmailAndPassword(
        email,
        password
    );
    const userAuthenticated = {
      email: registerResult.user.email,
      uid: registerResult.user.uid,
    };
    dispatch(registerUser(userAuthenticated));
    storage.save("user", userAuthenticated);
    history.push(paths.dashboard);
  } catch (error) {
    console.log('error redux')
    dispatch(userError(error));
  }
};

export const createUserLogin = (user) => async (dispatch) => {
  const { email, password } = user;
    const registerResult = await auth.signInWithEmailAndPassword(
      email,
      password
    );
    const userAuthenticated = {
      email: registerResult.user.email,
      uid: registerResult.user.uid,
    };
    dispatch(logInUser(userAuthenticated));
    storage.save("user", userAuthenticated);
};

export const logOutTotal = () => async (dispatch) => {
  await auth.signOut();
  dispatch(logOutUser());
  storage.del('user')
}
