const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = 31

function reducer(accumulator, totalBatteries, batteryBatches) {
    const returns = accumulator + totalBatteries;
    console.log(
        `accumulator: ${accumulator}, totalBatteries: ${totalBatteries}, batteryBatches: ${batteryBatches},
         returns: ${returns}`
    );
    return returns
}

batteryBatches.reduce(reducer);

