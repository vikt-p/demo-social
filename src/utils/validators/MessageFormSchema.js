import * as Yup from "yup/es";


const MessageFormSchema = Yup.object().shape({

    message: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required')


});
export default MessageFormSchema;