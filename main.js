let data = {
    texts: [
        {
            name: "EL1 - Vénus Anadyomène",
            book: "Cahiers de Douai",
            author: "Arthur Rimbaud",
            date: 1870
        },

        {
            name: "EL2 - Le Pain",
            book: "Le Parti pris des choses",
            author: "Francis Ponge",
            date: 1942
        },

        {
            name: "EL3 - Une Charogne",
            book: "Les Fleurs du Mal",
            author: "Charles Baudelaire",
            date: 1857
        },

        {
            name: "EL4 - À une passante",
            book: "Les Fleurs du Mal",
            author: "Charles Baudelaire",
            date: 1857
        },

        {
            name: "EL5 - Spleen (4)",
            book: "Les Fleurs du Mal",
            author: "Charles Baudelaire",
            date: 1857
        },

        {
            name: "EL6 - «L'arrivée à la Cour»",
            book: "La Princesse de Clèves",
            author: "Madame de Lafayette",
            date: 1678
        },

        {
            name: "EL7 - «Le Bal»",
            book: "La Princesse de Clèves",
            author: "Madame de Lafayette",
            date: 1678
        },

        {
            name: "EL8 - «Le Dénouement»",
            book: "La Princesse de Clèves",
            author: "Madame de Lafayette",
            date: 1678
        },

        {
            name: "EL9 - Le prologue",
            book: "Juste la fin du monde",
            author: "Jean-Luc Lagarce",
            date: 1990
        },

        {
            name: "EL10 - La Mère",
            book: "Juste la fin du monde",
            author: "Jean-Luc Lagarce",
            date: 1990
        },

        {
            name: "EL11 - part. II, Sc. 3 (La fratrie)",
            book: "Juste la fin du monde",
            author: "Jean-Luc Lagarce",
            date: 1990
        },

        {
            name: "EL12 - Extrait",
            book: "La Place",
            author: "Annie Ernaux",
            date: 1983
        },

        {
            name: "EL13 - Act. III, Sc. 2",
            book: "Les Fourberies de Scapin",
            author: "Molière",
            date: 1671
        },

        {
            name: "EL14 - Le préambule",
            book: "Décl. Droits Femme et Citoyenne",
            author: "Olympe de Gouges",
            date: 1791
        },

    ],

    questions: [
        [
            "vénus 1",
            "vénus 2",
            "vénus 3"
        ],

        [
            "le pain 1",
            "le pain 2",
            "le pain 3"
        ],

        [
            "une charogne 1",
            "une charogne 2",
            "une charogne 3"
        ],

        [
            "a une passante 1",
            "a une passante 2",
            "a une passante 3"
        ],

        [
            "spleen 1",
            "spleen 2",
            "spleen 3"
        ],

        [
            "l'arrivée a la cour 1",
            "l'arrivée a la cour 2",
            "l'arrivée a la cour 3"
        ],

        [
            "le bal 1",
            "le bal 2",
            "le bal 3"
        ]
    ]
};



$("#wrapper > .intro .button").on("click", () => {
    $("#wrapper > .intro").css("display", "none");

    random();

    $("#wrapper > .reveal").css("display", "");
});

function random() {
    let txt_index = Math.floor(Math.random() * data.texts.length),
        txt = data.texts[txt_index],
        question = data.questions[txt_index][Math.floor(Math.random() * data.questions[txt_index].length)];

    $("#wrapper > .reveal .data_text").html(txt.name);
    $("#wrapper > .reveal p.infos").html("<span class='underline'>"+txt.book+"</span>, <br>"+txt.author+", "+txt.date);
    //$("#wrapper > .reveal .data_question").html(question);
    $("#wrapper > .pres > h1").html("Présentation<span>"+txt.name+"</span>")
}



$("#wrapper > .reveal .block .button").on("click", () => {
    $("#wrapper > .reveal").css("display", "none");
    $("#wrapper > .pres").css("display", "");

    state = 0;
    $("#wrapper > .pres .block .button").html("Continuer<p>Étude linéaire</p>");
    $("#wrapper > .pres .texts .intro").addClass("active");
    $("#wrapper > .pres .block .button").css("background-color", "#0074D9");
    start_chrono();
});


let chrono = null,
    dates = [
        null,
        null,
        null,
        null,
        null
    ]
    state = null;

function start_chrono() {
    dates[0] = new Date().getTime();

    clearInterval(chrono);

    chrono = setInterval(function() {
        $("#wrapper > .pres > .texts > div:nth-child("+(state+1)+") span").html(fancyTime(dates[state]));
        $("#wrapper > .pres > .bar > div:nth-child("+(state+1)+")").css("height", fancyHeight(dates[state]));

        if (((new Date().getTime() - dates[0])/1000) >= 720) {
            clearInterval(chrono);

            $("#wrapper > .pres .block .button").css("background-color", "#F012BE");
            $("#wrapper > .pres .block .button").html("Outch...<p>C'est un peu long !</p>");
            $("#wrapper > .pres .block > p").html("(c'est le moment de screen)");
        }
    }, 1000);
}

function fancyHeight(time) {
    let diff = (new Date().getTime() - time)/1000,
        percent = diff/720, // secondes
        height = percent * 300; // pixels

    return height+"px";
}

function fancyTime(time) {
    let diff = (new Date().getTime() - time)/1000,
        minutes = Math.floor(diff/60),
        secs = Math.round(diff%60),
        str = "";

    if (minutes < 10) {
        str = "0"+minutes+":";
    } else {
        str = minutes+":";
    }

    if (secs < 10) {
        str += "0"+secs;
    } else {
        str += secs;
    }

    return str;
}

$("#wrapper > .pres .block .button").on("click", () => {
    switch (state) {
        case 0: 
            state = 1;
            dates[1] = new Date().getTime();
            $("#wrapper > .pres .block .button").html("Conclure<p>et faire l'ouverture</p>");
            $("#wrapper > .pres .texts .analyse").addClass("active");
            $("#wrapper > .pres .block .button").css("background-color", "#B10DC9");
        break;

        case 1: 
            state = 2;
            dates[2] = new Date().getTime();
            $("#wrapper > .pres .block .button").html("Terminer<p>question de grammaire</p>");
            $("#wrapper > .pres .texts .conclusion").addClass("active");
            $("#wrapper > .pres .block .button").css("background-color", "#FF4136");
        break;

        case 2: 
            state = 3;
            dates[3] = new Date().getTime();
            $("#wrapper > .pres .block .button").html("Finish line<p>Je n'ai rien oublié</p>");
            $("#wrapper > .pres .block .button").css("background-color", "#FF851B");
            $("#wrapper > .pres .texts .question").addClass("active");
        break;

        case 3: 
            state = 4;
            dates[4] = new Date().getTime();
            $("#wrapper > .pres .block .button").css("background-color", "#001f3f");
            $("#wrapper > .pres .block .button").html("Bravo !<p>Oral terminé dans les temps !</p>");
            $("#wrapper > .pres .block > p").html("(c'est le moment de screen)");
        break;
    }
});