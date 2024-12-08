const localStorageName: string = "signIn";
export const InsertIntoLocalStorage = (value: string) => {
  localStorage.setItem(localStorageName, value);
};

export const GetLocalStorage = (): string | null => {
  return localStorage.getItem(localStorageName);
};

export const RemoveLocalStorage = () => {
  localStorage.removeItem(localStorageName);
};
