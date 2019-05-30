export const average_coords = (array) => array.reduce((avg, curr) => {
    for (let i in curr) {
        if (Array.isArray(curr[i]) || typeof curr[i] === 'string')
            continue;
        if (avg[i] === undefined) {
            avg[i] = curr[i];
        }
        else
            avg[i].duration = Number(avg[i].duration) + Number(curr[i].duration);
    }
    return avg;
}, []).map(x => {
    x.duration /= array.length;
    return x;
});
