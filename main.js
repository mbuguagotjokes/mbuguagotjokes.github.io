document.addEventListener("DOMContentLoaded", function(){
    const silverSurfer = document.querySelector(".silver");

    const silverProfiles = [
        "images/roll/silver-one-100x100.jpg",
        "images/roll/silver-two-100x100.jpg",
        "images/roll/silver-three-100x100.jpg",
        "images/roll/silver-four-100x100.jpg",
        "images/roll/silver-five-100x100.jpg"
    ];

    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let randSilver = random(0, silverProfiles.length - 1);
    let urlSilver = `url(${silverProfiles[randSilver]})`;

    silverSurfer.style.backgroundImage = urlSilver;
    console.log(`silverProfiles-image: ${silverProfiles[randSilver]}`);


    const imgContainer = document.querySelector(".img-container");

    const imgProfiles = [
        "images/roll/one.jpg",
        "images/roll/two.jpg",
        "images/roll/three.jpg",
        "images/roll/four.jpg",
        "images/roll/five.jpg",
        "images/roll/six.jpg",
        "images/roll/seven.jpg",
        "images/roll/eight.jpg",
        "images/roll/nine.jpg",
        "images/roll/ten.jpg"
    ];

    let randImg = random(0, imgProfiles.length - 1);
    let urlImg = `url(${imgProfiles[randImg]})`;

    imgContainer.style.backgroundImage = urlImg;

    console.log(`imgProfiles-image: ${imgProfiles[randImg]}`);

    // copyright
    const now = new Date();
    document.querySelector("#year").innerHTML = `© ${now.getFullYear()}`;


    //contact form
    if (document.title == "Contact Me - @mbuguaaaaaa"){
        document.querySelector("form").addEventListener("submit", function(event){
            event.preventDefault();
            rname = document.querySelector("#name-contact").value;

            alert(`Well ${rname}, there is no server-side functionality yet but there will be, soon.`);
        });
    }

    const imageInfoPopup = document.querySelector("#img-pop-up");
    const imageSilver = document.querySelector(".silver");
    const imageContainer = document.querySelector(".img-container");
    const closePopup = document.querySelector("#close-pop-up");
    const PopupInfo = document.querySelector("#img-pop-up-imginfo");

    document.addEventListener('click', function(event){
        if (event.target == imageSilver || event.target == imageContainer){
            console.log("image containers clicked");
            imageInfoPopup.style.visibility = "visible";

            // add content to the popup
            PopupInfo.innerHTML = `
            <h4>Info on images displayed</h4>
            <p>generated from an array of <a href="images/roll/" style="color: #edf2f4">images</a> downloaded from pintrest</p>
            <p>Some image: ${imgProfiles[randImg]}</p>
            <p>Silver-surfer: ${silverProfiles[randSilver]}</p>
            `;
        }
        // close the popup
        if (event.target.closest("#close-pop-up")){
            console.log(event.target);
            imageInfoPopup.style.visibility = "hidden";
        }
    });

});
