import * as Realm from "realm-web";
import {Box, Button} from '@radix-ui/themes';
import { useRealmApp } from "../lib/useRealmApp";

const Login = () => {
    const app = useRealmApp();
    const handleLogin = async () => {
        try {
            await app.logIn(Realm.Credentials.anonymous());
        } catch (e) {
            console.error("error logging in");
        }
    };

    return (
        <Box>
          <Button
            variant="contained"
            onClick={handleLogin}
          >
            Login
          </Button>
        </Box>
    );
}

export default Login;
