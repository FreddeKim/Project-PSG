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
  cartRemove(); 
  quantityCount();
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


function cartRemove() {
  // REMOVE 버튼 클릭 시 처리하는 함수
  $('.quantityRemove').click(function() {
      var listItem = $(this).closest('li'); // 클릭한 REMOVE 버튼이 속한 li 요소 찾기
      listItem.remove(); // li 요소 삭제

      var cartItems = $('div[class^="shopcartwrap"] form > div:first-of-type > ul:last-of-type li'); // 카트 아이템들 찾기
      if (cartItems.length === 0) { // 카트에 아이템이 없을 경우
          $('div[class^="shopcartwrap"] form > div:first-of-type').hide(); // 첫 번째 div 숨기기
          $('div[class^="shopcartwrap"] form > div:nth-of-type(2)').show(); // 두 번째 div 보이기
      }
  });
}
function quantityCount() {
  // countminus 버튼 클릭 시 처리하는 함수
  $('.countminus').click(function() {
    var inputElement = $(this).parent().find('.cartquantity'); // 해당 버튼의 형제 요소에서 input 요소 선택
    var currentValue = parseInt(inputElement.val()); // 현재 값 가져오기

    // 현재 값이 1 이상일 때만 값을 감소시킴
    if (currentValue > 1) {
        inputElement.val(currentValue - 1); // 현재 값에서 1 감소
    }
});

// countplus 버튼 클릭 시 처리하는 함수
  $('.countplus').click(function() {
    var inputElement = $(this).parent().find('.cartquantity'); // 해당 버튼의 형제 요소에서 input 요소 선택
    var currentValue = parseInt(inputElement.val()); // 현재 값 가져오기

    inputElement.val(currentValue + 1); // 현재 값에서 1 증가
});
};
