export type ICard = {
    id: number,
    totem: string,
    letter: string,
    meaning: string,
    element: string,
    symbols: string,
    description: string
}

const getCardsData = async (): Promise<ICard[]> => {
    const data = await fetch("./cards.json", { headers: { 'Accept': 'application/json' } })
    .then(cards => cards.json());

    return data;
}

export default getCardsData;