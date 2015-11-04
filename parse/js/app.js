/*
    script for the index.html file
*/

<<<<<<< HEAD
Parse.initialize("qm1KczXR4qC7IlX14bllMXCekkAut09KfvrfaCZH", "XgXrhuV0fNzeVadjDkwNZW5XzJoCV9aKxxEpwJ81");

$(function() {
    'use strict';

    // new Task class for Parse
    var Task = Parse.Object.extend('Tasks');
    // new query that will return all tasks ordered by createAt
    var tasksQuery = new Parse.Query(Task);
    tasksQuery.ascending('createdAt');
    tasksQuery.notEqualTo('done', true);

    // reference to the task list element
    var tasksList = $('#tasks-list');

    //reference to the error message alert
    var errorMessage = $('#error-message');

    //current set of tasks
    var tasks = [];

    //reference to our rating element
    var ratingElem = $('#rating');
=======

//OK to call this before the DOM is ready
Parse.initialize("u8fq2u4IqxKXBa9PuPjHB40HA39gqnxMq8lKJYkG", "R9zpakOjl4dXU3quSQ9tvTwwe0uQA2IJj3GdNKTt");

//when the document is ready...
$(function() {
    'use strict';

    //define a new Task object class with Parse
    var Task = Parse.Object.extend('Task');

    //define a query for querying Task objects
    var tasksQuery = new Parse.Query(Task);
    tasksQuery.ascending('createdAt');

    //varible to hold the current list of tasks
    var tasks = [];

    //reference to our error message alert
    var errorMessage = $('#error-message');

    //reference to the tasks list element
    var tasksList = $('#tasks-list');
>>>>>>> 0e1f3c03a332ce37c172bdee43ad742a11ba4994

    function displayError(err) {
        errorMessage.text(err.message);
        errorMessage.fadeIn();
    }

    function clearError() {
        errorMessage.hide();
    }

    function showSpinner() {
        $('.fa-spin').show();
    }

    function hideSpinner() {
        $('.fa-spin').hide();
    }

<<<<<<< HEAD
    function fetchTasks() {
        showSpinner();
        tasksQuery.find()
            .then(onData, displayError)
            .always(hideSpinner);
    }

=======
>>>>>>> 0e1f3c03a332ce37c172bdee43ad742a11ba4994
    function onData(results) {
        tasks = results;
        renderTasks();
    }

    function renderTasks() {
        tasksList.empty();
        tasks.forEach(function(task) {
<<<<<<< HEAD
           var li = $(document.createElement('li'))
               .text(task.get('title') + ': ' + task.get('rating'))
               .addClass(task.get('done') ? 'completed-task' : '')
               .appendTo(tasksList)
               .click(function() {
                   task.set('done', !task.get('done'));
                   task.save().then(renderTasks, displayError);
               });

            $(document.createElement('span'))
                .raty({
                    readOnly: true,
                    score: (task.get('rating') || 1),
                    hints: ['crap', 'awful', 'okay', 'nice', 'awesome']})
                .appendTo(li);
        });
    }

    function showMessage(message) {
        message = message || 'Hello';
        alert(message);
    }

    //when the user subits the new task form...
=======
            $(document.createElement('li'))
                .text(task.get('title'))
                .appendTo(tasksList);
        });
    }

    function fetchTasks() {
        showSpinner();
        tasksQuery.find()
            .then(onData, displayError)
            .always(hideSpinner);
    }

>>>>>>> 0e1f3c03a332ce37c172bdee43ad742a11ba4994
    $('#new-task-form').submit(function(evt) {
        //tell the browser not to do its default behavior
        evt.preventDefault();

<<<<<<< HEAD
        //find the element in this form
        //with a name attribute set to "title"
        var titleInput = $(this).find('[name="title"]');

=======
        //find the input element in this form 
        //with a name attribute set to "title"
        var titleInput = $(this).find('[name="title"]');
        
>>>>>>> 0e1f3c03a332ce37c172bdee43ad742a11ba4994
        //get the current value
        var title = titleInput.val();

        //create a new Task and set the title
        var task = new Task();
        task.set('title', title);
<<<<<<< HEAD
        task.set('rating', ratingElem.raty('score'));
=======
>>>>>>> 0e1f3c03a332ce37c172bdee43ad742a11ba4994

        //save the new task to your Parse database
        //if save is successful, fetch the tasks again
        //otherwise display the error
        //regardless, clear the title input
        //so the user can enter the next new task
        task.save()
            .then(fetchTasks, displayError)
<<<<<<< HEAD
            .then(function () {
                titleInput.val('');
                ratingElem.raty('set', {});
        });
        //some browsers also require that we return false to
        //prevent the default behavior
        return false;
    });

    //go and fetch tasks from the server
    fetchTasks();

    //enable the rating user interface element
    ratingElem.raty();

    //window.setInterval(fetchTasks, 3000);
});
=======
            .then(function() {
                titleInput.val('');
            });

        //some browsers also require that we return false to
        //prevent the default behavior
        return false;
    }); //on new task form submit

    //fetch the tasks to kick everything off...
    fetchTasks();

    //refetch the tasks every so often
    //to get new tasks created by others
    window.setInterval(fetchTasks, 10000);
}); //on doc ready
>>>>>>> 0e1f3c03a332ce37c172bdee43ad742a11ba4994
