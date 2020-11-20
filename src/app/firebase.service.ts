import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Gacha } from "./gacha";
import { Inventory } from "./inventory";

@Injectable({ providedIn: "root" })
export class FirebaseService {
  constructor(private firestore: AngularFirestore) {}

  getGacha() {
    let Docref = this.firestore.collection<Gacha>("gacha");
    return Docref.valueChanges();
  }
  getInv() {
    let DocRef = this.firestore.collection<Inventory>("inventory", e =>
      e.orderBy("name")
    );
    return DocRef.valueChanges();
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
  deleteitem(id: string) {
    return this.firestore
      .collection("inventory")
      .doc(id)
      .delete();
  }
}
