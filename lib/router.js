
FlowRouter.route('/',{
   action: function(params,queryparams){
     BlazeLayout.render( 'applicationLayout', { main: 'home' } );
   },
   name: "Main Template"
});
FlowRouter.route('/add-task',{
  action: function(params,queryparams){
    BlazeLayout.render( 'applicationLayout', { main: 'addTask' } );
  },
  name: "Add Task"
});
FlowRouter.route('/search-record',{
  action: function(params,queryparams){
    BlazeLayout.render( 'applicationLayout', { main: 'result' } );
  },
  name: "Search Result"
});
