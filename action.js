scores=["(1)","(1 1), (2)","(1 1 1), (1 2), (3)","(1 1 1 1), (1 1 2), (1 3), (2,2)","(1 1 1 1 1), (1 1 1 2), (1 1 3), (1 4), (2 3), (1 2 2), (5)"]
document.getElementById("btn").addEventListener("click", func);

function func() {
    team1=document.getElementById("team1").value.split(" ")
    team2=document.getElementById("team2").value.split(" ")
    goal1=parseInt(document.getElementById("goal1").value)
    goal2=parseInt(document.getElementById("goal2").value)
    if(team1.length>11 || team2.length>11)
    {
        alert("more than 11 players in one of the teams")
    }
    else if(goal1+goal2>7)
    {
        console.log(goal1+goal2)
        alert("more than 7 goals in total")
    }
    else if(goal1>5)
    {
        alert("more than 5 goals scored by first team")
    }
    else if(goal2>5)
    {
        alert("more than 5 goals scored by second team")
    }else
    {
        if(goal1>goal2)
        {
            document.getElementById("winner").innerText="1st team won"
        }
        else if(goal1<goal2)
        {
            document.getElementById("winner").innerText="2nd team won"
        }
        else
        {
            document.getElementById("winner").innerText="draw"
        }
        team1.forEach(element => console.log(element))
        team2.forEach(element => console.log(element))
        document.getElementById("result1").innerText=scores[goal1-1]
        document.getElementById("result2").innerText=scores[goal2-1]
    }
}