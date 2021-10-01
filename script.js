var y = Math.floor(Math.random() *20 + 1);
document.getElementById("display").innerHTML = "You are ready to play👍"

var guess = 1;
document.getElementById("resetnum").onclick = function(){
    location.reload();
    x = 0;
    var y = Math.floor(Math.random() *20 + 1)
}

document.getElementById("submitguess").onclick = function(){
    var x = document.getElementById("guessField").value;
    if(Number.isInteger(Number(x)) == true)
    {
        if(x>0 && x<=20)
        {
            if(x == y)
            {
                document.getElementById("display").innerHTML = ("Congratulations!!!🎉 You guessed it right in " +guess+ " attempt");
            }
            else if(x > y)
            {
                guess++;
                document.getElementById("display").innerHTML = ("OOPS Sorry!!!😓 Try a smaller number");
            }
            else
            {
                guess++;
                document.getElementById("display").innerHTML = ("OOPS Sorry!!!😓 Try a greater number");
            }
        }
        else
        {
            document.getElementById("display").innerHTML = ("Enter the number in given range only. Try Again");
        }
    }
    else{
        document.getElementById("display").innerHTML = ("You have entered something else. Try Again");
    }
}