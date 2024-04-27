import React, { useState } from 'react';
import axios from 'axios'; // Импорт axios

const Console = () => {
  const [deleteUsername, setDeleteUsername] = useState(''); // Состояние для хранения имени пользователя, которого нужно удалить
  const [changePasswordData, setChangePasswordData] = useState({ // Состояние для хранения данных нового пароля
    username: '',
    newPassword: ''
  });

  const handleDeleteUser = async () => {
    try {
      await axios.delete(`http://localhost:3001/delete/${deleteUsername}`); // Отправка DELETE запроса на сервер для удаления пользователя
      alert(`Пользователь ${deleteUsername} удален`);
      setDeleteUsername(''); // Очистка состояния
    } catch (error) {
      alert('Ошибка при удалении пользователя');
    }
  };

  const handleChangePassword = async () => {
    try {
      await axios.put(`http://localhost:3001/user/${changePasswordData.username}`, { password: changePasswordData.newPassword }); // Отправка PUT запроса на сервер для изменения пароля пользователя
      alert(`Пароль пользователя ${changePasswordData.username} изменен`);
      setChangePasswordData({ username: '', newPassword: '' }); // Очистка состояния
    } catch (error) {
      alert('Ошибка при изменении пароля пользователя');
    }
  };

  return (
    <div>
      <h2>Административная панель</h2>
      <div>
        <h3>Удаление пользователя</h3>
        <input type="text" value={deleteUsername} onChange={e => setDeleteUsername(e.target.value)} placeholder="Введите логин пользователя" />
        <button onClick={handleDeleteUser}>Удалить</button>
      </div>
      <div>
        <h3>Изменение пароля пользователя</h3>
        <input type="text" value={changePasswordData.username} onChange={e => setChangePasswordData({ ...changePasswordData, username: e.target.value })} placeholder="Введите логин пользователя" />
        <input type="password" value={changePasswordData.newPassword} onChange={e => setChangePasswordData({ ...changePasswordData, newPassword: e.target.value })} placeholder="Введите новый пароль" />
        <button onClick={handleChangePassword}>Сменить</button>
      </div>
    </div>
  );
};

export default Console;
