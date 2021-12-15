import axios from "axios";
import { DOMAIN, PORT } from "./";

export const fetchMainContentsApi = () => axios.get(`http://${DOMAIN}:${PORT}/main/contents?size=10`)