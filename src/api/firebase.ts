import { getApp, getApps, initializeApp, type FirebaseOptions } from 'firebase/app'
import {
  getRemoteConfig,
  fetchAndActivate,
  getValue,
  type RemoteConfig,
} from 'firebase/remote-config'

import {
  API_KEY,
  APP_ID,
  AUTH_DOMAIN,
  MEASUREMENT_ID,
  MESSAGE_SENDER_ID,
  PROJECT_ID,
  STORAGE_BUCKET
} from '../constants/Constants.ts'

const firebaseConfig: FirebaseOptions = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGE_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID,
}

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

// Remote Config requires appId; ensure it matches your Web app settings.
const rc: RemoteConfig = getRemoteConfig(app)

// Faster refresh in dev, conservative in prod.
rc.settings = {
  fetchTimeoutMillis: 10000,
  minimumFetchIntervalMillis:
    // Vite exposes env flags via import.meta.env
    import.meta.env.DEV ? 10000 : 60 * 60 * 1000,
}

// Safe defaults so the UI can render before server values arrive.
rc.defaultConfig = {
  banner_environment: 'development', // production | staging | development
  banner_enabled: false,
  banner_variant: 'info', // info | warning | success | error
  // banner_bg_color: 'orange',
  banner_title: '',
  banner_description: '',
  banner_link: '',
}

export async function fetchAndActivateRemoteConfig(): Promise<boolean> {
  try {
    return await fetchAndActivate(rc)
  } catch {
    return false
  }
}

export type BannerConfig = {
  enabled: boolean;
  title: string;
  description: string;
  variant: 'info' | 'warning' | 'success' | 'error';
  bgColor?: string;
  link?: string;
};


export function getBannerConfig(): BannerConfig {
  return {
    enabled: getValue(rc, 'banner_enabled').asBoolean(),
    title: getValue(rc, 'banner_title').asString(),
    description: getValue(rc, 'banner_description').asString(),
    variant: getValue(rc, 'banner_variant').asString() as BannerConfig['variant'],
    // bgColor: getValue(rc, 'banner_bg_color').asString(),
    link: getValue(rc, 'banner_link').asString() || undefined,
  }
}

export type BannerEnvironment = 'development' | 'staging' | 'production'

export function getBannerEnvironment(): BannerEnvironment {
  const env = getValue(rc, 'banner_environment').asString()
  // Normalize and fallback to production
  const normalized = (env || 'production').toLowerCase()
  if (normalized === 'development' || normalized === 'staging' || normalized === 'production') {
    return normalized as BannerEnvironment
  }
  return 'production'
}
