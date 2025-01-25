$( document ).ready(function() {
  function isMobile() {
    // Перевірка ширини екрана
    var windowWidth = $(window).width();
  
    // Інші можливі умови для визначення мобільного телефона
    var isTouchDevice = 'ontouchstart' in document.documentElement;
    var isSmallScreen = windowWidth < 768; // Наприклад, визначити маленький екран як ширину менше 768 пікселів
  
    // Повернути true, якщо виконується хоча б одна умова
    return isTouchDevice || isSmallScreen;
  }

  /* form valid*/
  let alertImage = '<svg class="svg-valid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286.1 286.1"><path d="M143 0C64 0 0 64 0 143c0 79 64 143 143 143 79 0 143-64 143-143C286.1 64 222 0 143 0zM143 259.2c-64.2 0-116.2-52-116.2-116.2S78.8 26.8 143 26.8s116.2 52 116.2 116.2S207.2 259.2 143 259.2zM143 62.7c-10.2 0-18 5.3-18 14v79.2c0 8.6 7.8 14 18 14 10 0 18-5.6 18-14V76.7C161 68.3 153 62.7 143 62.7zM143 187.7c-9.8 0-17.9 8-17.9 17.9 0 9.8 8 17.8 17.9 17.8s17.8-8 17.8-17.8C160.9 195.7 152.9 187.7 143 187.7z" fill="currentColor"/></svg>';
  let error;
  $('.submit').click(function (e) {
    e.preventDefault();
    let ref = $(this).closest('form').find('[required]');
    $(ref).each(function () {
      let thisFiled = $(this);

      if (thisFiled.val().trim() === '') {
        thisFiled.removeClass('error').parents('.label').find('.allert').remove();
        const errorMessage = 'Enter value this filed';
          thisFiled.addClass('error').parents('.label').append(`<div class="allert">${alertImage} ${errorMessage}</div>`);
          error = 1;
          $(":input.error:first").focus();
          return false;
      } else {
        if (thisFiled.attr("type") === 'email') {
          thisFiled.removeClass('error').parents('.label').find('.allert').remove();
          emailValue = thisFiled.val();
          const errorMessage = validateEmail(emailValue);
          if (errorMessage) {
            thisFiled.val('');
            thisFiled.addClass('error').parents('.label').append(`<div class="allert">${alertImage} ${errorMessage}</div>`);
            error = 1;
            $(":input.error:first").focus();
            return false;
          }else{
            error = 0;
            thisFiled.removeClass('error').parents('.label').find('.allert').remove();
          }
        } else if (thisFiled.attr("type") === 'tel') {
          thisFiled.removeClass('error').parents('.label').find('.allert').remove();
          let patterntel = /^[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

          const errorMessage = 'Enter valid phone';
          if (!patterntel.test(thisFiled.val())) {
            thisFiled.val('');
            thisFiled.addClass('error').parents('.label').append(`<div class="allert">${alertImage} ${errorMessage}</div>`);
            error = 1;
            $(":input.error:first").focus();
            return false;
          }else{
            error = 0;
            thisFiled.removeClass('error').parents('.label').find('.allert').remove();
          }

        }  else {
          error = 0;
          thisFiled.removeClass('error').parents('.label').find('.allert').remove();
        }
      }
    });
    if (error !== 1) {
      $(this).unbind('submit').submit();
    }
  });

  $('.get-price-form').on('submit', function (e) {
    e.preventDefault();
    var $form = $(this);
    $form.find('.submit').addClass('inactive');
    $form.find('.submit').prop('disabled', true);


    setTimeout(function () {
      alert('Success');
      
      $form.find('.submit').removeClass('inactive');
      $form.find('.submit').prop('disabled', false);
      $form[0].reset();

      $('.tab-item').removeClass('active')
      $('#slide-5').addClass('active');

      
    }, 1000);

  });

  const ofertaValue = $('#oferta');
  if(ofertaValue.is(':checked')) {
    $('.get-price-form-submit').removeAttr('disabled')
  }else{
    $('.get-price-form-submit').attr('disabled', true)
  }

  ofertaValue.change(function(){
    if(ofertaValue.is(':checked')) {
      $('.get-price-form-submit').removeAttr('disabled')
    }else{
      $('.get-price-form-submit').attr('disabled', true)
    }
  })


  $('#call-me-form').on('submit', function (e) {
    e.preventDefault();
    var $form = $(this);
    $form.find('.submit').addClass('inactive');
    $form.find('.submit').prop('disabled', true);


    setTimeout(function () {
      alert('Success');
      
      $form.find('.submit').removeClass('inactive');
      $form.find('.submit').prop('disabled', false);
      $form[0].reset();
      
    }, 1000);

  });

  $('.get-info-form').on('submit', function (e) {
    e.preventDefault();
    var $form = $(this);
    $form.find('.submit').addClass('inactive');
    $form.find('.submit').prop('disabled', true);


    setTimeout(function () {
      alert('Success');
      
      $form.find('.submit').removeClass('inactive');
      $form.find('.submit').prop('disabled', false);
      $form[0].reset();
      
    }, 1000);

  });

  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    if (!email.includes('@')) {
      return "Invalid email format: '@' symbol is missing.";
    }
  
    const parts = email.split('@');
    if (parts.length !== 2) {
      return "Invalid email format: Too many '@' symbols.";
    }
  
    const [localPart, domain] = parts;
    if (!localPart) {
      return "Invalid email format: Missing local part before '@'.";
    }
  
    if (!domain || !domain.includes('.')) {
      return "Invalid email format: Domain is incomplete.";
    }
  
    if (!re.test(email)) {
      return "Invalid email format: Email does not meet the standard format.";
    }
  
    return null; 
  }

  const ofertaValue1 = $('#oferta_1');
  if(ofertaValue1.is(':checked')) {
    $('.call-me-submit').removeAttr('disabled')
  }else{
    $('.call-me-submit').attr('disabled', true)
  }

  ofertaValue1.change(function(){
    if(ofertaValue1.is(':checked')) {
      $('.call-me-submit').removeAttr('disabled')
    }else{
      $('.call-me-submit').attr('disabled', true)
    }
  })


  const ofertaValue2 = $('#oferta_2');
  if(ofertaValue2.is(':checked')) {
    $('.get-info-form-btn').removeAttr('disabled')
  }else{
    $('.get-info-form-btn').attr('disabled', true)
  }

  ofertaValue2.change(function(){
    if(ofertaValue2.is(':checked')) {
      $('.get-info-form-btn').removeAttr('disabled')
    }else{
      $('.get-info-form-btn').attr('disabled', true)
    }
  })
  

  // $('input[name="phone"]').inputmask("{1,15}");


  // $(window).scroll(function () {
  //   var $sections = $('.roadmap-list .large-title');

  //   $sections.each(function (i, el) {
  //     const top = $(el).offset().top - 500;
  //     const bottom = top + $(el).height() + $(window).height()*3;
  //     const scroll = $(window).scrollTop();
  //     let heightBefore = $('.item'+i).height() - 10;

  //     const topMenu = $(el).offset().top - 70;
  //     const bottomMunu = topMenu + $(el).height() + $(window).height()/3;
  //     //    var id = $(el).attr('id');
  //     if (scroll > top && scroll < bottom && $(el).hasClass('large-title')) {
  //       $(el).addClass('active');
  //       $(el).find('.before').height(heightBefore);

  //       // $(el).find('.before').animate({
  //       //   opacity: 1,
  //       //   height: heightBefore
  //       // });

  //     } else {
  //       $(el).removeClass('active');
  //     }

  //     if (scroll > topMenu && scroll < bottomMunu) {
  //       // $('.nav-btn').addClass('dark-mode');
  //       // $('.logo').addClass('dark-mode');

  //     } else {}
  //   })


  // });


  $('[data-modal]').click(function (e) {
    e.preventDefault();

    const $this = $(this),
      modal = $this.data('modal') ?? $this.attr('href');

      $('body').addClass('overflow-hidden')

    $(modal).addClass('show');
  })

    $('.modal .close').click(function () {
    const $this = $(this);
    $this.parents('.modal').removeClass('show');
    $('body').removeClass('overflow-hidden')
    if ($this.parents('.modal').attr('id') === 'media') {
      $this.parents('.modal').find('.modal-content').text('')
    }
  })

  $(document).mouseup(function (e) {
    const container = $(".modal-dialog");
    if (container.has(e.target).length === 0) {
      container.parents('.modal').removeClass('show');
      $('body').removeClass('overflow-hidden');

      $('#media').find('.modal-content').text('')
    }
  });


  $(document).keydown(function (e) {
    // ESCAPE key pressed 
    if (e.keyCode == 27) {
      $('.modal').removeClass('show');
      $('body').removeClass('overflow-hidden');
    }
  })


  $('[data-tab]').click(function (e) {

    const $this = $(this),
      tab = $this.data('tab');

    $('.tab-item').removeClass('active')
    $(tab).addClass('active');
  })

  $('.go-to-home-btn').click(function(){
    $('.modal').removeClass('show');
    $('body').removeClass('overflow-hidden');
  })

  $('.mobile-btn').click(function(){
    $(this).toggleClass('active');
    $('.navigation-menu, .mobile-phone').toggleClass('show');
  })

  $('.gallery-slider').slick({
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    prevArrow: '<button class="carousel-prev"><svg><use xlink:href="#arrow-left"></use></svg></button>',
    nextArrow: '<button class="carousel-next"><svg><use xlink:href="#arrow-right"></use></svg></button>',
  });

  function toggleBlockMore() {
    $('.block-more').each(function(){
      const blockMore = $(this);
      const li = blockMore.find('li');
      let showItem = 8;
  
      if(isMobile()) {
        showItem = 4;
      }

      if(blockMore.hasClass('materials-list')) {
        showItem = 6;

        if(isMobile()) {
          showItem = 2;
        }
      }
  
      if (li.length > showItem) {
        li.each(function(index){
          if(index > (showItem - 1)) {
            $(this).addClass('d-none')
          }
        })
      }
    })
  }

  toggleBlockMore();

  $('.show-more').click(function(e){
    e.preventDefault()
    if($(this).hasClass('active')) {
      $(this).removeClass('active')
      toggleBlockMore();
    }else{
      $(this).parents('section').find('.d-none').removeClass('d-none');
      $(this).addClass('active')
    }
  })

  $('.plans-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button class="carousel-prev"><svg><use xlink:href="#arrow-left"></use></svg></button>',
    nextArrow: '<button class="carousel-next"><svg><use xlink:href="#arrow-right"></use></svg></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });


  if($('div').hasClass('map-frame')) {
    var map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    var greenIcon = L.icon({
        iconUrl: 'images/point.svg',
        iconSize:     [36, 36], // size of the icon
    });
  
    L.marker([51.5, -0.09], {icon: greenIcon}).addTo(map);
  
  }
}) 


