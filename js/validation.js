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
                    if (username=='soso') {
                        div.innerHTML = '<p> My fucken love <span style="color:#e226e9;"> SOSO</span> , God brings us together longevity.</p>';
                        return; //stop here mother fuckr
                    }
                    else if (username == 'hema') {
                        div.innerHTML = "<p> If you leave me "+ username + ", I will get lost. <span style='color: #e9243e;'> My brother</span></p>";
                        return; 
                    }
                    else if (username == 'noga') {
                        div.innerHTML = "<p> this Lady she cared me 9 months and i love here so match <span style='color:#e226e9;'> ' noga ' </span> .</p>"
                        return;
                        }
                    else if (username == 'hamo'){
                        div.innerHTML = "<p> That's my fucken name <br>-_- " + username + " </p>"
                        return;
                    }
                }
                
        }
    }
         for ( x of users) {
         if (x.name == username && x.pass != password) {
            div.innerHTML = '<p style="color:red;"><br> Wrong password !</p>';
            return; 
        }
        }
         if(x.username != username) {
                div.innerHTML = '<p> This username not Exist in our system ! </p>'
             return;
            }
};




