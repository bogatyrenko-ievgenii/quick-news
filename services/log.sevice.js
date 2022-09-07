import chalk from "chalk";
import dedent from "dedent";

export const printError = (error) => {
    console.log(chalk.bgRed(' ERROR 😡 ') + ' ' + error);
}

export const printSuccess = (message) => {
    console.log(chalk.bgGreen(' SUCCESS 🚀 ') + ' ' + message);
}

export const printLoading = (message) => {
    console.log(chalk.bgCyan(' Loading... 👀 '));
}

export const printHelp = () => {
    console.log(
        dedent`${chalk.bgYellow(' HELP 🤓 ')}

        First of all you should link to ${chalk.green('https://open-platform.theguardian.com')} to get an [API_KEY]
        When you've got your presonal key please run script with flag -key [API_KEY].

        For searching press any word as argument for looking for article.

        Flags:
         -num [any number] - number of articles you would like to recieve (default - 5)
         -order [relevance || oldest || newest || none] - the order by which you will recieve articles (default - relevance)
         -date [yyyy-mm-dd] - date from which you will recieve articles (default - nowaday)
         -reset - to reset all params
        `);
}

export const printTitle = (title, section) => {
    console.log('---------------------------');
    console.log(chalk.yellow(` ${title} `), chalk.gray(`(${section})`));
}

export const printArticle = (name) => {
    console.log(chalk.bold(' ↳'), chalk.green(` ${name}`));
}

export const printMsg = (message) => {
    console.log(chalk.bold(`${message}`));
}