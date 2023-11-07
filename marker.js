let tekeResult = prompt('please enter your result: ');
let result = parseInt(tekeResult);
let distinction = result>=85;
let excemption = result >= 75 && result < 85;
let achieved = result>= 50 && result < 75;
let notAchieved = result < 50 && result >= 0;
let didNotWrite = 0;


function marker()
{
    if(result>0)
    {
        if(distinction)
        {
            console.log("distinction");

        }
        if(excemption)
        {
            console.log("excemption");

        }
        if(achieved)
        {
            console.log("achieved");

        }
        if(notAchieved)
        {
            console.log("not achieved");

        }
        
    }
    else
    {
        console.log("did not write");
    };
}

function switching() 
{
    
    switch (result)
        {
        case  distinction :
            console.log("distinction");
            break;

        case excemption:
            console.log("exemption");
            break;

        case achieved:
            console.log("achieved");
            break;

        case notAchieved:
            console.log("not achieved");
            break;

        default:
            
            console.log("did not write");
    }
   
}

// function calls
pn();
switching();




