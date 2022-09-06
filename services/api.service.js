import axios from 'axios'
import { API_KEY, URL } from './apiAccess.js'
import { printError } from './log.sevice.js'

export const getData = async (
    q,
    pageSize = 5,
    fromDate = new Date(),
    orderBy = 'relevance'
) => {

    let articles = []
    let titles = []
    let section = []
    try {
        if (!q) {
            return
        }
        await axios.get(URL, {
            params: {
                q: q,
                "page-size": pageSize,
                "api-key": API_KEY,
                "form-date": fromDate,
                "order-by": orderBy
            }
        }).then(data => {
            data.data.response.results.forEach(result => {
                titles.push(result.webTitle)
                articles.push(result.webUrl)
                section.push(result.sectionName)
            })
        })
        return { titles, section, articles }
    } catch (error) {
        printError("Something went wrong, please try again 😑 ")
    }

}
