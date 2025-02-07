
// Problem Statement:- Assessment Questions:
// Question 1: DSA Given an array of integers, return the length of the longest increasing newArraysequence. A newArraysequence is a sequence that can be derived from the array by deleting some or no elements without changing the order of the 
//  remaining elements. For example, given the array [10, 9, 2, 5, 3, 7, 101, 18], the longest increasing newArraysequence is [2, 3, 7, 101], and its length is 4.


function lengthOfLIS(nums) {
    if (!Array.isArray(nums)) throw new Error("input must be an array list");
    if (nums.length === 0) return 0;

    let newArray = [];

    for (let num of nums) {
        if (typeof num !== 'number') throw new Error("array list should have only numbers");

        let left = 0, right = newArray.length - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (newArray[mid] < num) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        if (left < newArray.length) {
            newArray[left] = num;
        } else {
            newArray.push(num);
        }
    }

    return newArray.length;
}

// Example usage:
try {
    console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // Output: 4
} catch (error) {
    console.error(error.message);
}
