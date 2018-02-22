function kreirajMatricu()
{
      var ni = document.getElementById('matrica');
	    var n = document.getElementById("n").value;
      var m = document.getElementById("m").value;
      var a = '';
        for(var i = 1; i <= n; i++)
        {
	        for(var j = 1; j <= m; j++)
            {
                a += '<input type="text" id="A'+i+'_' +j +'"  name="'+i+'_' +j +'" value="0" size = "10" >';    
            }
	            a+='<br> \n';
        }
      ni.innerHTML = a;
}

/* function random_boja() {
    return "#" + (Math.round(Math.random() * 0XFFFFFF)).toString(16);
} */


function random_boja() {
  var boja = '#' + (Math.random().toString(16) + "000000").substring(2,8);
  document.getElementsByTagName("body")[0].style.backgroundColor = boja;
}

      