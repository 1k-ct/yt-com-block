// preference ユーザーが設定した無効な
export interface userPreference {
  enable: boolean;
  forbiddenWords: string[];
  forbiddenChannels: string[];
}

// 関数の型を制限せず<T>の場合にする可能性がある(generics)
// const saveItem = async <T>() => {}

export const saveUserPreference = async (
  key: string,
  preference: userPreference
): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    chrome.storage.sync.set({ [key]: JSON.stringify(preference) }, () => {
      if (chrome.runtime.lastError) {
        return reject(chrome.runtime.lastError.message);
      }
      return resolve();
    });
  });
};

export const loadUserPreference = async (
  key: string
): Promise<userPreference | undefined> => {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.get(key, (preference) => {
      if (chrome.runtime.lastError) {
        return reject(chrome.runtime.lastError.message);
      }
      if (!preference[key]) {
        return resolve(undefined);
      }
      const data = JSON.parse(preference[key]);
      return resolve(data);
    });
  });
};
