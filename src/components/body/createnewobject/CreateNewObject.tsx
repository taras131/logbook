import style from "./CreateNewObject.module.css"
import Return from "../../../common/return/Return";
import React, {FC} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {connect} from "react-redux";
import {addCar} from "../../../redux/carReducer";

const addCarFormsValidation = (values: any) => {
    const errors = {};
    return errors;
}
type AddCarFormType = {
    brand: string
    model: string
    yearManufacture: string
}
type PropsType = {
    addCar: (brand: string, model: string, yearManufacture: string) => void
}
const CreateNewObject: FC<PropsType> = (props) => {
    console.log(props)
    const submit = (values: AddCarFormType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        props.addCar(values.brand, values.model, values.yearManufacture)
        setSubmitting(false);
    }
    return (
        <div className={style.wrapper}>
            <Return link = {"/"}/>
            <div>
                <Formik
                    initialValues={{brand: '', model: '', yearManufacture: ``}}
                    validate={addCarFormsValidation}
                    onSubmit={submit}
                >
                    {({isSubmitting}) => (
                        <Form className={style.form}>
                            <div>Марка</div>
                            <Field type="text" name="brand"/>
                            <ErrorMessage name="brand" component="div"/>
                            <div>Модель</div>
                            <Field type="text" name="model"/>
                            <ErrorMessage name="model" component="div"/>
                            <div>Год выпуска</div>
                            <Field type="text" name="yearManufacture"/>
                            <ErrorMessage name="yearManufacture" component="div"/>
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