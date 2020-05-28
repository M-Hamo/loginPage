//fetch data from page ...

var username = document.getElementById('username').value;
var password = document.getElementById('password').value;
var button = document.getElementById('button');

//array of users...
const users = [
    {
        name: 'hema',
        pass: 'hema'
    },
    {
        name: 'hamo',
        pass: 'hamo'
    },
    {
        name: 'soso',
        pass: 'soso'
    },
    {
        name: 'noga',
        pass: 'noga'
    }
];


button.onclick = () => {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let div = document.getElementById('output');
    div.style.visibility = 'visible';
    for (var x of users) {
        for ( x of users) {
                if (x.name == username && x.pass == password) {
                    div.innerHTML = '<p> you can Go ' + username + '..</p>';
                    return; //stop here mother fuckr 
                }
        }
    }
         for ( x of users) {
         if (x.name == username && x.pass != password) {
            div.innerHTML = '<p style="color:red;"> Wrong password !</p>';
            return; 
        }
        }
         if(x.username != username) {
                div.innerHTML = '<p> This username not Exist in system ! </p>'
             return;
            }
    }
};




