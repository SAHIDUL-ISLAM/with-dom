// getElementById
const idSelector = document.getElementById('headingOne');
idSelector.style.backgroundColor = "pink";
// getElementById

// getElementsByClassName
const classSele = document.getElementsByClassName("classSelector");
classSele[0].style.backgroundColor = "yellow";
// getElementsByClassName

// getElementsByTagName
// output in the console 
const tagnames = document.getElementsByTagName('li');
for(const tagname of tagnames ){
    console.log(tagname.innerText);
}
// getElementsByTagName


// onclick call with function 
function pageColorChange(){
    document.body.style.backgroundColor = "pink";
}

//
const skyBlue = document.getElementById('skyblue');

skyBlue.onclick = function changeblue(){
    document.body.style.backgroundColor = "skyblue";
}


// best practice bg color changer
const goldColor = document.getElementById('gold-color').addEventListener('click',function(){
    document.body.style.backgroundColor = "gold";
});


// text chnager 
document.getElementById("btn-changer").addEventListener('click',function(){
    const textChanger = document.getElementById('title-text');
    textChanger.innerText = "Hello DOM DOMA DOM DOM";
})