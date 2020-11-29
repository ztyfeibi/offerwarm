// function checkId(sex) {
//   var sexId;
//   if (sex == 1) {
//     sexId = "male";
//   } else if (sex == 0) {
//     sexId = "female";
//   } else if (sex == 2) {
//     sexId = "secret";
//   }
//   return sexId;
// }

// function changeOne() {
//   setTimeout(
//     function change() {
//       var item = null;
//       var obj = document.getElementsByName("sex")
//       for (var i = 0; i < obj.length; i++) {
//         if (obj[i].checked) {
//           item = obj[i].value;
//         }
//       }
//       item = checkId(item);
//       $(".div-sex-option>*").css("background-color", "#fff");
//       $("#" + item).css("background-color", "#f3c776");

//     }, 0
//   );
// }

$(document).ready(function() {
  var regName = /^[\u4e00-\u9fa5]{2,4}$/;
  var reg3 = /^1[3456789]\d{9}$/;
  var reg4 = /^[1-9][0-9]{4,10}$/;
  var id;
  $("#name").focus(function() {
    id = window.setInterval(
      function() {
        name($("#name").val());
      }, 100)

  });
  $("#name").blur(function() {

    clearInterval(id);
  });

  function name(str) {
    if (!regName.test(str)) {
      $("#name-check").html("请输入真实姓名!");
    } else {
      $("#name-check").html("");
    }
  }
  $("#qq").keyup(function() {
    checkQQ(this);
  });

  function checkQQ(str) {
    if ($(str).val() == "") {
      $("#qq-check").html("");
    } else if (!reg4.test($(str).val())) {
      $("#qq-check").html("请输入有效QQ号码!");
    } else {
      $("#qq-check").html("");
    }
  }
  $("#tel").keyup(function() {
    checkMobile(this);
  });

  function checkMobile(str) {
    if ($(str).val() == "") {
      $("#phone-check").html("");
    } else if (!reg3.test($(str).val())) {
      $("#phone-check").html("请输入有效号码!");
    } else {
      $("#phone-check").html("");
    }
  }

  function check() {
    setTimeout(function() {
      console.log($("#context").val());
      var val1 = $('input:radio[name="sex"]:checked').val();
      var name1 = $("#name-check").html();
      var tag = $('input:radio[name="type"]:checked').val();
      if ($("#name").val() != ""&& $("#qq").val() != "" && $("#tel").val() != "" && $("#context").val() != null) {
        $("#touch").css("background-color", "#cb5941");
        $("#touch").unbind('click').on("click", function() { register() });
      } else {
        $("#touch").unbind('click').css("background-color", "#7d7d7d");
        $("#touch").off("click");
      }
    }, 0);

  }
  $("input").keyup(function() {
    check();
  });
  $("label").click(function() {
    check();
  })
})

function register() {
  var fd = $("#singleForm").serialize();
  $.ajax({
    type: "GET",
    dataType: "html",
    url: "https://warm.sky31.com/offerwarm/index.php",
    data: fd,
    success: function(result) {
      console.log(result);
      if (result == '报名成功') {
        $("#success").fadeIn("slow");
        $("#phone").css("filter", "brightness(50%)");
        //console.log('可以进入下一个环节了！');
      } else if (result == '已报名') {
        alert("请勿重复报名");
      }
    },
    error: function(e) {
      console.log(e)
    },
  })
}

function checkTag(key) {
  var keyTag;
  if (key == '学习') {
    keyTag = "tag1";
  } else if (key == '兴趣') {
    keyTag = "tag2";
  }
  return keyTag;
}

function choseTag() {
  setTimeout(
    function change() {
      var item = null;
      var obj = document.getElementsByName("type")
      for (var i = 0; i < obj.length; i++) {
        if (obj[i].checked) {
          item = obj[i].value;
        }
      }
      item = checkTag(item);
      $(".initial").css({ "background-color": "#fff", "color": "#666" });
      $(".info-num").css("opacity", "0");
      $("#" + item).css({ "background-color": "#fff389", "color": "#ec9b4c" });
      $("#" + item + "-num").css("opacity", "1");
    }, 0
  );
}
$(function() {
  $("body").click(function(e) {
    if ($(e.target).closest("#touch,#success").length == 0) {
      $("#success").hide();
      $("#phone").css("filter", "brightness(100%)");
    }
  });
})