import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { Models } from "appwrite";

import authServices from "../appwrite/services/auth";
import { AuthContextProps, User } from "../types/types";

const AuthContext = createContext<AuthContextProps | null>(null);

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  // state
  const [user, setUser] = useState<
    Models.User<Models.Preferences> | User | null
  >();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { signUp, logIn, getUser, logOut } = authServices;

  //
  useEffect(() => {
    getUser()
      .then(setUser)
      .finally(() => setIsLoading(false));
  }, []);

  const handleSignUp = async (
    name: string,
    email: string,
    password: string
  ) => {
    try {
      await signUp(name, email, password);
      const user = await getUser();
      if (user) {
        setUser(user);
      }
    } catch (error) {
      console.error("AuthContext :: SignUp :: Error", error);
    }
  };
  const handleLogIn = async (email: string, password: string) => {
    try {
      await logIn(email, password);
      const user = await getUser();
      if (user) {
        setUser(user);
      }
    } catch (error) {
      console.error("AuthContext :: LogIn :: Error", error);
    }
  };
  const handleGetUser = async () => {
    try {
      const user = await getUser();
      if (user) {
        setUser(user);
      }
    } catch (error) {
      console.error("AuthContext :: GetUser :: Error", error);
    }
  };
  const handleLogOut = async () => {
    try {
      await logOut();
      setUser(null);
    } catch (error) {
      console.error("AuthContext :: LogOut :: Error : ", error);
    }
  };

    // check if user is authenticated
    const isAuthenticated = () => {
      return user !== null; // returns true if user is authenticated
    };

  return (
    <AuthContext.Provider
      value={{
        user: user,
        getUser: handleGetUser,
        signUp: handleSignUp,
        logIn: handleLogIn,
        logOut: handleLogOut,
        isLoading: isLoading,
        isAuthenticated: isAuthenticated(),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// custom hook to use the AuthContext
const useAuth = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    console.error("Context :: AuthContext :: Not Found!");
    return null;
  }
  return authContext;
};

export { AuthContextProvider, useAuth };
