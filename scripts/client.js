console.log('Hello Tyto!!!');

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

    $('.js-field-firstname').val('');
    $('.js-field-lastname').val('');
    $('.js-field-age').val('');
}