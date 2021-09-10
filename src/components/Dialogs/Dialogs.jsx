import React from 'react';
import s from './Dialogs.module.css';
import DialogItems from "./DialogItems/DialogItems";
import Message from "./Message/Message";
import {Formik} from "formik";
import MessageFormSchema from "../../utils/validators/MessageFormSchema";
import FormControls from "../Common/FormControls/FormControls";


const Dialogs = (props) => {

    let state = props.dialogsPages;

    let dialogElements = state.dialogs.map(d => <DialogItems name={d.name} id={d.id}/>)
    let messageElements = state.messages.map(m => <Message message={m.message}/>)

   /* let newMessageBody = state.newMessageBody;

    let onSendMessageClick  = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.updateMessage(body);
    }*/



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                   {/*<div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder="Enter your message"></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>*/}

                    <Formik
                        initialValues={{ message:'' }}
                        onSubmit={(values) => {
                            console.log(values)
                            props.sendMessage(values.message)
                        }}
                        validationSchema={MessageFormSchema}
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
                                   {/* <textarea className={touched.message && errors.message && styles.error}
                                        type="text"
                                        name="message"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.message}
                                    />*/}
                                    <FormControls as="textarea" type="text" name="message"  label="Add posts"/>
                                    {/*<ErrorMessage name="message" component="div" />*/}

                                </div>

                                <div>
                                    <button type="submit" disabled={!isValid && !dirty}>
                                        Send
                                    </button>
                                </div>
                            </form>
                        )}
                    </Formik>

                </div>
            </div>

        </div>
    )
}
export default Dialogs;