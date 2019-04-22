function count() {
  var str = document.getElementById("myText").value;
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  for(var x = 0; x < str.length ; x++)
  {
      if (vowel_list.indexOf(str[x]) !== -1)
    {
        vcount += 1;

    }

  }
  //console.log(vcount);
  document.getElementById("result").innerHTML = vcount;
}

function goclear(){
  document.getElementById("myText").value = "";

}
