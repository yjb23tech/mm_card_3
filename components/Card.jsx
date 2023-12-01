import album_art from "../images/album_cover_1.png"
import album_icon from "../images/album_icon.png"
import artist_icon from "../images/artist_icon.png"
import genre_icon from "../images/genre_icon.png"

const Card = (props) => {
    return (
        <div className="album-card">
            <img src={album_art} />
            <h3>props.main_title</h3>
            <div className="info-group">
                <img src={album_icon} />
                <p>My Beautiful Dark Twisted Fantasy Japanese Deluxe Edition</p>
            </div>
            <div className="info-group">
                <img src={artist_icon} />
                <p>Kanye West</p>
            </div>
            <div className="info-group">
                <img src={genre_icon} />
                <p>Hip Hop</p>
            </div>
        </div>
    )
};

export default Card;