
Session.setDefault("SearchByTask", null);
Session.setDefault("SearchByClass", null);
Session.setDefault("SearchByCourse", null);
Session.setDefault("SearchByHours", null);
Session.setDefault("SearchByDate", null);
Session.setDefault("SearchFrom", null);
Session.setDefault("SearchTo", null);
Session.setDefault("CheckFrom",false);
Session.setDefault("CheckTo",false);
Session.setDefault("CheckHours",false);

Template.result.onCreated(function(){
  var tmpl= this;
  tmpl.autorun(function(){
    tmpl.subscribe('taskRecord');
  })
})

Template.result.onDestroyed(function(){
  Session.set("SearchByTask", null);
  Session.set("SearchByClass", null);
  Session.set("SearchByCourse", null);
  Session.set("SearchByHours", null);
  Session.set("SearchByDate", null);
  Session.set("SearchFrom", null);
  Session.set("SearchTo", null);
  Session.set("CheckFrom",false);
  Session.set("CheckTo",false);
  Session.set("CheckHours",false);
})

Template.tabularForm.helpers({
  'getResult': function(){
      return fetchData();
  }
});
Template.barChart.helpers({
  'getResult': function(){
      var data= fetchData();
  }
});

Template.result.events({
  'focus #SearchByTask': function(){
    document.getElementById('searchFrom').checked=false;
    document.getElementById('searchTo').checked=false;
    document.getElementById('searchByDate').checked=false;
    document.getElementById('searchByHours').checked=false;
    document.getElementById('searchByClass').checked=false;
    document.getElementById('searchByCourse').checked=false;
    document.getElementById('fromOption').checked=false;
    document.getElementById('toOption').checked=false;
    document.getElementById('from-label').classList.add('hidden');
    document.getElementById('from-element').classList.add('hidden');
    document.getElementById('to-label').classList.add('hidden');
    document.getElementById('to-element').classList.add('hidden');
    document.getElementById('date-label').classList.add('hidden');
    document.getElementById('date-element').classList.add('hidden');
    document.getElementById('hours-label').classList.add('hidden');
    document.getElementById('hours-element').classList.add('hidden');
    document.getElementById('class-label').classList.add('hidden');
    document.getElementById('existing-classes-element').classList.add('hidden');
    document.getElementById('course-label').classList.add('hidden');
    document.getElementById('existing-courses-element').classList.add('hidden');
    document.getElementById('fromOption').classList.add('hidden');
    document.getElementById('toOption').classList.add('hidden');
    Session.set("SearchByTask", null);
    Session.set("SearchByClass", null);
    Session.set("SearchByCourse", null);
    Session.set("SearchByHours", null);
    Session.set("SearchByDate", null);
    Session.set("SearchFrom", null);
    Session.set("SearchTo", null);
    Session.set("CheckFrom",false);
    Session.set("CheckTo",false);
    Session.set("CheckHours",false);


  },
  'click .home': function(event){
    event.preventDefault();
    FlowRouter.go('/');
  },
  'click .taskInsetion': function(event){
    event.preventDefault();
    FlowRouter.go('/add-task');
  },
  // 'click #searchFrom': function(event, tmpl){
  //   if(document.getElementById('searchFrom').checked){
  //     document.getElementById('searchTo').checked=true;
  //     document.getElementById('to-label').classList.remove('hidden');
  //     document.getElementById('to-element').classList.remove('hidden');
  //     document.getElementById('from-label').classList.remove('hidden');
  //     document.getElementById('from-element').classList.remove('hidden');
  //   }
  //   else {
  //       document.getElementById('searchTo').checked=false;
  //     document.getElementById('from-label').classList.add('hidden');
  //     document.getElementById('from-element').classList.add('hidden');
  //     document.getElementById('to-label').classList.add('hidden');
  //     document.getElementById('to-element').classList.add('hidden');
  //     document.getElementById('from-element').value="";
  //     document.getElementById('to-element').value="";
  //     Session.set("SearchFrom", null);
  //     Session.set("SearchTo", null);
  //   }
  // },
  // 'click #searchTo': function(event, tmpl){
  //   if(document.getElementById('searchTo').checked){
  //     document.getElementById('searchFrom').checked=true;
  //     document.getElementById('to-label').classList.remove('hidden');
  //     document.getElementById('to-element').classList.remove('hidden');
  //     document.getElementById('from-label').classList.remove('hidden');
  //     document.getElementById('from-element').classList.remove('hidden');
  //   }
  //   else {
  //       document.getElementById('searchFrom').checked=false;
  //     document.getElementById('from-label').classList.add('hidden');
  //     document.getElementById('from-element').classList.add('hidden');
  //     document.getElementById('to-label').classList.add('hidden');
  //     document.getElementById('to-element').classList.add('hidden');
  //     document.getElementById('from-element').value="";
  //     document.getElementById('to-element').value="";
  //     Session.set("SearchFrom", null);
  //     Session.set("SearchTo", null);
  //   }
  // },
  'click #searchFrom': function(event, tmpl){
    if(document.getElementById('searchFrom').checked){
      document.getElementById('from-label').classList.remove('hidden');
      document.getElementById('from-element').classList.remove('hidden');
      document.getElementById('fromOption').classList.remove('hidden');
      if (document.getElementById('searchTo').checked) {
        document.getElementById('toOption').classList.add('hidden');
      }
      if (document.getElementById('searchByHours').checked) {
        document.getElementById('hoursOption').classList.add('hidden');
      }
    }
    else {
      document.getElementById('fromOption').checked=false;
      document.getElementById('from-element').value="";
      Session.set("SearchFrom", null);
      document.getElementById('from-label').classList.add('hidden');
      document.getElementById('from-element').classList.add('hidden');
      document.getElementById('fromOption').classList.add('hidden');
      if (document.getElementById('searchTo').checked) {
        if(!((document.getElementById('searchByHours').checked) || (document.getElementById('searchByDate').checked)
         || (document.getElementById('searchByClass').checked)  || (document.getElementById('searchByCourse').checked))){
        document.getElementById('toOption').classList.remove('hidden');
        }
      }
      if (document.getElementById('searchByHours').checked) {
        if(!((document.getElementById('searchByDate').checked) || (document.getElementById('searchTo').checked)
         || (document.getElementById('searchByClass').checked)  || (document.getElementById('searchByCourse').checked))){
        document.getElementById('hoursOption').classList.remove('hidden');
        }
      }
    }

    if((document.getElementById('searchByHours').checked) || (document.getElementById('searchTo').checked)
    || (document.getElementById('searchByDate').checked) || (document.getElementById('searchByClass').checked)
    || (document.getElementById('searchByCourse').checked)){
      document.getElementById('fromOption').checked=false;
      document.getElementById('fromOption').classList.add('hidden');
    }
  },
  'click #searchTo': function(event, tmpl){

    if(document.getElementById('searchTo').checked){
      document.getElementById('to-label').classList.remove('hidden');
      document.getElementById('to-element').classList.remove('hidden');
      document.getElementById('toOption').classList.remove('hidden');
      if (document.getElementById('searchFrom').checked) {
        document.getElementById('fromOption').classList.add('hidden');
      }
      if (document.getElementById('searchByHours').checked) {
        document.getElementById('hoursOption').classList.add('hidden');
      }
    }
    else {
      document.getElementById('to-label').classList.add('hidden');
      document.getElementById('to-element').classList.add('hidden');
      document.getElementById('fromOption').checked=false;
      document.getElementById('toOption').classList.add('hidden');
      document.getElementById('toOption').checked=false;
      document.getElementById('to-element').value="";
      Session.set("SearchTo", null);
      if (document.getElementById('searchFrom').checked) {
        if(!((document.getElementById('searchByHours').checked) || (document.getElementById('searchByDate').checked)
         || (document.getElementById('searchByClass').checked)  || (document.getElementById('searchByCourse').checked))){
         document.getElementById('fromOption').classList.remove('hidden');
       }
      }
      if (document.getElementById('searchByHours').checked) {
        if(!((document.getElementById('searchFrom').checked) || (document.getElementById('searchByDate').checked)
         || (document.getElementById('searchByClass').checked)  || (document.getElementById('searchByCourse').checked))){
        document.getElementById('hoursOption').classList.remove('hidden');
        }
      }
    }
    // if((document.getElementById('searchTo').checked) && (document.getElementById('searchFrom').checked)){
    //   document.getElementById('fromOption').checked=false;
    //   document.getElementById('toOption').checked=false;
    //   document.getElementById('fromOption').classList.add('hidden');
    //   document.getElementById('toOption').classList.add('hidden');
    // }
    // else if (document.getElementById('searchFrom').checked) {
    //   document.getElementById('fromOption').classList.remove('hidden');
    // }
    if((document.getElementById('searchByHours').checked) || (document.getElementById('searchFrom').checked)
    || (document.getElementById('searchByDate').checked) || (document.getElementById('searchByClass').checked)
    || (document.getElementById('searchByCourse').checked)){
      document.getElementById('toOption').checked=false;
      document.getElementById('toOption').classList.add('hidden');
    }
    // else {
    //   document.getElementById('fromOption').classList.remove('hidden');
    // }
  },
  'click #searchByDate': function(event, tmpl){
    if(document.getElementById('searchByDate').checked){
      document.getElementById('date-label').classList.remove('hidden');
      document.getElementById('date-element').classList.remove('hidden');
      if (document.getElementById('searchFrom').checked) {
         document.getElementById('fromOption').classList.add('hidden');
      }
      if (document.getElementById('searchTo').checked) {
        document.getElementById('toOption').classList.add('hidden');
      }
      if (document.getElementById('searchByHours').checked) {
        document.getElementById('hoursOption').classList.add('hidden');
      }
    }
    else {
      document.getElementById('date-label').classList.add('hidden');
      document.getElementById('date-element').classList.add('hidden');
      document.getElementById('date-element').value="";
      Session.set("SearchByDate", null);
      if (document.getElementById('searchFrom').checked) {
        if(!((document.getElementById('searchByHours').checked) || (document.getElementById('searchTo').checked)
         || (document.getElementById('searchByClass').checked)  || (document.getElementById('searchByCourse').checked))){
           document.getElementById('fromOption').classList.remove('hidden');
       }
      }
      if (document.getElementById('searchTo').checked) {
        if(!((document.getElementById('searchByHours').checked) || (document.getElementById('searchFrom').checked)
         || (document.getElementById('searchByClass').checked)  || (document.getElementById('searchByCourse').checked))){
           document.getElementById('toOption').classList.remove('hidden');
         }
      }
      if (document.getElementById('searchByHours').checked) {
        if(!((document.getElementById('searchFrom').checked) || (document.getElementById('searchTo').checked)
         || (document.getElementById('searchByClass').checked)  || (document.getElementById('searchByCourse').checked))){
        document.getElementById('hoursOption').classList.remove('hidden');
        }
      }
    }
  },
  'click #searchByHours': function(event, tmpl){
    if(document.getElementById('searchByHours').checked){
      document.getElementById('hours-label').classList.remove('hidden');
      document.getElementById('hours-element').classList.remove('hidden');
      document.getElementById('hoursOption').classList.remove('hidden');
      if (document.getElementById('searchFrom').checked) {
           document.getElementById('fromOption').classList.add('hidden');
      }
      if (document.getElementById('searchTo').checked) {
           document.getElementById('toOption').classList.add('hidden');
         }
    }
    else {
      document.getElementById('hours-label').classList.add('hidden');
      document.getElementById('hours-element').classList.add('hidden');
      document.getElementById('hoursOption').checked=false;
      document.getElementById('hoursOption').classList.add('hidden');
      document.getElementById('hours-element').value="";
      Session.set("SearchByHours", null);
      if (document.getElementById('searchFrom').checked) {
          if(!((document.getElementById('searchTo').checked) || (document.getElementById('searchByDate').checked)
           || (document.getElementById('searchByClass').checked)  || (document.getElementById('searchByCourse').checked))){
             document.getElementById('fromOption').classList.remove('hidden');
           }
      }
      if (document.getElementById('searchTo').checked) {

          if(!((document.getElementById('searchFrom').checked) || (document.getElementById('searchByDate').checked)
           || (document.getElementById('searchByClass').checked)  || (document.getElementById('searchByCourse').checked))){
             document.getElementById('toOption').classList.remove('hidden');
           }
      }
    }

    if((document.getElementById('searchTo').checked) || (document.getElementById('searchFrom').checked)
    || (document.getElementById('searchByDate').checked) || (document.getElementById('searchByClass').checked)
    || (document.getElementById('searchByCourse').checked)){
      document.getElementById('hoursOption').checked=false;
      document.getElementById('hoursOption').classList.add('hidden');
    }
  },
  'click #searchByClass': function(event, tmpl){
    if(document.getElementById('searchByClass').checked){
      document.getElementById('class-label').classList.remove('hidden');
      document.getElementById('existing-classes-element').classList.remove('hidden');
      if (document.getElementById('searchFrom').checked) {
        document.getElementById('fromOption').classList.add('hidden');
      }
      if (document.getElementById('searchTo').checked) {
             document.getElementById('toOption').classList.add('hidden');
      }
      if (document.getElementById('searchByHours').checked) {
        document.getElementById('hoursOption').classList.add('hidden');
      }
    }
    else {
      document.getElementById('class-label').classList.add('hidden');
      document.getElementById('existing-classes-element').classList.add('hidden');
      document.getElementById('existing-classes-element').value="";
      Session.set("SearchByClass", null);
      if (document.getElementById('searchFrom').checked) {
        if(!((document.getElementById('searchTo').checked) || (document.getElementById('searchByDate').checked)
         || (document.getElementById('searchByHours').checked)  || (document.getElementById('searchByCourse').checked))){
           document.getElementById('fromOption').classList.remove('hidden');
         }
      }
      if (document.getElementById('searchTo').checked) {
        if(!((document.getElementById('searchFrom').checked) || (document.getElementById('searchByDate').checked)
         || (document.getElementById('searchByHours').checked)  || (document.getElementById('searchByCourse').checked))){
           document.getElementById('toOption').classList.remove('hidden');
         }
      }
      if (document.getElementById('searchByHours').checked) {
        if(!((document.getElementById('searchFrom').checked) || (document.getElementById('searchTo').checked)
         || (document.getElementById('searchByDate').checked)  || (document.getElementById('searchByCourse').checked))){
        document.getElementById('hoursOption').classList.remove('hidden');
        }
      }
    }
  },
  'click #searchByCourse': function(event, tmpl){
    if(document.getElementById('searchByCourse').checked){
      document.getElementById('course-label').classList.remove('hidden');
      document.getElementById('existing-courses-element').classList.remove('hidden');
      if (document.getElementById('searchFrom').checked) {
           document.getElementById('fromOption').classList.add('hidden');
      }
      if (document.getElementById('searchTo').checked) {
           document.getElementById('toOption').classList.add('hidden');
      }
      if (document.getElementById('searchByHours').checked) {
        document.getElementById('hoursOption').classList.add('hidden');
      }
    }
    else {
      document.getElementById('course-label').classList.add('hidden');
      document.getElementById('existing-courses-element').classList.add('hidden');
      document.getElementById('existing-courses-element').value="";
      Session.set("SearchByCourse", null);
      if (document.getElementById('searchFrom').checked) {
          if(!((document.getElementById('searchTo').checked) || (document.getElementById('searchByDate').checked)
           || (document.getElementById('searchByHours').checked)  || (document.getElementById('searchByClass').checked))){
             document.getElementById('fromOption').classList.remove('hidden');
        }
      }
      if (document.getElementById('searchTo').checked) {
        if(!((document.getElementById('searchFrom').checked) || (document.getElementById('searchByDate').checked)
          || (document.getElementById('searchByHours').checked)  || (document.getElementById('searchByClass').checked))){
             document.getElementById('toOption').classList.remove('hidden');
           }
      }
      if (document.getElementById('searchByHours').checked) {
        if(!((document.getElementById('searchFrom').checked) || (document.getElementById('searchTo').checked)
         || (document.getElementById('searchByClass').checked)  || (document.getElementById('searchByDate').checked))){
        document.getElementById('hoursOption').classList.remove('hidden');
        }
      }
    }
  },
  'click #fromOption, click #checkFrom':function(event, tmpl){
    if(document.getElementById('checkFrom').checked){
      Session.set("CheckFrom",true);
    }
    else {
      Session.set("CheckFrom",false);
    }
  },
  'click #toOption, click #checkTo':function(event, tmpl){
    if(document.getElementById('checkTo').checked){
        Session.set("CheckTo",true);
    }
    else {
        Session.set("CheckTo",false);
    }
  },
  'click #hoursOption, click #checkHours':function(event, tmpl){
    if(document.getElementById('checkHours').checked){
        Session.set("CheckHours",true);
    }
    else {
        Session.set("CheckHours",false);
    }
  },
  'input .SearchByTask': function(event, tmpl){
    event.preventDefault();
    console.log("task");
    var SearchByTask=document.getElementById('SearchByTask').value;
    console.log(SearchByTask);
    Session.set("SearchByTask", SearchByTask);
  },
  'change .existing-classes-element': function(event, tmpl){
    event.preventDefault();
    console.log("class");
    var searchByClass=document.getElementById('existing-classes-element').value;
    console.log(searchByClass);
    Session.set("SearchByClass", searchByClass);
  },
  'change .existing-courses-element': function(event, tmpl){
    event.preventDefault();
    console.log("course");
    var SearchByCourse=document.getElementById('existing-courses-element').value;
    console.log(SearchByCourse);
    Session.set("SearchByCourse", SearchByCourse);
  },
  'input .from-element':function(event, tmpl){
    event.preventDefault();
    console.log("from");
    var searchFrom=document.getElementById('from-element').value;
    console.log(searchFrom,"from");
    Session.set("SearchFrom", searchFrom);
  },
  'input .to-element':function(event, tmpl){
    event.preventDefault();
    console.log("to");
    var searchTo=document.getElementById('to-element').value;
    console.log(searchTo,"too");
    Session.set("SearchTo", searchTo);
  },
  'input .date-element':function(event, tmpl){
    event.preventDefault();
    console.log("date");
    var searchByDate=document.getElementById('date-element').value;
    console.log(searchByDate,"date");
    Session.set("SearchByDate", searchByDate);
  },
  'input .hours-element': function(event, tmpl){
    event.preventDefault();
    var searchByHours= document.getElementById('hours-element').value;
    Session.set("SearchByHours", searchByHours);
  },
  'click .visualChart': function(event,tmpl){
    event.preventDefault();
    FlowRouter.go('/search-record/bar-chart');
  },
  'click .tabular-data': function(event,tmpl){
    event.preventDefault();
    FlowRouter.go('/search-record//tabular-result');

  }
});
function fetchData(){
  if(Session.get("SearchByTask")){
    console.log("task part");
    var SearchByTask=Session.get("SearchByTask");
    console.log(SearchByTask);
    var pattern= new RegExp("^"+SearchByTask);
    return taskDetail.find({taskName: pattern}).fetch();
  }

  else if ((Session.get("SearchCourse")) && (Session.get("SearchByDate"))) {
    var searchCourse= Session.get("SearchCourse");
    var searchByDate= Session.get("SearchByDate");
    return taskDetail.find({course: searchCourse, date : new Date(searchByDate)}).fetch();
  }
  else if ((Session.get("SearchFrom")) && (Session.get("SearchTo"))) {
    var searchFrom= Session.get("SearchFrom");
    var searchTo= Session.get("SearchTo");
    console.log("searchby time");
    return taskDetail.find({from: {$gte: searchFrom},to:{$lte: searchTo}}).fetch();
  }
  else if ((Session.get("SearchFrom")) && (Session.get("SearchByDate"))  ) {
    var searchFrom= Session.get("SearchFrom");
    var searchByDate= Session.get("SearchByDate");
    var searchArr= searchFrom.split(":");
    searchArr[0] =Number(searchArr[0]) + 1;
    var range= searchArr[0]+ ":" + "00";
    return taskDetail.find({from :{$gte: searchFrom,$lte: range}, date : new Date(searchByDate)}).fetch();
  }
  else if ((Session.get("SearchFrom")) && (Session.get("SearchByCourse")) ) {
    var searchFrom= Session.get("SearchFrom");
    var SearchByCourse= Session.get("SearchByCourse");
    var searchArr= searchFrom.split(":");
    searchArr[0] =Number(searchArr[0]) + 1;
    var range= searchArr[0]+ ":" + "00";
    return taskDetail.find({from :{$gte: searchFrom,$lte: range}, course: SearchByCourse}).fetch();
  }
  else if ((Session.get("SearchFrom")) && (Session.get("SearchByClass")) ) {
    var searchFrom= Session.get("SearchFrom");
    var searchByClass= Session.get("SearchByClass");
    var searchArr= searchFrom.split(":");
    searchArr[0] =Number(searchArr[0]) + 1;
    var range= searchArr[0]+ ":" + "00";
    return taskDetail.find({from :{$gte: searchFrom,$lte: range}, classes: searchByClass}).fetch();
  }
  else if ((Session.get("SearchFrom")) && (Session.get("SearchByHours")) ) {
    var searchFrom= Session.get("SearchFrom");
    var searchByHours= Session.get("SearchByHours");
    var searchArr= searchFrom.split(":");
    searchArr[0] =Number(searchArr[0]) + 1;
    var range= searchArr[0]+ ":" + "00";
    var searchArr1= searchByHours.split(":");
    searchArr1[0] =Number(searchArr1[0]) + 1;
    var range1= searchArr[0]+ ":" + "00";
    return taskDetail.find({from :{$gte: searchFrom,$lte: range}, hours :{$gte: searchByHours,$lte: range1}}).fetch();
  }
  else if ((Session.get("SearchTo")) && (Session.get("SearchByDate"))) {
    var searchTo= Session.get("SearchTo");
    var searchByDate= Session.get("SearchByDate");
    var searchArr= searchTo.split(":");
    searchArr[0] =Number(searchArr[0]) + 1;
    var range= searchArr[0]+ ":" + "00";
    return taskDetail.find({to :{$gte: searchTo,$lte: range}, date : new Date(searchByDate)}).fetch();
  }
  else if ((Session.get("SearchTo")) && (Session.get("SearchByCourse")) ) {
    var searchTo= Session.get("SearchTo");
    var SearchByCourse= Session.get("SearchByCourse");
    var searchArr= searchTo.split(":");
    searchArr[0] =Number(searchArr[0]) + 1;
    var range= searchArr[0]+ ":" + "00";
    return taskDetail.find({to :{$gte: searchTo,$lte: range}, course: SearchByCourse}).fetch();
  }
  else if ((Session.get("SearchTo")) && (Session.get("SearchByClass")) ) {
    var searchTo= Session.get("SearchTo");
    var searchByClass= Session.get("SearchByClass");
    var searchArr= searchTo.split(":");
    searchArr[0] =Number(searchArr[0]) + 1;
    var range= searchArr[0]+ ":" + "00";
    return taskDetail.find({to :{$gte: searchTo,$lte: range}, classes: searchByClass}).fetch();
  }
  else if ((Session.get("SearchTo")) && (Session.get("SearchByHours")) ) {
    var searchTo= Session.get("SearchTo");
    var searchByHours= Session.get("SearchByHours");
    var searchArr= searchTo.split(":");
    searchArr[0] =Number(searchArr[0]) + 1;
    var range= searchArr[0]+ ":" + "00";
    var searchArr1= searchByHours.split(":");
    searchArr1[0] =Number(searchArr1[0]) + 1;
    var range1= searchArr[0]+ ":" + "00";
    return taskDetail.find({to :{$gte: searchTo,$lte: range}, hours :{$gte: searchByHours,$lte: range1}}).fetch();
  }
  else if ((Session.get("SearchByHours")) && (Session.get("SearchByDate"))) {
    var searchByHours= Session.get("SearchHours");
    var searchByDate= Session.get("SearchByDate");
    var searchArr1= searchByHours.split(":");
    searchArr1[0] =Number(searchArr1[0]) + 1;
    var range1= searchArr[0]+ ":" + "00";
    return taskDetail.find({hours: searchHours, date : new Date(searchByDate)}).fetch();
  }
  else if ((Session.get("SearchClass")) && (Session.get("SearchByDate"))) {
    var searchClass= Session.get("SearchClass");
    var searchByDate= Session.get("SearchByDate");
    return taskDetail.find({classes: searchClass, date : new Date(searchByDate)}).fetch();
  }
  else if ((Session.get("SearchCourse")) && (Session.get("SearchByDate"))) {
    var searchCourse= Session.get("SearchCourse");
    var searchByDate= Session.get("SearchByDate");
    return taskDetail.find({course: searchCourse, date : new Date(searchByDate)}).fetch();
  }
  else if ((Session.get("SearchClass")) && (Session.get("SearchByHours")) ) {
    var searchClass= Session.get("SearchClass");
    var searchByHours= Session.get("SearchByHours");
    var searchArr1= searchByHours.split(":");
    searchArr1[0] =Number(searchArr1[0]) + 1;
    var range1= searchArr[0]+ ":" + "00";
    return taskDetail.find({classes: searchClass, hours :{$gte: searchByHours,$lte: range1}}).fetch();
  }
  else if ((Session.get("SearchCourse")) && (Session.get("SearchByHours")) ) {
    var searchCourse= Session.get("SearchCourse");
    var searchByHours= Session.get("SearchByHours");
    var searchArr1= searchByHours.split(":");
    searchArr1[0] =Number(searchArr1[0]) + 1;
    var range1= searchArr[0]+ ":" + "00";
    return taskDetail.find({course: searchCourse, hours :{$gte: searchByHours,$lte: range1}}).fetch();
  }
  else if ((Session.get("SearchByCourse")) && (Session.get("SearchByClass"))) {
    var SearchByCourse= Session.get("SearchByCourse");
    var searchByClass= Session.get("SearchByClass");
    console.log("class and course part");

    return taskDetail.find({classes: searchByClass,course: SearchByCourse}).fetch();
  }
  else if (Session.get("SearchFrom")){
    var searchFrom= Session.get("SearchFrom");
    console.log(searchFrom,"from");
    if( Session.get("CheckFrom")){
      var searchArr= searchFrom.split(":");
      searchArr[0] =Number(searchArr[0]) + 1;
      var range= searchArr[0]+ ":" + "00";
      console.log(range,"range");
      return taskDetail.find({from :{$gte: searchFrom,$lte: range}}).fetch();
    }
    else {
      return taskDetail.find({from : searchFrom}).fetch();
    }
  }
  else if (Session.get("SearchTo")){
    var searchTo= Session.get("SearchTo");
    console.log(searchTo);
    if( Session.get("CheckTo")){
      var searchArr= searchTo.split(":");
      searchArr[0] =Number(searchArr[0]) + 1;
      var range= searchArr[0]+ ":" + "00";
      return taskDetail.find({to :{$gte: searchTo,$lte: range}}).fetch();
    }
    else {
      return taskDetail.find({to : searchTo}).fetch();
    }
  }
  else if (Session.get("SearchByDate")) {
    var searchByDate= Session.get("SearchByDate");
    console.log("search by date");
    return taskDetail.find({date : new Date(searchByDate)}).fetch();
  }
  else if (Session.get("SearchByHours")) {
    var searchByHours= Session.get("SearchByHours");
    console.log(searchByHours);
    if( Session.get("CheckHours")){
      var searchArr= searchByHours.split(":");
      searchArr[0] =Number(searchArr[0]) + 1;
      var range= searchArr[0]+ ":" + "00";
      return taskDetail.find({hours :{$gte: searchByHours,$lte: range}}).fetch();
    }
    else {
      return taskDetail.find({hours: searchByHours}).fetch()
    }
  }
  else if(Session.get("SearchByCourse")){
    var SearchByCourse= Session.get("SearchByCourse");
    console.log("course part");
    return taskDetail.find({course: SearchByCourse}).fetch();
  }
  else if(Session.get("SearchByClass")){
    var searchByClass= Session.get("SearchByClass");
    console.log("class part");
    return taskDetail.find({classes: searchByClass}).fetch();
  }
  else{
    console.log("else part");
    return taskDetail.find({});
  }
}
