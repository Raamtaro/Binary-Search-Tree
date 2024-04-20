const merge = (halfA, halfB) => { //Takes two SORTED arrays

    const sortedArray = [];
    let i = 0;
    let j = 0;

    while (i < halfA.length && j < halfB.length) {
        if (halfA[i] <= halfB[j]) {
            sortedArray.push(halfA[i])
            i++

        } else {
            sortedArray.push(halfB[j])
            j++

        }
    } 

    for (; i < halfA.length; i++) {sortedArray.push(halfA[i])}
    for (; j < halfB.length; j++) {sortedArray.push(halfB[j])}

    return sortedArray

}

export default merge