import { Injectable } from '@angular/core';

export class Population {
    arg: number;
    val: number;
}

let populationData: Population[] = [{
    arg: 1950,
    val: 2525778669
}, {
    arg: 1960,
    val: 3026002942
}, {
    arg: 1970,
    val: 3691172616
}, {
    arg: 1980,
    val: 4449048798
}, {
    arg: 1990,
    val: 5320816667
}, {
    arg: 2000,
    val: 6127700428
}, {
    arg: 2010,
    val: 6916183482
}];

@Injectable()
export class Service {
    getPopulationData(): Population[] {
        return populationData;
    }
}
