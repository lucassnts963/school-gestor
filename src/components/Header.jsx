import Link from "next/link";

export function Header() {
    return (
        <header className="fixed top-0 bg-red-500/10 w-full p-5">
            <nav className="flex justify-end">
                <ul className="flex gap-3 text-zinc-50 font-bold">
                    <li><Link className="hover:text-red-500" href="/">Início</Link></li>
                    <li><Link className="hover:text-red-500" href="/about">Sobre</Link></li>
                </ul>
            </nav>
        </header>
    )
}