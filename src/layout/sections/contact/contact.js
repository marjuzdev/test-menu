import Animations from '@animations';
import FormContact from '@layout/sections/contact/form-contact/form-contact';
import NotificationMessage from '@layout/sections/contact/notification-message/notification-message';

const run = () => {

  const containerResponse = document.querySelector('.container-notification-message');
  const spinnerContainer = document.querySelector('.container-load-spinner');
  const spinnerGroup = document.querySelector('.spinner-group');
  const spinner = document.querySelector('.container-load-spinner-svg');
  const dash = spinnerGroup.querySelector('.dash');
  
  const messageNotificationSuccess = document.querySelector('#message-success');
  const messageNotificationerror = document.querySelector('#message-error');
  const iconCheckMark = document.querySelector('.checkmark');
  const iconCrossMark = document.querySelector('.crossmark');

  FormContact.init({
    containerResponse,
    spinnerContainer,
    spinner,
    messageNotificationSuccess,
    messageNotificationerror
  });

  NotificationMessage.init({
      containerResponse,
      spinnerContainer,
      spinnerGroup,
      spinner,
      dash,
      messageNotificationSuccess,
      messageNotificationerror,
      iconCheckMark,
      iconCrossMark
  });
}


export default {
  run
}