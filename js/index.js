
document.getElementById('errors').style.display = 'none';

const SearchBook = () => {
    const SearchFild = document.getElementById('search-field');
   const  searchText = SearchFild.value ;
//    console.log(searchText);

//    clear data 
   SearchFild.value = '';
   document.getElementById('errors').style.display = 'none';

//    load data 
   const url = ` http://openlibrary.org/search.json?q=${searchText}`

//    console.log(url)
fetch(url)
.then(res => res.json())
.then(data =>  displaySearchResult(data.docs))


// error handeling ---------------->
.then(data => {
   
   if(data.notfound === 404){
       errorDiv.innerText = 'No Results Found';
      

   }
   else{
    errorDiv.innerText = '' ;   
    }
})


.catch(error => DisplayError(error));



}

const DisplayError = error => {
    document.getElementById('errors').style.display = 'block';
}

// error massage--------->

const searchInput = document.getElementById('search-field');
const searchBtn = document.getElementById('button-search');
const errorDiv = document.getElementById('errors');
searchBtn.addEventListener('click' , function () {
    const search = searchInput.value;
    if(search == ''){
        errorDiv.innerText = 'No Results';
        return;
    }
    
  

})



// document.getElementById('error-massage').style.display = 'none';

const displaySearchResult = docs => {
console.log(docs.length)
console.log(docs)
    const searchResult = document.getElementById('search-Result');
    const searchNumber = document.getElementById('searchNumber');
    searchNumber.innerText = `Total Results: ${docs.length}`


 


    searchResult.textContent = '';
   
   


// loop ----------->
    docs.forEach(doc => {
        // console.log(doc);
        const div = document.createElement('div')
   
    
        div.classList.add('col');
        div.innerHTML = `
<div class="border border-3  container position-relative ">
        <div class=" mx-auto mt-3 d-flex justify-content-center ">
        <img class="figure-img img-fluid rounded   p-4  shadow-sm" src=" https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg">
        </div>
        <div class="mt-3 text-center">
            <h3>Book:  <span class="fw-bold"> ${doc.title_suggest} </span> </h3>
            <h3 >Author: <span class="fw-bold"> ${doc.author_name} </span> </h3>
            <p>Publish Date: <span  class="fw-bold" > ${doc.publish_date} </span> </p>
        </div></div>
        `;
      


   
        searchResult.appendChild(div)
    })
}