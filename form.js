function validation() 
      	{ 
      		var flag=0
      		var namestring = /(^['A-Za-z']{1,20})$/
      		var name = document.getElementById("name").value;
      		if (name== "") 
      		{
      			document.getElementById("nameError").innerHTML="Enter Name"
      			flag=1; 
      		}
      		else if (!name.match(namestring)) 
      		{
      			document.getElementById("nameError").innerHTML="Only Character Data";
      			flag=1;
      		}
      		else
            {
              document.getElementById("nameError").innerHTML="";
            }
          var mobilePattern = /(^[6-9]{1}[0-9]{9})$/
      		var mobile = document.getElementById("mobile").value;
      		if(mobile == "")
      		{
      			document.getElementById("mobileError").innerHTML="Enter Mobile Number";
      			flag=1;
      		}
      		else if(!mobile.match(mobilePattern)) 
      		{
              document.getElementById("mobileError").innerHTML="Mobile no. must be of 10 digits and first digit from (6-9) range"
              flag=1;
      		}
          else
            {
              document.getElementById("mobileError").innerHTML="";
            }

      		var f = document.getElementById("gFemale").checked;
      	  var m = document.getElementById("gMale").checked;
      	    if(f == false && m == false)
      	    {
      	    	document.getElementById('genderError').innerHTML= "Select Gender";
      	    	flag=1;
      	    }
      	    else
      	    {
      	    	document.getElementById('genderError').innerHTML="";
      	    }
      	    var city= document.getElementById("city").value;
      	    if(city=='')
      	    {
      	    	document.getElementById("cityError").innerHTML="Select City"
      	    	flag=1;
      	    }
      	if(flag==1)
      	 {
      		return false;
      	 }
      	} 