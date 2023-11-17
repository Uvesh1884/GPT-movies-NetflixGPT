export const cheackErrorMessage = (email, password) => {

  const IsemailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const IspasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!IsemailValid) return "Email is not Invalid";
  if (!IspasswordValid) return "Password is not Invalid";

  return null;
};
