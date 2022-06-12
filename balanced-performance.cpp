/** Masthan Swamy */

#include <bits/stdc++.h>

#define ll long long

using namespace std;



int main() {

	freopen ("input10.txt","r",stdin);

 freopen ("output10.txt","w",stdout);

 ll n;

	cin>>n;

	map<ll,ll> mp;

	mp[0]=1;

	ll sum = 0, ans = 0;

	while(n--)

	{

		ll a;cin>>a;

		sum += (a==1)?1LL:-1LL;

		ans += mp[sum];

		mp[sum]++;

	}

	cout<<ans;

	return 0;

}