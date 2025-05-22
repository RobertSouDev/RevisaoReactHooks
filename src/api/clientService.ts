const API_URL = 'https://jsonplaceholder.typicode.com/users';

export type Client = {
    id: number;
    name: string;
    company: {
        name: string;
    };
    email: string;
    phone: string;
};

export async function fetchClients(): Promise<Client[]> {
    const res = await fetch(API_URL);
    if (!res.ok) {
        throw new Error('Falha ao buscar os clientes');
    }
    return await res.json();
}