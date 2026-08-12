const LOCAL_STORAGE_KEY = 'joinstr-dark-mode';

if (isDarkMode()) {
  document
      .getElementsByTagName('html')[0]
      .classList
      .add('theme-dark');
}

function isDarkMode() {
  const storage = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (storage === null) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  return JSON.parse(storage);
}

function toggleDarkMode() {
  const flippedDarkMode = !isDarkMode();
  document
      .getElementsByTagName('html')[0]
      .classList
      .toggle('theme-dark', flippedDarkMode);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(flippedDarkMode));
  return flippedDarkMode;
}

document.addEventListener('DOMContentLoaded', function () {
  document
      .getElementById('theme-toggle')
      .addEventListener('click', toggleDarkMode);
});
