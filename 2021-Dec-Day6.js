calculateNumberOfFish = () => {
    inputArray = [2,1,1,1,1,1,1,5,1,1,1,1,5,1,1,3,5,1,1,3,1,1,3,1,4,4,4,5,1,1,1,3,1,3,1,1,2,2,1,1,1,5,1,1,1,5,2,5,1,1,2,1,3,3,5,1,1,4,1,1,3,1,1,1,1,1,1,1,1,1,1,1,1,4,1,5,1,2,1,1,1,1,5,1,1,1,1,1,5,1,1,1,4,5,1,1,3,4,1,1,1,3,5,1,1,1,2,1,1,4,1,4,1,2,1,1,2,1,5,1,1,1,5,1,2,2,1,1,1,5,1,2,3,1,1,1,5,3,2,1,1,3,1,1,3,1,3,1,1,1,5,1,1,1,1,1,1,1,3,1,1,1,1,3,1,1,4,1,1,3,2,1,2,1,1,2,2,1,2,1,1,1,4,1,2,4,1,1,4,4,1,1,1,1,1,4,1,1,1,2,1,1,2,1,5,1,1,1,1,1,5,1,3,1,1,2,3,4,4,1,1,1,3,2,4,4,1,1,3,5,1,1,1,1,4,1,1,1,1,1,5,3,1,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,1,1,1,1,1,1,1,5,1,4,4,1,1,1,1,1,1,1,1,3,1,3,1,4,1,1,2,2,2,1,1,2,1,1];
    // inputArray = [3,4,3,1,2];
    tempArray = inputArray;
    for (i = 1; i <= 256; i++) {
        inputArray = inputArray.map(m => m > 0 ? m - 1 : m);
        countZeros = countOccurrences(tempArray, 0);
        if (countZeros > 0) {
            for(k = 0; k<tempArray.length; k++) {
                if(tempArray[k]===0) {
                    inputArray[k] = 6;
                }
            }
            for (j = 1; j <= countZeros; j++) {
                inputArray.push(8);
            }
        }
        tempArray = inputArray;
        console.log(inputArray);
    }
    document.getElementById('result').innerHTML = inputArray.length;
}

const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);