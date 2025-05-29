import { useEffect, useState } from "react";

export default function TesteEffect() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log("carregando concluido!");
            setLoading(false);
            setData("Dados carregados com sucesso!");
        }, 2000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    function handleEfecct() {
        setLoading(true);
        const timer = setTimeout(() => {
            console.log("recarregando concluido!");
            setLoading(false);
            setData("Dados ATUALIZADOS com sucesso!"); // Dados diferentes
        }, 1000);
    }
    return (
        <div className="text-white">
            <button onClick={handleEfecct} className="border  w-40 h-20">
                Click
            </button>

            <div className="border w-full h-40 p-4 flex items-center">
                {loading ? (
                    <div className="flex justify-center items-center h-full w-full">
                        <span>Carregando dados, por favor aguarde...</span>
                    </div>
                ) : (
                    <div className="">{data}</div>
                )}
            </div>
        </div>
    );
}
