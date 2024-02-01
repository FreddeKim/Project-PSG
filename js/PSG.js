$(document).ready(function() {
  searchBar();
  tickerSlider();
  headerfixed();
  player();
  map();
  listhover();
  detailSlider();
  thumnailactive();
  detailsize();
  callup();
  radioCallup();
});

// ! Search Bar

function searchBar(){
  
  var searchBar = $('#search_bar');
  var searchBtn = $('#search_ico');
  var searchVisible = false;

  searchBar.on('input', function() {
    if (searchBar.val().trim() === '') {
      searchBar.addClass('placeholder-hidden');
    } else {
      searchBar.removeClass('placeholder-hidden');
    }
  });

  searchBtn.on('click', function(event) {
    event.preventDefault();
    if (searchVisible) {
      searchBar.hide();
    } else {
      searchBar.show();
    }
    searchVisible = !searchVisible;
  });
}
function callup(){
  $('#detailsizeBox button').on('click', function() {
    var selectedSize = $(this).find('span').text();
    
    $('#detailsize span').text('Size: ' + selectedSize);
  });

  $('#nameBox button').on('click', function() {
    var selectedSize = $(this).find('span').text();
    
    $('#playerName span').text(selectedSize);
  });
};


function radioCallup(){
  $('#checkNumberName').change(function () {
    if ($(this).prop('checked')) {
        $('#lettersNumberName').show();
    }
});
$('#checkPlayerName').change(function () {
  if ($(this).prop('checked')) {
      $('#playerName').show();
  }
});
}


// ! detail box 
function detailsize() {
  var size = $('#detailsize');
  var sizebox = $('#detailsizeBox');
  var sizeboxVisible = false;

  size.on('click', function (event) {
    event.stopPropagation();
    if (sizeboxVisible) {
      sizebox.hide();
    } else {
      sizebox.show();
    }
    sizeboxVisible = !sizeboxVisible;
  });

  var name = $('#playerName');
  var nameBox = $('#nameBox');
  var nameBoxVisible = false;

  name.on('click', function (event) {
    event.stopPropagation();
    if (nameBoxVisible) {
      nameBox.hide();
    } else {
      nameBox.show();
    }
    nameBoxVisible = !nameBoxVisible;
  });
  $('body').on('click', function () {
    if (sizeboxVisible) {
      sizebox.hide();
      sizeboxVisible = false;
    }

    if (nameBoxVisible) {
      nameBox.hide();
      nameBoxVisible = false;
    }
  });
}

function tickerSlider(){
  $("#partnerList").bxSlider({
    ticker: true,
    tickerHover: true,
    speed:50000,
    minSlides: 9,
    maxSlides:10,
    slideWidth:1920
  });
}



// !fixed

function headerfixed(){
  var header = $("header");

  $(window).scroll(function() {
    var barPercent = ($(window).scrollTop() / ($(document).height() - $(window).height())) * 100;

    if (barPercent >= 80) {
      header.css("position", "absolute"); 
    } else {
      header.css("position", "fixed"); 
    }
  });
};

// !PlayerDetail Effact

function player() {
  var wrap = $('[class^=player] > section:first-of-type > div > div');
  var h3 = wrap.find('h3');
  var ul = wrap.find('ul');

  wrap.css('opacity', '1');
  wrap.on('transitionend', function () {
     h3.css('opacity', '1');
  });

  h3.on('transitionend', function () {
     ul.css('opacity', '1');
  });
}

//! Stadium Tour map size

function map() {
  $('iframe').css('width', '100%');
  $('iframe').css('height', '100%');
};

function listhover() {
  // 선택자에 대한 마우스 오버 이벤트 처리
  $('[class^=listwrap] > section > div:last-of-type > ul > li > a').hover(
    function() {
      var $img = $(this).find('img');
      var src = $img.attr('src');
      if (src.includes('_01.jpg') || src.includes('_01.png')) {
        var newSrc = src.replace('_01.jpg', '_02.jpg').replace('_01.png', '_02.png');
        var img = new Image();
        img.onload = function() {
          $img.attr('src', newSrc);
        };
        img.onerror = function() {
        };
        img.src = newSrc;
      }
    },
    function() {
      var $img = $(this).find('img');
      var src = $img.attr('src');
      if (src.includes('_02.jpg') || src.includes('_02.png')) {
        $img.attr('src', src.replace('_02.jpg', '_01.jpg').replace('_02.png', '_01.png'));
      }
    }
  );
}

function detailSlider(){
  $(".bxslider").bxSlider({
      mode: 'fade',
      pagerCustom: ".detailthumbnail"
  });
}

function thumnailactive() {
  $('.detailthumbnail li').on('click', function() {
    $(this).addClass('thumbnailactive').siblings().removeClass('thumbnailactive');
  });
};