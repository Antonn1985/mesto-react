import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import { useState } from 'react';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false);


  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(false)
  };

  return (
    <div className="page page-size">
      <Header />
      <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick} onCardClick={setSelectedCard}
      />
      <Footer />
      {isEditProfilePopupOpen && <PopupWithForm onClose={closeAllPopups} name="name"
        title="Редактировать профиль" buttonText="Сохранить" isOpen={true}>
        <input
          type="text"
          name="userName"
          className="form__input form__input_type_name"
          id="name-input"
          placeholder="Имя"
          required=""
          minLength={2}
          maxLength={40}
        />
        <span className="form__input-error name-input-error" />
        <input
          type="text"
          name="userJob"
          className="form__input form__input_type_profession"
          id="profession-input"
          placeholder="О себе"
          required=""
          minLength={2}
          maxLength={200}
        />
        <span className="form__input-error profession-input-error" />
      </PopupWithForm>
      }
      {isAddPlacePopupOpen && <PopupWithForm onClose={closeAllPopups} name="photo"
        title="Новое место" buttonText="Создать" isOpen={true}>
        <input
          type="text"
          className="form__input form__input_type_picture-name"
          id="picture-name-input"
          name="name"
          placeholder="Название"
          required=""
          minLength={2}
          maxLength={30}
        />
        <span className="form__input-error picture-name-input-error" />
        <input
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          className="form__input form__input_type_picture-link"
          id="picture-link-input"
          required=""
        />
        <span className="form__input-error picture-link-input-error" />
      </PopupWithForm>
      }
      {isEditAvatarPopupOpen && <PopupWithForm onClose={closeAllPopups} name="avatar"
        title="Обновить аватар" buttonText="Сохранить" isOpen={true}>
        <input
          type="url"
          name="avatarLink"
          placeholder="Ссылка на картинку"
          className="form__input form__input_type_avatar-link"
          id="avatar-link-input"
          required=""
        />
        <span className="form__input-error avatar-link-input-error" />
      </PopupWithForm>
      }
      <PopupWithForm name="delete" title="Вы уверены?" buttonText="Да">
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups}>
      </ImagePopup>
    </div>
  );
}

export default App;
