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
  addressEmail: string;
  password: string;
};
