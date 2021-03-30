function genreTitle() {
 
    //value is taken from genre drop down menu
      let genre = books.value;
    
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    for(let i=0; i<12; i++){
    console.log(i)
    fetch(`https://openlibrary.org/subjects/${genre}.json?`, requestOptions)
      .then(response => response.json())
      .then((result) => {
        console.log(`title${i}`)
        console.log(result.works[i].title)
        document.getElementById(`title${i}`).innerHTML = result.works[i].title;
        var isbn = result.works[i].cover_id
        document.getElementById(`book${i}`).src = `https://covers.openlibrary.org/b/id/${isbn}-L.jpg`;
        var works = result.works[i].key;
        return fetch(`https://openlibrary.org${works}.json`, requestOptions)
      })
    
      .catch(error => console.log('error', error));
    }
    [].forEach.call(document.querySelectorAll('.row'), function (ele) {
      ele.style.visibility = 'visible';});
    }
    
