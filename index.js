// var userInput;

// function: search()
// if input="red" {
//   return class="red"
// }
function searchFunction() {
    var input, filter, flowers, a, i;
    input = document.getElementByClass('search-bar');
    filter = input.value.toUpperCase();
    .flowers = document.getElementById('wrapper');
    li = flowers.getElementsByTagName('li');

    for(i=0 ; i< li.length; i++){
        a = li[i].getElementsByClassName('a')[0];
        if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "";
        }

        else{
            li[i].style.display = 'none';
        }
    }
}
