/* Masthan Swamy */

#include<iostream>
#include<cmath>
#include<algorithm>
using namespace std;

int gcd(int a, int b){
    if(a == 0){
        return b;
    }

    return gcd(b%a, a);
}

int lcm(int a, int b){
    return (a*b)/gcd(a, b);
}

int main(){

    int k;
    cin>>k;

    int ksqrt = sqrt(k);
    int factors[ksqrt+1] = {0};

    int temp = k;
    for(int i=1; i<ksqrt+1; i++){
        if(temp%i == 0){
            factors[i] = temp/i;
        }
    }

    int minimumLCM = k;
    int AOfminimumLCM = 0;
    for(int i=1; i<ksqrt+1; i++){
        if(factors[i] != 0){
            int currentFactorLCM = lcm(i, factors[i]);
            if(minimumLCM == currentFactorLCM){
                if(i>AOfminimumLCM){
                    AOfminimumLCM = i;
                }
                // cout<<"1LCM: "<<"("<<i<<", "<<factors[i]<<") "<<currentFactorLCM<<"  "<<minimumLCM<<"  "<<AOfminimumLCM<<endl;
            }else{
                minimumLCM = min(minimumLCM, currentFactorLCM);
                if(minimumLCM == currentFactorLCM){
                  AOfminimumLCM = i;
                }
                // cout<<"2LCM: "<<"("<<i<<", "<<factors[i]<<") "<<currentFactorLCM<<"  "<<minimumLCM<<"  "<<AOfminimumLCM<<endl;
            }
        }
    }

    cout<<"a: "<<AOfminimumLCM<<endl;
    cout<<"b: "<<factors[AOfminimumLCM]<<endl;

    return 0;
}
