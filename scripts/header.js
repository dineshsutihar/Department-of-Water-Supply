window.onload = function () {
    var bodyFontSize = localStorage.getItem("bodyFontSize");
    let invertColor = localStorage.getItem("invertColor");
    if (invertColor === null || invertColor === "0") {
      invertColor = "";
    } else {
      invertColor = "filter: invert(1);background:black;";
    }
    document.getElementsByTagName("body")[0].style =
      "font-size:" + bodyFontSize + "%;" + invertColor;
  };
  function invertColor() {
    let invertColor = localStorage.getItem("invertColor");
    if (invertColor === "1") {
      document.getElementsByTagName("body")[0].style.filter = "";
      document.getElementsByTagName("body")[0].style.background = "";
      localStorage.setItem("invertColor", "0");
    } else if (invertColor === "0" || invertColor === null) {
      document.getElementsByTagName("body")[0].style.filter =
        "invert(100%)";
      document.getElementsByTagName("body")[0].style.background = "black";
      localStorage.setItem("invertColor", "1");
    }
  }

  function changeFont(operation) {
    var decreaseLimit = 70;
    var increaseLimit = 130;
    var bodyFontSize = localStorage.getItem("bodyFontSize");
    if (bodyFontSize === null) {
      bodyFontSize = 100;
    }
    if (operation === "increase") {
      if (bodyFontSize < increaseLimit) {
        bodyFontSize = parseInt(bodyFontSize) + 10;
      }
    } else if (operation === "decrease") {
      if (bodyFontSize > decreaseLimit) {
        bodyFontSize = parseInt(bodyFontSize) - 10;
      }
    } else {
      bodyFontSize = 100;
    }
    localStorage.setItem("bodyFontSize", bodyFontSize);
    document.getElementsByTagName("body")[0].style.fontSize =
      bodyFontSize + "%";
    if (bodyFontSize !== 100) {
      document.getElementById("font_size_styles").innerHTML =
        '<style type="text/css">' +
        ".fs-1{ " +
        "font-size: " +
        bodyFontSize +
        "% !important;" +
        " }" +
        ".fs-2{ " +
        "font-size: " +
        bodyFontSize +
        "% !important;" +
        " }" +
        ".fs-3{ " +
        "font-size: " +
        bodyFontSize +
        "% !important;" +
        " }" +
        ".fs-4{ " +
        "font-size: " +
        bodyFontSize +
        "% !important;" +
        " }" +
        ".fs-5{ " +
        "font-size: " +
        bodyFontSize +
        "% !important;" +
        " }" +
        ".fs-6{ " +
        "font-size: " +
        bodyFontSize +
        "% !important;" +
        " }" +
        "</style>";
    } else {
      document.getElementById("font_size_styles").innerHTML = "";
    }
  }
