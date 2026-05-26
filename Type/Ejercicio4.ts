type InputFormulario = {
    identificador: string;
    categoria: "texto" | "numero" | "email";
    dato: string | number;
};

function detectarCamposConError(listaDeCampos: InputFormulario[]): string[] {
    const errores: string[] = [];

    for (const campo of listaDeCampos) {
        
        let esInvalido = false;

        switch (campo.categoria) {
            
            case "email":
                if (typeof campo.dato !== "string" || !campo.dato.includes("@")) {
                    esInvalido = true;
                }
                break;

            case "numero":
                if (typeof campo.dato !== "number") {
                    esInvalido = true;
                }
                break;

            case "texto":
                if (typeof campo.dato !== "string") {
                    esInvalido = true;
                }
                break;
        }

        if (esInvalido) {
            errores.push(campo.identificador);
        }
    }
    return errores;
}