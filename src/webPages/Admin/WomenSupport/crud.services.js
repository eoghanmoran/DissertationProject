import { db } from "../../../firebase-config";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const bookCollectionRef = collection(db, "WomenSupport");
class ServiceDataService {
  addService = (newBook) => {
    return addDoc(bookCollectionRef, newBook);
  };

  updateService = (id, updatedBook) => {
    const bookDoc = doc(db, "WomenSupport", id);
    return updateDoc(bookDoc, updatedBook);
  };

  deleteService = (id) => {
    const bookDoc = doc(db, "WomenSupport", id);
    return deleteDoc(bookDoc);
  };

  getAllService = () => {
    return getDocs(bookCollectionRef);
  };

  getService = (id) => {
    const bookDoc = doc(db, "WomenSupport", id);
    return getDoc(bookDoc);
  };
}

export default new ServiceDataService();
