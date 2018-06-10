// Set the application ID
var applicationId = "sandbox-sq0idp-rfr4c1LFWS6iy0Qn08gY0g";

// Set the location ID
var locationId = "CBASEFHnYt4LtUBRMdcEfBL_IdcgAQ";

/*
 * function: requestCardNonce
 *
 * requestCardNonce срабатывает, когда кнопка «Оплатить кредитной карточкой»  
 * щелкнул  
 *  
 * Изменение этой функции не требуется, но может быть настроено, если вы  
 * хотите предпринять дополнительные действия при нажатии кнопки формы.
 */
function requestCardNonce(event) {

  // Не отправляйте форму до тех пор, пока SqPaymentForm не вернется с nonce
  event.preventDefault();

  // Request a nonce from the SqPaymentForm object
  paymentForm.requestCardNonce();
}

// Создание и инициализация объекта формы платежа
var paymentForm = new SqPaymentForm({

  // Инициализировать элементы платежной формы
  applicationId: applicationId,
  locationId: locationId,
  inputClass: 'sq-input',

// Настроить CSS для элементов iframe SqPaymentForm
  inputStyles: [{
      fontSize: '.9em'
  }],
  // Initialize Apple Pay placeholder ID
  applePay: {
    elementId: 'sq-apple-pay'
  },

  // Initialize Masterpass placeholder ID
  masterpass: {
    elementId: 'sq-masterpass'
  },

  // Initialize the credit card placeholders
  cardNumber: {
    elementId: 'sq-card-number',
    placeholder: '•••• •••• •••• ••••'
  },
  cvv: {
    elementId: 'sq-cvv',
    placeholder: 'CVV'
  },
  expirationDate: {
    elementId: 'sq-expiration-date',
    placeholder: 'MM/YY'
  },
  postalCode: {
    elementId: false
  },

  // SqPaymentForm callback functions
  callbacks: {

    /*
     * функция обратного вызова: методыПоддерживаемые      
     * Триггер, когда: страница загружена.
     */
    methodsSupported: function (methods) {

      var applePayBtn = document.getElementById('sq-apple-pay');
      var applePayLabel = document.getElementById('sq-apple-pay-label');
      var masterpassBtn = document.getElementById('sq-masterpass');
      var masterpassLabel = document.getElementById('sq-masterpass-label');

      // Only show the button if Apple Pay for Web is enabled
      // Otherwise, display the wallet not enabled message.
      if (methods.applePay === true) {
        applePayBtn.style.display = 'inline-block';
        applePayLabel.style.display = 'none' ;
      }
      // Only show the button if Masterpass is enabled
      // Otherwise, display the wallet not enabled message.
      if (methods.masterpass === true) {
        masterpassBtn.style.display = 'inline-block';
        masterpassLabel.style.display = 'none';
      }
    },

    /*
     * callback function: createPaymentRequest
* Запускается, когда: нажата кнопка оплаты цифрового кошелька.
     
    *createPaymentRequest: function () {

      var paymentRequestJson ;
      /* ADD CODE TO SET / CREATE paymentRequestJson 
      return paymentRequestJson ;
    },

    /*
     * callback function: validateShippingContact
     * Triggered when: a shipping address is selected/changed in a digital
     *                 wallet UI that supports address selection.
    
    validateShippingContact: function (contact) {

      var validationErrorObj ;
      /* ADD CODE TO SET validationErrorObj IF ERRORS ARE FOUND 
      return validationErrorObj ;
    },
  
    /*
     * callback function: cardNonceResponseReceived
     * Запускается, когда: SqPaymentForm завершает запрос на отмену карты
     */
    cardNonceResponseReceived: function(errors, nonce, cardData, billingContact, shippingContact) {
      if (errors) {
        // Log errors from nonce generation to the Javascript console
        console.log("Encountered errors:");
        errors.forEach(function(error) {
          console.log('  ' + error.message);
        });

        return;
      }

      // alert('Nonce received: ' + nonce); /* FOR TESTING ONLY */

      // Назначьте значение nonce в поле скрытой формы

      document.getElementById('card-nonce').value = nonce;

      // ОТПРАВИТЬ форму nonce на страницу обработки платежей
      document.getElementById('nonce-form').submit();

    },

    /*
     * callback function: unsupportedBrowserDetected
     * Triggered when: the page loads and an unsupported browser is detected
     */
    unsupportedBrowserDetected: function() {
      /* PROVIDE FEEDBACK TO SITE VISITORS */
    },

    /*
     * callback function: inputEventReceived
     * Triggered when: visitors interact with SqPaymentForm iframe elements.
     */
    inputEventReceived: function(inputEvent) {
      switch (inputEvent.eventType) {
        case 'focusClassAdded':
          /* HANDLE AS DESIRED */
          break;
        case 'focusClassRemoved':
          /* HANDLE AS DESIRED */
          break;
        case 'errorClassAdded':
          /* HANDLE AS DESIRED */
          break;
        case 'errorClassRemoved':
          /* HANDLE AS DESIRED */
          break;
        case 'cardBrandChanged':
          /* HANDLE AS DESIRED */
          break;
        case 'postalCodeChanged':
          /* HANDLE AS DESIRED */
          break;
      }
    },

    /*
     * callback function: paymentFormLoaded
     * Triggered when: SqPaymentForm is fully loaded
     */
    paymentFormLoaded: function() {
      /* HANDLE AS DESIRED 
        РУЧКА КАК ЖЕЛАЕТСЯ

      */
      paymentForm.build ();
    }
  }
});
