
window.onload = function(){

    // Setting slider variables

    var slider1 = document.getElementById("q1");
    var slider2 = document.getElementById("q2");
    var slider3 = document.getElementById("q3");
    var slider4 = document.getElementById("q4");
    var slider5 = document.getElementById("q5");
    var slider6 = document.getElementById("q6");
    var slider7 = document.getElementById("q7");
    var slider8 = document.getElementById("q8");
    var slider9 = document.getElementById("q9");
    var slider10 = document.getElementById("q10");

    // Running all 10 question functions

    question1();
    question2();
    question3();
    question4();
    question5();
    question6();
    question7();
    question8();
    question9();
    question10();

    function question1() {

        var questionBank1 = [
            "Please leave me alone",
            "I like to stay solitary",
            "I'm game for alone time or social time",
            "I like hanging with friends",
            "I need people like I need water"
        ];

        var input = slider1.value;
    
        slider1.oninput = function() {

            input = slider1.value;
            
            switch(input) {
                case "1":
                $("#user-choice1").text(questionBank1[0]);
                break;

                case "2":
                $("#user-choice1").text(questionBank1[1]);
                break;

                case "3":
                $("#user-choice1").text(questionBank1[2]);
                break;

                case "4":
                $("#user-choice1").text(questionBank1[3]);
                break;

                case "5":
                $("#user-choice1").text(questionBank1[4]);
                break;
            };

        };

    };

    function question2() {

        var questionBank2 = [
            "I do not wake before noon",
            "I prefer the nights",
            "Can I be both?",
            "I like mornings",
            "If I haven't worked out, had breakfast, and answered work emails by 6am, I am a failure"
        ];

        var input = slider2.value;
    
        slider2.oninput = function() {

            input = slider2.value;
            
            switch(input) {
                case "1":
                $("#user-choice2").text(questionBank2[0]);
                break;

                case "2":
                $("#user-choice2").text(questionBank2[1]);
                break;

                case "3":
                $("#user-choice2").text(questionBank2[2]);
                break;

                case "4":
                $("#user-choice2").text(questionBank2[3]);
                break;

                case "5":
                $("#user-choice2").text(questionBank2[4]);
                break;
            };

        };

    };

    function question3() {

        var questionBank3 = [
            "The other parts of the world hold nothing of value to me",
            "I'm okay to move around every few years",
            "Move? Stay? Whatever.",
            "I travel when I can",
            "I can't stay put for long"
        ];

        var input = slider3.value;
    
        slider3.oninput = function() {

            input = slider3.value;
            
            switch(input) {
                case "1":
                $("#user-choice3").text(questionBank3[0]);
                break;

                case "2":
                $("#user-choice3").text(questionBank3[1]);
                break;

                case "3":
                $("#user-choice3").text(questionBank3[2]);
                break;

                case "4":
                $("#user-choice3").text(questionBank3[3]);
                break;

                case "5":
                $("#user-choice3").text(questionBank3[4]);
                break;
            };

        };

    };

    function question4() {

        var questionBank4 = [
            "No.",
            "I had a fish once",
            "Animals are cool",
            "I've always had pets in my home",
            "YES!"
        ];

        var input = slider4.value;
    
        slider4.oninput = function() {

            input = slider4.value;
            
            switch(input) {
                case "1":
                $("#user-choice4").text(questionBank4[0]);
                break;

                case "2":
                $("#user-choice4").text(questionBank4[1]);
                break;

                case "3":
                $("#user-choice4").text(questionBank4[2]);
                break;

                case "4":
                $("#user-choice4").text(questionBank4[3]);
                break;

                case "5":
                $("#user-choice4").text(questionBank4[4]);
                break;
            };

        };

    };

    function question5() {

        var questionBank5 = [
            "What is this 'outdoor'?",
            "I prefer indoor stuff",
            "Wherever I feel like chilling",
            "I tend to favor the outdoors",
            "FRESH AIR IS THE ONLY AIR"
        ];

        var input = slider5.value;
    
        slider5.oninput = function() {

            input = slider5.value;
            
            switch(input) {
                case "1":
                $("#user-choice5").text(questionBank5[0]);
                break;

                case "2":
                $("#user-choice5").text(questionBank5[1]);
                break;

                case "3":
                $("#user-choice5").text(questionBank5[2]);
                break;

                case "4":
                $("#user-choice5").text(questionBank5[3]);
                break;

                case "5":
                $("#user-choice5").text(questionBank5[4]);
                break;
            };

        };

    };

    function question6() {

        var questionBank6 = [
            "Ew",
            "It's okay",
            "Pizza is good",
            "I love pizza",
            "Pizza is love. Pizza is life."
        ];

        var input = slider6.value;
    
        slider6.oninput = function() {

            input = slider6.value;
            
            switch(input) {
                case "1":
                $("#user-choice6").text(questionBank6[0]);
                break;

                case "2":
                $("#user-choice6").text(questionBank6[1]);
                break;

                case "3":
                $("#user-choice6").text(questionBank6[2]);
                break;

                case "4":
                $("#user-choice6").text(questionBank6[3]);
                break;

                case "5":
                $("#user-choice6").text(questionBank6[4]);
                break;
            };

        };

    };

    function question7() {

        var questionBank7 = [
            "Social media is a plague on the human race",
            "I check stuff once in awhile",
            "I use mostly to keep up with the goings on",
            "I'm on social media for several hours every day",
            "Currently in the process of checking Twitter"
        ];

        var input = slider7.value;
    
        slider7.oninput = function() {

            input = slider7.value;
            
            switch(input) {
                case "1":
                $("#user-choice7").text(questionBank7[0]);
                break;

                case "2":
                $("#user-choice7").text(questionBank7[1]);
                break;

                case "3":
                $("#user-choice7").text(questionBank7[2]);
                break;

                case "4":
                $("#user-choice7").text(questionBank7[3]);
                break;

                case "5":
                $("#user-choice7").text(questionBank7[4]);
                break;
            };

        };

    };

    function question8() {

        var questionBank8 = [
            "The colder the better. BRING ON THE SNOW!",
            "Sweater Weather is my favorite season",
            "Ya know, whatever",
            "Cool but not cold, warm but not hot",
            "I'd be happy to never see a cloud again"
        ];

        var input = slider8.value;
    
        slider8.oninput = function() {

            input = slider8.value;
            
            switch(input) {
                case "1":
                $("#user-choice8").text(questionBank8[0]);
                break;

                case "2":
                $("#user-choice8").text(questionBank8[1]);
                break;

                case "3":
                $("#user-choice8").text(questionBank8[2]);
                break;

                case "4":
                $("#user-choice8").text(questionBank8[3]);
                break;

                case "5":
                $("#user-choice8").text(questionBank8[4]);
                break;
            };

        };

    };

    function question9() {

        var questionBank9 = [
            "Well, I'm currently taking a quiz to find a friend...",
            "I can, but not easily",
            "Kinda",
            "I certainly don't struggle",
            "People just flock to me for friendship"
        ];

        var input = slider9.value;
    
        slider9.oninput = function() {

            input = slider9.value;
            
            switch(input) {
                case "1":
                $("#user-choice9").text(questionBank9[0]);
                break;

                case "2":
                $("#user-choice9").text(questionBank9[1]);
                break;

                case "3":
                $("#user-choice9").text(questionBank9[2]);
                break;

                case "4":
                $("#user-choice9").text(questionBank9[3]);
                break;

                case "5":
                $("#user-choice9").text(questionBank9[4]);
                break;
            };

        };

    };

    function question10() {

        var questionBank10 = [
            "My spirit animal is a sloth",
            "I'm pretty calm",
            "I am the embodiment of neutrality",
            "I can be exciteable ",
            "WOOOOOOOOOOOOOO"
        ];

        var input = slider10.value;
    
        slider10.oninput = function() {

            input = slider10.value;
            
            switch(input) {
                case "1":
                $("#user-choice10").text(questionBank10[0]);
                break;

                case "2":
                $("#user-choice10").text(questionBank10[1]);
                break;

                case "3":
                $("#user-choice10").text(questionBank10[2]);
                break;

                case "4":
                $("#user-choice10").text(questionBank10[3]);
                break;

                case "5":
                $("#user-choice10").text(questionBank10[4]);
                break;
            };

        };

    };

    // Saving the answer to each question as a variable on click

    $("#submit-btn").on("click", function(e) {
        
        e.preventDefault();

        var fullValue = {
            a1: slider1.value,
            a2: slider2.value,
            a3: slider3.value,
            a4: slider4.value,
            a5: slider5.value,
            a6: slider6.value,
            a7: slider7.value,
            a8: slider8.value,
            a9: slider9.value,
            a10: slider10.value
        };
        
        console.log(fullValue);    
        
        $.post("/api/list-o-people", fullValue)
            .then(function(data) {
                console.log("survey.html", data);
                alert("Please wait");
            });
    });
};


//----------------------------------------------------
// Tried to make the function work within a for loop
// Commented it out because it wasn't working
//----------------------------------------------------

// function question() {

//     var questionBank = [
//         {
//             a1: "Please leave me alone",
//             a2: "I like to stay solitary",
//             a3: "I'm game for alone time or social time",
//             a4: "I like hanging with friends",
//             a5: "I need people like I need water"
//         },
//         {
//             a1: "I do not wake before noon",
//             a2: "I prefer the nights",
//             a3: "Can I be both?",
//             a4: "I like mornings",
//             a5: "If I haven't worked out, had breakfast, and answered work emails by 6am, I am a failure"
//         },
//         {
//             a1: "The other parts of the world hold nothing of value to me",
//             a2: "I'm okay to move around every few years",
//             a3: "Move? Stay? Whatever.",
//             a4: "I travel when I can",
//             a5: "I can't stay put for long"
//         },
//         {
//             a1: "No.",
//             a2: "I had a fish once",
//             a3: "Animals are cool",
//             a4: "I've always had pets in my home",
//             a5: "YES!"
//         },
//         {
//             a1: "What is this 'outdoor'?",
//             a2: "I prefer indoor stuff",
//             a3: "Wherever I feel like chilling",
//             a4: "I tend to favor the outdoors",
//             a5: "FRESH AIR IS THE ONLY AIR"
//         },
//         {
//             a1: "Ew",
//             a2: "It's okay",
//             a3: "Pizza is good",
//             a4: "I love pizza",
//             a5: "Pizza is love. Pizza is life."
//         },
//         {
//             a1: "Social media is a plague on the human race",
//             a2: "I check stuff once in awhile",
//             a3: "I use mostly to keep up with the goings on",
//             a4: "I'm on social media for several hours every day",
//             a5: "Currently in the process of checking Twitter"
//         },
//         {
//             a1: "The colder the better. BRING ON THE SNOW!",
//             a2: "Sweater Weather is my favorite season",
//             a3: "Ya know, whatever",
//             a4: "Cool but not cold, warm but not hot",
//             a5: "I'd be happy to never see a cloud again"
//         },
//         {
//             a1: "Well, I'm currently taking a quiz to find a friend...",
//             a2: "I can, but not easily",
//             a3: "Kinda",
//             a4: "I certainly don't struggle",
//             a5: "People just flock to me for friendship"
//         },
//         {
//             a1: "My spirit animal is a sloth",
//             a2: "I'm pretty calm",
//             a3: "I am the embodiment of neutrality",
//             a4: "I can be exciteable ",
//             a5: "WOOOOOOOOOOOOOO"
//         }
//     ];

//     for(var i = 1; i < questionBank.length; i++) {
        
//         var slider = document.getElementById("q" + i);
//         var input = slider.value;
    
//         slider.oninput = function() {

//             input = slider.value;
            
//             for(var j = 0; j < questionBank.length; j++) {
//                 input = slider.value;

//                 switch(input) {
//                     case "1":
//                     $("#user-choice" + j).text(questionBank[j].a1);
//                     break;

//                     case "2":
//                     $("#user-choice" + j).text(questionBank[j].a2);
//                     break;

//                     case "3":
//                     $("#user-choice" + j).text(questionBank[j].a3);
//                     break;

//                     case "4":
//                     $("#user-choice" + j).text(questionBank[j].a4);
//                     break;

//                     case "5":
//                     $("#user-choice" + j).text(questionBank[j].a5);
//                     break;
//                 };
//             };
//         };
//     };
// };


//------------------------------------------------
//-------Original Questions written out-----------
//------------------------------------------------

// Are you more Introverted or Extraverted?
    // Please leave me alone
    // I like to stay solitary
    // I'm game for alone time or social time
    // I like hanging with friends
    // I need people like I need water
// Night Owl or Early Bird?
    // I do not wake before noon
    // I prefer the nights
    // Can I be both?
    // I like mornings
    // If I haven't worked out, had breakfast, and answered work emails by 6am, I am a failure
// Do you like to stay put or travel about?
    // The other parts of the world hold nothing of value to me
    // I'm okay to move around every few years
    // Move? Stay? Whatever.
    // I travel when I can
    // I can't stay put for long
// Do you like animals?
    // No.
    // I had a fish once
    // Animals are cool
    // I've always had pets in my home
    // YES!
// Do you prefer indoor activities or outdoor activities?
    // What is this "outdoor"?
    // I prefer indoor stuff
    // Wherever I feel like chilling
    // I tend to favor the outdoors
    // FRESH AIR IS THE ONLY AIR
// Pizza?
    // Ew
    // It's okay
    // Pizza is good
    // I love pizza
    // Pizza is love. Pizza is life.
// How into Social media are you?
    // Social media is a plague on the human race
    // I check stuff once in awhile
    // I use mostly to keep up with the goings on
    // I'm on social media for several hours every day
    // Currently in the process of checking Twitter
// How do you prefer the weather?
    // The colder the better. BRING ON THE SNOW!
    // Sweater Weather is my favorite season
    // Ya know, whatever
    // Cool but not cold, warm but not hot
    // I'd be happy to never see a cloud again
// Do you normally make friends easily?
    // Well, I'm currently taking a quiz to find a friend...
    // I can, but not easily
    // Kinda
    // I certainly don't struggle
    // People just flock to me for friendship
// Are you more relaxed or energized?
    // My spirit animal is a sloth
    // I'm pretty calm
    // I am the embodiment of neutrality
    // I can be exciteable 
    // WOOOOOOOOOOOOOO