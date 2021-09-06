console.log('I am here');

// alert('Ma is Comming!!');

const maComing = () => {
    alert('Ammu is coming.open the book')
}

const askPicnic = () => {
    const response = confirm('Are you going to picnic?');
    console.log(response);
    if (response === true) {
        alert('amake fee ta bKash kore de');
    }
    else
        console.log('DGM!! Doore Giya mor!!')
}
const askName = () => {
    const name = prompt('What is your name?');
    if (name) {
        console.log(name);

    }

}