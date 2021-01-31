import style from "./CreateNewObject.module.css"
import Return from "../../../common/return/Return";
import React, {FC} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {RouteComponentProps} from "react-router";
import {useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addConsumables} from "../../../redux/recordsReducer";

const addConsumalesFormsValidation = (values: any) => {
    const errors = {};
    return errors;
}
type PathParamsType = {
    carId: string
}
type PropsType = RouteComponentProps<PathParamsType> & {
    someString: string
    addConsumables: (name: string, discription: string, id: string) => void
}
type AddConsumablesFormType = {
    name: string
    discription: string
}
const CreateNewConsumables: FC<PropsType> = (props) => {
    const id: string = `` + useLocation().pathname.split("/").pop()
    const dispatch = useDispatch()
    const onSubmit = (values: AddConsumablesFormType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        dispatch(addConsumables(values.name, values.discription, id))
        setSubmitting(false);
    }
    return (
        <div className={style.wrapper}>
            <Formik
                initialValues={{name: '', discription: ''}}
                validate={addConsumalesFormsValidation}
                onSubmit={onSubmit}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleSubmit,
                      handleChange,
                      handleBlur,
                      isSubmitting,
                  }) => (
                    <Form className={style.form}
                          onSubmit={(e) => {
                              e.preventDefault();
                              handleSubmit();
                          }}>
                        <div className={style.form_item}>
                            <div>Деталь</div>
                            <Field className={style.form_field} type="text" name="name"/>
                            <ErrorMessage name="name" component="div"/>
                        </div>
                        <div className={style.form_item}>
                            <div>Каталожный номер</div>
                            <Field className={style.form_field} type="text" name="discription"/>
                            <ErrorMessage name="discription" component="div"/>
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            Добавить
                        </button>
                    </Form>
                )}
            </Formik>
            <Return link={"/carlist/cardiscription/consumables/" + id}/>
        </div>
    )
}

export default CreateNewConsumables