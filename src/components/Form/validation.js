const validation = (userData) => {
    let errors = {};

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.username)){
        errors.username = "El email es inválido."
    }

    if(!userData.username) {
        errors.username = "Este campo no puede estar vacío"
    }

    if(userData.username.length > 35){
        errors.username = "No puede tener mas de 35 caracteres"
    }
    if(!userData.password.match(/\d/)){ // Esta regex verifica que el string contenga numeros
        errors.password = "La contraseña debe contener al menos 1 número";
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = "La contraseña debe contener entre 6 y 10 caracteres"
    }
    return errors;
} 

export default validation;