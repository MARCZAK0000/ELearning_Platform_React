export type RegisterInputType = {
  addressEmail: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  secondName: string | null;
  surname: string;
  phoneNumber: string;
  city: string;
  county: string;
  streetName: string;
  postalCode: string;
};

export type SignInTypes = {
  emailAddress: string;
  password: string;
};

export type TokenResponseType = {
  addressEmail: string;
  token: string;
  refreshToken: string;
  signInDate: Date;
  tokenExpiredDate: Date;
};

export type TokenType = {
  addressEmail: string;
  token: string;
  refreshToken: string;
};

export type CookiesUserInformations = {
  accountID: string;
  firstName: string;
  secondName: string;
  surname: string;
  emailAddress: string;
  phoneNumber: string;
  address: CookiesUserAddress;
  className: any;
};

export type CookiesUserAddress = {
  city: string;
  country: string;
  postalCode: string;
  streetName: string;
};

export type OutletContextType = {
  cookies: {
    user?: TokenType;
  };
  handleCookie: (user: TokenType) => void;
  userCookies: {
    informations?: CookiesUserInformations;
  };
  handleUserCookie: (info: CookiesUserInformations) => void;
};
