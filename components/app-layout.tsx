import NavigationComponent from "./nav/navigation";
import AuthContext from "../contexts/AuthProvider";
import FooterComponent from "./footer/footer";
import { useContext, useEffect } from "react";

const AppLayout = ({ children }: any) => {
  const { authState, setAuthState }: any = useContext(AuthContext);
  useEffect(() => {
    setAuthState(true);
  }, []);
  return (
    <>
      {/* {console.log(authState)} */}
      <NavigationComponent />
      <main>{children}</main>
      <FooterComponent />
    </>
  );
};

export default AppLayout;
