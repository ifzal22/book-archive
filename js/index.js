const SearchBook = () => {
    const SearchFild = document.getElementById('search-field');
   const  searchText = SearchFild.value ;
   console.log(searchText);

//    clear data 
   SearchFild.value = '';

//    load data 
   const url = ` http://openlibrary.org/search.json?q=${searchText}`

//    console.log(url)
fetch(url)
.then(res => res.json())
.then(data =>  displaySearchResult(data.docs))


}


document.getElementById('error-massage').style.display = 'none';
const displaySearchResult = docs => {

    const searchResult = document.getElementById('search-Result');
    document.getElementById('error-massage').style.display = 'none';

    searchResult.textContent = '';

  
  
    if(docs.lenght == 0){

    }
    else{
        document.getElementById('error-massage').style.display = 'block';
      console.log('no result') 
    }

    docs.forEach(doc => {
        console.log(doc);
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