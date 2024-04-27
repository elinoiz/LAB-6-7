const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());



app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Разрешить доступ всем источникам
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Разрешить определенные методы запроса
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Разрешить отправку заголовка Content-Type
    next();
  });
  





let userData = []; // Данные пользователей



app.get('/', (req, res) => {
    res.send('Добро пожаловать на сервер!');
  });
  

// POST запрос для регистрации нового пользователя
app.post('/register', (req, res) => {
  const newUser = req.body;
  // Проверяем, есть ли уже пользователь с таким логином
  const existingUser = userData.find(user => user.login === newUser.login);
  if (existingUser) {
    res.status(400).json({ error: 'Пользователь с таким логином уже существует' });
  } else {
    userData.push(newUser);
    res.status(201).json({ message: 'Регистрация прошла успешно' });
  }
});



// GET запрос для получения информации о всех зарегистрированных пользователях
app.get('/users', (req, res) => {
    res.json(userData); // Отправляем список всех пользователей в формате JSON
});

  


// PUT запрос для обновления информации о пользователе 

app.put('/user/:username', (req, res) => {
    const { username } = req.params; // Извлекаем имя пользователя из параметров запроса
    const { password } = req.body; // Извлекаем новый пароль из тела запроса
    // Находим пользователя в массиве userData по имени пользователя
    const user = userData.find(user => user.login === username);
    if (user) {
      
      user.password = password;
      res.json({ message: 'Пароль пользователя успешно изменен' });
    } else {
      
      res.status(404).json({ error: 'Пользователь не найден' });
    }
});
  


// DELETE запрос для удаления пользователя по логину
app.delete('/delete/:login', (req, res) => {
    const { login } = req.params;
    const index = userData.findIndex(user => user.login === login); // Находим индекс пользователя по логину
    if (index !== -1) {
      userData.splice(index, 1); // Удаляем пользователя из массива
      res.sendStatus(204); // Отправляем статус 204 (No Content) при успешном удалении
    } else {
      res.status(404).send('Пользователь не найден'); 
    }
});


  
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
