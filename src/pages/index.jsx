import Head from "next/head";
import Image from "next/image"

import logo from '../assets/logo.png'
import logoOuro from '../assets/logo_ouro.png'

export default function Home () {
	return (
		<>
			<Head>
				<title>Bem Vindo</title>
			</Head>
			<main className="flex h-screen items-center justify-center bg-gradient-to-tr from-red-900 to-zinc-900">
				<div className="flex flex-col items-center justify-center gap-6 w-80 m-auto">
					<Image src={logo} width={200} />
					<h1 className="text-zinc-50 text-center text-3xl font-bold">Bem Vindo, Cippa</h1>
					<a className="bg-red-500 rounded p-2 text-center text-zinc-50 uppercase font-bold" href="http://192.168.1.7" target="_blank" rel="noopener noreferrer">Acessar plataforma de curso</a>
				</div>
			</main>
		</>
	)
}