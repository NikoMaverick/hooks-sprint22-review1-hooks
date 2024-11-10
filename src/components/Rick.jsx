import { useCustomHook } from '../hooks/useCustomHook'

function Rick ({ url }) {
    const { cards } = useCustomHook({ url });

    return(
        <div>
            <h2>Personaje Rick and Morty</h2>
            <p>{cards && cards.name}</p>
            {cards && <img src={cards.image} alt={cards.name} />}
        </div>
    )
}

export default Rick;