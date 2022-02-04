export const composeValidators =
   (...validators) =>
   (value) =>
      validators.reduce(
         (error, validator) => error || validator(value),
         undefined
      );

export const required = (value) => (value ? undefined : "Required");
export const maxLengthCreator = (maxLength) => (value) =>
   value.length > maxLength ? `Max length is ${maxLength} symbols` : undefined;
