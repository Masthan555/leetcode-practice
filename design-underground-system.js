/* Masthan Swamy */

class UndergroundSystem {
    constructor() {
        this.customers = {};
        this.averageTimeBetweenStations = {};
    }
    checkIn = function (id, stationName, t) {
        if (this.customers[id]) {
            this.customers[id].stations.push(
                {
                    from: [stationName, t],
                    travelling: true
                }
            );
        } else {
            this.customers[id] = {
                stations: [
                    {
                        from: [stationName, t],
                        travelling: true
                    }
                ]
            };
        }
    };
    checkOut = function (id, stationName, t) {
        if (!this.customers[id])
            return;

        this.customers[id].stations.forEach(station => {
            if (station.travelling == true) {
                station.to = [stationName, t];
                station.travelling = false;

                // calculate avg and insert into averageTimBetweenStatios object
                if (this.averageTimeBetweenStations[station.from[0]]) {
                    let found = false;
                    for (let i = 0; i < this.averageTimeBetweenStations[station.from[0]].length; i++) {
                        let dest = this.averageTimeBetweenStations[station.from[0]][i];
                        if (dest.to == stationName) {
                            found = true;
                            dest.passengers += 1;
                            dest.sum += station.to[1]-station.from[1];
                        }
                    }
                    if (found == false) {
                        this.averageTimeBetweenStations[station.from[0]].push({
                            to: stationName,
                            passengers: 1,
                            sum: station.to[1]-station.from[1]
                        });
                    }
                } else {
                    this.averageTimeBetweenStations[station.from[0]] = [{
                        to: stationName,
                        passengers: 1,
                        sum: station.to[1]-station.from[1]
                    }];
                }
            }
        });

    };
    getAverageTime = function (startStation, endStation) {
        var n = 0, sum = 0;
        if (!this.averageTimeBetweenStations[startStation])
            return 0;

        for (let i = 0; i < this.averageTimeBetweenStations[startStation].length; i++) {
            let dest = this.averageTimeBetweenStations[startStation][i];
            if (dest.to == endStation) {
                n = dest.passengers;
                sum = dest.sum;
            }
        }

        if (n && sum) {
            return (sum / n);
        }
    };
}

let ops = ["checkIn","checkIn","checkIn","checkOut","checkOut","checkOut","getAverageTime","getAverageTime","checkIn","getAverageTime","checkOut","getAverageTime"];
let values = [[45,"Leyton",3],[32,"Paradise",8],[27,"Leyton",10],[45,"Waterloo",15],[27,"Waterloo",20],[32,"Cambridge",22],["Paradise","Cambridge"],["Leyton","Waterloo"],[10,"Leyton",24],["Leyton","Waterloo"],[10,"Waterloo",38],["Leyton","Waterloo"]];
let us = new UndergroundSystem(); 
for(let i=0; i<ops.length; i++){
    switch(ops[i]){
        case "checkIn": 
            us.checkIn(values[i][0], values[i][1], values[i][2]); 
            break;
        case "checkOut": 
            us.checkOut(values[i][0], values[i][1], values[i][2]); 
            break;
        case "getAverageTime": 
            console.log(us.getAverageTime(values[i][0], values[i][1])); 
            break;
    }
}


