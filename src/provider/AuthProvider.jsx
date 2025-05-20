import { useState } from "react";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { app } from "../firebase/firebase.config";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
  //     setUser(loggedUser);
  //     setLoading(false);
  //   });
  //   return () => unsubscribe();
  // }, []);

  // const logout = () => {
  //   setLoading(true);
  //   return signOut(auth);
  // };

  const userInfo = {
    email: "mdredoy@gmail.com",
  };

  const authData = { userInfo, user, setUser };
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
