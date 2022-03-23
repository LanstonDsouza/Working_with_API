todos.forEach((todo) => {
    // add userId
    const tr_userId = document.createElement(tr); //creating the tr element
    const td_userId = tr_userId.appendChild(document.createElement(td)); // creating the child of tr
    td_userId.innerText = todo.userId;
    todoListElement.appendChild(tr_userId);
   console.log("added userId"); 
    // add id
    const tr_id = document.createElement(tr);
    const td_Id = tr_id.appendChild(document.createElement(td));
    td_Id.innerText = todo.id;
    todoListElement.appendChild(tr_id)
    //add title
    const tr_title = document.createElement(tr);
    const td_title = tr_title.appendChild(document.createElement(td));
    td_title.innerText = todo.title;
    todoListElement.appendChild(tr_title);
   // add completed status
   const tr_complete = document.createElement(tr);
   const td_complete = tr_complete.appendChild(document.createElement(td));
   td_complete.innerText = todo.complete;
   todoListElement.appendChild(tr_complete);
})