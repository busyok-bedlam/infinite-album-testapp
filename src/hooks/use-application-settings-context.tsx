import { createContext, useContext } from 'react'
import { SettingsHookObj } from './use-settings';

export const SettingsContext = createContext<SettingsHookObj | undefined>(  undefined,);

export const useSettingsContext = (): SettingsHookObj => {  
  const context = useContext(SettingsContext);  
  if (!context) {    
    throw new Error('useSettingsContext have used outside the SettingsContext');  
}  return context;};

