import React from "react";
import {Field, useField} from "formik";
import styles from "./FormControls.module.css"

const FormControls = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label>{label}</label>
            <div>
            <Field  className={meta.touched && meta.error? styles.error:null}
                       {...field} {...props}/>

            </div>
            {meta.touched && meta.error ? (
                <div className={styles.textError}>{meta.error}</div>
            ) : null}

        </>
    );
};

export default FormControls;