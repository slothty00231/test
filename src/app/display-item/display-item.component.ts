import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { FirebaseService } from "../firebase.service";
import { Router } from "@angular/router";
import { Inventory } from "../inventory";
@Component({
  selector: "app-display-item",
  templateUrl: "./display-item.component.html",
  styleUrls: ["./display-item.component.css"]
})
export class DisplayItemComponent implements OnInit {
  constructor(
    private firebaseService: FirebaseService,
    private route: Router
  ) {}

  @Input() item: Inventory;

  ngOnInit() {
    this.item = {
      ...this.item
    };
  }

  del() {
    if (window.confirm("confirm")) {
      this.firebaseService
        .deleteitem(this.item.id)
        .then(() => {
          alert("deleteComplete");
        })
        .catch(err => {
          alert("deleteFailure");
        });
    }
  }
}
