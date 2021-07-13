import React from "react";
import { Field } from "redux-form";
import styles from "./FormCssControls.module.css";



const FormControls = ({ input, meta: { touched, error }, children }) => {
    const hasError = touched && error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div >
                {children}
            </div>
            {hasError && < span className={styles.s}>{error}</span>}
        </div >
    )
}

export const TextAreaComponent = (props) => {
    const { input, child, meta, ...restprops } = props;
    return <FormControls {...props}><textarea {...input} {...restprops} /></FormControls>
}

export const TextInputComponent = (props) => {
    const { input, child, meta, ...restprops } = props;
    return <FormControls {...props}><input {...input} {...restprops} /></FormControls>
}

export const createField = (placeholder, name, requiredField, maxlenth15, component, props = {}, text = "") => (
    <div>
        <Field validate={[requiredField, maxlenth15]} placeholder={placeholder} name={name} component={component}  {...props} />{text}
    </div>
)