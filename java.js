
showNotes();
let addBtn=document.getElementById('addBtn');

addBtn.addEventListener("click",function(e){
    
    let addTxt=document.getElementById('addTxt');
    let notes=localStorage.getItem("notes");

    if(notes==null){
        notesObj=[];

    }
    else{

         notesObj=JSON.parse(notes);
    }

    notesObj.push(addTxt.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addTxt.value="";
    
    showNotes();




})
function showNotes(){
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];

    }
    else{

         notesObj=JSON.parse(notes);
    }
    let html="";
   
   notesObj.forEach(function(element,index) {
       
    html += `
    <div class="noteCard my-2 mx-2card" style="width: 18rem;">
                
        <div class="card-body">
             <h5 class="card-title">Note ${index+1} </h5>
           <p class="card-text">${element}</p>
             <button class="btn btn-primary" id="${index}" onclick="deletefn(this.id)" >Delete Note</button>
        </div>
  </div>
    
      `;
   });
   let notesElm=document.getElementById("notes");
   if(notesObj.length!=0){
       notesElm.innerHTML=html;
   }
   else{
       notesElm.innerHTML="nothing to show";
   }

}
function deletefn(index) {

    
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];

    }
    else{

         notesObj=JSON.parse(notes);
    }
    
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));

    showNotes();
}



let search=document.getElementById("search");

 search.addEventListener("input",function() {

    let searchVar= search.value.toLowerCase();
    let inputTxt= document.getElementsByClassName('noteCard');
    Array.from(inputTxt).forEach(function(element) {
        let text= element.getElementsByTagName("p")[0].innerText;
        console.log(text);
        console.log(searchVar);
        if(text.includes(searchVar))
        {
            element.style.display="block";
        }

        else
        {
            element.style.display="none";
        }
        
    });
        

     
 }
 );
