function findSubsets(subset, nums, output, index)
{
 
    // Base Condition
    if (index == nums.length) {
        subset.push(output);
        return;
    }
 
    // Not Including Value which is at Index
    findSubsets(subset, nums, [...output], index + 1);
 
    // Including Value which is at Index
    output.push(nums[index]);
    findSubsets(subset, nums, [...output], index + 1);
}
 
// Main List for storing all subsets
let subset = [];
 
// Input ArrayList
let input = [];
input.push(1);
input.push(2);
input.push(3);
 
findSubsets(subset, input, [], 0);