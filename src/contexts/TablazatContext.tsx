import { createContext, useContext, useState, type ReactNode } from "react"
import { KONYVLISTA, type AllapotTipus, type KonyvTipus } from "../adatok";

interface TablazatContextValue{
    konyvLista : KonyvTipus[]
    torles: (id:number)=> void
    setAllapot: (id: number, allapot: AllapotTipus) => void
}

export const TablazatContext = createContext<TablazatContextValue | undefined>(undefined);

interface TablazatProviderProps{
    children: ReactNode
}

export function TablazatProvider({children}: TablazatProviderProps) {
    const [konyvLista, setTablazatLista] = useState<KonyvTipus[]>(KONYVLISTA);

    function torles(id: number) {
        console.log(id)
        setTablazatLista(elozoLista=> elozoLista.filter(konyv => konyv.id !== id))
    }

    function setAllapot(id: number, allapot: AllapotTipus) {
        setTablazatLista(elozoLista=> elozoLista.map(konyv => konyv.id === id ? {...konyv, allapot} : konyv))
    }

    return (
        <TablazatContext.Provider value={{torles, konyvLista, setAllapot}}>
            {children}
        </TablazatContext.Provider>
    )
}

export function useTablazatContext() {
    const context = useContext(TablazatContext);
    if (context === undefined) {
        throw new Error(
            "Az App csak a TablazatProvideren keresztül működtethető."       
        );
    }
    return context;
}

export default TablazatContext