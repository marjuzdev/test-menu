import emailService from '@/common/services/email.service';
import Utils from '@utils/utils';

const init = ({
        containerResponse,
        spinnerContainer,
        spinnerGroup,
        spinner,
        dash,
        iconCheckMark,
        iconCrossMark,
        messageNotificationSuccess,
        messageNotificationerror
}) => {

    const btnsSendAnotherMessage = document.querySelectorAll('#sendAnotherMessage');
    const btnsResendMessage= document.getElementById('resendMessage');

    for( const btnSendAnotherMessage of btnsSendAnotherMessage ) {

        btnSendAnotherMessage.addEventListener('click', () => {

            containerResponse.classList.remove('activate');
            const handleTransitionEnd = () => {
                    messageNotificationSuccess.classList.remove("show");
                    messageNotificationerror.classList.remove("show");
                    spinnerContainer.classList.remove("transition-spinner");
                    spinner.classList.remove('success');
                    spinner.classList.remove('error');
                    Utils.removeItemFromLocalStorage('formContact');

                    containerResponse.removeEventListener('transitionend', handleTransitionEnd);
            }

            containerResponse.addEventListener('transitionend', handleTransitionEnd);
        });
    }

    btnsResendMessage.addEventListener('click', async () => {

        try {
            const emailData = Utils.getValueFromLocalStorage('formContact'); 
            messageNotificationerror.classList.remove("show");
            spinnerContainer.classList.remove("transition-spinner");
            spinner.classList.remove('error');
            await emailService.sendEmail(emailData, false);
            messageNotificationSuccess.classList.add("show");
            spinner.classList.add('success');
            Utils.removeItemFromLocalStorage('formContact');

        } catch (error) {
            spinner.classList.add('error');
            messageNotificationerror.classList.add("show");
        }
    });

    for ( const animation of [iconCheckMark, iconCrossMark]) {
        animation.addEventListener('animationend', () => {
            spinnerGroup.style.animation = 'none';
            dash.style.animation = 'none';
            spinnerContainer.classList.add("transition-spinner");
        });
    }
}

export default {
    init
}