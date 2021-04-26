let toggleEl=document.getElementById('toggleicon')
let menuitemsul=document.getElementById('menuitemsul')
let navclicktoggle=document.getElementById('clicktoggle')
let navtoggle=document.getElementById('navtogglewrapper')

toggleEl.addEventListener('click',function () {
        menuitemsul.classList.toggle('hide')
    })

   
   


 navclicktoggle.addEventListener('click',function () {
     navtoggle.classList.toggle('show')
     let rotate=document.getElementById('clicktoggle')
     rotate.classList.toggle('rotateit')
        
 })

 if ($(window).width() <= 768){
    toggleEl.addEventListener('click',function () {
        menuitemsul.classList.toggle('show')
        
    })
}

let completed=document.getElementById('iscompletedcheckbox')

// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let todobtn = document.getElementById("addtodobtn");

// When the user clicks the button, open the modal 

 todobtn.addEventListener('click',function () {
    modal.style.display = "inline-flex";
    })


// When the user clicks anywhere outside of the modal, close it



    window.onclick = function(event) {
        if (event.target == myModal) {
          myModal.style.display = "none";
        }
      }




// api call to get todo items

let todotable=document.getElementById('todotable')





async function apitodos() {
    let  api=await fetch('./tasks.json',{
          method:'GET'
      })
      let data=await api.json()
       list_items=data
      
  
       const list_element = document.getElementById('list');
       const pagination_element = document.getElementById('pagination');
       
       let current_page = 1;
       let rows = 5;
       
       function DisplayList (items, wrapper, rows_per_page, page) {
           wrapper.innerHTML = "";
           page--;
       
           let start = rows_per_page * page;
           let end = start + rows_per_page;
           let paginatedItems = items.slice(start, end);
       
           for (let i = 0; i < paginatedItems.length; i++) {
              //  let item = paginatedItems[i];
                  wrapper.innerHTML = "";
                  paginatedItems.forEach((item) => {
                  let tr=document.createElement('tr')
                  let taskNameTd=document.createElement('td')
                  let isCompletedTd=document.createElement('td')
                  let checkbox=document.createElement('input')
                  let checkboxText=document.createElement('span')
                  let taskCreator=document.createElement('td')
                  let createDate=document.createElement('td')
                  let updateDate=document.createElement('td')
                  let actionbtns=document.createElement('td')
                  let editbtn=document.createElement('button')
                  let deletebtn=document.createElement('button')
                  // placing proper information under their  titles
                  taskNameTd.innerText=item.title
                  // check if completed
                  function iscompleted() {
                      if(item.completed===true){
                          checkbox.checked=true
          
                      }else{
                          checkbox.checked=false
                      }
                      
                  }
                  checkboxText.innerText='completed'
                  taskCreator.innerText=item.userId
                  createDate.innerText='10/11/2021'
                  updateDate.innerText='12/11/2021'
                  editbtn.innerText='Edit'
                  deletebtn.innerText='Delete'
                  deletebtn.addEventListener('click',function () {
                   tr.style.display='none'
                    
                })
                editbtn.addEventListener('click',function () {
                    let editdiv=document.createElement('div')
                    let editTaskName=document.createElement('input')
                    let editwrapper=document.getElementById('todolist-wrapper')
                    let changevalue=document.createElement('button')

                    editTaskName.classList.add('edittaskname')
                    editTaskName.placeholder='Enter new value '
                    
                    editwrapper.style.position='relative'
                    editwrapper.appendChild(editdiv)

                    editdiv.appendChild(changevalue)
                    editdiv.appendChild(editTaskName)
                    editdiv.classList.add('editdiv')
                    
                    changevalue.innerText='Enter'
                    changevalue.classList.add('changevaluebtn')
                    changevalue.addEventListener('click',function () {
                        
                        taskNameTd.innerText=editTaskName.value
                        editdiv.style.display='none'
                        
                    })
                    document.addEventListener('mouseup', function(e) {
                        if (!editdiv.contains(e.target)) {
                            editdiv.style.display='none'
                        }
                    });
                    
                })
                  // create action buttons for each todo
                  actionbtns.innerText=editbtn, deletebtn
                  // adding styles, by giving them already created classes
                  tr.classList.add('trs')
                  taskNameTd.classList.add('tds')
                  taskNameTd.classList.add('taskname')
                  isCompletedTd.classList.add('tds')
                  isCompletedTd.classList.add('iscompleted')
                  checkbox.setAttribute("type", "checkbox")
                  checkbox.classList.add('iscompletedcheckbox')
                  checkboxText.classList.add('checkboxtext')
                  checkboxText.classList.add('completedtext')
                  taskCreator.classList.add('tds')
                  createDate.classList.add('tds')
                  updateDate.classList.add('tds')
                  // button classes
                  actionbtns.classList.add('tds')
                  actionbtns.classList.add('flex')
                  actionbtns.classList.add('actionbtn')
                  actionbtns.innerHTML=''
                  editbtn.classList.add('editbtn')
                  deletebtn.classList.add('deletebtn')
                  // distributing in rows
                  wrapper.appendChild(tr)
                  tr.appendChild(taskNameTd)
                  tr.appendChild(isCompletedTd)
                  isCompletedTd.appendChild(checkbox)
                  isCompletedTd.appendChild(checkboxText)
                  tr.appendChild(taskCreator)
                  tr.appendChild( createDate)
                  tr.appendChild(updateDate)
                  tr.appendChild(actionbtns)
                  actionbtns.appendChild(editbtn)
                  actionbtns.appendChild(deletebtn)
                  iscompleted()
                  
                 
                 });
  
            
           }
       }
       
       function SetupPagination (items, wrapper, rows_per_page) {
           wrapper.innerHTML = "";
          
  
          //  previous button
           var prevbtn=document.createElement('button')
           prevbtn.innerText='<'
           prevbtn.addEventListener('click' , function(){
              $('.pagination').find('.active').prev().trigger( "click" );
        });
           pagination_element.appendChild(prevbtn)
           
           let page_count = Math.ceil(items.length / rows_per_page);
           for (let i = 1; i < page_count + 1; i++) {
               let btn = PaginationButton(i, items);
               wrapper.appendChild(btn);
           }
          
       }
       var morebtns=document.createElement('button')
       morebtns.style.fontSize='10px'
       var prevbtns=document.createElement('button')
       prevbtns.style.fontSize='10px'
       function PaginationButton (page, items) {
           let button = document.createElement('button');
           button.innerText = page;
          
           if(button.innerText>=20){
               button.style.display='none'
           }

           morebtns.addEventListener('click',function () {
            if(button.innerText>=20 && button.innerText<=40 ){
                button.style.display='block'
              
            }else  if(button.innerText<21){
                button.style.display='none'
            }
                
            })

            prevbtns.addEventListener('click',function () {

                if(button.innerText<=20 ){
                    button.style.display='block'
                  
                }else  if(button.innerText>20){
                    button.style.display='none'   
                }

                
            })
     
       
     
           if (current_page == page) button.classList.add('active')
           
       
           button.addEventListener('click', function () {
               current_page = page;
               DisplayList(items, list_element, rows, current_page);
       
               let current_btn = document.querySelector('.pagination button.active');
               current_btn.classList.remove('active');
       
               button.classList.add('active');
  
           });
           return button;
           
       }
      
       
       DisplayList(list_items, list_element, rows, current_page);
       SetupPagination(list_items, pagination_element, rows);
  
       
       morebtns.innerText='More'
       pagination_element.appendChild(morebtns)
       prevbtns.innerText='Less'
       pagination_element.appendChild(prevbtns)
      

       let nextbtn=document.createElement('button')
       nextbtn.innerText='>'
       nextbtn.addEventListener('click' , function(){
          $('.pagination').find('.active').next().trigger( "click" );
     });
    
      
  
       pagination_element.appendChild(nextbtn)
  
     
      
  }
  
  apitodos()
  
  
let saveNewTodo=document.getElementById('todosavebtn')

saveNewTodo.addEventListener('click',function () {
    
    let infoholder={
        "title": "",
        "completed": "",
        "userId": "",
        "createdate":"",
        "updatedate":"",



    }

    let title=document.getElementById('todoinput')
    let todoinputCompleted=document.getElementById('todoinputCompleted')
    let todoinputcreator=document.getElementById('todoinputcreator')
    let todoinputdate=document.getElementById('todoinputdate')
    let todoinputupdatedate=document.getElementById('todoinputupdatedate')

    infoholder.title=title.value
    infoholder.completed=todoinputCompleted.value
    infoholder.userId=todoinputcreator.value
    infoholder.createdate=todoinputdate.value
    infoholder.updatedate=todoinputupdatedate.value

    

    fetch('./tasks.json', {
    method: 'POST',
    
    body: JSON.stringify(infoholder),
    })
    .then(response => response.json())
    .then(infoholder => {
    console.log('Success:', infoholder);
    })
    .catch((error) => {
    console.error('Error:', infoholder);
    });
   
console.log(infoholder)

    let modalcontent=document.getElementById('myModal')
    modalcontent.style.display='none'
    
})

