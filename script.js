// 1.{a:'one', b:'2', f:'5', c:'33', p:'do', q:'one' }: Using this object make an array consisting of all the keys of the given object in reverse order. (output should be ['q', 'p', 'c', 'f', 'b', 'a'])
let things = { a: 'one', b: '2', f: '5', c: '33', p: 'do', q: 'one' }

let Keys = Object.keys(things);
let Keys_Reversed = Keys.toReversed();
console.log(Keys_Reversed);

// 2.{ data: [{a:'one', id:'22'}, {a:'four', id:'7'}, {a:'six', b:'2'},  {a:'sixty', id:'24'},  {a:'five', id:'212'}] }
// From the given object remove the data arrays item with id as '24'. (consider that the data arrays order will be different every time you get, so write code in such a way that given any object it will remove the item with id as 24 if it exists )
const obj = {
    data: [
        { a: 'one', id: '22' },
        { a: 'four', id: '7' },
        { a: 'six', b: '2' },
        { a: 'sixty', id: '24' },
        { a: 'five', id: '212' }
    ]
};

obj.data = obj.data.filter(item => item.id !== '24');

console.log(obj);

//3.Write a function to 
// a.Calculate the height of the end user's browser screen
// b.To console the name of the web host
// c.To show a warning message if there is no https protocol used in the visited website.
// d.To show an alert message after 10sec while the page is refereshed.

function height() {
    console.log('Browser height:', window.innerHeight);
}
height();

function hostName() {
    console.log('Web host:', window.location.hostname);
}
hostName();

function checkHTTPS() {
    if (window.location.protocol !== 'https:') {
        console.warn('The page is not using HTTPS!');
    }
}
checkHTTPS();

function alert(value) {
    setTimeout(() => {
        alert('Alert after 10 seconds');
    }, 10000);
}
alert();


// 4.Store your basic details in localstorage of the browser every time the page loads, then console them and finally delete them after 1 minute of the page load. 
function details() {

    const basicDetails = {
        name: 'Akshay S',
        age: 22,
        Qualification: "Btech ECE"
    };
    localStorage.setItem('basicDetails', JSON.stringify(basicDetails));

    console.log(basicDetails);

    setTimeout(() => {
        localStorage.removeItem('basicDetails');
    }, 60000);
}

details();

//5.Redirect to the homepage of google from the console.
window.location.href = "https://www.google.com";
