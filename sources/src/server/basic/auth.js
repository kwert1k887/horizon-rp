mp.events.add('playerReady', (player) => {
    player.call('auth');
});

mp.events.add('sendDataToAuthorization', (player, username, pass) => {
    console.log('Вывод данных при авторизации:', username, pass);
    database.query(`SELECT * FROM accounts WHERE login = '${username}' AND password = '${pass}'`, (err, rows) => {
        if(err) {
            console.log('Ошибка:', err);
        } else {
            if(rows.length > 0) {
                console.log('Аккаунт успешно прошел верификацию.');
                player.call('Ready');
            } else {
                console.log('Неверный логин или пароль.');
            }
        }
    });
});

mp.events.add('sendDataToRegister', (player, email, loginReg, pass1, promo) => {
    console.log('Вывод данных при регистрации:', email, loginReg, pass1, promo);
    database.query('SELECT * FROM accounts WHERE socialClub = ?', [player.socialClub], (err, result) => {
        if(err) {
            console.log('Ошибка при проверке существования аккаунта:', err);
        } else {
            if(result.length > 0) {
                console.log('У вас уже есть аккаунт.');
            } else {
                database.query('INSERT INTO accounts (socialClub, email, login, password, promo) VALUES (?, ?, ?, ?, ?)', [player.socialClub, email, loginReg, pass1, promo], (err, result) => {
                    if(err) {
                        console.log('Ошибка при регистрации:', err);
                    } else {
                        console.log('Пользователь успешно зарегистрирован.');
                        player.call('Ready');
                    }
                });
            }
        }
    });
});