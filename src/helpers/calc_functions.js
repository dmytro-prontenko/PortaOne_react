export const findMinValue = (arr) => {
    const sortedArr = arr.sort((a, b) => a - b);
    return sortedArr[0];
};

export const findMaxValue = (arr) => {
    const sortedArr = arr.sort((a, b) => a - b);
    return sortedArr[sortedArr.length - 1];
};

export const increasingSequence = (arr) => {
    let acc = 1;
    let maxAcc = 1;
    let resArr = [arr[0]];
    let tempArr = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            acc++;
            tempArr.push(arr[i]);
        } else {
            if (acc > maxAcc) {
                maxAcc = acc;
                resArr = [...tempArr];
            }
            acc = 1;
            tempArr = [arr[i]];
        }
    }
    if (acc > maxAcc) {
        maxAcc = acc;
        resArr = [...tempArr];
    }

    return resArr.join(', ');
};

export const decreasingSequence = (arr) => {
    let acc = 1;
    let maxAcc = 1;
    let resArr = [arr[0]];
    let tempArr = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            acc++;
            tempArr.push(arr[i]);
        } else {
            if (acc > maxAcc) {
                maxAcc = acc;
                resArr = [...tempArr];
            }
            acc = 1;
            tempArr = [arr[i]];
        }
    }

    if (acc > maxAcc) {
        maxAcc = acc;
        resArr = [...tempArr];
    }

    return resArr.join(", ");
};

export const findMedian = (arr) => {
    return arr.length % 2 !== 0
        ? arr[(arr.length - 1) / 2]
        : (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2;
};

export const calculateAverage = (arr) => {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return (sum / arr.length).toFixed(2);
}
