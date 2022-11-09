import React from "react";
import { useSettingsContext } from "../hooks/use-application-settings-context";

export const VolumeController = () => {
  const {settings, onChange} = useSettingsContext()
  const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>): void => {
    onChange({volume: +e.target.value})
  }
  return (
    <>
      <label htmlFor='volume'>Volume</label>
      <input type="number" id="volume" value={settings.volume} onChange={onChangeHandler} />
    </>
  )
}