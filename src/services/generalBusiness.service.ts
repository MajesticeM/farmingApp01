import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Business } from '../models/business';
import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, setDoc
} from '@angular/fire/firestore';

// const app = initializeApp({ environment.firebase });
// const firestore = getFirestore(app);
@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  private itemsCollection: AngularFirestoreCollection<Business>;

  private businessDoc!: AngularFirestoreDocument<Business>;
  business!: Observable<Business>;
  constructor(private afs: AngularFirestore,private firestore: Firestore) {
    this.itemsCollection = afs.collection<Business>("orgRegRequests");

  }

  addBusiness(business: Business) {
   return this.itemsCollection.add(business);
  }
  businesses(): Observable<Business[]> {
    const booksRef = collection(this.firestore, 'business');
    return collectionData(booksRef, { idField: 'id' }) as Observable<Business[]>;
  }
  businessRegRequests(): Observable<Business[]> {
    const booksRef = collection(this.firestore, 'businessRegRequest');
    return collectionData(booksRef, { idField: 'id' }) as Observable<Business[]>;
  }
  addbusinessregRequest(business: Business) {
    this.itemsCollection = this.afs.collection<Business>("businessRegRequest");
      this.itemsCollection.add(business);
  }
  addRejectedBusiness(business: Business) {
    this.itemsCollection = this.afs.collection<Business>("rejectedBusiness");
      return this.itemsCollection.add(business);
  }
  deleteBusiness( id: string) {
    console.log(id)
    const bookDocRef = doc(this.firestore, `businessRegRequest/${id}`);

    return deleteDoc(bookDocRef)
  }
}