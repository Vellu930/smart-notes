import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class CycleDays {

    constructor() {}

    days: number[] = [];

    getDays(length: number) {
        for (let i=1; i<=length; i++) {
            this.days.push(i);
        }

        return this.days;
    }
}