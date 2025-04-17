import alertTpl from '../tpl/alert.txt';
import simpleTpl from '../tpl/simple.html';

export const Say = (str) => {
    return "*** " + str;
}

export const JqueryPlay = function () {
    window.onload = function () {
        console.log(Say("window.onload"));
    }

    // document.ready runs before window.onload event
    $(document).ready(function () {
        console.log(Say("document.ready"));

        let a = _.template(alertTpl);
        let s = _.template(simpleTpl);
        let data = {name: "Ehsan"};

        // Attach event handlers
        $('#click-me-button').click(function (event) {
            alert(a(data) + "Thanks for clicking...");

            $('#message').html(s(data));
        });
    });
}