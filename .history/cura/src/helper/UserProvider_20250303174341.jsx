import React, { useEffect } from "react";
import { UserContext } from "./UserContext";
import { UserHelper } from "./UserHelper";

const LanguageProvider = ({ children }) => {
    const [context, setContext] = React.useState({isLoad: true, reload: false, theme: 'light'});

    const saveContext = (context) => {
      setContext(context);
    };

    useEffect(() => {
      const ctx = UserHelper.getInitiLang(context)
      saveContext({...ctx, loaded: true, reload: false});
    }, []);

    return <UserContext.Provider value={{context, saveContext}}>{children}</UserContext.Provider>;
  };

  export default LanguageProvider;
