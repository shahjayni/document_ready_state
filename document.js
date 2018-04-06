alert(document.readyState);
    var flag_test = 0;    
    setInterval("if(flag_test == 0) { test();}" , 5000);
function test()
{   
  if(document.readyState == 'complete')
  {
    alert(document.readyState);
    flag_test = 1
    //return false;
  }
}
