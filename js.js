let arr = ["1", "2", "3","4","5"];
let str = "mot hai ba bon";
let text ="";

text = add(2,"3");
text = Number("asd");
  

    function add(a,b){       
        return a/b;
    }

function reverse(s){    

    if(s.lenght < 2){        
        return s;
    }
    let str = s.substring(1,s.lenght - 1);
    return reverse(str) + s.charAt(0);
}

document.getElementById("demo").innerHTML = reverse(str);