import style from "./CreateNewObject.module.css"
import Return from "../../../common/return/Return";
import React, {FC,useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {RouteComponentProps} from "react-router";
import Calendar from "../../calendar/calendar";
import {AppStateType} from "../../../redux/store";
import Preloader from "../../../common/preloader/Preloader";
import {useLocation} from "react-router-dom";
import {addTehnical} from "../../../redux/recordsReducer";

const addTehnicalFormsValidation = (values: any) => {
    const errors = {};
    return errors;
}
type PropsType = RouteComponentProps<PathParamsType> & {
    someString: string
    addTehnical: (date: string, discription: string, odometer: string, id: string) => void
}
type PathParamsType = {
    carId: string
}
type AddTehnicalFormType = {
    date: string
    odometer: string
    discription: string
}
const CreateNewTehnicalMaintenance: FC<PropsType> = (props) => {
    const id: string = ``+ useLocation().pathname.split("/").pop()
    const dispatch = useDispatch()
    const submit = (values: AddTehnicalFormType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        dispatch(addTehnical(time, values.discription, values.odometer, id))
        setSubmitting(false);
    }
    const onChange: any = (jsDate: any, dateString: any) => {
        settime(jsDate.getDate() + "-" + jsDate.getMonth() + "-" + jsDate.getFullYear())
    }
    let time: string;
    let settime: any;
    [time, settime] = useState("")
    const isLoading = useSelector((state: AppStateType) => state.loandingInformation.isLoading)
    if(isLoading) {
        return <Preloader/>
    }
    return (
        <div className={style.wrapper}>
            <div>
                <Formik
                    initialValues={{date: ``, odometer: ``, discription: ''}}
                    validate={addTehnicalFormsValidation}
                    onSubmit={submit}
                >
                    {({isSubmitting}) => (
                        <Form className={style.form}>
                            <div className={style.form_item}>
                                <div>Дата:</div>
                                <Field className={style.form_field} type="text" name="date" value={`${time}`}/>
                                <ErrorMessage name="date" component="div"/>
                            </div>
                            <Calendar onChange={onChange}/>
                            <div className={style.form_item}>
                                <div>Пробег:</div>
                                <Field className={style.form_field} type="text" name="odometer"/>
                                <ErrorMessage name="odometer" component="div"/>
                            </div>
                            <div className={style.form_item}>
                                <div>Проведённые работы:</div>
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
            <Return link={"/carlist/cardiscription/technicalmaintenance/" + id}/>
        </div>
    )
}

export default CreateNewTehnicalMaintenance