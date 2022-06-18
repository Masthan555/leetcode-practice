/* Masthan Swamy */


/**
 * Program to print all combinations whose sum equals target ( Using parameterized way of recursion )
 */

#include<bits/stdc++.h>

using namespace std;

void print_all_combinations_that_sums_equals_target(int i, int n, int sum, int target, int arr[], vector<int> &subsetSum){
    if(i>=n){
        subsetSum.push_back(sum);
        return;
    }

    print_all_combinations_that_sums_equals_target(i+1, n, sum+arr[i], target, arr, subsetSum);

    print_all_combinations_that_sums_equals_target(i+1, n, sum, target, arr, subsetSum);

}

int main(){

    int arr[] = {2, 3, 5, 7};
    int n = sizeof(arr)/sizeof(arr[0]);
    int target = 7;
    vector<int> subsetSum;

    print_all_combinations_that_sums_equals_target(0, n, 0, target, arr, subsetSum);

    return 0;
}
