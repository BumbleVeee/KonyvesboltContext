import type { KonyvTipus } from "../adatok";
import { useTablazatContext } from "../contexts/TablazatContext";

interface SorProps{
    konyv: KonyvTipus,
}

export function Sor({konyv}:SorProps) {
    const { setAllapot, torles } = useTablazatContext()
    return(
        <tr>
            <td>{konyv.id}</td><td>{konyv.cim}</td><td>{konyv.szerzo}</td><td>{konyv.kiadasiev}</td><td>{konyv.allapot}</td>
            <td><button onClick={() => setAllapot(konyv.id, "kölcsönözve")}>❌</button></td>
            <td><button onClick={() => setAllapot(konyv.id, "kölcsönözhető")}>✔️</button></td>
            <td><button type="button" className="torles" onClick={()=>{torles(konyv.id)}}>🗑️</button></td>
        </tr>
    )
}
export default Sor