import Head from "next/head";
import { SignUpForm } from "../components/SignUpForm";

export default function SignUp() {
    return (
        <> 
            <Head>
                <title>Cadastro</title>
            </Head>
            <main className="flex flex-1 items-center justify-center h-screen">
                <div className="bg-red-900 rounded-lg text-center">
                    <SignUpForm />
                </div>
            </main>
        </>
    )
}