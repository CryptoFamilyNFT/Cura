import React from "react";
import  UserContext  from "./UserContext";
import { UserHelper } from "./UserHelper";

const UserProvider = ({ children }) => {
    const [context, setContext] = React.useState({isLoad: true, reload: false, theme: 'light'});

    const saveContext = (context) => {
      setContext(context);
    };

    return <UserContext.Provider value={{context, saveContext}}>{children}</UserContext.Provider>;
  };

  export default UserProvider;
