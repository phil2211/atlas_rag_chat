/* eslint-disable react/prop-types */
import { RealmAppProvider } from "./realmApp";
import { useRealmApp } from "./lib/useRealmApp";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from './layout';
import Login from "./pages/Login";
import RagApp from "./pages/RagApp";

const APP_ID = import.meta.env.VITE_REALM_APP_ID;

const RequireLoggedInUser = ({ children }) => {
  const app = useRealmApp();
  return app.currentUser ? children : <Router><Layout><Login /></Layout></Router>;
};

const App = () => {
  return (
    <RealmAppProvider appId={APP_ID}>
      <RequireLoggedInUser>
        <Router>
          <Layout>
            <RagApp />
          </Layout>
        </Router>
      </RequireLoggedInUser>
    </RealmAppProvider>
    
  );
}

export default App;