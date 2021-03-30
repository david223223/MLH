import sel from '../../data/selectors';
import exp from '../../data/expected.json';

describe('Name Field', function () {

    describe('Placeholder', function () {

        before('Open App', function () {
            browser.url('');
        });

        it('TC-029 Name Field placeholder = "Hero\'s name"', function () {
            let placeholder = $(sel.name).getAttribute('placeholder');
            expect(placeholder).toEqual(exp.namePlaceholder);
        });

    });
});
