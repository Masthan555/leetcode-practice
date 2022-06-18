#include<bits/stdc++.h>

using namespace std;

typedef vector<vector<int>> vv;
typedef vector<int> v;
class Solution {
private:
    void solve(int ind , int target , v &a , v &ds ,vv &ans)
    {
        if(target == 0)
        {
            ans.push_back(ds);
            return;
        }
        
        for(int i = ind ; i<a.size(); i++)
        {
            if( i > ind && a[i] == a[i-1]) continue;
            if(a[i] > target) break;
            
            ds.push_back(a[i]);
            solve(i+1,target - a[i] , a ,ds ,ans);
            ds.pop_back();
        }
    }
public:
    vector<vector<int>> combinationSum2(vector<int>& candidates, int target) {
        vv ans;
        v ds;
        sort(candidates.begin(),candidates.end());
        
        solve(0,target,candidates,ds,ans);
        
        return ans;
    }
};