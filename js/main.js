$(document).ready( function() {

	// Logo
	var $logo 	= $('#logo');
	 if (location.href.indexOf("#") != -1) {
        if(location.href.substr(location.href.indexOf("#"))!='#about'){
        	$logo.show();
        }
    }

	// Show logo
	$('#tab-container .tab a').click(function() {
	  $logo.slideDown('slow');
	});
	// Hide logo
	$('#tab-about').click(function() {
	  $logo.slideUp('slow');
	});
function animMeter(){
    $(".meter > span").each(function() {
                $(this)
                    .data("origWidth", $(this).width())
                    .width(0)
                    .animate({
                        width: $(this).data("origWidth")
                    }, 1200);
            });
}
animMeter();

      $('#tab-container').easytabs({
        animate			: true,
        updateHash		: true,
        transitionIn	: 'slideDown',
        transitionOut	: 'slideUp',
        animationSpeed	: 600,
        tabActiveClass	: 'active'}).bind('easytabs:midTransition', function(event, $clicked, $targetPanel){
            if($targetPanel.selector=='#resume'){
                    animMeter();
            }
        });

				// Get modal element
				var modal = document.getElementById('simpleModal');
				// Get open modal button
				var modalBtn = document.getElementById('modal');
				// Get close button
				var closeBtn = document.getElementsByClassName('closeBtn')[0];

				// Listen for open click
				modalBtn.addEventListener('click', openModal);
				// Listen for close click
				closeBtn.addEventListener('click', closeModal);
				// Listen for outside click
				window.addEventListener('click', outsideClick);

				// Function to open modal
				function openModal(){
				  modal.style.display = 'block';
				}

				// Function to close modal
				function closeModal(){
				  modal.style.display = 'none';
				}

				// Function to close modal if outside click
				function outsideClick(e){
				  if(e.target == modal){
				    modal.style.display = 'none';
				  }
				}

    });
