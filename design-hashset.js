/* Masthan Swamy */

function Node(data){
    this.data = data;
    this.next = null;
}

class MyHashSet {
    constructor() {
        this.data = [];
        this.sizeOfHashTable = 2;
        this.noOfElements = 0;
        this.loadFactor = 0.5;
    }
    hash(key) {
        // using polynomial hash, as it gives good throughput
        let magicPrime = 31;
        let total = 31;
        let m = this.sizeOfHashTable;
        let hashValue = 0;

        // convert key to string type
        key = "" + key;

        for (let c of key) {
            hashValue = (hashValue + (c.charCodeAt() * total) % m) % m;
            total = total * magicPrime;
        }

        return hashValue;
    }

    rehash(){
        let dup = this.data;
        this.sizeOfHashTable = this.sizeOfHashTable * 2;
        this.data = [];
        this.noOfElements = 0;
        for(let i=0; i<dup.length; i++){
            if(!dup[i]) continue;
            let temp = dup[i];
            while(temp){
                this.add(temp.data);
                temp = temp.next;
            }
        }
    }

    add(key) {
        // Getting hash of key
        let hash = this.hash(key);
        let temp = this.data[hash];
        if(temp){
            while(temp.next){
                if(temp.data == key) return;
                temp = temp.next;
            }
            if(temp.data == key) return; 
            temp.next = new Node(key);
        }else{
            this.data[hash] = new Node(key);
        }
        this.noOfElements++;

        // Now check for load factor, and do rehash if load factor exceeds
        let lf = (this.noOfElements/this.sizeOfHashTable);

        if(lf>this.loadFactor){
            this.rehash();
        }
    }

    contains(key) {
        let hash = this.hash(key);
        let temp = this.data[hash];
        
        if(!temp) return false;

        while(temp){
            if(temp.data == key) return true;
            temp = temp.next;
        }

        return false;
    }

    remove(key){
        let hash = this.hash(key);
        let temp = this.data[hash];
        
        if(!temp) return;

        let dummy = new Node();
        dummy.next = temp;
        let curr = dummy;
        while(temp){
            if(temp.data == key){
                curr.next = temp.next;  
                this.data[hash] = dummy.next;              
                return [temp.data];
            }
            curr.next = temp;
            temp = temp.next;
            curr = curr.next;
        }

    }
}

let ops = ["remove","add","remove","add","add","remove","add","contains","add","contains","add","contains","remove","remove","contains","add","add","add","add","contains","remove","contains","contains","remove","add","contains","add","add","contains","add","add","add","add","add","contains","add","add","remove","add","contains","add","add","add","add","remove","add","contains","add","add","add","add","remove","remove","contains","contains","add","contains","contains","add","contains","remove","contains","contains","remove","add","add","add","contains","add","contains","add","add","add","add","add","contains","contains","remove","contains","add","remove","add","add","add","contains","add","add","add","add","add","add","remove","add","contains","add","add","add","contains","add","add"]
let vals = [[1],[9],[24],[53],[84],[90],[34],[9],[39],[84],[18],[9],[2],[34],[18],[68],[93],[62],[24],[76],[15],[88],[46],[32],[56],[62],[68],[99],[9],[69],[74],[55],[91],[21],[83],[43],[47],[91],[17],[16],[3],[2],[29],[15],[59],[54],[2],[86],[18],[30],[69],[66],[15],[76],[55],[1],[87],[52],[61],[84],[23],[61],[19],[99],[33],[63],[72],[45],[92],[72],[7],[29],[74],[0],[97],[63],[92],[85],[0],[83],[17],[32],[35],[91],[80],[95],[75],[18],[18],[38],[43],[14],[40],[46],[25],[42],[99],[47],[57],[25]]
// 16

var hash = new MyHashSet();

for(let i=0; i<81; i++){
    if(ops[i] == "remove"){
        console.log(hash.remove(vals[i][0]));
    }else if(ops[i] == "add"){
        hash.add(vals[i][0]);
    }else if(ops[i] == "contains"){
        console.log(hash.contains(vals[i][0]));
    }
}