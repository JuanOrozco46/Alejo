type AlertaCorreo = {
    metodo: "correo";
    direccionEmail: string;
    titulo: string;
    contenido: string;
};

type AlertaSms = {
    metodo: "sms"; 
    numeroCelular: number;
    textoCorto: string;
};

type AlertaPush = {
    metodo: "app_push"; 
    idDispositivo: string;
};

type Aviso = AlertaCorreo | AlertaSms | AlertaPush;
function procesarAviso(aviso: Aviso) {
    
    switch (aviso.metodo) {
        case "correo":
        
            console.log(`Enviando un correo a ${aviso.direccionEmail}`);
            break;
            
        case "sms":
            
            console.log(`Mandando un SMS al número ${aviso.numeroCelular}`);
            break;
            
        case "app_push":
            
            console.log(`Enviando notificación al dispositivo ${aviso.idDispositivo}`);
            break;
            
        default:
            console.log("Tipo de aviso no reconocido");
            break;
    }
}