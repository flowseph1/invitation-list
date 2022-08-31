import Head from 'next/head';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import TarjetaAdvertencia from './../components/TarjetaAdvertencia';

export default function Home() {
    return (
        <div>
            <Head>
                <title>NEXT JS APP - Redux Toolkit</title>
            </Head>

            <main className="h-screen flex flex-col bg-neutral-100 justify-between">
                <div className="flex justify-center space-x-5">
                    <Formulario />
                    <Lista />
                </div>
                <div>
                    <TarjetaAdvertencia />
                </div>
            </main>
        </div>
    );
}
