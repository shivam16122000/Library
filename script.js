let myLibrary = [];
const addbtn = document.querySelector('.addbookbtn');
const submitbtn = document.querySelector('.submit');
const nameinput = document.querySelector('.name');
const authorinput = document.querySelector('.author');
const pagesinput = document.querySelector('.pages');
const statusinput = document.querySelector('.status');
const form = document.querySelector('form');
submitbtn.addEventListener('click',(e)=>{
    e.preventDefault();
    form.style.display = 'none';
    cart.innerHTML='';
    console.log(myLibrary);
    addBookToLibrary(nameinput.value,authorinput.value,pagesinput.value,statusinput.value);
    for(let i=0;i<myLibrary.length;i++){
    let book = document.createElement('div');
    book.classList.add('book');
    let bookname = document.createElement('div');
    let bookauthor = document.createElement('div');
    let bookpages = document.createElement('div');
    let bookstatus = document.createElement('div');
    let remove = document.createElement('button');
    remove.textContent='remove';

    bookname.textContent=myLibrary[i].title;
    bookauthor.textContent=myLibrary[i].author;
    bookpages.textContent=myLibrary[i].pages;
    bookstatus.textContent=myLibrary[i].status;
    book.appendChild(bookname);
    book.appendChild(bookauthor);
    book.appendChild(bookpages);
    book.appendChild(bookstatus);
    book.appendChild(remove);
    cart.appendChild(book);
    remove.addEventListener('click',()=>{
        cart.removeChild(book);
        myLibrary.splice(i,1);
        

    })
    


}
})

addbtn.addEventListener('click',()=>{
    if(form.style.display=='none'){
    form.style.display ='block';
    }else{
        form.style.display='none';
    }
})
const cart = document.querySelector('.bookcart');


function Book(title,author,pages,status){
    this.title=title,
    this.author=author,
    this.pages=pages,
    this.status=status
    this.info = function (){
        return (`${title} by ${author},${pages} pages ,${status} read yet`)
    }
}

function addBookToLibrary(title,author,pages,status) {
    myLibrary.push(new Book(title,author,pages,status))

}
  

console.log(myLibrary);
