export const getArgs = (args) => {
    const dict = {}
    const [executor, file, ...rest] = args
    rest.forEach((arg, idx, arr) => {

        if (arg.charAt(0) === '-') {
            dict[arg.substring(1)] = arr[idx + 1]
        }
        if (arg.charAt(0) !== '-') {
            dict['search'] = arg
        }
        if (arg == '-h' || arg == '-reset') {
            dict[arg.substring(1)] = true;
        }
    })
    return dict
}
