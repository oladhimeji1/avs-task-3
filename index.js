function twoSum(nums, target) {
    // Create a hash map to store the seen numbers and their indices
    let numMap = new Map();

    // Loop through each number in the array
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];

        // Check if the difference exists in the map
        if (numMap.has(diff)) {
            // Return the indices of the two numbers that add up to the target
            return [numMap.get(diff), i];
        }

        // If not found, add the current number and its index to the map
        numMap.set(nums[i], i);
    }

    // If no solution is found, return an empty array
    return [];
}

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target));  // Output: [0, 1]
