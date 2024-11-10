
import { useCustomHook} from '../hooks/useCustomHook'

function Pokemon ({ url }) {
    const { cards } = useCustomHook({ url });

    return(
    <div>
      <h2>Personaje Pokemon</h2>
      <p>{cards && cards.name}</p>
      {cards && <img src={cards.sprites.other.home.front_default} alt={cards.name} />}
    </div>
    )
}

export default Pokemon
