import * as Yup from "yup/es";


const PostsFormSchema = Yup.object().shape({

    posts: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required')
});
export default PostsFormSchema;