import { useState, useEffect } from 'react';

export interface SettingsHookObj {
  settings: SettingsConfig
  onChange: (value: Partial<SettingsConfig>) => void
}

interface SettingsConfig {
  volume: number
}
const initialConfig = { volume: 0 }
export function useSettings(): SettingsHookObj {
  const [settings, setSettings] = useState<SettingsConfig>(initialConfig)
  useEffect(() => {
    if(localStorage.getItem('settings')) {
      setSettings(JSON.parse(localStorage.getItem('settings') as string))
    }
  }, [])
  const onChange = (value: Partial<SettingsConfig>) => {
    setSettings((prevState) => {
      const updatedValue = {...prevState, ...value}
      localStorage.setItem('settings', JSON.stringify(updatedValue))
      return updatedValue
    })
  }
  return {
    settings,
    onChange
  }
}

