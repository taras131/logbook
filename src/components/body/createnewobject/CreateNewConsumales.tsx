import style from "./CreateNewObject.module.css"
import Return from "../../../common/return/Return";
import React, {FC} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {connect} from "react-redux";
import {addConsumables} from "../../../redux/recordsReducer";
import {withRouter} from "react-router-dom";
import {RouteComponentProps} from "react-router";

const addCarFormsValidation = (values: any) => {
    const errors = {};
    return errors;
}
type PathParamsType = {
    carId: string
}
type PropsType = RouteComponentProps<PathParamsType> & {
    someString: string
    addConsumables: (name: string, discription: string, id: number) => void
}
type AddConsumablesFormType = {
    name: string
    discription: string
}

const CreateNewConsumables: FC<PropsType> = (props) => {
    let id = +props.match.params.carId
    const submit = (values: AddConsumablesFormType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        props.addConsumables(values.name, values.discription,id)
        setSubmitting(false);
    }
    return (
        <div className={style.wrapper}>
            <Return link = {"/carlist/cardiscription/"+id}/>
            <div>
                <Formik
                    initialValues={{name: '', discription: ''}}
                    validate={addCarFormsValidation}
                    onSubmit={submit}
                >
                    {({isSubmitting}) => (
                        <Form className={style.form}>
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
            </div>
        </div>
    )
}

export default connect(null, {addConsumables})(withRouter(CreateNewConsumables))