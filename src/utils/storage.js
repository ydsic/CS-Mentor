import { STORAGE_KEYS } from "../constants/storageKeys";

export const getHistoryStorage = () => {
  JSON.parse(localStorage.getItem(STORAGE_KEYS.HISTORY) || "[]");
};
export const setHistoryStorage = (data) =>
  localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(data));

export const getThemeStorage = () => {
  localStorage.getItem(STORAGE_KEYS.THEME);
};
export const setThemeStorage = (theme) =>
  localStorage.setItem(STORAGE_KEYS.THEME, theme);
