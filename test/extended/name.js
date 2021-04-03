import sel  from  '../../data/selectors';
import data from '../../data/testData';
import inputValues4 from '../../helpers/methods';
import setsName from '../../helpers/methods';
import exp from '../../data/expected.json';

describe('Age Field suite', function () {

    before('Open App', function () {
        browser.url('');
    });

    describe('Name Field', function () {

        describe('Positive cases', function () {

            it(' TC-028 Name field placeholder = \'Hero\'s name" ', function () {
                let name = $(sel.name).getAttribute('placeholder');
                expect(name).toEqual(exp.namePlaceholder);
            });

            it('TC-029 Name field accepts 1 symbol ', function () {
                browser.refresh();
                setsName.inputsValuesIntoNameField(data.name.w);
                let error = $$(sel.nameError);
                expect(error).not.toBeDisplayed();
            });

            it('TC-030 Name field accepts 70 symbols', function () {
                browser.refresh();
                setsName.inputsValuesIntoNameField(data.name.symbol70);
                let error = $$(sel.nameError);
                expect(error).not.toBeDisplayed();
            });

            it('TC-031 Name field accepts letters', function () {
                browser.refresh();
                setsName.inputsValuesIntoNameField(data.name.letters);
                let error = $$(sel.nameError);
                expect(error).not.toBeDisplayed();
            });

            it('TC-032 Name field accepts lower case / upper case', function () {
                browser.refresh();
                setsName.inputsValuesIntoNameField(data.name.camelCase);
                browser.pause(4000)
                let error = $$(sel.nameError);
                expect(error).not.toBeDisplayed();

            });

            it('TC-033 Name field accepts digits', function () {
                browser.refresh();
                setsName.inputsValuesIntoNameField(data.name.digits);
                let error = $$(sel.nameError);
                expect(error).not.toBeDisplayed();
            });

            it('TC-034 Name field accepts special symbols', function () {
                browser.refresh();
                setsName.inputsValuesIntoNameField(data.name.specialSymbols);
                let error = $$(sel.nameError);
                expect(error).not.toBeDisplayed();
            });

            it('TC-035 Name field accepts letters with spaces', function () {
                browser.refresh();
                setsName.inputsValuesIntoNameField(data.name.spaces);
                let error = $$(sel.nameError);
                expect(error).not.toBeDisplayed();
            });

            it('TC-036 Name field accepts Russian letters', function () {
                browser.refresh();
                setsName.inputsValuesIntoNameField(data.name.russian);
                let error = $$(sel.nameError);
                expect(error).not.toBeDisplayed();
            });

            it('TC-037 Name field accepts Korean letters', function () {
                browser.refresh();
                setsName.inputsValuesIntoNameField(data.name.korean);
                let error = $$(sel.nameError);
                expect(error).not.toBeDisplayed();
            });

        });
    });
});
