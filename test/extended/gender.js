import sel  from  '../../data/selectors';
import data from '../../data/testData';
import inputValues4 from '../../helpers/methods';

describe('Age Field suite', function () {

    before('Open App', function () {
        browser.url('');
    });

    describe('Gender field', function () {

        describe('Positive cases', function () {

            it(' TC-055 Button "she" is enabled ', function () {
                let sheButton = $$(sel.radioButtons)[data.gender.she].isEnabled();
                expect(sheButton).toEqual(true);
            });

            it('TC-056 Button "it" is enabled ', function () {
                let itButton = $$(sel.radioButtons)[data.gender.it].isEnabled();
                expect(itButton).toEqual(true);
            });

            it('TC-057 Button "he" is enabled ', function () {
                let heButton = $$(sel.radioButtons)[data.gender.he].isEnabled();
                expect(heButton).toEqual(true);
            });

            //fix

            it('TC-058 User can choose only one button at a time: he', function () {
                $$(sel.radioButtons)[data.gender.he].click();
                let sheButton = $(sel.checkedGender).isSelected();
                let itButton = $(sel.checkedGender).isSelected();
                expect(sheButton && itButton).toEqual(false);
            });

            it('TC-059 User can choose only one button at a time: she', function () {
                $$(sel.radioButtons)[data.gender.she].click();
                let heButton = $(sel.checkedGender).isSelected();
                let itButton = $(sel.checkedGender).isSelected();
                expect(heButton && itButton).toEqual(false);
            });

            it('TC-0560 User can choose only one button at a time: it', function () {
                $$(sel.radioButtons)[data.gender.it].click();
                let heButton = $(sel.checkedGender).isSelected();
                let sheButton = $(sel.checkedGender).isSelected();
                expect(sheButton && itButton).toEqual(false);
            });

            it('TC-061 User can switch the option: he -> she', function () {
                $$(sel.radioButtons)[data.gender.he].click();
                $$(sel.radioButtons)[data.gender.she].click();
                let blueButton = $(sel.checkedGender).isDisplayed();
                expect(blueButton).toEqual(true);

            });

            it('TC-062 User can switch the option: he -> it', function () {
                $$(sel.radioButtons)[data.gender.he].click();
                $$(sel.radioButtons)[data.gender.it].click();
                let blueButton = $(sel.checkedGender).isDisplayed();
                expect(blueButton).toEqual(true);

            });

            it('TC-063 User can switch the option: she -> he', function () {
                $$(sel.radioButtons)[data.gender.she].click();
                $$(sel.radioButtons)[data.gender.he].click();
                let blueButton = $(sel.checkedGender).isDisplayed();
                expect(blueButton).toEqual(true);

            });

            it('TC-064 User can switch the option: she -> he', function () {
                $$(sel.radioButtons)[data.gender.she].click();
                $$(sel.radioButtons)[data.gender.it].click();
                let blueButton = $(sel.checkedGender).isDisplayed();
                expect(blueButton).toEqual(true);

            });

            it('TC-065 User can switch the option: it -> she', function () {
                $$(sel.radioButtons)[data.gender.it].click();
                $$(sel.radioButtons)[data.gender.she].click();
                let blueButton = $(sel.checkedGender).isDisplayed();
                expect(blueButton).toEqual(true);

            });

            it('TC-066 User can switch the option: it -> he', function () {
                $$(sel.radioButtons)[data.gender.it].click();
                $$(sel.radioButtons)[data.gender.he].click();
                let blueButton = $(sel.checkedGender).isDisplayed();
                expect(blueButton).toEqual(true);

            });

            it('TC-067 Not chosen button / Required ', function () {
                browser.refresh();
                $(sel.name).setValue(data.name.winnie);
                $(sel.age).setValue(data.age.default);
                $(sel.storyType).click();
                $$(sel.storyTypes)[data.story.comedy].click();
                let subBtn = $$(sel.submit);
                expect(subBtn).not.toBeEnabled();
            });

        });

    });

});