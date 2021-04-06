import { Component } from "@angular/core";
import { WATCH_LIST } from "./DATA";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  watchList = WATCH_LIST;
  isShowing = true;
  counter = 0;
  maxItems = 4;

  constructor() {}

  moveItemUp(i) {
    let cur = this.watchList[i];
    let swap = this.watchList[i - 1];
    let temp = swap;
    swap = cur;
    cur = temp;
    this.watchList[i] = cur;
    this.watchList[i - 1] = swap;
  }
  moveItemDown(i) {
    let cur = this.watchList[i];
    let swap = this.watchList[i + 1];
    let temp = swap;
    swap = cur;
    cur = temp;
    this.watchList[i] = cur;
    this.watchList[i + 1] = swap;
  }

  removeCondition() {
    this.isShowing = false;
    this.maxItems = this.watchList.length;
  }
}
