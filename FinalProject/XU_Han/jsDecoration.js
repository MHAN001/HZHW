
	$(document).ready(function () {
	  //HTML/Text
	  $('.link-html').edbox();

	  //URL
	  $('.link-url').edbox({
		addClass: 'example-url',
		width: 900
	  });

	  //Image
	  $('.link-image').edbox({
		image: 'assets/images/curitiba-brazil.jpg'
	  });

	  //Success
	  $('.btn-success').edbox({ success: '<i><b>Success</b></i> request!' });

	  //Info
	  $('.btn-info').edbox({ info: 'Some text or &lt;html> info!' });

	  //Warning
	  $('.btn-warning').edbox({ warning: '<b>Warning</b>, <i>do not go ahead</i>!' });

	  //Danger
	  $('.btn-danger').edbox({ danger: 'Sorry,<br>unespected error!' });
	});
