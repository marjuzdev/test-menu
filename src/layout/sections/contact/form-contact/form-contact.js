import emailService from '@/common/services/email.service';
import Animations from '@animations';
import Utils from '@utils/utils';

const form = {
    email: {
        value: '', activeError: false, elemenstDOM: {}, errors: null, validators: [Utils.inputEmpty, Utils.emailCheck]
    },
    subject: {
        value: '', activeError: false, elemenstDOM: {}, errors: null, validators: [Utils.inputEmpty]
    },
    message: {
        value: '', activeError: false, elemenstDOM: {}, errors: null, validators: [Utils.inputEmpty]
    }
};

let btnSendEmail = null;

const init = ({
    containerResponse,
    spinner,
    messageNotificationSuccess,
    messageNotificationerror
}) => {

    const keysForm = Object.keys(form);
    btnSendEmail = document.getElementById('sendEmail');

    keysForm.forEach((key) => {

        const formField = document.getElementById(key);
        const label = formField.querySelector('label');
        const input = formField.querySelector('.form-input');
        const underline = formField.querySelector('.underline-status');
        const errorMessage = formField.querySelector('.error-message');
        input.value = form[key].value;

        form[key].elemenstDOM = { formField, label, input, underline, errorMessage };

        focusInput(key);
        activateValidators(key);
        setStylesFormField(key);
        setStylesError(key);
    });

    btnSendEmail.addEventListener('click', async (e) => {
        let emailData = {};
        try {
            if (!checkErrosFormFields()) {
                emailData = {
                    email: form.email.value,
                    subject: form.subject.value,
                    message: form.message.value
                };

                containerResponse.classList.add('activate');
                await emailService.sendEmail(emailData, true);
                messageNotificationSuccess.classList.add("show");
                spinner.classList.add('success');
                clearForm(keysForm);
            }

        } catch (error) {
            messageNotificationerror.classList.add("show");
            spinner.classList.add('error');
            Utils.saveToLocalStorage('formContact', emailData);
            clearForm(keysForm);
        }
    });
}
const clearForm = (keysForm) => {

    for (const key of keysForm) {

        const inputFormField = form[key];
        const { elemenstDOM } = inputFormField;

        inputFormField.activeError = false;
        elemenstDOM.input.value = '';
        elemenstDOM.label.classList.remove('label-status-active');
        elemenstDOM.underline.classList.remove('underline-status-active');
        activateValidators(key);
    }
    btnSendEmail.disabled = true;
}
const focusInput = (keyForm) => {

    const { formField, input } = form[keyForm].elemenstDOM;

    formField.addEventListener('click', (e) => {
        input.focus();
    })
}

const addStylesStatus = (elements) => {

    const { label, input, underline, active } = elements;

    if (input.value.trim().length === 0 && !active) {
        label.classList.remove('label-status-active');
    } else {
        label.classList.add('label-status-active');
        underline.classList.add('underline-status-active');
    }
}

const setStylesFormField = (keyForm) => {

    const { elemenstDOM } = form[keyForm];
    addStylesStatus(elemenstDOM);

    elemenstDOM.input.addEventListener('focus', () => {
        addStylesStatus({ ...elemenstDOM, active: true });
    })

    elemenstDOM.input.addEventListener('blur', () => {
        addStylesStatus({ ...elemenstDOM, active: false })
    })
}

const setStylesError = (keyForm) => {

    const { input } = form[keyForm].elemenstDOM;

    input.addEventListener('input', (e) => {

        form[keyForm].value = input.value;
        getStylesError(keyForm);
        btnSendEmail.disabled = checkErrosFormFields();
    });

    input.addEventListener('focus', (e) => {
        form[keyForm].value = input.value;
        getStylesError(keyForm);
        btnSendEmail.disabled = checkErrosFormFields();
    })

    input.addEventListener('blur', (e) => {

        form[keyForm].activeError = true;
        form[keyForm].value = input.value;
        getStylesError(keyForm);
        btnSendEmail.disabled = checkErrosFormFields();
    })
}

const getStylesError = (keyForm) => {

    const { label, underline, errorMessage } = form[keyForm].elemenstDOM;

    activateValidators(keyForm);

    if (form[keyForm].errors && form[keyForm].activeError) {

        getMessageError(keyForm);
        label.classList.add('label-status-invalid');
        underline.classList.add('underline-status-invalid');
        errorMessage.classList.add('show');
    }
    else {
        label.classList.remove('label-status-invalid');
        underline.classList.remove('underline-status-invalid');
        errorMessage.classList.remove('show');
    }
}

const activateValidators = (keyForm) => {

    const { validators, elemenstDOM } = form[keyForm];

    let error = null;

    if (validators.length !== 0) {
        for (const validator of validators) {
            const value = elemenstDOM.input.value;
            if (validator(value)) {
                error = validator(value);
                break;
            }
        }
        form[keyForm].errors = error;
    }
}

const checkErrosFormFields = () => {

    const keysForm = Object.keys(form);
    let hasErrors = false;
    for (const key of keysForm) {
        if (form[key].errors !== null)
            hasErrors = true;
    }
    return hasErrors;
}

const getMessageError = (keyForm) => {

    const { errorMessage } = form[keyForm].elemenstDOM;

    const messagesValidation = {
        required: 'el campo es obligatorio',
        emailInvalid: 'email no es valido',
    };

    const typeError = Object.keys(form[keyForm].errors);
    const messageValidation = messagesValidation[typeError];
    errorMessage.textContent = messageValidation;
}

export default {
    init
}