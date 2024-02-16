import React from "react";
import { RealmAppContext } from "../realmApp";

export const useRealmApp = () => {
    const app = React.useContext(RealmAppContext);
    if (!app) {
        throw new Error (
            `You must call useRealmApp() inside of a <RealmAppProvider />`
        );
    }
    return app;
}
