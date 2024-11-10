import { useState, useEffect } from "react";

export const useCustomHook = ({ url }) => {
    const [cards, setCards] = useState(null)

    useEffect (() => {
        const getFetch = async () => {
            try {
                const response = await fetch(url)

                if(!response.ok) {
                    throw new Error ("No se ha podido acceder a los datos", response.status)
                }
                const data = await response.json()
                setCards(data)

            } catch (error) {
                console.error("No se han obtenido los datos", error)
                setCards(null)
            }
        }
        getFetch();

    }, [url]);

    return { cards }
}

// export default useCustomHook