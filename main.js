let task = document.getElementById('first_p').textContent
if(task == 'Регистрация'){
    document.getElementById('cabinet').style.display = 'none'
    document.getElementById('exit').style.display = 'none'
    document.getElementById('my-login').textContent = ''
    document.links
} 
else if (task == 'Смена пароля'){
    document.getElementById('my-login').textContent = JSON.parse(localStorage.getItem('user')).login
    document.getElementById('cabinet').style.display = ''
    document.getElementById('exit').style.display = ''
    document.getElementById('registr-page').style.display = 'none'
    document.getElementById('come-in-page').style.display = 'none'
    document.getElementById('enter-login').style.display = 'none'
}
else if (task == 'Вход'){
    document.getElementById('cabinet').style.display = 'none'
    document.getElementById('exit').style.display = 'none'
    document.getElementById('my-login').textContent = ''
    document.getElementById('enter-password2').style.display = 'none'
}

function registr(){
    let new_login = document.getElementById('enter-login').value
    let new_password1 = document.getElementById('enter-password1').value
    let new_password2 = document.getElementById('enter-password2').value

    if (new_login.length <= 2 || new_login.length > 10){
        document.getElementById('wrong-login').textContent = 'Логин должен содержать от 2-х до 10-ти символов'
    } 
    else if (new_password1.length <= 8){
        document.getElementById('wrong-pas1').textContent = 'Пароль должен содержать больше 8-ми символов'
        document.getElementById('wrong-login').textContent = ''
        document.getElementById('wrong-pas2').textContent = ''
    } 
    else if (new_password1 != new_password2){
        document.getElementById('wrong-pas2').textContent = 'Пароли не совпадают'
        document.getElementById('wrong-login').textContent = ''
        document.getElementById('wrong-pas1').textContent = ''
    } 
    else if (localStorage.getItem('user') == null){

        document.getElementById('wrong-pas2').textContent = ''
        document.getElementById('wrong-login').textContent = ''
        document.getElementById('wrong-pas1').textContent = ''

        let new_user = {
            login: new_login,
            password: new_password1
        }
        localStorage.setItem('user', JSON.stringify(new_user))
        document.getElementById('my-login').textContent = JSON.parse(localStorage.getItem('user')).login

        document.getElementById('cabinet').style.display = ''
        document.getElementById('exit').style.display = ''
        document.getElementById('registr-page').style.display = 'none'
        document.getElementById('come-in-page').style.display = 'none'
        document.getElementById('enter-login').style.display = 'none'
        document.getElementById('enter-password1').style.display = 'none'
        document.getElementById('enter-password2').style.display = 'none'
        document.getElementById('registr-btn').style.display = 'none'
        document.getElementById('first_p').style.display = 'none'
    }
    else {
        document.getElementById('wrong-login').textContent = 'Логин уже занят'
        document.getElementById('wrong-pas1').textContent = ''
        document.getElementById('wrong-pas2').textContent = ''
    }
}

function changepas(){
    let new_pas1 = document.getElementById('enter-password1').value
    let new_pas2 = document.getElementById('enter-password2').value

    if (new_pas1 == new_pas2){
        document.getElementById('wrong-pas1').textContent = ''
        document.getElementById('wrong-pas2').textContent = 'Пароль успешно изменен'

        let login = JSON.parse(localStorage.getItem('user')).login

        let user = {
            login: login,
            password: new_pas1
        }
        
        localStorage.setItem('user', JSON.stringify(user))
    } 
    else if (new_pas1.length <= 8){
        document.getElementById('wrong-pas1').textContent = 'Пароль должен содержать больше 8-ми символов'
        document.getElementById('wrong-pas2').textContent = ''
    } 
    else {
        document.getElementById('wrong-pas2').textContent = 'Пароли не совпадают'
    }
}

function comein(){
    let login = document.getElementById('enter-login').value
    let password = document.getElementById('enter-password1').value

    if (JSON.parse(localStorage.getItem('user')).login == login){
        if (JSON.parse(localStorage.getItem('user')).password == password){
            document.getElementById('my-login').textContent = login
            document.getElementById('cabinet').style.display = ''
            document.getElementById('exit').style.display = ''
            document.getElementById('registr-page').style.display = 'none'
            document.getElementById('come-in-page').style.display = 'none'
            document.getElementById('enter-login').style.display = 'none'
            document.getElementById('enter-password1').style.display = 'none'
            document.getElementById('enter-password2').style.display = 'none'
            document.getElementById('comein-btn').style.display = 'none'
            document.getElementById('first_p').style.display = 'none'
            document.getElementById('wrong-login').textContent = ''
            document.getElementById('wrong-pas1').textContent = ''
        }
        else{
            document.getElementById('wrong-pas1').textContent = 'Неверный пароль'
            document.getElementById('wrong-login').textContent = ''
        }
    }
    else {
        document.getElementById('wrong-login').textContent = 'Неверный логин'
        document.getElementById('wrong-pas1').textContent = ''
    }
}

function exit(){
    document.getElementById('cabinet').style.display = 'none'
    document.getElementById('exit').style.display = 'none'
    document.getElementById('my-login').textContent = ''
    document.getElementById('registr-page').style.display = ''
    document.getElementById('come-in-page').style.display = ''
    document.getElementById('enter-login').value = ''
    document.getElementById('enter-password1').value = ''
    document.getElementById('enter-password2').value = ''
    document.getElementById('enter-login').style.display = ''
    document.getElementById('enter-password1').style.display = ''
    document.getElementById('enter-password2').style.display = ''
    document.getElementById('registr-btn').style.display = ''
    document.getElementById('first_p').style.display = ''
    document.getElementById('wrong-login').textContent = ''
    document.getElementById('wrong-pas1').textContent = ''
    document.getElementById('wrong-pas2').textContent = ''
    document.getElementById('first_p').textContent = 'Регистрация'
}

