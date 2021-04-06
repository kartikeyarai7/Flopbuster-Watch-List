import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "my-watch-list-item",
  templateUrl: "./watch-list-item.component.html",
  styles: ["i {cursor:pointer}"]
})
export class WatchListItemComponent {
  @Input() item;
  @Input() f;
  @Input() l;
  @Output() up = new EventEmitter();
  @Output() down = new EventEmitter();
  isSale: boolean;

  saleClass = "bg-success text-light p-3 rounded mb-2";
  noSaleClass = "bg-dark text-light p-3 rounded mb-2";

  moveUp() {
    this.up.emit();
  }

  checkSale() {
    if (this.item.onSale) {
      return this.saleClass;
    } else {
      return this.noSaleClass;
    }
  }

  moveDown() {
    this.down.emit();
  }

  ngOnInit() {}
}
