import chalk from "chalk";
import dedent from "dedent";

export const printError = (error) => {
    console.log(chalk.bgRed(' ERROR 😡 ') + ' ' + error);
}

export const printSuccess = (message) => {
    console.log(chalk.bgGreen(' SUCCESS 🚀 ' + ' ' + message));
}

export const printHelp = () => {
    console.log(
        dedent`${chalk.bgYellow(' HELP ')}
        Press any word to look for article
        -num [any number] - number of articles you will recieve (default - 5)
        -by [relevance || oldest || newest || none] - the order by which you will recieve articles (default - relevance)
        
        `);
}