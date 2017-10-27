$(document).ready(function() {
    var scrollLink = $('.scroll');
    
    // Smooth scrolling
    scrollLink.click(function(e) {
      e.preventDefault();
      $('body,html').animate({
        scrollTop: $(this.hash).offset().top
      }, 1000 );
    });
    
    // Active link switching
    $(window).scroll(function() {
      var scrollbarLocation = $(this).scrollTop();
      
      scrollLink.each(function() {
        
        var sectionOffset = $(this.hash).offset().top - 20;
        
        if ( sectionOffset <= scrollbarLocation ) {
          $(this).parent().addClass('active');
          $(this).parent().siblings().removeClass('active');
        }
      })
      
    })
    
})
//Fade In About Me Text
$(document).ready(function () {
  $('ul.hidden').fadeIn(2000).removeClass('hidden');
});
//Email

$(document).ready(function () {
  var user, to, subject, text;
  $("#send_email").click(function () {
      // enter your email account that you want to recieve emails at.
      to = '<hirekatiana@gmail.com>';
      name = $("#name").val();
      user = $("#email").val();
      subject = $("#subject").val();
      text = $("#textarea1").val();
      $.get("http://localhost:3000/send", {
          to: to,
          name: name,
          user: user,
          subject: subject,
          text: text
      }, function (data) {
          if (data == "sent") {
              console.log("Email sent");
          }
      });
  });
});