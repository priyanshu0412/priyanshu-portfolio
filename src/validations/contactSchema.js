import * as yup from 'yup';

const contactSchema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    phone: yup
        .number()
        .typeError("Phone must be a number")
        .integer("Phone must be an integer")
        .required("Phone is required"),
    message: yup.string().required("Message is required"),
});

export default contactSchema;
