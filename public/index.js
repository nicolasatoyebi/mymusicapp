const allMusic = document.getElementById("allMusic")



function displayMusic(){
    //const searchBar = document.getElementById("searchBar").value


    let url = 'https://musica-api.up.railway.app/playlist'
    
    fetch(url)
    .then((res) => {
        return res.json()
        console.log(res);
   })
}