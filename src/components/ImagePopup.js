import '../index.css';

function ImagePopup({ card, onClose }) {
    return (
        <div className={`popup image-popup ${card && 'popup_opened'}`}>
            <figure className="image-popup__figure">
                <button type="button" className="popup__close link" onClick={onClose} />
                <img className="image-popup__picture" src={card.link} alt={card.name} />
                <figcaption className="image-popup__caption">{card.name}</figcaption>
            </figure>
        </div>
    );
}

export default ImagePopup;
