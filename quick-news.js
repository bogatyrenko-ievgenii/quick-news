#!/usr/bin/env node

import { getData } from './services/api.service.js'
import { getArgs } from './handlers/args.js'
import { printError, printHelp, printSuccess, printLoading, printTitle, printArticle, printMsg } from './services/log.sevice.js'
import { saveParam, resetParams, readParams } from './services/storage.service.js'

const successMsg = 'new settings accepted 😅'

const initCLI = async () => {
    let args = getArgs(process.argv)

    if (args.h || Object.keys(args).length == 0) {
        try {
            return printHelp()
        } catch (error) {
            printError(error.message)
        }
    }

    if (args.num) {
        try {
            saveParam('num', args.num)
            return printSuccess(successMsg)
        } catch (error) {
            printError(error.message)
        }
    }

    if (args.order) {
        try {
            if (['relevance', 'oldest', 'newest', 'none'].find(item => item === args.order)) {
                saveParam('order', args.order)
                return printSuccess(successMsg)
            } else {
                return printError("Incorrect order, please type one of [relevance || oldest || newest || none]")
            }
        } catch (error) {
            printError(error.message)
        }
    }

    if (args.date) {
        try {
            if (args.date.match(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)) {
                saveParam(args)
                return printSuccess(successMsg)
            } else {
                return printError("Incorrect date, please type date in format as - [yyyy-mm-dd]");
            }
        } catch (error) {
            printError(error.message)
        }
    }

    if (args.reset) {
        try {
            resetParams()
            printSuccess(successMsg)
            return
        } catch (error) {
            printError(error.message)
        }
    }

    if (args.search) {
        try {
            printLoading()
            let params = await readParams()
            let data = await getData(args.search, params.num, params.date, params.order)
            if (Object.keys(data).length == 3) {
                printMsg(' press ctrl/cmd + click to follow the link')
            }
            const { titles, section, articles } = data
            titles.forEach((title, idx) => {
                printTitle(title, section[idx])
                printArticle(articles[idx])
            })

        } catch (error) {
            printError(error.message)
        }

    }
}

initCLI()