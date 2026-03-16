import { getAuth } from "../api/auth/getAuth.api"

const checkUserAuth = async () => {
    const currentUser = await getAuth();

    return currentUser.data?.user;
}

export default checkUserAuth;