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
        cim: "Dune",
        szerzo: "Frank Herbert",
        kiadasiev: 1965,
        allapot: "kölcsönözhető"
    },
    {
        id: 3,
        cim: "The Left Hand of Darkness",
        szerzo: "Ursula K. Le Guin",
        kiadasiev: 1969,
        allapot: "kölcsönözve"
    },
    {
        id: 4,
        cim: "The Name of the Wind",
        szerzo: "Patrick Rothfuss",
        kiadasiev: 2007,
        allapot: "kölcsönözhető"
    },
    {
        id: 5,
        cim: "Neuromancer",
        szerzo: "William Gibson",
        kiadasiev: 1984,
        allapot: "kölcsönözve"
    }
]