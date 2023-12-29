import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckoutPage extends Page {
    /**
     * define selectors using getter methods
     */

    get continueBtn () {
        return $('#continue');
    }

    get inputFirstName () {
        return $('#first-name');
    }

    get inputlastName () {
        return $('#last-name');
    }

    get inputZipCode () {
        return $('#postal-code');
    }

    get flashAlert () {
        return $('[class="header_secondary_container"]>span');
    }

    async fillCheckoutForm ({firstName, lastName, zipCode}) {
        await this.inputFirstName.setValue(firstName);
        await this.inputlastName.setValue(lastName);
        await this.inputZipCode.setValue(zipCode);
    }
}

export default new CheckoutPage();
