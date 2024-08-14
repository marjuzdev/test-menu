import { getInstance } from '@/common/services/axios.service';
import { apiIdentifiers } from '@/environments/config/axios.config';

const axios = getInstance(apiIdentifiers.elasticemail);


const sendEmail = async (emailData, error = false) => {

    // const { email, subject, message } = emailData;

    // try {
    //     const emailData = {
    //         Recipients: [{ Email: 'andrewestrdr@gmail.com' }],
    //         Content: {
    //             From: 'marioajuez@gmail.com',
    //             Subject: subject,
    //             Body: [
    //                 {
    //                     ContentType: "HTML",
    //                     Charset: "utf-8",
    //                     Content: `<p>${message}<p>`
    //                 },
    //                 // {
    //                 //     ContentType: "PlainText",
    //                 //     Charset: "utf-8",
    //                 //     Content: "Hi {name}!"
    //                 // }
    //             ],
    //             // TemplateName: 'my-template'
    //         }
    //     }
    //     const response = await axios.post('/v4/emails', emailData);
    //     const { data } = await response;
    //     console.log("Los datos se enviaron correctamente", data);
    // } catch (error) {
    //     console.error("Error al realizar la solicitud:", error);
    // }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
          if(error) {
            reject()
          }
          resolve();
        }, 2000);
      });
}

export default {
    sendEmail
}


