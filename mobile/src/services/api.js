import axios from 'axios';
import Constants from 'expo-constants';

const { manifest2, expoConfig } = Constants;
const host = manifest2?.extra?.expoGo?.debuggerHost?.split(':')[0]
  ?? expoConfig?.hostUri?.split(':')[0];

const baseURL = __DEV__ && host
  ? `http://${host}:3333`
  : 'http://localhost:3333';

const api = axios.create({ baseURL });

export default api;
