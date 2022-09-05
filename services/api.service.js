import axios from "axios";
import { API_KEY, URL } from './apiAccess.js';

export const getData = async (
    q,
    pageSize = 5,
    fromDate = new Date(),
    orderBy = 'relevance'
) => {
    if (!q) {
        return
    }
    return await axios.get(URL, {
        params: {
            q: q,
            "page-size": pageSize,
            "api-key": API_KEY,
            "form-date": fromDate,
            "order-by": orderBy
        }
    })
}
