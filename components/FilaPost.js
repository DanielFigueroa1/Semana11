class FilaPost {

    constructor(publicacionUsuario){
        this.publicacionUsuario = publicacionUsuario;
    }

    render = () => {
        let component = document.createElement('div');
        component.className = 'filaFeed';

        let postFeed = document.createElement('div'); //publicacion
        postFeed.innerHTML = this.publicacionUsuario.post;
        

        let nombreFeed = document.createElement('div'); //nombre
        nombreFeed.className = "nombreFeed";
        nombreFeed.innerHTML = this.publicacionUsuario.usuario;

        let inputResponder = document.createElement('input'); //input responder
        inputResponder.className = "inputResponderPost";
        inputResponder.innerHTML = '';
        
        let botonResponder = document.createElement('button'); //boton responder
        botonResponder.className = "botonResponderPost";
        botonResponder.innerHTML = 'Responder';

        
        //para que se dibujen
        component.appendChild(postFeed);
        component.appendChild(nombreFeed);
        component.appendChild(inputResponder);
        component.appendChild(botonResponder);

        return component;
    }

}