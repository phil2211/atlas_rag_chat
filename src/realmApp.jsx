/* eslint-disable react/prop-types */
import React from "react";
import * as Realm from "realm-web";

export const RealmAppContext = React.createContext();

export const RealmAppProvider = ({ appId, children}) => {
    const [app, setApp] = React.useState(new Realm.App(appId));
    React.useEffect(() => {
        setApp(new Realm.App(appId));
    }, [appId]);  

    const [currentUser, setCurrentUser] = React.useState(app.currentUser);

    async function logIn(credentials) {
        await app.logIn(credentials);
        setCurrentUser(app.currentUser);
    }

    async function logOut() {
        await app.currentUser?.logOut();
        setCurrentUser(app.currentUser);
    }

    async function callFunction(name, ...args) {
        if (!app.currentUser) {
            throw new Error("Must be logged in to call a function");
        }
        try {
            return await app.currentUser.functions[name](...args);
        } catch (err) {
            throw new Error(`Error calling function: ${err.message}`);
        }
    }

    const wrapped = { ...app, currentUser, logIn, logOut, callFunction };

    return (
        <RealmAppContext.Provider value={wrapped}>
            {children}
        </RealmAppContext.Provider>
    );
}



