import { homedir } from 'os'
import { promises } from 'fs'
import { join } from 'path'

const fileDir = join(homedir(), 'quick-news.json')


export const saveParam = async (key, value) => {
    let data = {}
    if (await isFileExist(fileDir)) {
        const file = await promises.readFile(fileDir)
        data = JSON.parse(file)
    }

    if (key == 'order' && value == 'none') {
        delete data.order
    } else {
        data[key] = value
    }
    await promises.writeFile(fileDir, JSON.stringify(data))
}

export const resetParams = async () => {
    if (await isFileExist(fileDir)) {
        return await promises.rm(fileDir)
    }
}

export const readParams = async () => {
    try {
        let string = await promises.readFile(fileDir)
        return JSON.parse(string)
    } catch (error) {
        return false
    }
}

const isFileExist = async (directory) => {
    try {
        await promises.stat(directory)
        return true
    } catch (error) {
        return false
    }
}
