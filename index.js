const {JSDOM} =
require("jsdom");
const {document} = new JSDOM().window;


/*var RandomNumber1 = math.random();
var Number = RandomNumber1 *6 +1;
var image ="./images/dice" + Number +".png";
const image_selection = document.querySelector('img');*/
document.querySelector('img').setAttribute('src','./images/dice2.png');

