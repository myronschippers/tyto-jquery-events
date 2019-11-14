console.log('Hello Tyto!!!');

const PEOPLE_LIST = [];

$(document).ready(onReady);

function onReady() {
    // do something when DOM is ready

    $('.js-addPerson').on('click', onAddPerson);
    $('.js-people').on('click', '.js-person', onClickDeletePerson)
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
    render();

    // CLEARs FORM FIELDS
    // $('.js-field-firstname').val('');
    // $('.js-field-lastname').val('');
    // $('.js-field-age').val('');
}

function onClickDeletePerson(event) {
    console.log(this);
    const $clickedElem = $(this);
    console.log($clickedElem);
    const indexOfItem = $clickedElem.data('index');
    console.log(indexOfItem);
    // Remove person from list
    PEOPLE_LIST.splice(indexOfItem, 1);
    console.log(PEOPLE_LIST);

    // re-render list of people
    render();
}

function render() {
    const $list = $('.js-people');

    $list.empty();

    for (let index in PEOPLE_LIST) {
        const person = PEOPLE_LIST[index]
        $list.append(`
            <li data-kittykat="meow">
                ${person.fullName} is ${person.age} years old.
                <button class="js-person" data-index="${index}">Delete</button>
            </li>
        `);
    }

}

