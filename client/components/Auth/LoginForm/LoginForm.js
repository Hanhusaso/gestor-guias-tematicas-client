import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import useAuth from "../../../hooks/useAuth";
import { loginApi , resetPasswordApi } from "../../../api/user";

export default function LoginForm(props) {
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const router = useRouter();

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData) => {
            setLoading(true);
            const response = await loginApi(formData);
            if (response?.jwt) {
                login(response.jwt);
                router.replace("/dashboard");
            } else {
                toast.error("El email y/o contraseña son incorrectos");
            }
            setLoading(false);
        },
    });

    return (
        <Form className="login-form box-shadow-custom br-default" onSubmit={formik.handleSubmit} >
            <Form.Input
                name="identifier"
                className="br-input"
                type="text"
                placeholder="Usuario"
                onChange={formik.handleChange}
                error={formik.errors.identifier}
            />

            <Form.Input
                name="password"
                className="br-input"
                type="password"
                placeholder="Contraseña"
                onChange={formik.handleChange}
                error={formik.errors.password}
            />

            <div className="actions">
                <div>
                    <Button className="submit br-button" type="submit" loading={loading}>
                        Ingresar
                    </Button>
                </div>
            </div>
        </Form>
    );
}
function initialValues() {
    return {
        identifier: "",
        password: "",
    }
}

function validationSchema() {
    return {
        identifier: Yup.string().required(true),
        password: Yup.string().required(true)
    };
}