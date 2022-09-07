import axios from 'axios'
import { URL } from './_apiURL.js'
import { printError } from './log.sevice.js'

export const getData = async (
    q,
    pageSize = 5,
    fromDate = new Date(),
    orderBy = 'relevance',
    key
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
                "api-key": key,
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
        printError("Apparently, key is missing. Try to run script whith flag -h 😑 ")
    }

}
