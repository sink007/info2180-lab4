document.addEventListener('DOMContentLoaded', function() {
    const search= document.getElementById("search");
    search.addEventListener("click", function(){
        fetch('http://localhost/info2180-lab4/superheroes.php')
        .then(response => response.text())
        .then(data => {
            alert(data);
        })
        .catch(error => {
            console.log(error);
        });
    })

})