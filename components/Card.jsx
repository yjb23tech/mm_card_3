import album_icon from "../images/album_icon.png"
import artist_icon from "../images/artist_icon.png"
import genre_icon from "../images/genre_icon.png"

const Card = (props) => {
    return (
        <div className="album-card">
            <img src={`../images/${props.album_cover_art}`} />
            <h3>{props.main_title}</h3>
            <div className="info-group">
                <img src={album_icon} />
                <p>{props.album_name}</p>
            </div>
            <div className="info-group">
                <img src={artist_icon} />
                <p>{props.artist_name}</p>
            </div>
            <div className="info-group">
                <img src={genre_icon} />
                <p>{props.genre_name}</p>
            </div>
        </div>
    )
};

export default Card;