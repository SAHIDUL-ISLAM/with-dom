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
