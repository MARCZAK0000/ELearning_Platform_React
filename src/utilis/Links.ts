export const baseUrl = import.meta.env.PROD
  ? "https://localhost:7213"
  : "http://192.168.1.21:5000";
export const SignInLink = `${baseUrl}/api/account/signin`;

export const RegisterLink = `${baseUrl}/api/account/register`;

export const UserInformationsLink = `${baseUrl}/api/user/me`;

export const GetNotificationsLink = `${baseUrl}/api/notifications`;

export const RefreshTokenLink = `${baseUrl}/api/account/refresh`;

export const GetRoleLink = `${baseUrl}/api/account/role`;

export const ProfileImgUrlBaseLink =
  "http://127.0.0.1:10000/devstoreaccount1/platformdb-userimage";

export const NotificationChangeToRead = `${baseUrl}/api/notifications`;
