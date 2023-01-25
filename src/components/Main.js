import '../index.css';
import pencil from '../images/pencil.svg'
import { api } from '../utils/api';
import { useState, useEffect } from 'react';
import Card from './Card';

function Main({ onEditAvatar, onAddPlace, onEditProfile, onCardClick }) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([])

  useEffect(() => {
    Promise.all([api.getName(), api.getAllCards()])
      .then(([data, card]) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
        setCards(card)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  return (
    <main className="content">
      <section className="profile page__profile" aria-label="аватар">
        <div className="profile__photo link" onClick={onEditAvatar}>
          <img className="profile__avatar" src={userAvatar} alt="аватар" />
          <div className="profile__avatar-mask">
            <img
              className="profile__avatar-edit"
              src={pencil}
              alt="карандаш"
            />
          </div>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button type="button" className="profile__edit-button link" onClick={onEditProfile} />
          <h2 className="profile__profession">{userDescription}</h2>
        </div>
        <button type="button" className="profile__add-button link" onClick={onAddPlace} />
      </section>
      <section className="elements page__elements" aria-label="фото">
        {cards.map((card) => {
          return (
            <Card card={card} key={card._id} onCardClick={onCardClick} />
          )
        })
        }
      </section>
    </main>
  );
}

export default Main;