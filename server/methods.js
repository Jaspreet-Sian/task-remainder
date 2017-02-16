Meteor.methods({
  'insertTask': function(obj){
    // console.log("chlda");
    if(taskDetail.insert({
      taskName: obj.taskName,
      from: obj.from,
      to: obj.to,
      hours: obj.hours,
      date: obj.date,
      price: obj.price,
      classes: obj.classes,
      course: obj.course,
      task: obj.task
    })){
      console.log("inserted");
    }
  }
});
