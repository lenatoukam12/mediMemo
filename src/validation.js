const ERROR_MESSAGE = "this field is required";

const isNoEmpty = (value) => {
  if (value != "") {
    return "";
  } else {
    return ERROR_MESSAGE;
  }
};

export const validationShema = {
  username: isNoEmpty,
  password: isNoEmpty,
};

export function validationForm(values) {
  const errors = {};
  Object.keys(validationShema).forEach((fieldName) => {
    const value = values[fieldName];
    const error = validationShema[fieldName](value);
    if (error) errors[fieldName] = error;
  });
  return errors;
}

export function validationField(fieldName, value) {
  const error = validationShema[fieldName](value);
  return error;
}
