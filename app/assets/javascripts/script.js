$(function(){
  console.log("jQuery Version: " + $().jquery);

  function pickertoggle(e){
  if(e.type === "click" || e.keyCode == 80){
    $("#support").slideToggle();
  }
  }

  $(document).on("keydown", pickertoggle);
  $("header").on("click", pickertoggle);

  var selectedTarget = $("#support").find(".pickto").find("li").first();
  selectedTarget.addClass("selected");

  $("#support").find(".pickto").find("li").on("click", function(){
  var t = $(this);
  t.parent().find("li").removeClass("selected");
  t.addClass("selected");
  selectedTarget=t;
  });

  $("#support").find(".color-sample").find("li").on("click", function(){
    var t = $(this);
    var targets = selectedTarget.data("target").split("_");
    var type = selectedTarget.data("type");
    var color = t.text();

    // 2013/01/13 Add
    var column = selectedTarget.data("column");
    $("#color_" + column).val(color)

    var len = targets.length;
    for(var i = 0; i < len; i++){
      if(targets[i] === "h1"){
        $(targets[i]).not("#logo").css(type, color);
      }else{
        $(targets[i]).css(type, color);
      }
    }
  });

  var support = $("#support");
  support.prependTo("body");
  console.log(support);

  support.delay(500).slideDown();

});
