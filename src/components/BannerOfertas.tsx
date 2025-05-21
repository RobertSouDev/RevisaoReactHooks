import { useEffect, useState } from "react";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";

function bannerOfertas() {
    const [currentBanner, setCurrentBanner] = useState(0)
    const ofertas = [
        { titulo: "Frete Grátis", imagem: "https://placehold.co/600x400" },
        { titulo: "30% OFF em Camisetas", imagem: "https://placehold.co/400x400" },
        { titulo: "Leve 3, Pague 2", imagem: "https://placehold.co/500x400" }
    ]

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentBanner((prev) => (prev + 1) % ofertas.length)
        },3000)
        return ()=> clearInterval(interval)
    },[])

    function decrease(){
        setCurrentBanner(currentBanner => (currentBanner - 1 + ofertas.length) % ofertas.length)
    }

    function increase(){
        setCurrentBanner(currentBanner => (currentBanner + 1) % ofertas.length)
    }
    return (  
        <div className="flex justify-center items-center gap-10">
            <button onClick={decrease}>
                <FaLessThan />
            </button>
            <div>
                <h1 className="text-center text-white">{ofertas[currentBanner].titulo}</h1>
                <img src={ofertas[currentBanner].imagem} alt=""/>
            </div>
            <button onClick={increase}>
                <FaGreaterThan />
            </button>
        </div>
    );
}

export default bannerOfertas;