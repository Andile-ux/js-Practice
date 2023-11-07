let school ={

    name : 'st Maria',
    est : 2008,
    location : 'Mpumalanga',
    0 : 1000,

    DisplayInfo: function () {
        console.log(`Welcome to ${school.name}, located at ${school.location} and was established in ${school.est}.`)
    }
    }
    school.DisplayInfo();