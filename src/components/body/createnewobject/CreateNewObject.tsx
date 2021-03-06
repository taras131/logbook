import style from "./CreateNewObject.module.css"
import Return from "../../../common/return/Return";
import React, {FC} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {connect, useSelector} from "react-redux";
import {addCar} from "../../../redux/carReducer";
import Preloader from "../../../common/preloader/Preloader";
import {AppStateType} from "../../../redux/store";

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
    const submit = (values: AddCarFormType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        props.addCar(values.brand, values.model, values.yearManufacture)
        setSubmitting(false);
    }
    let optionList: any = []
    for (let i = 2000; i < 2022; i++) {
        optionList.push(<option value={i}>{i}</option>)
    }
    const isLoading = useSelector((state: AppStateType) => state.loandingInformation.isLoading)
    if(isLoading) {
        return <Preloader/>
    }
    return (
        <div className={style.wrapper}>
            <Return link={"/"}/>
            <div>
                <Formik
                    initialValues={{brand: '', model: '', yearManufacture: ``}}
                    validate={addCarFormsValidation}
                    onSubmit={submit}
                >
                    {({isSubmitting}) => (
                        <Form className={style.form}>
                            <div className={style.form_item}>
                                <div>Марка:</div>
                                <Field className={style.form_field} type="text" name="brand"/>
                                <ErrorMessage name="brand" component="div"/>
                            </div>
                            <div className={style.form_item}>
                                <div>Модель:</div>
                                <Field className={style.form_field} type="text" name="model"/>
                                <ErrorMessage name="model" component="div"/>
                            </div>
                            <div className={style.form_item}>
                                <div>Год выпуска:</div>
                                <Field className={style.form_field} as="select" name="yearManufacture">
                                    {optionList}
                                </Field>
                                <ErrorMessage name="yearManufacture" component="div"/>
                            </div>
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