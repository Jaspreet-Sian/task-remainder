
// Template.addTask.onCreated(function(){
//     console.log("The 'addTask' template was just created.");
// });
//
Template.addTask.onRendered(function(){
    $('.addTask').validate();

 });
//
// Template.addTask.onDestroyed(function(){
//     console.log("The 'addTask' template was just destroyed.");
// });
