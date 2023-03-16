import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Farm } from '../models/farm';
import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, setDoc
} from '@angular/fire/firestore';
import { Manufacturer } from 'src/models/manufacturer';

// const app = initializeApp({ environment.firebase });
// const firestore = getFirestore(app);
@Injectable({
  providedIn: 'root'
})
export class ManufacturerService {

  private itemsCollection: AngularFirestoreCollection<Manufacturer>;

  private manufacturerDoc!: AngularFirestoreDocument<Farm>;
  manufacturer!: Observable<Manufacturer>;
  constructor(private afs: AngularFirestore,private firestore: Firestore) {
    this.itemsCollection = afs.collection<Manufacturer>("orgRegRequests");

  }

  addManufacturer(manufacturer: Manufacturer) {
   return this.itemsCollection.add(manufacturer);
  }
  manufacturers(): Observable<Manufacturer[]> {
    const booksRef = collection(this.firestore, 'manufacturers');
    return collectionData(booksRef, { idField: 'id' }) as Observable<Manufacturer[]>;
  }
  manufacturerRegRequests(): Observable<Manufacturer[]> {
    const booksRef = collection(this.firestore, 'manufacturerRegRequest');
    return collectionData(booksRef, { idField: 'id' }) as Observable<Manufacturer[]>;
  }
  addfarmsregRequest(manufacturer: Manufacturer) {
    this.itemsCollection = this.afs.collection<Manufacturer>("manufacturerRegRequest");
      this.itemsCollection.add(manufacturer);
  }
  addRejectedManufacturer(manufacturer: Manufacturer) {
    this.itemsCollection = this.afs.collection<Manufacturer>("rejectedManufacturers");
      return this.itemsCollection.add(manufacturer);
  }
  deleteManufacturer( id: string) {
    console.log(id)
    const bookDocRef = doc(this.firestore, `manufacturerRegRequest/${id}`);

    return deleteDoc(bookDocRef)
  }
}