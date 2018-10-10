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
    });


		// Some random colors
		const colors = ["#0016E0", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

		const numBalls = 50;
		const balls = [];

		for (let i = 0; i < numBalls; i++) {
		  let ball = document.createElement("div");
		  ball.classList.add("ball");
		  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
		  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
		  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
		  ball.style.transform = `scale(${Math.random()})`;
		  ball.style.width = `${Math.random()}em`;
		  ball.style.height = ball.style.width;

		  balls.push(ball);
		  document.body.append(ball);
		}

		// Keyframes
		balls.forEach((el, i, ra) => {
		  let to = {
		    x: Math.random() * (i % 2 === 0 ? -11 : 11),
		    y: Math.random() * 12
		  };

		  let anim = el.animate(
		    [
		      { transform: "translate(0, 0)" },
		      { transform: `translate(${to.x}rem, ${to.y}rem)` }
		    ],
		    {
		      duration: (Math.random() + 1) * 2000, // random duration
		      direction: "alternate",
		      fill: "both",
		      iterations: Infinity,
		      easing: "ease-in-out"
		    }
		  );
		});
