import { STORAGE_KEYS } from "../constants/storageKeys";

export function getHistoryStorage() {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.HISTORY);
    const parsed = stored ? JSON.parse(stored) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export const setHistoryStorage = (data) =>
  localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(data));

export const removeHistoryStorage = () =>
  localStorage.removeItem(STORAGE_KEYS.HISTORY);

export const getThemeStorage = () => {
  localStorage.getItem(STORAGE_KEYS.THEME);
};
export const setThemeStorage = (theme) =>
  localStorage.setItem(STORAGE_KEYS.THEME, theme);
