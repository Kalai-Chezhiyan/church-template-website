import { useState, useEffect } from 'react';
import { firebaseService } from '../services/firebase';

/**
 * Custom hook to fetch a collection from Firestore.
 * @param {string} collectionName - The name of the collection to fetch.
 * @param {Array} fallbackData - Optional data to use while loading or if fetch fails.
 */
export function useFirestoreData(collectionName, fallbackData = []) {
  const [data, setData] = useState(fallbackData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await firebaseService.getCollection(collectionName);
        if (result && result.length > 0) {
          setData(result);
        } else if (fallbackData) {
          setData(fallbackData);
        }
      } catch (err) {
        console.error(`Error fetching ${collectionName}:`, err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [collectionName]);

  return { data, loading, error };
}

/**
 * Custom hook to fetch a single document from Firestore.
 */
export function useFirestoreDocument(collectionName, docId, fallbackData = null) {
  const [data, setData] = useState(fallbackData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await firebaseService.getDocument(collectionName, docId);
        if (result) {
          setData(result);
        } else if (fallbackData) {
          setData(fallbackData);
        }
      } catch (err) {
        console.error(`Error fetching document ${docId} from ${collectionName}:`, err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [collectionName, docId]);

  return { data, loading, error };
}
