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

window.onload = function(){

    question1();

    function question1() {

        var questionBank1 = [
            {
                a1: "Please leave me alone",
                a2: "I like to stay solitary",
                a3: "I'm game for alone time or social time",
                a4: "I like hanging with friends",
                a5: "I need people like I need water"
            },
            {
                a1: "I do not wake before noon",
                a2: "I prefer the nights",
                a3: "Can I be both?",
                a4: "I like mornings",
                a5: "If I haven't worked out, had breakfast, and answered work emails by 6am, I am a failure"
            },
            {
                a1: "The other parts of the world hold nothing of value to me",
                a2: "I'm okay to move around every few years",
                a3: "Move? Stay? Whatever.",
                a4: "I travel when I can",
                a5: "I can't stay put for long"
            },
            {
                a1: "No.",
                a2: "I had a fish once",
                a3: "Animals are cool",
                a4: "I've always had pets in my home",
                a5: "YES!"
            },
            {
                a1: "What is this 'outdoor'?",
                a2: "I prefer indoor stuff",
                a3: "Wherever I feel like chilling",
                a4: "I tend to favor the outdoors",
                a5: "FRESH AIR IS THE ONLY AIR"
            },
            {
                a1: "Ew",
                a2: "It's okay",
                a3: "Pizza is good",
                a4: "I love pizza",
                a5: "Pizza is love. Pizza is life."
            },
            {
                a1: "Social media is a plague on the human race",
                a2: "I check stuff once in awhile",
                a3: "I use mostly to keep up with the goings on",
                a4: "I'm on social media for several hours every day",
                a5: "Currently in the process of checking Twitter"
            },
            {
                a1: "The colder the better. BRING ON THE SNOW!",
                a2: "Sweater Weather is my favorite season",
                a3: "Ya know, whatever",
                a4: "Cool but not cold, warm but not hot",
                a5: "I'd be happy to never see a cloud again"
            },
            {
                a1: "Well, I'm currently taking a quiz to find a friend...",
                a2: "I can, but not easily",
                a3: "Kinda",
                a4: "I certainly don't struggle",
                a5: "People just flock to me for friendship"
            },
            {
                a1: "My spirit animal is a sloth",
                a2: "I'm pretty calm",
                a3: "I am the embodiment of neutrality",
                a4: "I can be exciteable ",
                a5: "WOOOOOOOOOOOOOO"
            }
        ];
        
        var slider = document.getElementById("q1");
        var input = slider.value;
    
        slider.oninput = function() {
            input = slider.value;

            switch(input) {
                case "1":
                $("#user-choice").text(questionBank1[0].a1);
                break;

                case "2":
                $("#user-choice").text(questionBank1[0].a2);
                break;

                case "3":
                $("#user-choice").text(questionBank1[0].a3);
                break;

                case "4":
                $("#user-choice").text(questionBank1[0].a4);
                break;

                case "5":
                $("#user-choice").text(questionBank1[0].a5);
                break;
            };
            
        };
    };
    

};