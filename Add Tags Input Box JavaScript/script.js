const ul = document.querySelector("ul"),
input = document.querySelector("input"),
tagNumb = document.querySelector(".details span");



let maxTags = 10,
tags = ["coding", "nepal"];

console.log(tags.length);

countTags();
createTag();

function countTags(){
    input.focus();
    tagNumb.innerText = maxTags - tags.length; // subteacting max value with tags lenth
    console.log(tagNumb.innerText);
}

function createTag(){
    ul.querySelectorAll("li").forEach(li => li.remove()); // removing all li tags before adding so there will be no duplicate tags
    tags.slice().reverse().forEach(tag =>{
        let liTag = `<li>${tag} <i class="uit uit-multiply" 
        onclick="remove(this, '${tag}')"></i></li>`;
        ul.insertAdjacentHTML("afterbegin", liTag); // inserting or adding li inside ul tag
    });
    countTags();
}

function remove(element, tag){
    let index  = tags.indexOf(tag); // getting removing tag index
    tags = [...tags.slice(0, index), ...tags.slice(index + 1)]; //removing or excluding selected tag from an array 
    element.parentElement.remove(); // removing li of remoced tag
    countTags();
}

function addTag(e){
    if(e.key == "Enter"){
        let tag = e.target.value.replace(/\s+/g, ' '); // removing unwanted space from user tag
       
        if(tag.length > 1 && !tags.includes(tag)){ // if tag length is greather than 1 and the tag isn't exists
            if(tags.length < 10){  
                tag.split(',').forEach(tag => { // adding each tag isside comma
                    tags.push(tag);   // adding each tag inside array
                    createTag();
                });
            }
        }
        e.target.value = "";
    }
}

input.addEventListener("keyup", addTag);

const removeBtn = document.querySelector(".details button");
removeBtn.addEventListener("click", () =>{
    tags.length = 0; // making array empty
    ul.querySelectorAll("li").forEach(li => li.remove()); // removing alll li tag
    countTags();
});
