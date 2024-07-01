export const findMinValue = (arr) => arr[0];

export const findMaxValue = (arr) => arr[arr.length - 1];

export const increasingSequence = (arr) => {
    let acc = 0;
    let maxAcc = 0;
    arr.forEach((element, index) => {
        if (element < arr[index + 1]) {
            acc++;
        } else {
            if (maxAcc < acc) {
                maxAcc = acc;
            }
            acc = 0;
        }
    });
    return maxAcc;
};

export const decreasingSequence = (arr) => {
    let acc = 0;
    let maxAcc = 0;
    arr.forEach((element, index) => {
        if (element > arr[index + 1]) {
            acc++;
        } else {
            if (maxAcc < acc) {
                maxAcc = acc;
            }
            acc = 0;
        }
    });
    return maxAcc;
};

export const findMedian = (arr) => {
    return arr.length % 2 !== 0
        ? arr[(arr.length - 1) / 2]
        : (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2;
};

export const calculateAverage = (arr) => {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return (sum / arr.length).toFixed(2);
};
