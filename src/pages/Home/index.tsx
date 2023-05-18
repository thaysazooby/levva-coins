import { AuthLayout } from "../../layouts/AuthLayout";

export function Home() {
    return(
        //authlayout permite imbutir configurações em todos os seus descendentes
        <AuthLayout title="" subtitle="">
            <p>Home</p>
        </AuthLayout>
    );
}