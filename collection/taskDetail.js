taskDetail= new Mongo.Collection('taskDetail');

var Schemas={};

Schemas.taskDetail= new SimpleSchema({
  taskName: {
    type: String,
    label: "Task Name"
  },
  from: {
    type : String,
    label : "from"
  },
  to: {
    type : String,
    label : "to"
  },
  date: {
    type : Date,
    label : "from"
  },
  hours: {
    type : String,
    label : "to"
  },
  price: {
    type : Number,
    label : "Price in ($-dollars)"
  },
  classes: {
    type : String,
    label : "type of class"
  },
  course: {
    type : String,
    label : "from"
  },
  task: {
    type : String,
    label : "Task-Description"
  }
});

taskDetail.attachSchema(Schemas.taskDetail);
