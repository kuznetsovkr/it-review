import { $host} from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (username, email, password) => {
    const {data} = await $host.post('api/auth/registration', {username, email, password})
    return (data)
}

export const login = async (username, password) => {
    const {data} = await $host.post('api/auth/login', {username, password})
    localStorage.setItem('token', data)
    return jwt_decode(data)
}
