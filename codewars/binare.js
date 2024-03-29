const binarySearch = (arr, item) => {
    let low = 0
    let high = arr.length - 1
    while(low <= high){
        let mid = Math.floor((low + high) / 2);
        let guess = arr[mid]
        if(guess === item){
            return mid
        }else if(guess > item){
            high = mid - 1
        }else {
            low = mid + 1
        }
    }
}

let numbers = [1,3,5,7,9]
console.log(binarySearch(numbers, 3))