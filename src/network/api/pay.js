import { axios } from "../http/axios-interceptor";

// test
export const getAreas = (params) => axios.post("/users/login", params);
