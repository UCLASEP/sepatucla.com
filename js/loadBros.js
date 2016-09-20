$(document).ready(function()
	{
		$.post("../php/loadBros.php",
	    function (data) 
	    {
         	$('#testing').html(data);
        }
    );
});