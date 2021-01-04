import style from "./CreateNewObject.module.css"
import Return from "../../../common/return/Return";
import React, {FC} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {connect} from "react-redux";
import {addCar} from "../../../redux/carReducer";

const addCarFormsValidation = (values: any) => {
    console.log(values)
    const errors = {};
    return errors;
}
type AddCarFormType = {
    brend: string
    model: string
}
type PropsType = {
    addCar: (brend: string, model: string) => void
}
const CreateNewObject: FC<PropsType> = (props) => {
    const submit = (values: AddCarFormType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        props.addCar(values.brend, values.model)
        setSubmitting(false);
    }
    return (
        <div className={style.wrapper}>
            <Return/>
            <div>
                <Formik
                    initialValues={{brend: '', model: ''}}
                    validate={addCarFormsValidation}
                    onSubmit={submit}
                >
                    {({isSubmitting}) => (
                        <Form className={style.form}>
                            <div>Марка</div>
                            <Field type="text" name="brend"/>
                            <ErrorMessage name="brend" component="div"/>
                            <div>Модель</div>
                            <Field type="text" name="model"/>
                            <ErrorMessage name="model" component="div"/>
                            <button type="submit" disabled={isSubmitting}>
                                Добавить
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}
export default connect(null, {addCar})(CreateNewObject)