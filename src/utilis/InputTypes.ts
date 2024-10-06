import React from "react";

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

export type SignInResponseType = {
  success: boolean;
  role: string;
  email: string;
};
export type IsSignInContextType = {
  isSignIn: boolean;
  setIsSignIn: React.Dispatch<React.SetStateAction<boolean>>;
};
export type SignInResponseContextType = {
  signInResponse: SignInResponseType | null;
  setSignInResponse: React.Dispatch<
    React.SetStateAction<SignInResponseType | null>
  >;
};
