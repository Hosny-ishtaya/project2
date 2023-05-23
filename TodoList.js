
const oper = require('./Operations.js');
Task={
  tasks:[]
  }


  oper.operations();
  var choice;
  process.stdin.on("data",function(data){
   choice=data.toString().trim();
   if(choice!=null){
    switch(choice){

      case "1": {
        taskss1={
          id:1,
          description:"aaaaaaaaaa",
          dueDate:"11-5",
          priorityLevel:2,
          complet:false
        }
        taskss2={
          id:3,
          description:"bbbbbbbb",
          dueDate:"12-5",
          priorityLevel:3,
          complet:true
        }
        taskss3={
          id:3,
          description:"cccccccc",
          dueDate:"13-5",
          priorityLevel:1,
          complet:false
        }
        oper.additem(taskss1)
        oper.additem(taskss2)
        oper.additem(taskss3)

      break}
  
      case "2":{
        console.log("2")
        console.log(Task.tasks)
        console.log('************************')
        break;
      }
  
      case "3":{
        console.log("3")
        filtercomplet()
        console.log('************************')
        break;

  
      }
      case "4":{
        console.log("Enter id of task that want to make it complet.")
        process.stdin.on("data",function(data){
          choice=data.toString().trim();
          if(choice!=null){
            markthetask(Number(choice));
          }
        }
        )
        
        break;
      }
      case "5":{
        console.log("Enter id of task that want to delete it.")
        process.stdin.on("data",function(data){
          choice=data.toString().trim();
          if(choice!=null){
            deleteitem(Number(choice));
          }
        }
        )
        
        break;
      }
      case "6":{
  
      }
      case "7":{
        sortbypriorety();
        break;
      }
      case "8":{
        deletealltasks();
        break;
      }
      case "9":{
        process.exit();
      }
    } 
    
   }
   
     

  })









