import { useRef, useState } from 'react';
import validator from 'validator';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import { TextareaAutosize } from '@mui/material';

import useInput from '../../hooks/useInput';
import Input from './Input';
import Message from './Message';
import Button from '../ui/Button';
import Heading from '../ui/Heading';

import classes from './index.module.scss';

const ContactPage = () => {
   const [message, setMessage] = useState(null);
   const [isLoading, setIsLoading] = useState(false);
   const [isValid, setIsValid] = useState(false);
   const form = useRef();
   const { t } = useTranslation();

   // Name
   const {
      value: enteredName,
      isValid: enteredNameIsValid,
      hasError: nameInputHasError,
      valueChangeHandler: nameChangedHandler,
      inputBlurHandler: nameBlurHandler,
      reset: resetNameInput,
   } = useInput((value) => value.trim() !== '');

   // Email
   const {
      value: enteredEmail,
      isValid: enteredEmailIsValid,
      hasError: emailInputHasError,
      valueChangeHandler: emailChangeHandler,
      inputBlurHandler: emailBlurHandler,
      reset: resetEmailInput,
   } = useInput((value) => validator.isEmail(value));

   // Message
   const {
      value: valueTextArea,
      valueChangeHandler: textareaChangeHandler,
      reset: resetTextarea,
   } = useInput((value) => value);

   // Form validation
   let formIsValid = false;
   if (enteredNameIsValid && enteredEmailIsValid) formIsValid = true;

   // Form submitting
   const sendEmail = (e) => {
      e.preventDefault();

      if (!enteredNameIsValid) return;

      setMessage(null);
      setIsLoading(true);

      const sendMessage = (message, isValid = true) => {
         setMessage(message);
         setIsValid(isValid);
         setTimeout(() => setMessage(null), 7500);
         setIsLoading(false);
      };

      emailjs
         .sendForm(
            'service_jlf0fj6',
            'template_84b8ugn',
            form.current,
            '3xD2auX5eX49KmlW8'
         )
         .then(() => {
            sendMessage(t('contact.message_success'));
         })
         .catch(() => {
            sendMessage(t('contact.message_fail'), false);
         });

      // Remove blur from any inputs
      document.activeElement?.blur && document.activeElement.blur();

      // Reset inputs
      resetNameInput();
      resetEmailInput();
      resetTextarea();
   };

   const hideMessageHandler = () => setMessage(null);

   return (
      <section id="contact" className={classes.contact}>
         <Heading
            heading={t('contact.heading')}
            h1ClassName={classes.h1}
            subheading={t('contact.paragraph')}
            pClassName={classes.text}
         />

         <form ref={form} onSubmit={sendEmail}>
            {/* Name */}
            <Input
               value={enteredName}
               type="name"
               name="user_name"
               onChange={nameChangedHandler}
               onBlur={nameBlurHandler}
               label={t('contact.labelName')}
               error={nameInputHasError}
               errorDescription={t('contact.errorName')}
            />

            {/* Email */}
            <Input
               value={enteredEmail}
               type="email"
               name="user_email"
               onChange={emailChangeHandler}
               onBlur={emailBlurHandler}
               label="Email"
               error={emailInputHasError}
               errorDescription={t('contact.errorEmail')}
            />

            {/* Textarea */}
            <div className={classes['input-container']}>
               <TextareaAutosize
                  value={valueTextArea}
                  onChange={textareaChangeHandler}
                  name="message"
                  placeholder={t('contact.placeholderMessage')}
                  minRows={6}
                  aria-label="minimum height"
               />
            </div>

            {/* Send button */}
            <div className={classes['button-container']}>
               <Button
                  disabled={!formIsValid}
                  className={formIsValid ? classes.onHover : null}
                  style={
                     !formIsValid
                        ? {
                             cursor: 'not-allowed',
                             color: 'gray',
                             backgroundColor: '#2463a7',
                          }
                        : { cursor: 'pointer' }
                  }
               >
                  {isLoading ? t('contact.sending') : t('contact.send')}
                  <span />
               </Button>
            </div>
         </form>

         {/* Response message */}
         <Message
            message={message}
            isValid={isValid}
            onHideMessage={hideMessageHandler}
         />
      </section>
   );
};

export default ContactPage;
