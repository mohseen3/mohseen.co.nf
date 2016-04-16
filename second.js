var help_home = "Glad you asked :)<br>" + "<br>" +
" - home <br>" +
" - design <br>" +
" - resume <br>" +
" - training <br>" +
" - contact <br>" +
" - blog <br>" +
" - about";

var help_design = "Glad you asked :)<br>" + "<br>" +
" - I have worked on a lot of <br>" +
" - graphic design, which has involved <br>" +
" - posters, <br>" +
" - brochures, <br>" +
" - web mockups, <br>" +
" - animation sprites, <br>" +
" - Vector Illustrations, <br>" +
" - and web design <br>"  +
" - <a href='http://www.mohseen.co.nf/'>Design Samples</a>";

var help_resume = "Glad you asked :)<br>" + "<br>" +
" - Work <br>" +
" - Under <br>" +
" - Progress <br>" +
" - Sorry :P <br>" +
" - In the meantime check out <br>" +
" - the other sections";

var help_blog = "Glad you asked :)<br>" + "<br>" +
" - Work <br>" +
" - Under <br>" +
" - Progress <br>" +
" - Sorry :P <br>" +
" - In the meantime check out <br>" +
" - the other sections";

var help_contact = "Glad you asked :)<br>" + "<br>" +
" - <a href='https://www.facebook.com/momo3300'>Facebook</a> <br>" +
" - <a href='@breaking_momo'>Instagram (@breaking_momo)</a> <br>" +
" - <a href='https://plus.google.com/+mohseenmukaddam/posts'>Google+</a> <br>" +
" - <a href='https://twitter.com/ManUBayern'>Twitter</a> <br>" +
" - <a href='https://in.linkedin.com/in/mohseen-mukaddam-b608a26a'>LinkedIn</a> <br>" +
" - <a href='mailto:mohseenrm@hotmail.com'>Plain old mail</a>";

var help_training = "Glad you asked :)<br>" + "<br>" +
" - 1RM for lifts (RAW):            |         Stats: <br>" +
" - Squat: 170kg (375lbs)           |         Bodyweight: 86kg<br>" +
" - Bench: 125kg (275lbs)           |         Height : 6ft (184cm)<br>" +
" - Deadlift: 235kg (518lbs)        |         Powerlevel: 9000+ (DBZ Reference)<br>" +
" - Current Program: <a href='http://www.powerliftingtowin.com/the-juggernaut-method/'>Juggernaut method</a> (Effective: 3rd April 2016)<br>" +
" - I am far to lazy to update it on a regular basis<br>" +
" - You can very well assume I have gotten stronger and leaner since the last update";

var help_about = "Glad you asked :)<br>" + "<br>" +
" - This website was created with some sort of rebellion in mind, <br>" +
" - It however morphed into something I enjoyed creating, <br>" +
" - Far off from a conventional website, but then again <br>" +
" - Why should it be one? <br>" +
" - I am far to lazy to update it on a regular basis (or automate it) <br>" +
" - but I hope this intrigued you a bit, if not, I am open to new ideas ;)";

$(document).ready(function () {
    //Loop through all Labels with class 'editable'.
    $(".terminal-prompt").each(function () {
        //Reference the Label.
        var label = $(this);
 
        //Add a TextBox next to the Label.
        label.after("<input class='terminal-input' type = 'text' style = 'display:none' />");
 
        //Reference the TextBox.
        var textbox = $(this).next();
 
        //Set the name attribute of the TextBox.
        textbox[0].name = this.id.replace("lbl", "txt");
 
        //Assign the value of Label to TextBox.
        textbox.val(label.html());
		
		//changed here for onload page
		label.hide();
		textbox.show().focus();
 
        //When Label is clicked, hide Label and show TextBox.
        label.click(function () {
            $(this).hide();
            $(this).next().show().focus();
        });
		
        //When focus is lost from TextBox, hide TextBox and show Label.
		/*
        textbox.focusout(function () {
            $(this).hide();
            $(this).prev().html($(this).val());
            $(this).prev().show();
        });*/
		textbox.focusout(function (){
			$(this).focus();
		});
		/*
		textbox.keypress(function(e){
			var key = e.which;
			if(key == 13){
				$(this).hide();
				$(this).prev().html($(this).val());
				$(this).prev().show();
			}
		});
		*/
		
		textbox.keypress(function(e){
			var key = e.which;
			if(key == 13){

				var command = $(this).val();
				$(this).val("");
				command = command.toLowerCase();

				var activity = $("#activity").html();
				var terminal = $("#terminal-output");

				if (activity == "home") {
					switch(command){
						case "help":
							terminal.html(help_home);
							terminal.show();
							break;
						case "home":
							terminal.html("<span>Current view : Activity</span>");
							terminal.show();
							break;
						case "design":
							$("#activity").html("design");
							break;
						case "resume":
							$("#activity").html("resume");
							break;
						case "contact":
							$("#activity").html("contact");
							break;
						case "blog":
							$("#activity").html("blog");
							break;
						case "training":
							$("#activity").html("training");
							break;
						case "about":
							$("#activity").html("about");
							break;
						default:
							terminal.html("<span class='help-output'>Invalid command type <i>help</i> or <i>home</i></span>");
							//$(this).val("help was not typed");
							terminal.show();
							break;
					}
				}

				if (activity == "resume") {
					switch(command){
						case "help":
							terminal.html(help_resume);
							break;
						case "home":
							$("#activity").html("home");
							break;
						case "design":
							$("#activity").html("design");
							break;
						case "contact":
							$("#activity").html("contact");
							break;
						case "training":
							$("#activity").html("training");
							break;
						case "blog":
							$("#activity").html("blog");
							break;
						case "about":
							$("#activity").html("about");
							break;
						default:
							terminal.html("<span class='help-output'>Invalid command type <i>help</i> or <i>home</i></span>");
							//$(this).val("help was not typed");
							terminal.show();
							break;
					}
				};

				if (activity == "design") {
					switch(command){
						case "help":
							terminal.html(help_design);
							break;
						case "home":
							$("#activity").html("home");
							break;
						case "resume":
							$("#activity").html("resume");
							break;
						case "contact":
							$("#activity").html("contact");
							break;
						case "training":
							$("#activity").html("training");
							break;
						case "blog":
							$("#activity").html("blog");
							break;
						case "about":
							$("#activity").html("about");
							break;
						default:
							terminal.html("<span class='help-output'>Invalid command type <i>help</i> or <i>home</i></span>");
							//$(this).val("help was not typed");
							terminal.show();
							break;
					}
				};

				if (activity == "contact") {
					switch(command){
						case "help":
							terminal.html(help_contact);
							break;
						case "design":
							$("#activity").html("design");
							break;
						case "resume":
							$("#activity").html("resume");
							break;
						case "training":
							$("#activity").html("training");
							break;
						case "blog":
							$("#activity").html("blog");
							break;
						case "about":
							$("#activity").html("about");
							break;
						case "home":
							$("#activity").html("home");
							break;
						default:
							terminal.html("<span class='help-output'>Invalid command type <i>help</i> or <i>home</i></span>");
							//$(this).val("help was not typed");
							terminal.show();
							break;
					}
				};

				if (activity == "blog") {
					switch(command){
						case "help":
							terminal.html(help_blog);
							break;
						case "design":
							$("#activity").html("design");
							break;
						case "resume":
							$("#activity").html("resume");
							break;
						case "training":
							$("#activity").html("training");
							break;
						case "contact":
							$("#activity").html("contact");
							break;
						case "about":
							$("#activity").html("about");
							break;
						case "home":
							$("#activity").html("home");
							break;
						default:
							terminal.html("<span class='help-output'>Invalid command type <i>help</i> or <i>home</i></span>");
							//$(this).val("help was not typed");
							terminal.show();
							break;
					}
				};

				if (activity == "about") {
					switch(command){
						case "help":
							terminal.html(help_about);
							break;
						case "design":
							$("#activity").html("design");
							break;
						case "resume":
							$("#activity").html("resume");
							break;
						case "training":
							$("#activity").html("training");
							break;
						case "contact":
							$("#activity").html("contact");
							break;
						case "blog":
							$("#activity").html("blog");
							break;
						case "home":
							$("#activity").html("home");
							break;
						default:
							terminal.html("<span class='help-output'>Invalid command type <i>help</i> or <i>home</i></span>");
							//$(this).val("help was not typed");
							terminal.show();
							break;
					}
				};

				if (activity == "training") {
					switch(command){
						case "help":
							terminal.html(help_training);
							break;
						case "home":
							$("#activity").html("home");
							break;
						case "design":
							$("#activity").html("design");
							break;
						case "resume":
							$("#activity").html("resume");
							break;
						case "contact":
							$("#activity").html("contact");
							break;
						case "blog":
							$("#activity").html("blog");
							break;
						case "about":
							$("#activity").html("about");
							break;
						default:
							terminal.html("<span class='help-output'>Invalid command type <i>help</i> or <i>home</i></span>");
							//$(this).val("help was not typed");
							terminal.show();
							break;
					}
				};
				//$(this).val("override!");
				$(this).focus();
			}
		});
    });
});