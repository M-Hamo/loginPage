//fetch data from page ...

let username = document.getElementById('username').value;
let password = document.getElementById('password').value;
let button = document.getElementById('button');

//array of users...
const users = [
    {
        name: 'hema',
        pass: 0000
    },
    {
        name: 'hamo',
        pass: 0000
    },
    {
        name: 'soso',
        pass: 0000
    },
    {
        name: 'noga',
        pass: 0000
    }
];


button.onclick = () => {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let div = document.getElementById('output');
    div.style.visibility = 'visible';
    for (var x of users) {
        if (x.name == username && x.pass == password) {
            div.innerHTML = '<br><p> you can Go ' + username + '..</p>';
            return; //stop here mother fuckr 
        }
    }
     if(x.username != username) {
        div.innerHTML = '<br> <p> This username not Exist in system ! </p>'
        
    }
    else {
        div.innerHTML = '<br> Wrong password !<h3>';        
    }
};

