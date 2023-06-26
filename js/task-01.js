const list = document.querySelector('#categories');
console.log(`Number of categories:`, list.children.length);



const elements = document.querySelectorAll('.item');

[...elements].forEach(element => {
    const title = element.firstElementChild.textContent;
    console.log(`Category:`, title);
    const numElem = element.lastElementChild.children.length;
    console.log(`Elements:`, numElem);
   
});

