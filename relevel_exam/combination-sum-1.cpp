/* Masthan Swamy */


/**
 * Program to print all combinations whose sum equals target ( Using parameterized way of recursion )
 */

#include<bits/stdc++.h>

using namespace std;

void print_all_combinations_that_sums_equals_target(int i, int n, int sum, int target, vector<int> &res, int arr[]){
    if(i>=n){
        if(sum == target){
            /** Successfully found combination, So print it */
            for(int val: res){
                cout<<val<<" ";
            }
            cout<<endl;
        }
        return;
    }

    if(sum+arr[i]>target){
        print_all_combinations_that_sums_equals_target(i+1, n, sum, target, res, arr);
    }else{
        /** Take the element */
        res.push_back(arr[i]);
        print_all_combinations_that_sums_equals_target(i, n, sum+arr[i], target, res, arr);

        /** Do not take the element*/
        res.pop_back();
        print_all_combinations_that_sums_equals_target(i+1, n, sum, target, res, arr);
    }
}

int main(){

    int arr[] = {2, 3, 5, 7};
    int n = sizeof(arr)/sizeof(arr[0]);
    int target = 7;
    vector<int> res;

    print_all_combinations_that_sums_equals_target(0, n, 0, target, res, arr);

    return 0;
}
