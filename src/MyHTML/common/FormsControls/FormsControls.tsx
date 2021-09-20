import React from "react";
import { Field, WrappedFieldInputProps, WrappedFieldMetaProps, WrappedFieldProps, WrappedFieldsProps } from "redux-form";
import { FieldValidatorType } from "../../../Redux/utils/valedators/valedators";
import styles from "./FormCssControls.module.css";

type FormControlsPropsType = {
    meta: WrappedFieldMetaProps

}


const FormControls: React.FC<FormControlsPropsType> = ({ meta: { touched, error }, children }) => {
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

export const TextAreaComponent: React.FC<WrappedFieldProps> = (props) => {
    const { input, meta, ...restprops } = props;
    return <FormControls {...props}><textarea {...input} {...restprops} /></FormControls>
}

export const TextInputComponent: React.FC<WrappedFieldProps> = (props) => {
    const { input, meta, ...restprops } = props;
    return <FormControls {...props}><input {...input} {...restprops} /></FormControls>
}

// export const createField = (placeholder, name, requiredField, maxlenth15, component, props = {}, text = "") => (
//     <div>
//         <Field validate={[requiredField, maxlenth15]} placeholder={placeholder} name={name} component={component}  {...props} />{text}
//     </div>
// )



export function createField<FormKeysType extends string>(placeholder: string | undefined,
    name: FormKeysType,
    validate: Array<FieldValidatorType>,
    component: React.FC<WrappedFieldProps>,
    props = {}, text = "") {
    return (
        <div>
            <Field placeholder={placeholder} validate={validate} name={name} component={component}  {...props} />{text}
        </div>
    )
}