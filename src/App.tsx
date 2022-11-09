import React from 'react';
// import logo from './logo.svg';
import { SettingsContext } from './hooks/use-application-settings-context';
import { useSettings } from './hooks/use-settings';
import { VolumeController } from './components/VolumeController';
import './App.css';

function App() {
  const settings = useSettings()
  return (
    <SettingsContext.Provider value={settings}>
    <div>
      <VolumeController/>
    </div>
    </SettingsContext.Provider>

  );
}

export default App;
