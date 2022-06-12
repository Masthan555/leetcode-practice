/* Masthan Swamy */

function main(str){
    let n = str.length;
	let mp = {};

	mp[0]=1;

	let sum = 0, ans = 0;
    let i=0;
	while(n--)
	{
        let a = str[i];

		sum += (a==1)?1:-1;

		ans += mp[sum];

		mp[sum]++;

        i++;
	}

	console.log(ans);

	return 0;

}

let str = "1221";
main(str);