export const ErrorCodeReader = (errorCode: number | undefined) => {
  switch (errorCode) {
    case 400:
      return "Bad Request";
    case 401:
      return "Unauthorized - re log";
    case 403:
      return "Forbidden Request - you don't have permission for this operation";
    case 404:
      return "Invalid Login or password";
    case 500:
      return "Internal Server Error, try again later or contact with admin";
    default:
      return "Unknown Problem";
  }
};
