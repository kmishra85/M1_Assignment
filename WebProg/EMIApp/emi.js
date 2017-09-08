
function val()
{	
	
	flag=true
	// Taking Values from form
	number=document.form1.cno.value;
	name  =document.form1.cnm.value;
	email =document.form1.email.value;
	amount=document.form1.amt.value;
	//alert(units)
	error=""
	//Regular Expression
	number_val=/^[0-9]{8}$/
	name_val  =/^[A-Z]{1}[a-z]{3,100}$/
	email_val   =/^[a-z0-9]+\@[a-z0-9]+\.[a-z]+[\.]?[a-z]+$/
	amt_val  =/^[0-9]+$/
	if(email_val.test(email)==false)
	{
	 error+="Email is not valid \n"
	 flag  =false
	 
	 /*For debugging
	 alert("Error in email")*/
	}
	
	if(amt_val.test(amount)==false)
	{
	 error+="Amount is not valid \n"
	 flag  =false
	 
	 /*For debugging
	 alert("Error in email")*/
	}
	if(name_val.test(name)==false)
	{
	 error+="Name should be start with capital letter \n"
	 flag  =false
	 
	 /*For debugging
	 alert("Error in email")*/

	}
	/*
	else Debugging
		alert("Enter your name ") */
	
	if(number_val.test(number)==false)
	{
	 error+="Invalid number\n"
	 flag  =false
	}
	if(flag==false)
{
alert(error);
}	
else
{
emi =emicalculator()
msg="Number:"+number+"\n Name:"+name+"\n Email:"+email+"\nLoan Amt:"+amount+"\n EMI:"+emi;
alert(msg);
//newWindow();
}
	  
}
function newWindow()
{
alert("Welcome")
var cno=document.form1.cno.value;
var cname=document.form1.cnm.value;
var emailadd=document.form1.email.value;
//var amt=document.form1.amt.value;
//var dur=document.form1.dur.value;
var emiresult=emicalculator();
var mywindow;

mywindow=open('','EMIApp','height=300','width=700','top=200','left=500');
mywindow.document.write("<html><head><title>invoice</title></head></html><br>");
mywindow.document.write("<tr><td>A/c No:</td><td>"+cno+"</td></tr><br>");
mywindow.document.write("<tr><td>Name:</td><td>"+cname+"</td></tr><br>");
mywindow.document.write("<tr><td>Email:</td><td>"+emailadd+"</td></tr><br>");
mywindow.document.write("<tr><td>Emi:</td><td>"+emiresult+"</td></tr>");
mywindow.focus();
}

function emicalculator()
{
var emi 
var amt=parseInt(document.form1.amt.value);
var dur=parseInt(document.form1.dur.value);

if(amt<=100000 && amt>0)
{
emi=(amt*0.05)/dur;
}
else if(amt>100000 && amt<200000)
{
emi=(amt*0.07)/dur;
}
else if(amt>200000)
{
emi=(amt*0.08)/dur;
}
return emi;
}





