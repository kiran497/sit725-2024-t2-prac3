const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!")
}
$(document).ready(function () {
    // $('.materialboxed').materialbox();
    $('#clickMeButton').click(() => {
        clickMe();
        $.ajax({url: "/addTwoNumber?n1=4&n2=5", success: function(result){
            alert(result.data);
          }});
    })
});

$("button").click(function(){
    $.ajax({url: "/add", success: function(result){
      $("#div1").html(result);
    }});
  });