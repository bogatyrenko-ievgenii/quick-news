#!/usr/bin/env node
import { getData } from './services/api.service.js'


const initCLI = async () => {
    await getData()
}

initCLI();