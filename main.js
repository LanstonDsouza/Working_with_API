window.onload = () =>{
    document.getElementById('restApiBtn').onclick = async () =>{
        //alert('hII');
        try{
            const response1 = await fetch('https://jsonplaceholder.typicode.com/todos')
            const todos = await response1.json();
            const todoListElement = document.getElementById('todoList');
            todos.forEach((todo) => {
               
                const tr = document.createElement('tr'); //creating the tr element
                const td_userId = tr.appendChild(document.createElement('td')); // creating the child of tr
                td_userId.innerText = todo.userId;
                //todoListElement.appendChild(tr_userId);
                //add id
                //const tr_id = document.createElement('tr');
                const td_Id = tr.appendChild(document.createElement('td'));
                td_Id.innerText = todo.id;
                //todoListElement.appendChild(tr_id)
                //add title
                //const tr_title = document.createElement('tr');
                const td_title = tr.appendChild(document.createElement('td'));
                td_title.innerText = todo.title;
                //todoListElement.appendChild(tr_title);
                //add completed status
                //const tr_complete = document.createElement('tr');
                const td_complete = tr.appendChild(document.createElement('td'));
                td_complete.innerText = todo.completed;
                
                // Delete Button
                const delete_btn = tr.appendChild(document.createElement('td'));
                const delete_btn1 = delete_btn.appendChild(document.createElement('button'));
                // Add class to the delete button
                delete_btn1.className = 'btn btn-danger btn-large float-right delete';
                // Append text node
                delete_btn1.appendChild(document.createTextNode('X'));

                // Delete event
                todoListElement.addEventListener('click', removeItem);
                // Remove item
                function removeItem(e){
                    console.log(e.target.appendChild);
                    if(e.target.classList.contains('delete')){
                    if(confirm('Are You Sure?')){
                        var li = e.target.parentElement;
                        itemList.removeChild(li);
                    }
                    }
                }

                todoListElement.appendChild(tr);
            })
        }
        catch(e){
            console.error(e);
        }
      
    }
}
