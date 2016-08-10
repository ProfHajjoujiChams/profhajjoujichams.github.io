$(document).ready(function() {

    $('#example').dataTable();

    $('._dp').datepicker({
        startView: 1,
        language: "fr"
    });

    window.ParsleyValidator.setLocale('fr');
    $("#fourm").parsley({
        successClass: 'has-success',
        errorClass: 'has-error',
        errors: {
            classHandler: function(el) {
                return $(el);
            }
        }
    });

    $('._overlay').click(function() {
        $(this).fadeOut();
    })

    $("._chosen").chosen({
        no_results_text: "Aucun résultat",
        disable_search_threshold: 6,
        width: '100%',
        allow_single_deselect: true
    });

var count = 0;


    $(".diplomes").addClass("collapse");


    $("#addDiplome").click(function(event) {
        count++;
        console.log(count);
        console.log("#diplome"+count);
        $("#diplome"+count).removeClass('collapse');
        if(count == 5) $(this).addClass("collapse");
    });


    $("#startAdding").click(function(event) {
        $("#events-app-row").addClass("collapse");
        $("#main-app-row").removeClass("collapse");
        $("#eventTitle").html($("#inputEvent option:selected").text());
    });

    $("#goBack").click(function(event) {
        return;
        $("#events-app-row").removeClass("collapse");
        $("#main-app-row").addClass("collapse");
    });

    $(".removeDiplome").click(function(event) {
        $(this).parents(".form-group").addClass("collapse");
        count--;
        $("#addDiplome.collapse").removeClass("collapse");
    });
/*
    $("#saveButton").click(function(event) {

        if((!$("#fourm").parsley().isValid('fullname', true)))
            if (!$("#fourm").parsley().isValid('tel1', true) || !$("#fourm").parsley().isValid('tel2', true) || !$("#fourm").parsley().isValid('tel3', true))
                return false;
        $("._overlay").fadeIn();
    })*/

    $('#fourm').parsley().subscribe('parsley:form:validate', function (formInstance) {

        // if one of these blocks is not failing do not prevent submission
        // we use here group validation with option force (validate even non required fields)
        if (formInstance.isValid('tel1', true) || formInstance.isValid('tel2', true) || formInstance.isValid('tel3', true))
            return;

        // else stop form submission
        formInstance.submitEvent.preventDefault();

        // and display a gentle message
        $('.invalid-form-error-message')
            .html("Vous devez saisir au moins un numéro de téléphone !")
            .addClass("filled");
        return;

        $('.invalid-form-error-message').html('');
    });

})