$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();

        const novaTarefa = $('#tarefaInput').val();
        const novaTarefaLinha = $(`<li style="display:none">${novaTarefa}</li>`);

        $(novaTarefa).appendTo(novaTarefaLinha);
        $(novaTarefaLinha).appendTo('ul');
        $(novaTarefaLinha).fadeIn();
    })

    $('ul').on('click', 'li', function() {
        $(this).css("text-decoration", "line-through")
    })
})
