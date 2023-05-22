import { Form, FormButton, FormInput } from "../../styles/global";
import { AuthLayout } from "../../layouts/AuthLayout";

export function Login() {
    return(
        <AuthLayout 
            title="Login" 
            subtitle="Gerenciar suas entradas e saídas nunca foi tão simples."
        >
            <Form>
                <FormInput type="email" placeholder="E-mail" />
                <FormInput type="password" placeholder="Senha" />
                <FormButton type="submit">Entrar</FormButton>
            </Form>
        </AuthLayout>
    );
}