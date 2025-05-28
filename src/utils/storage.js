import { STORAGE_KEYS } from "../constants/storageKeys";

export function getHistoryStorage() {
  const stored = localStorage.getItem(STORAGE_KEYS.HISTORY);
  return stored ? JSON.parse(stored) : [];
}

export const setHistoryStorage = (data) =>
  localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(data));

export const removeHistoryStorage = STORAGE_KEYS.HISTORY;

export const getThemeStorage = () => {
  localStorage.getItem(STORAGE_KEYS.THEME);
};
export const setThemeStorage = (theme) =>
  localStorage.setItem(STORAGE_KEYS.THEME, theme);
