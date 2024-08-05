// dom-tree
document.getElementById("btn-hapinnes").addEventListener("click" , function(){
  document.querySelector('.img').style.display = "inline";
  document.getElementById("btn-hapinnes").disabled = true;
  document.getElementById("btn-sadness").disabled = false;
});
document.getElementById("btn-sadness").addEventListener("click" , function(){
    document.querySelector('.img').style.display = "inline";
    document.getElementById("btn-hapinnes").disabled = false;
    document.getElementById("btn-sadness").disabled = true;
  });


