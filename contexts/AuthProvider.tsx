import { createContext, useState } from "react";
const AuthContext = createContext({});

export const AuthProvider = ({ children }: any) => {
  const [authState, setAuthState]: any = useState({
    authState: false,
  });

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
