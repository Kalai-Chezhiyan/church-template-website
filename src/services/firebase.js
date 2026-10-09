import {
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where
} from "firebase/firestore";
import { db } from "../firebaseConfig";

/**
 * Service layer for Firestore operations to abstract Firebase logic from components.
 */
export const firebaseService = {
  async getCollection(collectionName) {
    try {
      const colRef = collection(db, collectionName);
      const snapshot = await getDocs(colRef);
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error(`Error fetching collection ${collectionName}:`, error);
      throw error;
    }
  },

  async getDocument(collectionName, docId) {
    try {
      const docRef = doc(db, collectionName, docId);
      const snapshot = await getDoc(docRef);
      if (snapshot.exists()) {
        return { id: snapshot.id, ...snapshot.data() };
      }
      return null;
    } catch (error) {
      console.error(`Error fetching document ${docId} from ${collectionName}:`, error);
      throw error;
    }
  },

  async addDocument(collectionName, data) {
    try {
      const colRef = collection(db, collectionName);
      const docRef = await addDoc(colRef, data);
      return { id: docRef.id, ...data };
    } catch (error) {
      console.error(`Error adding document to ${collectionName}:`, error);
      throw error;
    }
  },

  async updateDocument(collectionName, docId, data) {
    try {
      const docRef = doc(db, collectionName, docId);
      await updateDoc(docRef, data);
      return { id: docId, ...data };
    } catch (error) {
      console.error(`Error updating document ${docId} in ${collectionName}:`, error);
      throw error;
    }
  },

  async deleteDocument(collectionName, docId) {
    try {
      const docRef = doc(db, collectionName, docId);
      await deleteDoc(docRef);
      return { id: docId };
    } catch (error) {
      console.error(`Error deleting document ${docId} from ${collectionName}:`, error);
      throw error;
    }
  },

  async getCollectionQuery(collectionName, constraints = []) {
    try {
      const colRef = collection(db, collectionName);
      const q = query(colRef, ...constraints);
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error(`Error executing query on ${collectionName}:`, error);
      throw error;
    }
  }
};
