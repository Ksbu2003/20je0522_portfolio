$(window).scroll(function () {
  if( document.documentElement.clientWidth <= 768){
    $(".textholder2").css(
      "transform",
      "translateX(-" + 0.0625 * $(window).scrollTop() + "vw)"
    );
  } else{
    if ($(window).scrollTop() <= 700) {
      $(".textholder2").css(
        "transform",
        "translateX(-" + 0.0625 * $(window).scrollTop() + "vw)"
      );
      $(".text1").css(
        "transform",
        "translateX(" + 0.03 * $(window).scrollTop() + "vw)"
      );
    } else if ($(window).scrollTop() <= 1400 && $(window).scrollTop() >= 948) {
      $(".textholder2").css(
        "transform",
        `translate(-43.75vw,-${
          4 * (($(window).scrollTop() * 0.0625) / 15 - 4)
        }vw)`
      );
    };

 

  //   flip animation
  if ($(window).scrollTop() >= 1875) {
    $(".nav").addClass("anim").css("visibility", "visible");
    $(".education").addClass("anim").css("visibility", "visible");
  }
  if ($(window).scrollTop() >= 2450) {
    $(".projects").addClass("anim").css("visibility", "visible");
  }
  if ($(window).scrollTop() >= 3000) {
    $(".cp").addClass("anim").css("visibility", "visible");
  }
  if ($(window).scrollTop() >= 3900) {
    $(".certificates").addClass("anim").css("visibility", "visible");
  }
  if ($(window).scrollTop() >= 4700) {
    $(".hobbies").addClass("anim").css("visibility", "visible");
  }
  // end

  //section highlight
  if ($(window).scrollTop() <= 3256 && $(window).scrollTop() > 2600) {
    $("#Ed").css({
      "background-color": "white",
      "box-shadow": "1px 1px 1px 1px black inset,-1px -1px 1px 1px black inset",
      color: "black",
    });
  } else {
    $("#Ed").css({ "background-color": "black", color: "white" });
  }
  if ($(window).scrollTop() <= 4076 && $(window).scrollTop() > 3256) {
    $("#Pr").css({
      "background-color": "white",
      "box-shadow": "1px 1px 1px 1px black inset,-1px -1px 1px 1px black inset",
      color: "black",
    });
  } else {
    $("#Pr").css({ "background-color": "black", color: "white" });
  }
  if ($(window).scrollTop() <= 5140 && $(window).scrollTop() > 4076) {
    $("#Co").css({
      "background-color": "white",
      "box-shadow": "1px 1px 1px 1px black inset,-1px -1px 1px 1px black inset",
      color: "black",
    });
  } else {
    $("#Co").css({ "background-color": "black", color: "white" });
  }
  if ($(window).scrollTop() <= 5868 && $(window).scrollTop() > 5140) {
    $("#Ce").css({
      "background-color": "white",
      "box-shadow": "1px 1px 1px 1px black inset,-1px -1px 1px 1px black inset",
      color: "black",
    });
  } else {
    $("#Ce").css({ "background-color": "black", color: "white" });
  }
  if ($(window).scrollTop() <= 8572 && $(window).scrollTop() > 5868) {
    $("#Ho").css({
      "background-color": "white",
      "box-shadow": "1px 1px 1px 1px black inset,-1px -1px 1px 1px black inset",
      color: "black",
    });
  } else {
    $("#Ho").css({ "background-color": "black", color: "white" });
  }
  if ( $(window).scrollTop() > 8572) {
    $("#Ph").css({
      "background-color": "white",
      "box-shadow": "1px 1px 1px 1px black inset,-1px -1px 1px 1px black inset",
      color: "black",
    });
  } else {
    $("#Ph").css({ "background-color": "black", color: "white" });
  }
  //   end


  }

  //first about fadein and out animation
  if ($(window).scrollTop() <= 1300) {
    $(".intro div").fadeOut("slow");
  }
  if ($(window).scrollTop() >= 1400) {
    $(".intro div").fadeIn("slow");
  }

  //end




  $(".child1").css(
    "transform",
    "translateX(" + 0.0625 * $(window).scrollTop() + "vw)"
  );
  $(".textholder1").css(
    "transform",
    "translateX(-" + 0.125 * $(window).scrollTop() + "vw)"
  );


  
});

// corousal
function corousal(images_list, id) {
  //If you want to include more images, add the link name and URL of the image in the array list below.

  let slider_id = document.querySelector(id);

  // append all images
  let dots_div = "";
  let images_div = "";
  for (let i = 0; i < images_list.length; i++) {
    // if no link without href="" tag
    let href =
      images_list[i].link == "" ? "" : ' href="' + images_list[i].link + '"';
    images_div +=
      "<a" +
      href +
      ' class="hcg-slides"' +
      (i === 0 ? ' style="display:block"' : "") +
      ">" +
      '<img src="' +
      images_list[i].url +
      '" alt="' +
      images_list[i].name +
      '">' +
      "</a>";
    dots_div +=
      '<span class="hcg-slide-dot' +
      (i === 0 ? " dot-active" : "") +
      '" data-id="' +
      i +
      '"></span>';
  }
  slider_id.querySelector(".hcg-slider-body").innerHTML = images_div;
  slider_id.querySelector(".hcg-slide-dot-control").innerHTML = dots_div;

  let slide_index = 0;

  let images = slider_id.querySelectorAll(".hcg-slides");
  let dots = slider_id.querySelectorAll(".hcg-slide-dot");
  let prev_button = slider_id.querySelector(".hcg-slide-prev");
  let next_button = slider_id.querySelector(".hcg-slide-next");

  function showSlides() {
    if (slide_index > images.length - 1) {
      slide_index = 0;
    }
    if (slide_index < 0) {
      slide_index = images.length - 1;
    }
    for (let i = 0; i < images.length; i++) {
      images[i].style.display = "none";
      dots[i].classList.remove("dot-active");
      if (i == slide_index) {
        images[i].style.display = "block";
        dots[i].classList.add("dot-active");
      }
    }
  }

  prev_button.addEventListener(
    "click",
    function (event) {
      event.preventDefault();
      slide_index--;
      showSlides();
    },
    false
  );

  next_button.addEventListener(
    "click",
    function (event) {
      event.preventDefault();
      slide_index++;
      showSlides();
    },
    false
  );

  function dot_click(event) {
    slide_index = event.target.dataset.id;
    showSlides();
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", dot_click, false);
  }
}

var images_list_1 = [
  {
    url: "images/google_farewell.jpg",
    name: "image 1",
    link: "",
  }
];

var images_list_2 = [
  {
    url: "images/photography/1.jpg",
    name: "image 1",
    link: "",
  },
  {
    url: "images/photography/3.jpg",
    name: "image 3",
    link: "",
  },
  {
    url: "images/photography/4.jpg",
    name: "image 4",
    link: "",
  },
  {
    url: "images/photography/5.jpg",
    name: "image 5",
    link: "",
  },
  {
    url: "images/photography/6.jpg",
    name: "image 6",
    link: "",
  },
];

var images_list_3 = [
  {
    url: "images/renders/7.jpg",
    name: "image 1",
    link: "",
  },
  {
    url: "images/renders/8.jpg",
    name: "image 2",
    link: "",
  },
  {
    url: "images/renders/9.jpg",
    name: "image 3",
    link: "",
  },
  {
    url: "images/renders/10.jpg",
    name: "image 4",
    link: "",
  },
  {
    url: "images/renders/11.jpg",
    name: "image 5",
    link: "",
  },
];

var images_list_4 = [
  {
    url: "images/drawings/12.jpg",
    name: "image 1",
    link: "",
  },
  {
    url: "images/drawings/13.jpg",
    name: "image 2",
    link: "",
  },
  {
    url: "images/drawings/14.jpg",
    name: "image 3",
    link: "",
  },
  {
    url: "images/drawings/15.jpg",
    name: "image 4",
    link: "",
  },
  {
    url: "images/drawings/16.jpg",
    name: "image 5",
    link: "",
  },
];

var id_1 = "#hcg-slider-1";
var id_2 = "#hcg-slider-2";
var id_3 = "#hcg-slider-3";
var id_4 = "#hcg-slider-4";

corousal(images_list_1, id_1);
corousal(images_list_2, id_2);
corousal(images_list_3, id_3);
corousal(images_list_4, id_4);

 //hover

 $( "#nav a" ).hover(
  function() {
    $( this ).css({"color":"black","background-color":"white","box-shadow": "1px 1px 1px 1px black inset, -1px -1px 1px 1px black inset"});
  }, function() {
    $( this ).css({"color":"white","background-color":"black"});
  }
);