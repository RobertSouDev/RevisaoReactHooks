import { MdOutlineMail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import { FaRegTrashCan } from "react-icons/fa6";

type Client = {
    name: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
    email: string;
    phone: string;
  };

export default function CardClient({client}: {client: Client}) {
    return ( 
        <div className="md:w-72 md:h-80 p-5 my-10 bg-white rounded-lg shadow-lg flex flex-col gap-4">
            <div className="w-full h-20  p-2 flex justify-start gap-4 items-center">
                <div className="bg-blue-500 w-14 h-14 rounded-full text-center flex justify-center items-center text-2xl text-white">
                    <p>{client.name.charAt(0).toUpperCase()}</p>
                </div>
                <div className="flex flex-col ">
                    <h1 className="text-gray-800 font-bold text-sm">{client.name}</h1>
                    <p className="text-gray-500">{client.company.name} </p>
                </div>
                
            </div>
            <div className="w-full h-10 flex items-center gap-2 p-4 text-gray-500">
                <MdOutlineMail /> <p>{client.email}</p>
            </div>
            <div className="w-full h-10 flex items-center gap-2 p-4 text-gray-500">
                <BsTelephone /> <p>{client.phone}</p>
            </div>
            <div className="w-full  h-15 flex items-center justify-end gap-4 ">
                <button
                    onClick={()=>console.log("Edit")} 
                    className="group w-10 h-10 text-center flex justify-center items-center hover:bg-blue-400 transition-colors duration-300 rounded-2xl">
                    <FiEdit2 className="group-hover:text-white text-blue-400"/>
                </button>
                <button
                    onClick={() => console.log("Delete")} 
                    className="group w-10 rounded-2xl h-10 text-center flex justify-center items-center hover:bg-red-400 transition-colors duration-300">
                    <FaRegTrashCan className="text-red-400 group-hover:text-white"/>
                </button>
            </div>
        </div>
     );
}

