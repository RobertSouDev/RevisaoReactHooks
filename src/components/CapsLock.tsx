export default function CapsLock({children}: {children: React.ReactNode}) {
    function Capslock(text:string): string{
        return text.toUpperCase()
    }

    return ( 
        <div>
            {typeof children === 'string' ? Capslock(children): children}
        </div>
     );
}

