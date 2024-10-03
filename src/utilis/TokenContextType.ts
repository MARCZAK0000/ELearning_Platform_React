import { TokenType } from "./InputTypes";

export type TokenContextType = {
  token: TokenType | null;
  setToken: React.Dispatch<React.SetStateAction<TokenType | null>>;
};
