// firebase.js

import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, update } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyARjQppI8x9ReAI9hzuQA1GLKS-bBaUM3s',
  authDomain: 'electricity-monitoring-7f1c4.firebaseapp.com',
  databaseURL: 'https://electricity-monitoring-7f1c4-default-rtdb.firebaseio.com/',
  projectId: 'electricity-monitoring-7f1c4',
};

const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

export { database, ref, onValue, update};
