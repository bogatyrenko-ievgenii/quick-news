export const getArgs = (args) => {
    const dict = {}
    const [executor, file, ...rest] = args
    rest.forEach((arg, idx, arr) => {

        if (arg.charAt(0) === '-') {
            if (arg === '-h' || arg === '-reset') {
                dict[arg.substring(1)] = true;
            } else {
                dict[arg.substring(1)] = arr[idx + 1]
            }
        } else if (arg.charAt(0) !== '-') {
            let isExist = Object.values(dict).find(value => value == arg)
            if (!isExist) {
                dict['search'] = arg
            }
        }
    })
    return dict
}
