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




// comment 

// document.getElementById('btn-for-comment').addEventListener('click',function(){
//     const commentTextBox = document.getElementById('comment-text-box');
//     const newComment = commentTextBox.value; 
//     const commentContainer = document.getElementById('comment-container');
//     const createElement = document.createElement('p');
//     createElement.classList.add('comment');
//     createElement.innerText = newComment;
//     commentContainer.appendChild(createElement);

// })




// btn mouse enter
// document.getElementById("btn-mouse").addEventListener('mouseenter', function(){
//     console.log("Mouse Enter");
// })


// mouse move 
// document.getElementById("btn-mouse").addEventListener('mousemove', function(){
//     console.log("Mouse Enter");
// })

// mouse out 
document.getElementById("btn-mouse").addEventListener('mouseout', function(){
    console.log("Mouse Enter");
})