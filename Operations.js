
operations=()=>{
    console.log(`**********************
  Welcome to JS TODO-APP
  **********************
  1)Add a new task.
  2)List all tasks.
  3)List completed tasks.
  4)Mark the task as done.
  5)Delete a task.
  6)Sort tasks by due date.
  7)sort tasks by priority.
  8)Clear all tasks.
  9)Exit program.
  **********************
  What's your choice ?`)
  }


additem=(tasks)=>{
//   Ques=['1)Write the description of task.',
// '2)Enter the due Date.',
// '3)Enter the Priority level from 1-5']
// var ans=[];

// function ask(i){
//   console.log(`${Ques[i]} >`)
// }

// taskss1.id=Math.floor(Math.random());
//     process.stdin.on("data",function(data){
//       choice=data.toString().trim();
//       ans.push(choice);
//       if(ans.length<Ques.length){
//         ask(ans.length)
//       }else{
//         process.exit();
//       }

//     })

//     taskss1.description=ans[0];
//     taskss1.dueDate=ans[1];
//     taskss1.priorityLevel=Number(ans[2]);

    let item=Task.tasks
    item.push(tasks);
  }

  deleteitem=(id)=>{
    
    console.log("delete")
    let item=Task.tasks;
    let i=item.findIndex(item=>item.id==id)
    item.splice(i,1)  //delete item
  }

  markthetask=(id)=>{
    
    console.log("mark")
    let item=Task.tasks;
    let i=item.findIndex(item=>item.id==id)
    item[i].complet=true //delete item
  }
  
  filtercomplet=()=>{
    
    console.log("delete")
    let item=Task.tasks.filter(item=>{
      return(
        item.complet == true
      )
    });

    console.log(item)
  }

  sortbypriorety=()=>{

    console.log(Task.tasks)
    var byDate = Task.tasks.slice(0);
    byDate.sort(function(a,b) {
        return a.priorityLevel - b.priorityLevel;
    });
    console.log(`sort by priority:
    *******************`);
    console.log(byDate);
  
    }

    markalltaskdone=()=>{
      Task.tasks.forEach(item => item.complet = true);
     
    }
  
    deletealltasks=()=>{
      Task.tasks=[];
    }


    module.exports={
        deletealltasks,
        markalltaskdone,
        additem,
        sortbypriorety,
        filtercomplet,
        deleteitem,
        operations
    }