Template.home.events({
  'click .taskInsetion': function(event){
    event.preventDefault();
    FlowRouter.go('/add-task');
  },
  'click .taskDetail': function(){
    event.preventDefault();
    FlowRouter.go('/search-record');
  }
});
