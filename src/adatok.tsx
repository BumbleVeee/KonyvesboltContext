export type AllapotTipus = "kölcsönözve" | "kölcsönözhető"

export interface KonyvTipus{
    id: number,
    cim: string,
    szerzo: string,
    kiadasiev: number,
    allapot: AllapotTipus
}

export const KONYVLISTA: KonyvTipus[] = [
    {
        id: 1,
        cim: "Galaxszis útikalaúz stopposoknak",
        szerzo: "Douglas Adams",
        kiadasiev: 1979,
        allapot: "kölcsönözve"
    },
    {
        id: 2,
        cim: "Galaxszis útikalaúz stopposoknak",
        szerzo: "Douglas Adams",
        kiadasiev: 1979,
        allapot: "kölcsönözve"
    },
    {
        id: 3,
        cim: "Galaxszis útikalaúz stopposoknak",
        szerzo: "Douglas Adams",
        kiadasiev: 1979,
        allapot: "kölcsönözve"
    },
    {
        id: 4,
        cim: "Galaxszis útikalaúz stopposoknak",
        szerzo: "Douglas Adams",
        kiadasiev: 1979,
        allapot: "kölcsönözve"
    },
    {
        id: 5,
        cim: "Galaxszis útikalaúz stopposoknak",
        szerzo: "Douglas Adams",
        kiadasiev: 1979,
        allapot: "kölcsönözve"
    }
]