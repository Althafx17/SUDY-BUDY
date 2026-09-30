// IndexedDB storage utility for large Master Question Paper PDF files
// Prevents LocalStorage QuotaExceededError by storing PDF binary Blobs/DataURLs in IndexedDB

const DB_NAME = 'StdyBuddy_PDF_Vault';
const DB_VERSION = 1;
const STORE_NAME = 'master_pdfs';

function openDB() {
  return new Promise((resolve, reject) => {
    if (!window.indexedDB) {
      reject(new Error('IndexedDB not supported in this browser environment.'));
      return;
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

/**
 * Save PDF Blob or DataURL to IndexedDB
 */
export async function savePdfToIndexedDB(id, fileBlobOrDataUrl, metadata = {}) {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);

      const record = {
        id,
        data: fileBlobOrDataUrl,
        metadata: {
          ...metadata,
          updatedAt: new Date().toISOString()
        }
      };

      const req = store.put(record);
      req.onsuccess = () => resolve(true);
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.warn('Failed to save PDF to IndexedDB, fallback available:', err);
    return false;
  }
}

/**
 * Retrieve PDF record from IndexedDB
 */
export async function getPdfFromIndexedDB(id) {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(id);

      req.onsuccess = () => {
        if (req.result) {
          resolve(req.result);
        } else {
          resolve(null);
        }
      };
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.warn('Failed to load PDF from IndexedDB:', err);
    return null;
  }
}

/**
 * Delete PDF record from IndexedDB
 */
export async function deletePdfFromIndexedDB(id) {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.delete(id);
      req.onsuccess = () => resolve(true);
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.warn('Failed to delete PDF from IndexedDB:', err);
    return false;
  }
}
