(function() {

    var $form,
        btClient,
        config = {};

    function tokenize(e){
        var deferred = $.Deferred();
        e.stopPropagation();
        e.preventDefault();
        var creditCard = {
            number: config.number.val(),
            cardholderName: config.cardHolderName.val(),
            // or expirationMonth and expirationYear
            expirationMonth: config.expirationMonth.val(),
            expirationYear: config.expirationYear.val(),
            cvv: config.cvv.val()
        };
        if ('streetAddress' in config && 'postalCode' in config) {
            creditCard['billingAddress'] = {
                postalCode: config.postalCode,
                streetAddress: config.streetAddress
            };
        }
        if (config.is3DSecuredEnabled) {
            btClient.verify3DS({
                amount: config.amount,
                creditCard: creditCard
            }, tokenizationHandler);
        } else {
            btClient.tokenizeCard(creditCard, tokenizationHandler);
        }
        return deferred;

        function tokenizationHandler(error, nonce) {
            if (nonce.hasOwnProperty('nonce')) {
                nonce = nonce.nonce;
            }
            var $container = $("<div>").attr({
                "class": "orderMachineStateSummary" //Needed for manual order flow
            });

            if (error) {
                deferred.reject(error);
                return alert("Error: " + error);
            }

            $("<input>").attr({
                type: "hidden",
                name: config.paymentFieldName
            }).val(nonce).appendTo($container);

            $container.appendTo($form);

            if (config.shouldSubmitForm) {
                $form.submit();
            }

            deferred.resolve();
            return true;
        }
    }

    /*
     * This function manages extraction of payment details and getting them
     * to a back end endpoint.
     *
     * @param clientToken String a string that serves as the clientToken for BT
     * @param orderAmount Number the total amount to send towards the payment gateway
     */
    function braintreeVDotZeroIntegration(configObj) {
        config = configObj;

        $form = config.form;
        btClient = new braintree.api.Client({clientToken: config.clientToken});

        if (config.submitButton) {
            config.submitButton.off('click').click(tokenize);
        } else {
            $('body')
                .off('orderFormFSMBeforeFormSerialization')
                .on('orderFormFSMBeforeFormSerialization', tokenize);
        }
    }

    function braintreeVDotZeroDestroy() {
        $('body').off('orderFormFSMBeforeFormSerialization', tokenize);
    }

    window.braintreeVDotZeroIntegration = braintreeVDotZeroIntegration;
    window.braintreeVDotZeroDestroy = braintreeVDotZeroDestroy;
})();
