import $ from "jquery"

export default (function () {
    var words = ["Productive🐱‍🏍", "Easier✌", "Pre-planned🧠", "Simpler🙃"],
        i = 0;
    setInterval(function () {
        $('#words').fadeOut(function () {
            $(this).html(words[(i = (i + 1) % words.length)]).fadeIn();
        });
    }, 3000)
})();