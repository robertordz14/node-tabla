const fs = require('fs');

const crearArchivo = async(num=5, listar = false, hasta=10) => {

        try {
            let salida='';

            for (let i = 1; i <= hasta; i++) {
                salida+= `${num} * ${i} =  ${num * i}\n`;
            }
    
            if (listar==true) {
                console.log(salida);
        
            }
            fs.writeFileSync(`./salida/tabla-${num}.txt`, salida,);
    
            return `tabla-${num}.txt`;
        } catch (error) {
            throw error;
        }


    
}


module.exports= {
    crearArchivo
}