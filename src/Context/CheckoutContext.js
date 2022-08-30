import * as React from "react";
import validator from "validator";

const isText = RegExp(/^[A-Z ]+$/i);
const isZip = RegExp(/^[0-9]{5}([- /]?[0-9]{4})?$/);
const isNumber = RegExp(/^\d+$/);
const isDate = RegExp(/^\d{2}\/\d{2}$/);
const isCreditCard = validator.isCreditCard;

const steps = ["Shipping address", "Payment details", "Review your order"];

const initialValues = {
  firstName: {
    value: "",
    error: "",
    required: true,
    validate: "text",
    minLength: 2,
    maxLength: 20,
    helperText: "Custom error message",
  },
  lastName: {
    value: "",
    error: "",
    required: true,
    validate: "text",
    minLength: 2,
    maxLength: 20,
  },
  address1: {
    value: "",
    error: "",
    required: true,
    validate: "text",
    minLength: 2,
    maxLength: 20,
  },
  address2: {
    value: "",
    error: "",
    required: false,
    validate: false,
    minLength: 2,
    maxLength: 20,
  },
  city: {
    value: "",
    error: "",
    required: true,
    validate: "text",
    minLength: 3,
    maxLength: 20,
  },
  state: {
    value: "",
    error: "",
    required: false,
    validate: "text",
    minLength: 2,
    maxLength: 20,
  },
  zip: {
    value: "",
    error: "",
    required: true,
    validate: "zip",
    minLength: 5,
    maxLength: 10,
  },
  country: {
    value: "",
    error: "",
    required: true,
    validate: "text",
    minLength: 2,
    maxLength: 20,
  },
  cardName: {
    value: "",
    error: "",
    required: true,
    validate: "text",
    minLength: 2,
    maxLength: 50,
  },
  cardNumber: {
    value: "",
    error: "",
    required: true,
    validate: "credirCard",
    minLength: 16,
    maxLength: 16,
  },
  cardExpiration: {
    value: "",
    error: "",
    required: true,
    validate: "date",
    minLength: 5,
    maxLength: 5,
  },
  cardCvv: {
    value: "",
    error: "",
    required: true,
    validate: "number",
    minLength: 3,
    maxLength: 3,
  },
};

export const CheckoutContext = React.createContext();

export const CheckoutProvider = ({ children }) => {
  const [checkoutFields, setCheckoutFields] = React.useState(initialValues);
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    if (activeStep === steps.length - 1) {
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleChange = (ev) => {
    const { value, name } = ev.target;
    const fieldName = initialValues[name];
    const fieldValue = value;

    if (!fieldName) return;

    const { required, validate, minLength, maxLength, helperText } = fieldName;

    let error = "";

    if (required && !fieldValue) error = "This field is required";
    if (minLength && value && value.length < minLength)
      error = `Minimum ${minLength} characters is required.`;
    if (maxLength && value && value.length > maxLength)
      error = "Maximum length exceeded!";
    if (validate) {
      switch (validate) {
        case "text":
          if (value && !isText.test(value))
            error = helperText || "This field accepts text only.";
          break;

        case "number":
          if (value && !isNumber.test(value))
            error = helperText || "This field accepts numbers only.";
          break;

        case "month":
          if (value && !validator.isAfter(value))
            error = helperText || "Please enter a valid email address.";
          break;

        case "zip":
          if (value && !isZip.test(value))
            error = helperText || "Please enter a valid zip code.";
          break;
        case "credirCard":
          if (value && !isCreditCard(value))
            error = helperText || "Please enter a valid credit card number.";
          break;
        case "date":
          if (value && !isDate.test(value))
            error = helperText || "Please enter a valid date. Exmpl: 01/01";
          break;
        default:
          break;
      }
    }

    setCheckoutFields({
      ...checkoutFields,
      [name]: { ...fieldName, value: fieldValue, error },
    });
  };

  return (
    <CheckoutContext.Provider
      value={{
        activeStep,
        checkoutFields,
        handleChange,
        handleNext,
        handleBack,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};
