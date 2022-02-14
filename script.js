// used only class selector as it is one of required constraint  provided  in the task
getdata=document.getElementsByClassName("getdata");

getdata[0].addEventListener("click", async ()=>{
    // to get the input what we have typed
let searchedtext=document.getElementsByClassName("textsearch col-sm-4")[0].value
try{ 
  // fetching the data and converting it into json
     let response= await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchedtext}`)
     let res=await response.json();
    // displaying  the output as a card
     document.getElementsByClassName("output")[0].innerHTML=`
     <div class="card mt-3">
       <div class="card-body">
         <p><b>Meaning :</b> ${res[0].meanings[0].definitions[0].definition}</p>
         <p><b>Phonetic :</b>${res[0].phonetic}</p>
         <p><b>Audio :</b></p>
         <audio controls>
        <source src="${res[0].phonetics[0].audio}" type="audio/mpeg">
        </audio>
       
         <p><b>Word Origin :</b>${res[0].origin}</p>
       </div>
     </div> `
    }  
catch(error){

// if the entered text is not found it will return ths message
document.getElementsByClassName("output")[0].innerHTML=`<p class="text-center"> <b>"Sorry pal, we couldn't find definitions for the word you were looking for."</b.</p>`
}
})