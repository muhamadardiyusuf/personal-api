$(document).ready(function () {

    const particlesJSON = {

    "particles": {

        "number": {

        "value": 50,

        "density": {

            "enable": false,

            "value_area": 721.5354273894853

        }

        },

        "color": {

        "value": "#ffffff"

        },

        "shape": {

        "type": "image",

        "stroke": {

            "width": 0,

            "color": "#000000"

        },

        "polygon": {

            "nb_sides": 5

        },

        "image": {

            "src": "https://mumetndase.my.id/love.png",

            "width": 100,

            "height": 100

        }

        },

        "opacity": {

        "value": 0.39457382081613634,

        "random": true,

        "anim": {

            "enable": true,

            "speed": 5.077922077922078,

            "opacity_min": 0.1998001998001998,

            "sync": false

        }

        },

        "size": {

        "value": 8,

        "random": true,

        "anim": {

            "enable": false,

            "speed": 2.4362316369040355,

            "size_min": 6.496617698410762,

            "sync": true

        }

        },

        "line_linked": {

        "enable": false,

        "distance": 500,

        "color": "#ffffff",

        "opacity": 0.4,

        "width": 2

        },

        "move": {

        "enable": true,

        "speed": 1,

        "direction": "bottom",

        "random": true,

        "straight": false,

        "out_mode": "out",

        "bounce": false,

        "attract": {

            "enable": false,

            "rotateX": 600,

            "rotateY": 1200

        }

        }

    },

    "interactivity": {

        "detect_on": "canvas",

        "events": {

        "onhover": {

            "enable": true,

            "mode": "bubble"

        },

        "onclick": {

            "enable": true,

            "mode": "repulse"

        },

        "resize": true

        },

        "modes": {

        "grab": {

            "distance": 400,

            "line_linked": {

            "opacity": 0.5

            }

        },

        "bubble": {

            "distance": 400,

            "size": 4,

            "duration": 0.9,

            "opacity": 1,

            "speed": 3

        },

        "repulse": {

            "distance": 200,

            "duration": 0.4

        },

        "push": {

            "particles_nb": 4

        },

        "remove": {

            "particles_nb": 2

        }

        }

    },

    "retina_detect": true

    }

  

    particlesJS("particles-js", particlesJSON);

    function checkTime(i) {

      if (i < 10) {

        i = "0" + i;

      }

      return i;

    }

  

    function startTimeSalam() {

      var ucapanSalam = "";

      var todaySalam = new Date();

      var hSalam = todaySalam.getHours();

      var mSalam = todaySalam.getMinutes();

      var sSalam = todaySalam.getSeconds();

      mSalam = checkTime(mSalam);

      sSalam = checkTime(sSalam);

      if (hSalam < 4) {

        ucapanSalam = "Selamat Malam Kamu &nbsp; <i class='fa fa-heart'></i><i class='fa fa-heart'></i>"

        kata1 = "Selamat tidur, Lupakan harimu yang berat.";

        kata2 = "Semoga mimpi indah &nbsp;<i class='fa fa-heart'></i>";

        kata3 = "Aku sayang kamu :) &nbsp;<i class='fa fa-heart'></i>";

      } else {

        if (hSalam < 11) {

          ucapanSalam = "Selamat Pagi kamu"

          kata1 = "Sebuah pagi sempurna, hanya jika aku bersama kamu.";

          kata2 = "Semoga hari hari mu menyenangkan &nbsp; <i class='fa fa-heart'></i>";

          kata3 = "Nanti kita jalan jalan ya :)";

        } else {

          if (hSalam < 16) {

            ucapanSalam = "Selamat Siang kamu"

            kata1 = "Jangan lupa makan siang";

            kata2 = "Jangan lupa shalat dzuhur juga &nbsp; <i class='fa fa-heart'></i>";

            kata3 = "Semoga sehat selalu :) &nbsp; <i class='fa fa-heart'></i>";

          } else {

            if (hSalam < 20) {

              ucapanSalam = "Selamat Sore kamu"

              kata1 = "Jangan lupa mandi hahaha";

              kata2 = "Hari ini menyenangkan bukan?&nbsp; <i class='fa fa-heart'></i>";

              kata3 = "Aku sayang kamu :) &nbsp; <i class='fa fa-heart'></i>";

            } else {

                ucapanSalam = "Selamat Malam Kamu &nbsp; <i class='fa fa-heart'></i><i class='fa fa-heart'></i>"

                kata1 = "Selamat tidur, Lupakan harimu yang berat.";

                kata2 = "Semoga mimpi indah &nbsp;<i class='fa fa-heart'></i>";

                kata3 = "Aku sayang kamu :) &nbsp; <i class='fa fa-heart'></i>";                

            }

          }

        }

      }

      // $(".salam").html(ucapanSalam);

      var typed = new Typed('h3', {

        strings: [ucapanSalam, kata1, kata2, kata3],

        smartBackspace: true,

        showCursor: 0,

        typeSpeed: 50,

        loop: !0, // here

        startDelay: 2000,

      });

    }

  

    window.onload = startTimeSalam();

  })
