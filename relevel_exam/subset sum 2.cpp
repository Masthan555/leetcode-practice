#include<bits/stdc++.h>

using namespace std;

typedef vector<vector<int>> vv;
typedef vector<int> v;
class Solution {
private:
    void solve(int ind, v &a , v &ds ,vv &ans)
    {
        ans.push_back(ds);
        
        for(int i = ind ; i<a.size(); i++)
        {
            if( i > ind && a[i] == a[i-1]) continue;
            
            ds.push_back(a[i]);
            solve(i+1, a ,ds ,ans);
            ds.pop_back();
        }
    }
public:
    vector<vector<int>> combinationSum2(vector<int>& candidates, int target) {
        vv ans;
        v ds;
        sort(candidates.begin(),candidates.end());
        
        solve(0,candidates,ds,ans);
        
        return ans;
    }
};