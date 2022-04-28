/* Masthan Swamy */

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class MyHashMap{
    constructor(){
        this.data = [];
        this.LOAD_FACTOR = 0.5;
        this.noOfElements = 0;
        this.sizeOfHashMap = 2;
    }

    hash(key){
        let magicPrime = 31;
        let total = 31;
        let m = this.sizeOfHashMap;
        let hash = 0;

        key = "" + key;
        for(let c of key){
            hash = (hash + (c.charCodeAt()*total)%m)%m;
            total = total * magicPrime;
        }

        return hash;
    }

    rehash(){
        let dup = this.data;
        this.data = [];
        this.noOfElements = 0;
        this.sizeOfHashMap = this.sizeOfHashMap*2;

        for(let i=0; i<dup.length; i++){
            if(!dup[i]) continue;
            let temp = dup[i];
            while(temp){
                this.put(temp.data[0], temp.data[1]);
                temp = temp.next;
            }
        }

    }

    put(key, value){
        let hash = this.hash(key);
        let temp = this.data[hash];
        if(temp){
            while(temp.next){
                if(temp.data[0] == key){
                    temp.data[1] = value;
                    return;
                };
                temp = temp.next;
            }
            if(temp.data[0] == key){
                temp.data[1] = value; 
                return;
            }
            temp.next = new Node([key, value]);
        }else{
            this.data[hash] = new Node([key, value]);
        }
        this.noOfElements++;

        // Check Load Factor
        let lf = this.noOfElements/this.sizeOfHashMap;
        if(lf>this.LOAD_FACTOR){
            this.rehash();
        }
    }

    get(key){
        let hash = this.hash(key);
        let temp = this.data[hash];

        if(!temp) return -1;

        while(temp){
            if(temp.data[0] == key){
                return temp.data[1]
            }
            temp = temp.next;
        }

        return -1;
    }

    remove(key){
        let hash = this.hash(key);
        let temp = this.data[hash];

        if(!temp) return -1;

        let dummy = new Node();
        let curr = dummy;

        while(temp){
            if(temp.data[0] == key){
                curr.next = temp.next;
                this.data[hash] = dummy.next;
                return;
            }
            curr.next = temp;
            temp = temp.next;
            curr = curr.next;
        }
    }
}

let ops = ["put","put","get","get","put","get","remove","get"];
let vals = [[1,1],[2,2],[1],[3],[2,1],[2],[2],[2]];

var hash = new MyHashMap();

for(let i=0; i<ops.length; i++){
    if(ops[i] == "remove"){
        console.log(hash.remove(vals[i][0]));
    }else if(ops[i] == "put"){
        hash.put(vals[i][0], vals[i][1]);
    }else if(ops[i] == "get"){
        console.log(hash.get(vals[i][0]));
    }
}