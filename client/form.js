Session.set("timeFrom", 0);
Session.set("timeTo", 0);

Template.addTask.helpers({
  'totalhours': function(){
     var from= Session.get("timeFrom");
     var to= Session.get("timeTo");
    //  if((from)||(to)){
    //    var fromArr=[0,0];
    //    var toArr=[0,0];
    //    var totalMinutes=0, totalHours=0;
    //    fromArr= from.split(":");
    //    if(to){
    //      toArr= to.split(":");
    //      totalHours += Number(toArr[0]);
    //      totalMinutes += Number(toArr[1]);
    //    }
    //    totalHours += Number(fromArr[0]);
    //    totalMinutes += Number(fromArr[1]);
     //
    //   if(totalMinutes >= 60){
    //     totalMinutes -= 60;
    //     totalHours += 1;
    //   }
    //   if(totalMinutes < 10){
    //       totalMinutes = "0" + String(totalMinutes);
    //   }
    //   if(totalHours < 10){
    //       totalHours = "0" + String(totalHours);
    //   }
      // console.log(fromArr[1],"from");
      // console.log(toArr[1],"to");
      // console.log(totalMinutes,"min");
      // console.log(totalHours,"hours");

      if((from)||(to)){
        var fromArr=[0,0];
        var toArr=[0,0];
        var totalMinutes=0, totalHours=0;
        fromArr= from.split(":");
        if(to){
          toArr= to.split(":");
          totalHours = Number(toArr[0]) - Number(fromArr[0]);
          totalMinutes = Number(toArr[1]) - Number(fromArr[1]);
        }

        if(totalMinutes < 0){
         if(totalHours != 0){
           totalMinutes += 60;
           totalHours -= 1;
        }
        else if (totalHours == 0) {
          totalMinutes = 0;
        }
       }
       if(totalMinutes < 10){
           totalMinutes = "0" + String(totalMinutes);
       }
       if(totalHours < 10){
           totalHours = "0" + String(totalHours);
       }
      var time= totalHours + ":" + totalMinutes;
      return time;
     }
     else {
       return "00:00";
     }
  },
  minTime: function(){
    return Session.get("timeFrom");
  }
});

Template.addTask.events({
  'click .home': function(event){
    event.preventDefault();
    FlowRouter.go('/');
  },
  'click .taskDetail': function(){
    event.preventDefault();
    FlowRouter.go('/search-record');
  },
  'submit form': function(event){
    event.preventDefault();
    var obj={
    taskName: document.getElementById("taskName").value,
    from: document.getElementById("from").value,
    to: document.getElementById("to").value,
    hours: document.getElementById("hours").value,
    date: document.getElementById("date").value,
    price: document.getElementById("price").value,
    classes: document.getElementById("existingClasses").value,
    course: document.getElementById("existingCourses").value,
    task: document.getElementById("task").value
  };
    console.log(obj);
    Meteor.call('insertTask',obj);
    document.getElementById("taskName").value="";
    document.getElementById("from").value="";
    document.getElementById("to").value="";
    document.getElementById("hours").value="";
    document.getElementById("date").value="";
    document.getElementById("price").value="";
    document.getElementById("existingClasses").value="";
    document.getElementById("existingCourses").value="";
    document.getElementById("task").value="";
  },
  'input .from': function(){
    var from= document.getElementById("from").value;
    Session.set("timeFrom", from);
    // console.log(Session.get("timeFrom"));
  },
  'input .to': function(){
    var to= document.getElementById("to").value;
    Session.set("timeTo", to);
    // console.log(Session.get("timeTo"));
  }//,
  // 'change .hours': function(){
  //   var hours= document.getElementById("hours").value;
  //   var timeArr= from.split(":");
  //   Session.set("totalTime", hours);
  // }
});
