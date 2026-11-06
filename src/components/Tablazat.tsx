import { useTablazatContext } from '../contexts/TablazatContext';
import Sor from './Sor'

export function Tablazat() {
    const {konyvLista}=useTablazatContext()
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Cím</th>
                        <th>Szerző</th>
                        <th>Kiadási év</th>
                        <th>Állapot</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        konyvLista.map((konyv, i)=>{
                            return(<Sor key={i} konyv={konyv}/>)
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Tablazat