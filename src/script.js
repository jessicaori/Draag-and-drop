
dragula([
    document.getElementById("new"),
    document.getElementById("shopping"),
    document.getElementById("storage"),
    document.getElementById("deliveried"),
    document.getElementById("trash")
  ]);
  
  removeOnSpill: false
    .on("drag", function (el) {
      el.className.replace("ex-moved", "");
    })
    .on("drop", function (el) {
      el.className += "ex-moved";
    })
    .on("over", function (el, container) {
      container.className += "ex-over";
    })
    .on("out", function (el, container) {
      container.className.replace("ex-over", "");
    });
  
  function addTask() {
    var inputTask = document.getElementById("taskText").value;
    document.getElementById("new").innerHTML +=
      "<li class='task'><p>" + inputTask + "</p></li>";
    document.getElementById("taskText").value = "";
  }
  
  function emptyTrash() {
    document.getElementById("trash").innerHTML = "";
  }
  