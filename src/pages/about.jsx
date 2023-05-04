import Head from "next/head";

export default function About() {
    return (
        <>
            <Head>
                <title>Sobre</title>
            </Head>
            <main className="flex flex-1 items-center justify-center h-screen">
                <div className="flex flex-col bg-red-900 p-5 rounded-lg text-center">
                    <h1 className="text-4xl font-semibold text-center text-zinc-50 mb-6">Sobre</h1>
                    <p className="text-red-400">Este site é para gerenciar a escola CIPPA</p>
                    <p className="text-red-500">Desenvolvido por <strong>Lucas Santos</strong></p>
                </div>
            </main>
        </>
    )
}