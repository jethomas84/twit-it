$(document).ready(function() {
//$('body *').replace(RegExp("(^|[^@\w])@(\w{1,15})\b"), "DERRRRRR");
$(document.body).find('*').each(function() {
var text = $(this).text(); //getting just current node text
text = text.replace(RegExp("(^|[^@\w])@(\w{1,15})\b"), "DERRRRRR")

});
	//$("p").replaceWith( "<b>Paragraph. </b>" );

	//THIS JAVASCRIPT FUNCTION DOES THE WORK AND RETURNS THE 
	  //STRING WITH HTML ANCHOR LINKS	
	  //function replaceWithFollowButton(text) {
	  	//var exp = /(^|[^@\w])@(\w{1,15})\b/;
	    //var exp = new RegExp("?<=^|(?<=[^a-zA-Z0-9-\.]))#([A-Za-z]+[A-Za-z0-9-]+");
	    //return text.replace(exp,"<a href='$1'>$1</a>"); 
	  //}
	  //THIS IS A JQUERY STATEMENT THAT GRABS A CHUNK OF
	  //TEXT AND REPLACES IT WITH THE UPDATED STRING
	  
	  //$(document.body).find('*').each(function() {
	  //$("#content").each(function(i){
    //var text = $(this).html();
    //$(this).html(replaceWithFollowButton(text));
  //});
});
