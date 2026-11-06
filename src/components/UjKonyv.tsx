import { useState } from "react"
import type { AllapotTipus } from "../adatok"
import { useTablazatContext, type UjKonyvTipus } from "../contexts/TablazatContext"

function UjKonyv() {
    const {konyvHozzaadas} = useTablazatContext();
    const [cim, setCim] = useState<string>("")
    const [szerzo, setSzerzo] = useState<string>("")
    const [kiadasiev, setKiadasiev] = useState<number>(0)
    const [allapot, setAllapot] = useState<AllapotTipus>("kölcsönözhető")

    function mentes(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const ujKonyv: UjKonyvTipus = {
            cim,
            szerzo,
            kiadasiev,
            allapot
        }

        console.log(ujKonyv);

        konyvHozzaadas(ujKonyv);
        setCim("");
        setSzerzo("");
        setKiadasiev(0);
        setAllapot("kölcsönözhető");
    }

    return (
        <section className="uj-konyv">
            <h2>Új könyv rögzítrése</h2>

            <form onSubmit={mentes}>
                <div className="from-mezo">
                    <label htmlFor="cim"> Cím </label>
                    <input type="text" id="cim" name="cim" value={cim}
                    onChange={(e)=> setCim(e.target.value)} required/>
                </div>
                <div className="from-mezo">
                    <label htmlFor="szerzo"> Szerző </label>
                    <input type="text" id="szerzo" name="szerzo" value={szerzo}
                    onChange={(e)=> setSzerzo(e.target.value)} required/>
                </div>
                <div className="from-mezo">
                    <label htmlFor="kiadasiev"> Kiadási év </label>
                    <input type="text" id="kiadasiev" name="kiadasiev" value={kiadasiev}
                    onChange={(e)=> setKiadasiev(Number(e.target.value))} required/>
                </div>
                <div className="from-mezo">
                    <label htmlFor="allapot"> Állapot </label>
                    <select
                        id="allapot"
                        name="allapot"
                        value={allapot}
                        onChange={(e) => setAllapot(e.target.value as AllapotTipus)}
                    >
                        <option value="kölcsönözhető">Kölcsönözhető</option>
                        <option value="kölcsönözve">Kölcsönözve</option>
                    </select>
                </div>
                <div className="form-mezo">
                    <input type="submit" value="Hozzáadas" />
                </div>
            </form>
        </section>
    )
}

export default UjKonyv