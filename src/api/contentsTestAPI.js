import axios from "axios";
import { DOMAIN, PORT } from "./";

export const fetchMainContentsApi = () => axios.get(`http://${DOMAIN}:${PORT}/main/contents?size=10`)

export const fetchContentsApi = (filter) => {
    return axios.get(`http://${DOMAIN}:${PORT}/contents/${filter.categoryId}?series=${filter.series}&sort=${filter.sort}&order=${filter.order}&page=${filter.page}&size=${filter.size}`)
}