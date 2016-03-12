// React JS Draft.js

// import React from 'react';
// import ReactDOM from 'react-dom';
// import {Editor, EditorState} from 'draft-js';
//
// class MyEditor extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {editorState: EditorState.createEmpty()};
//     this.onChange = (editorState) => this.setState({editorState});
//   }
//   render() {
//     const {editorState} = this.state;
//     return <Editor editorState={editorState} onChange={this.onChange} />;
//   }
// }
//
// ReactDOM.render(
//   <MyEditor />,
//   document.getElementById('comments-draft')
// );

// END React JS Draft.js

var isMenuActive = "false";
var y = $(window).scrollTop();

// Header Show/Hide Functions
function headerOff(){
  $('#nav').css("margin-top", "-55px");
  $('#logo').css("height", "70px");
  $('#logo').css("width", "70px");
}
function headerOn(){
  $('#nav').css("margin-top", "0");
  $('#logo').css("height", "100px");
  $('#logo').css("width", "100px");
}

// Facebook Login Interface Functions
// function loggedInToFacebook(){
//   console.log("FB-login ran");
//   $('.fb-login-button').css('display', 'none');
//   $('#login-group').children('a').remove();
//   $('#login-group').append("<a onclick='fbLogout()' class='menu-button-a' id='signout' href='#'>Sign Out</a>");
//   isUserLoggedIn = "true";
// }
// function loggedOutOfFacebook(){
//   console.log("FB-logout ran");
//   $('#signout').css('display', 'none');
//   $('.fb-login-button').css('display', 'block');
//   $('#login-group').append("<a class='login-group-login' href='#'>Log In</a>");
//   $('#login-group').append("<a class='login-group-signin' href='#'>Sign Up</a>");
//   isUserLoggedIn = "false";
// }

$( document ).ready(function() {

  // Menu Trigger
  $('.with-dropdown').hover(
    function() {
      $('.menu-button-dropdown').css('display', 'block');
    },
    function() {
      $('.menu-button-dropdown').css('display', 'none');
    }
  );

  // Scroll Fuctions
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if($(window).scrollTop() > 0) {
      headerOff();
    } else {
      headerOn();
    }
    $( "#nav" ).hover(
      function() {
        $('#nav').css("margin-top", "0");
        $('#nav').css("transition-duration", "0.25s");
      }, function() {
        if($(window).scrollTop() > 60) {
          $('#nav').css("margin-top", "-40px");
          $('#nav').css("transition-duration", "0.25s");
        }
      }
    );
  });

  // Scroll summary grid to top when you click on it
  $('.summary-grid').on('click', '*', function() {
    $('html, body').animate({
        scrollTop: $(".container-body").offset().top
    }, 2000);
  });

  // Summary grid tab switching
  $('ul.summary-grid li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.summary-grid li').removeClass('current');
		$('.main-article').removeClass('current-content');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current-content');
    content_animation( tab_id );

    function content_animation( tab_id ) {
      var content_panel = $("#" + tab_id);
      console.log( content_panel.attr('class') );
      if ( $(content_panel).hasClass('slide_to_right') ) {
        $(content_panel).removeClass('slide_to_right');
      } else {
        $(content_panel).addClass('slide_to_right');
      }
    }
	})

});

// Facebook Stuff
// $(document).ready(function() {
//   $.ajaxSetup({ cache: true });
//   $.getScript('//connect.facebook.net/en_US/sdk.js', function(){
//     FB.init({
//       appId: '955484227838459',
//       version: 'v2.5' // or v2.0, v2.1, v2.2, v2.3
//     });
//     $('#loginbutton,#feedbutton').removeAttr('disabled');
//     FB.getLoginStatus(updateStatusCallback);
//   });
// });
//
// // This is called with the results from from FB.getLoginStatus().
//   function statusChangeCallback(response) {
//     console.log('statusChangeCallback');
//     console.log(response);
//     // The response object is returned with a status field that lets the
//     // app know the current login status of the person.
//     // Full docs on the response object can be found in the documentation
//     // for FB.getLoginStatus().
//     if (response.status === 'connected') {
//       // Logged into your app and Facebook.
//       testAPI();
//       loggedInToFacebook();
//     } else if (response.status === 'not_authorized') {
//       // The person is logged into Facebook, but not your app.
//       document.getElementById('status').innerHTML = 'Please log ' +
//         'into this app.';
//     } else {
//       // The person is not logged into Facebook, so we're not sure if
//       // they are logged into this app or not.
//       document.getElementById('status').innerHTML = 'Please log ' +
//         'into Facebook.';
//     }
//   }
//
//   // This function is called when someone finishes with the Login
//   // Button.  See the onlogin handler attached to it in the sample
//   // code below.
//   function checkLoginState() {
//     FB.getLoginStatus(function(response) {
//       statusChangeCallback(response);
//     });
//   }
//
//   window.fbAsyncInit = function() {
//   FB.init({
//     appId      : '955484227838459',
//     cookie     : true,  // enable cookies to allow the server to access
//                         // the session
//     xfbml      : true,  // parse social plugins on this page
//     version    : 'v2.2' // use version 2.2
//   });
//
//   FB.getLoginStatus(function(response) {
//     statusChangeCallback(response);
//   });
//
//   };
//   function fbLogout() {
//     FB.logout(function (response) {
//         loggedOutOfFacebook()
//     });
//   }
//
//   // Load the SDK asynchronously
//   (function(d, s, id) {
//     var js, fjs = d.getElementsByTagName(s)[0];
//     if (d.getElementById(id)) return;
//     js = d.createElement(s); js.id = id;
//     js.src = "//connect.facebook.net/en_US/sdk.js";
//     fjs.parentNode.insertBefore(js, fjs);
//   }(document, 'script', 'facebook-jssdk'));
//
//   // Here we run a very simple test of the Graph API after login is
//   // successful.  See statusChangeCallback() for when this call is made.
//   function testAPI() {
//     console.log('Welcome!  Fetching your information.... ');
//     FB.api('/me', function(response) {
//       console.log('Successful login for: ' + response.name);
//       document.getElementById('status').innerHTML =
//         'Thanks for logging in, ' + response.name + '!';
//     });
//   }
