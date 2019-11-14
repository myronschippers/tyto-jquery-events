console.log('Hello Tyto!!!');

const PEOPLE_LIST = [];

$(document).ready(onReady);

function onReady() {
    // do something when DOM is ready

    $('.js-addPerson').on('click', onAddPerson);
}

function onAddPerson(event) {
    const firstName = $('.js-field-firstname').val();
    const lastName = $('.js-field-lastname').val();
    const age = $('.js-field-age').val();

    console.log(firstName, lastName, age);
    // add person info to list
    const newPerson = {
        firstName: firstName,
        lastName: lastName,
        fullName: firstName + ' ' + lastName,
        age: parseInt(age),
    };
    PEOPLE_LIST.push(newPerson);
    console.log(PEOPLE_LIST);

    // CLEARs FORM FIELDS
    $('.js-field-firstname').val('');
    $('.js-field-lastname').val('');
    $('.js-field-age').val('');
}

