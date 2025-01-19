$( document ).ready(function() {

  /* form valid*/
  let alertImage = '<svg class="absolute right-6 bottom-5 w-5 h-5 text-rose-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286.1 286.1"><path d="M143 0C64 0 0 64 0 143c0 79 64 143 143 143 79 0 143-64 143-143C286.1 64 222 0 143 0zM143 259.2c-64.2 0-116.2-52-116.2-116.2S78.8 26.8 143 26.8s116.2 52 116.2 116.2S207.2 259.2 143 259.2zM143 62.7c-10.2 0-18 5.3-18 14v79.2c0 8.6 7.8 14 18 14 10 0 18-5.6 18-14V76.7C161 68.3 153 62.7 143 62.7zM143 187.7c-9.8 0-17.9 8-17.9 17.9 0 9.8 8 17.8 17.9 17.8s17.8-8 17.8-17.8C160.9 195.7 152.9 187.7 143 187.7z" fill="currentColor"/></svg>';
  let error;
  $('.submit').click(function (e) {
    e.preventDefault();
    let ref = $(this).closest('form').find('[required]');
    $(ref).each(function () {
      let thisFiled = $(this);

      if ($(this).val().trim() === '') {
          thisFiled.addClass('error').parent('.label').append('<div class="allert">' + alertImage + '</div>');
          error = 1;
          $(":input.error:first").focus();
          return false;
      } else {
        if (thisFiled.attr("type") === 'email') {
          let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if (!pattern.test(thisFiled.val())) {
            $("input[name=email]").val('');
            thisFiled.addClass('error').parent('.label').append('<div class="allert">' + alertImage + '</div>');
            error = 1;
            $(":input.error:first").focus();
            return false;
          }else{
            error = 0;
            thisFiled.removeClass('error').parent('.label').find('.allert').remove();
          }
        } else if (thisFiled.attr("type") === 'tel') {
          let patterntel = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
          if (!patterntel.test(thisFiled.val())) {
            $("input[name=phone]").val('');
            thisFiled.addClass('error').parent('.label').append('<div class="allert">' + alertImage + '</div>');
            error = 1;
            $(":input.error:first").focus();
            return false;
          }else{
            error = 0;
            thisFiled.removeClass('error').parent('.label').find('.allert').remove();
          }

        }  else {
          error = 0;
          thisFiled.removeClass('error').parent('.label').find('.allert').remove();
        }
      }
    });
    if (error !== 1) {
      $(this).unbind('submit').submit();
    }
  });

  $('form').on('submit', function (e) {
    e.preventDefault();
    var $form = $(this);
    $form.find('.submit').addClass('inactive');
    $form.find('.submit').prop('disabled', true);


    setTimeout(function () {
      alert('Success');
      
      $form.find('.submit').removeClass('inactive');
      $form.find('.submit').prop('disabled', false);
      $form[0].reset();

      $('#check-success').prop('disabled', true)
      
    }, 1000);

  });


  $('input[name="phone"]').inputmask("{1,15}");


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
      if ($('.modal.show').attr('id') === 'media') {
        $('#media').find('.modal-content').text('')
      }
      $('.modal').removeClass('show');
      $('body').removeClass('overflow-hidden');
    }
  })


  $('[data-tab]').click(function (e) {
    e.preventDefault();

    const $this = $(this),
      tab = $this.data('tab') ?? $this.attr('href');

    $('.tab-item').removeClass('active')
    $(tab).addClass('active');
  })


}) 


