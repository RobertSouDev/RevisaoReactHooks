import { FiPlus, FiSearch } from "react-icons/fi";
import CardClient from "./CardClient";
import { useEffect, useState, useMemo } from "react";
import { fetchClients } from "../api/clientService";

type Client = {
    id: string;
    name: string;
    company: string;
    email: string;
    phone: string;
};

export default function ClientList() {
    const [clients, setClients] = useState<Client[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        async function loadClients() {
            try {
                const data = await fetchClients();
                const formattedData: Client[] = data.map((client) => ({
                    id: client.id.toString(),
                    name: client.name,
                    company: client.company.name,
                    email: client.email,
                    phone: client.phone,
                }));
                setClients(formattedData);
            } catch (err) {
                setError(
                    err instanceof Error ? err.message : "Erro desconhecido"
                );
            } finally {
                setLoading(false);
            }
        }

        loadClients();
    }, []);

    const filteredClients = useMemo(() => {
        return clients.filter((client) =>
            client.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [clients, searchTerm]);

    //    if (loading) return <div className="p-4">Carregando clientes...</div>;
    // if (error) return <div className="p-4 text-red-500">Erro: {error}</div>;
    // if (clients.length === 0)
    //  return <div className="p-4">Nenhum cliente encontrado</div>;

    return (
        <div className="md:h-full p-4 bg-gray-200">
            <div className=" w-full bg-white h-20 rounded-xl shadow-xl/20 flex justify-between items-center p-4">
                <h1 className="text-center text-2xl font-bold text-gray-800">
                    Client<span className="text-blue-500">Hub</span>
                </h1>
                <div className="w-[80%] flex justify-end items-center gap-8">
                    <div className="h-12 p-4 rounded-full flex items-center gap-2 bg-gray-200 text-gray-400">
                        <button
                            onClick={() => console.log("Search")}
                            className="h-10 w-10 flex justify-center items-center"
                        >
                            <FiSearch />
                        </button>
                        <input
                            type="text"
                            className="focus:outline-none bg-transparent"
                            placeholder="Search clients..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <button
                        className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition-colors duration-300"
                        onClick={() => console.log("Add new client")}
                    >
                        <FiPlus />
                        <span className="hidden md:inline">New Client</span>
                    </button>
                </div>
            </div>
            <div>
                <div className="flex flex-wrap justify-start items-center gap-8">
                    {loading ? (
                        <div className="p-4">Carregando clientes...</div>
                    ) : (
                        filteredClients.map((c) => (
                            <CardClient key={c.id} client={c} />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
