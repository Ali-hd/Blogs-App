import validator from "validator";
import { specialChars } from "./regex";

//"يرجى ادخال تعليق صحيح"

const engFieldsToArabic = (field) => {
  switch (field) {
    case "comment":
      return "تعليق";
    case "name":
      return "اسم";
    case "email":
      return "بريد الكتروني";
  }
};



const validateCommentForm = (payload, errors) => {
  // errors = [] push errors inside
  Object.keys(payload).forEach((field, index) => {
    if (validator.isEmpty(payload[field])) {
      errors.push({ field: field, msg: `يرجاء ادخال ${engFieldsToArabic(field)}`});
    } else {
      if (field == "email" && !validator.isEmail(payload[field])) {
        errors.push({ field: field, msg: `يرجاء ادخال ${engFieldsToArabic(field)} صحيح` });
      }

      if (
        (field == "name" &&
          !validator.isByteLength(payload[field], { min: 2, max: 40 })) ||
        (field == "name" && specialChars.test(payload.name))
      ) {
        errors.push({ field: field, msg: `يرجاء ادخال ${engFieldsToArabic(field)} صحيح` });
      }

      if (
        field == "comment" &&
        !validator.isByteLength(payload[field], { min: 2, max: 1200 })
      ) {
        errors.push({ field: field, msg: `يرجاء ادخال ${engFieldsToArabic(field)} صحيح` });
      }
    }
  });

  console.log(payload, errors);

  return errors;
};

export default validateCommentForm;
