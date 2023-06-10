export type TCard = {
   id: number,
   totem: string,
   letter: string,
   meaning: string,
   element: string,
   symbols: string,
   description: string
}

const getCardsData = async (): Promise<TCard[]> => {
    const data = await fetch('data.json').then(cards => cards.json());

    return data;
}

export default getCardsData;