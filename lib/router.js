
FlowRouter.route('/',{
   action: function(params,queryparams){
     BlazeLayout.render( 'applicationLayout', { main: 'home' } );
   },
   name: "mainTemplate"
});
FlowRouter.route('/add-task',{
  action: function(params,queryparams){
    BlazeLayout.render( 'applicationLayout', { main: 'addTask' } );
  },
  name: "addTask"
});

var searchedRecord= FlowRouter.group({
  prefix: '/search-record'
});
searchedRecord.route('/',{
  action: function(params,queryparams){
    BlazeLayout.render( 'applicationLayout', { main: 'result' } );
  },
  name: "searchesult"
});
searchedRecord.route('/tabular-result',{
  action: function(params,queryparams){
    BlazeLayout.render( 'result', { resultArea: 'tabularForm' } );
  },
  name: "tabularResult"
});
searchedRecord.route('/bar-chart',{
  action: function(params,queryparams){
    BlazeLayout.render( 'result', { resultArea: 'barChart' } );
  },
  name: "visualResult"
});
FlowRouter.route('/chart',{
  action: function(params,queryparams){
    BlazeLayout.render('applicationLayout',{ main: 'barChart' })
  }
});
