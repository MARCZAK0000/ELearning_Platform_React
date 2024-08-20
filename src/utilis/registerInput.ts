import { ReactNode } from "react";
export type RegisterInputTypes = {
  id: number;
  name: string;
  type: string;
  placeholder?: string;
  children: ReactNode;
};

export const RegisterInput: RegisterInputTypes[] = [
  {
    id: 0,
    name: "addressEmail",
    type: "text",
    placeholder: "Enter Email Address",
    children: "Email Address",
  },
  { id: 1, name: "password", type: "password", children: "Password" },
  {
    id: 2,
    name: "confirmPassword",
    type: "password",
    children: "Confirm Password",
  },
  {
    id: 3,
    name: "firstName",
    type: "text",
    placeholder: "Enter your first name",
    children: "First name",
  },
  {
    id: 4,
    name: "secondName",
    type: "text",
    placeholder: "Enter your second name",
    children: "Second name (optional)",
  },
  {
    id: 5,
    name: "surname",
    type: "text",
    placeholder: "Enter your surname",
    children: "Surname",
  },
  { id: 6, name: "phoneNumber", type: "text", children: "Phone number" },
  {
    id: 7,
    name: "city",
    type: "text",
    children: "City",
    placeholder: "Enter your City",
  },
  {
    id: 8,
    name: "streetName",
    type: "text",
    children: "Street name",
    placeholder: "Enter your street name",
  },
  {
    id: 9,
    name: "postalCode",
    type: "text",
    children: "Postal code",
    placeholder: "Enter your postal code",
  },
  {
    id: 10,
    name: "country",
    type: "text",
    children: "Country",
    placeholder: "Enter your Country",
  },
];
