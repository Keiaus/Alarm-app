function time()
{
   var hour = new Date();
   document.writeln(hour.getHours() + ":");

   var minute = new Date();
   document.writeln(minute.getMinutes() + ":");

   var second = new Date();
   document.writeln(second.getSeconds()); 

   var displayTime = document.getElementById("canvas").style.background="aqua";
}

