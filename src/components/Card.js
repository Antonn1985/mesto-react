import '../index.css';

function Card({ card, onCardClick, openImagePopup }) {

    function handleCardClick() {
        onCardClick(card);
        openImagePopup(true)
    }

    return (
        <div className="elements__element">
            <div className="elements__top">
                <button type="button" className="elements__trash link" />
                <img className="elements__image" src={card.link} alt={card.name} onClick={handleCardClick} />
            </div>
            <div className="elements__bottom">
                <h2 className="elements__title">{card.name}</h2>
                <div className="elements__like">
                    <button type="button" className="elements__like-heart link" />
                    <span className="elements__like-counter">{card.likes.length}</span>
                </div>
            </div>
        </div>
    );
}

export default Card;