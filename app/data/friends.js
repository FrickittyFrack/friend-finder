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

    var slider = document.getElementById("q1");
    
    slider.oninput = function() {
        $("#user-choice").text(slider.value);
    };

};