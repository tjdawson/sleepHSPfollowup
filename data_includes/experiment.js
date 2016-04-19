var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_zant_follow_highest","sep",
"test_vash_purse_highest","sep",
"test_jair_fall_lowest","sep",
"test_mipen_bag_target","sep",
"test_vash_shoe_target","sep",
"test_bist_horse_target","sep",
"test_blime_toy_target","sep",
"test_tiz_thing_target","sep",
"test_jair_time_target","sep",
"test_tiz_basket_lowest","sep",
"test_zant_book_target","sep",
"test_geck_purse_distractor","sep",
"test_tace_toy_lowest","sep",
"test_blime_eat_distractor","sep",
"test_telpen_ball_target","sep",
"test_mipen_purse_highest","sep",
"test_telpen_spin_highest","sep",
"test_tace_purse_distractor","sep",
"test_jair_eat_highest","sep",
"test_blime_purse_highest","sep",
"test_bist_Fence_highest","sep",
"test_zant_come_lowest","sep",
"test_tula_mommy_target","sep",
"test_mipen_follow_distractor","sep",
"test_geck_nose_target","sep",
"test_jair_phone_distractor","sep",
"test_doon_baby_lowest","sep",
"test_bist_purse_distractor","sep",
"test_vash_follow_distractor","sep",
"test_tace_phone_target","sep",
"test_vash_animal_lowest","sep",
"test_tula_purse_distractor","sep",
"test_doon_Drum_highest","sep",
"test_doon_necklace_target","sep",
"test_tiz_follow_distractor","sep",
"test_geck_horse_highest","sep",
"test_tula_clothes_lowest","sep",
"test_telpen_purse_distractor","sep",
"test_tiz_toy_highest","sep",
"test_geck_mess_lowest","sep",
"test_tula_phone_highest","sep",
"test_doon_purse_distractor","sep",
"test_tace_spill_highest","sep",
"test_bist_grass_lowest","sep",
"test_telpen_spin_lowest","sep",
"test_mipen_Basket_lowest","sep",
"test_blime_roll_lowest","sep",
"test_zant_Drum_distractor","outro1","sr","outro2",
);

var defaults = [
        "Separator", {
            transfer: "keypress",
            normalMessage: "Press any key to continue.",
            errorMessage: "Press any key to continue."
        },
        "DashedSentence", {
            mode: "self-paced reading"
        },
        "AcceptabilityJudgment", {
            as: ["1", "2", "3", "4", "5", "6", "7"],
            presentAsScale: true,
            instructions: "Use number keys or click boxes to answer.",
            leftComment: "(Bad)", rightComment: "(Good)"
        },
        "Question", {
            hasCorrect: true
        },
        "Message", {
            hideProgressBar: true
        },
        "Form", {
            hideProgressBar: false,
            continueOnReturn: true,
            saveReactionTime: false
        }
    ];

var items = [    ["sr", "__SendResults__", { }],
["sep", "Separator", { }],
        
        //
        
        ["intro", "Form", {
            html: {include: "intro.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }],
        
        //
        
        ["intro1", "Form", {
            html: {include: "intro1.html"},
            hideProgressBar: true,
            countsForProgressBar: false,
    validators: {
    audiotest: function(s)
    { if (s == "3401")
    return true; else return "Incorrect entry for \u2018test numbers\u2019";}
    }
        
        }],
        
        //
        
        ["outro1", "Form", {
            html: {include: "outro1.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }],
        
        //
        
        ["outro2", "Form", {
            html: { include: "outro2.html" },
            hideProgressBar: true,
            countsForProgressBar: false,
        } ],
        
        //
["tula", "Form", { 
html: {include: "tula.html"} 
}],

["vash", "Form", { 
html: {include: "vash.html"} 
}],

["geck", "Form", { 
html: {include: "geck.html"} 
}],

["tiz", "Form", { 
html: {include: "tiz.html"} 
}],

["bist", "Form", { 
html: {include: "bist.html"} 
}],

["jair", "Form", { 
html: {include: "jair.html"} 
}],

["tace", "Form", { 
html: {include: "tace.html"} 
}],

["doon", "Form", { 
html: {include: "doon.html"} 
}],

["telpen", "Form", { 
html: {include: "telpen.html"} 
}],

["blime", "Form", { 
html: {include: "blime.html"} 
}],

["zant", "Form", { 
html: {include: "zant.html"} 
}],

["mipen", "Form", { 
html: {include: "mipen.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];