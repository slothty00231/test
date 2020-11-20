import { Component, Injectable, OnInit, Output } from "@angular/core";
import { FirebaseService } from "../firebase.service";
import { Gacha } from "../gacha";
import { Input } from "@angular/core";
import { Router } from "@angular/router";
import { Inventory } from "../inventory";
import { AngularFirestore } from "@angular/fire/firestore";
@Injectable({ providedIn: "root" })
@Component({
  selector: "app-display-gacha",
  templateUrl: "./display-gacha.component.html",
  styleUrls: ["./display-gacha.component.css"]
})
export class DisplayGachaComponent implements OnInit {
  [x: string]: any;
  constructor(
    private firestore: AngularFirestore,
    private firebaseService: FirebaseService,
    private route: Router
  ) {}

  @Input() gacha: Gacha;
  @Output() inv: Inventory;
  random: string;
  randomNumber: number;
  items: Inventory[];
  ngOnInit() {
    this.firebaseService.getInv().subscribe(val => {
      this.items = val;
    });
    let arr: number[] = [1, 2, 3, 4];

    for (var i = 0; i < arr.length; i++) {
      console.log("for loop : ", arr[i]);
    }

    arr.forEach(obj => {
      console.log("for Each: ", obj);
    });
  }
  onDisplay1() {
    this.gacha = { ...this.gacha };
    this.randomNumber = Math.round(Math.random() * 3);
    this.random = this.gacha.item[this.randomNumber];
    console.log("random num :", this.randomNumber);
    console.log(this.random);
    this.addInv(this.random);
  }
  onDisplay2() {
    for (var i = 0; i < 9; i++) {
      this.gacha = { ...this.gacha };
      this.randomNumber = Math.round(Math.random() * 3);
      this.random = this.gacha.item[this.randomNumber];
      console.log("random num :", this.randomNumber);
      console.log(this.random);
      this.addInv(this.random);
    }
  }
  addInv(n: string) {
    let inventory = {
      name: n
    };
    const ref = this.firestore.collection("inventory").add(inventory);

    ref.then(newRef => {
      const updateID = {
        id: newRef.id
      };
      newRef.update(updateID);
    });
    return ref;
  }
}
