$(document).ready(function(){
$(function(){
  function showSection(btnSelector, sectionSelector){
    // reset headings and sections
    $(".mvv h6").addClass("hclr").removeClass("clr");
    $("#mission, #vision, #value").addClass("d-none");
    // activate clicked
    $(btnSelector + " h6").addClass("clr").removeClass("hclr");
    $(sectionSelector).removeClass("d-none");
  }

  $("#m-btn").on("click", function(e){ e.preventDefault(); showSection("#m-btn", "#mission"); });
  $("#vis-btn").on("click", function(e){ e.preventDefault(); showSection("#vis-btn", "#vision"); });
  $("#val-btn").on("click", function(e){ e.preventDefault(); showSection("#val-btn", "#value"); });
});

})

  setTimeout(function() {
            const loadingScreen = document.getElementById('loading-screen');
            loadingScreen.style.opacity = '0';
            setTimeout(function() {
                loadingScreen.style.display = 'none';
            }, 800);
        }, 3000);