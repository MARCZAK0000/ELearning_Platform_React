export const baseUrl = import.meta.env.PROD
  ? "http://localhost:5000"
  : "http://localhost:5000"
  // : "http:// 192.168.0.178:5000";
export const SignInLink = `${baseUrl}/api/account/signin`;

export const RegisterLink = `${baseUrl}/api/account/registration`;

export const UserInformationsLink = `${baseUrl}/api/user/me`;

export const GetNotificationsLink = `${baseUrl}/api/notifications`;

export const RefreshTokenLink = `${baseUrl}/api/account/refresh`;

export const GetRoleLink = `${baseUrl}/api/account/role`;

export const ProfileImgUrlBaseLink =
  "http://127.0.0.1:10000/devstoreaccount1/platformdb-userimage";

export const NotificationChangeToRead = `${baseUrl}/api/notifications`;

export const SignOutLink = `${baseUrl}/api/account/signout`
