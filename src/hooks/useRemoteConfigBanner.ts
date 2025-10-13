import { useEffect, useState } from 'react'
import {
  fetchAndActivateRemoteConfig,
  getBannerConfig,
  type BannerConfig,
  getBannerEnvironment,
} from '../api/firebase.ts'

type State = {
  loading: boolean;
  error?: string;
  banner: BannerConfig;
};

const initialBanner: BannerConfig = {
  enabled: false,
  title: '',
  description: '',
  variant: 'info',
  bgColor: '#0ea5e9',
  link: undefined,
}

function getRuntimeEnv(): 'development' | 'staging' | 'production' {
  // Prefer explicit Vite mode when available
  const mode = (import.meta.env.MODE || '').toLowerCase()
  if (mode === 'development') return 'development'
  if (mode === 'staging') return 'staging'
  // Fallback to dev/prod booleans
  if (import.meta.env.DEV) return 'development'
  return 'production'
}

export function useRemoteConfigBanner(): State {
  const [state, setState] = useState<State>({
    loading: true,
    banner: initialBanner,
  })

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        await fetchAndActivateRemoteConfig()
        if (!mounted) return
        const cfg = getBannerConfig()
        const targetEnv = getBannerEnvironment()
        const runtimeEnv = getRuntimeEnv()
        const enabledInThisEnv = cfg.enabled && targetEnv === runtimeEnv
        setState({
          loading: false,
          banner: { ...cfg, enabled: enabledInThisEnv },
        })
      } catch (e) {
        if (!mounted) return
        // Fall back to defaults from Remote Config so banners from defaultConfig still work
        const cfg = getBannerConfig()
        const targetEnv = getBannerEnvironment()
        const runtimeEnv = getRuntimeEnv()
        const enabledInThisEnv = cfg.enabled && targetEnv === runtimeEnv
        setState({
          loading: false,
          banner: { ...cfg, enabled: enabledInThisEnv },
          error: (e as Error).message,
        })
      }
    })()

    return () => {
      mounted = false
    }
  }, [])

  return state
}
