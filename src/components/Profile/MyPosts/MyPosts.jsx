import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Formik} from "formik";
import PostsFormSchema from "../../../utils/validators/PostsFormSchema";
import FormControls from "../../Common/FormControls/FormControls";


const MyPosts = (props) => {
console.log("Render");
    let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/> )

   /* let newPostElement = React.createRef();
    let OnAddPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }*/

    return (
        <div className={s.postBlock}>
            <div>
                <Formik
                    initialValues={{ posts:'' }}
                    onSubmit={(values) => {
                        props.addPost(values.posts)
                    }}
                    validationSchema={PostsFormSchema}
                >
                    {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          isSubmitting,
                        isValid,
                        dirty
                          /* and other goodies */
                      }) => (
                        <form onSubmit={handleSubmit}>
                            <div>
                               <FormControls as="textarea" name="posts" type="text" label="posts" />
                            </div>

                            <div>
                                <button type="submit" disabled={!isValid && !dirty}>
                                    Send
                                </button>
                            </div>
                        </form>
                    )}
                </Formik>

               {/* <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={OnAddPost}>Add post</button>
                </div>*/}
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>

    )
}

export default MyPosts;