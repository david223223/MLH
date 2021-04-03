import exp from '../../data/expected.json';
import sel from '../../data/selectors';
import data from '../../data/testData';
import n1234 from '../../helpers/methods'

describe('Age Field suite', function () {

    before('Open App', function () {
        browser.url('');
    });

    describe('Placeholder', function (){

    });

    describe('Positive cases', function (){

    });

    it('TC-026 Submit button is enabled after fields 1-4 are filled in with valid values', function () {
        $(sel.name).setValue(data.name.default);
        $$(sel.radioButtons)[data.gender.she].click();
        $(sel.age).setValue(data.age.default);
        $(sel.storyType).click();
        $$(sel.storyList)[data.story.comedy].click();
        let submitBtn = $(sel.submit).isEnabled();
        expect(submitBtn).toEqual(true);
    });

    it('TC-027 User can create a story with valid values', function () {
        browser.refresh();
        n1234.inputValues4(data.name.default, data.gender.she, data.age.default, data.story.comedy);
        $(sel.submit).click();
        let tryAgainBtn = $(sel.tryAgain).isDisplayed();
        expect(tryAgainBtn).toEqual(true);
    });

    it('should ', function () {
        
    });

});
