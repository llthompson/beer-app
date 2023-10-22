export default function Beer({ beer, handleLikedBeer }) {
    return (
        <li>
            <input type="checkbox" checked={beer.liked} onChange={() => handleLikedBeer(beer.id)} />
            <span>{beer.name}</span>

        </li>
    )
}