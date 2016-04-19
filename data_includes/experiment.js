var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_tula_phone_highest","sep",
"test_telpen_spin_highest","sep",
"test_vash_animal_lowest","sep",
"test_telpen_spin_lowest","sep",
"test_blime_toy_target","sep",
"test_tula_clothes_lowest","sep",
"test_zant_come_lowest","sep",
"test_tiz_thing_target","sep",
"test_tiz_toy_highest","sep",
"test_geck_horse_highest","sep",
"test_doon_necklace_target","sep",
"test_jair_time_target","sep",
"test_geck_nose_target","sep",
"test_vash_purse_highest","sep",
"test_bist_grass_lowest","sep",
"test_mipen_Basket_lowest","sep",
"test_tace_phone_target","sep",
"test_blime_purse_highest","sep",
"test_telpen_toy_distractor","sep",
"test_zant_follow_highest","sep",
"test_zant_Fence_distractor","sep",
"test_doon_Drum_highest","sep",
"test_jair_fall_lowest","sep",
"test_geck_mess_lowest","sep",
"test_telpen_ball_target","sep",
"test_doon_baby_lowest","sep",
"test_vash_shoe_target","sep",
"test_vash_spin_distractor","sep",
"test_bist_horse_target","sep",
"test_mipen_eat_distractor","sep",
"test_doon_purse_distractor","sep",
"test_geck_purse_distractor","sep",
"test_blime_spin_distractor","sep",
"test_tiz_basket_lowest","sep",
"test_mipen_bag_target","sep",
"test_bist_spin_distractor","sep",
"test_tace_eat_distractor","sep",
"test_tace_toy_lowest","sep",
"test_tula_Drum_distractor","sep",
"test_jair_eat_highest","sep",
"test_zant_book_target","sep",
"test_mipen_purse_highest","sep",
"test_bist_Fence_highest","sep",
"test_tiz_Fence_distractor","sep",
"test_tula_mommy_target","sep",
"test_jair_toy_distractor","sep",
"test_tace_spill_highest","sep",
"test_blime_roll_lowest","outro1","sr","outro2",
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
            countsForProgressBar: false
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
["test_tula_mommy_target", "Form", { 
html: {include: "test_tula_mommy_target.html"} 
}],

["test_tula_phone_highest", "Form", { 
html: {include: "test_tula_phone_highest.html"} 
}],

["test_tula_clothes_lowest", "Form", { 
html: {include: "test_tula_clothes_lowest.html"} 
}],

["test_tula_Drum_distractor", "Form", { 
html: {include: "test_tula_Drum_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_purse_highest", "Form", { 
html: {include: "test_vash_purse_highest.html"} 
}],

["test_vash_animal_lowest", "Form", { 
html: {include: "test_vash_animal_lowest.html"} 
}],

["test_vash_spin_distractor", "Form", { 
html: {include: "test_vash_spin_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_horse_highest", "Form", { 
html: {include: "test_geck_horse_highest.html"} 
}],

["test_geck_mess_lowest", "Form", { 
html: {include: "test_geck_mess_lowest.html"} 
}],

["test_geck_purse_distractor", "Form", { 
html: {include: "test_geck_purse_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_toy_highest", "Form", { 
html: {include: "test_tiz_toy_highest.html"} 
}],

["test_tiz_basket_lowest", "Form", { 
html: {include: "test_tiz_basket_lowest.html"} 
}],

["test_tiz_Fence_distractor", "Form", { 
html: {include: "test_tiz_Fence_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_Fence_highest", "Form", { 
html: {include: "test_bist_Fence_highest.html"} 
}],

["test_bist_grass_lowest", "Form", { 
html: {include: "test_bist_grass_lowest.html"} 
}],

["test_bist_spin_distractor", "Form", { 
html: {include: "test_bist_spin_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_eat_highest", "Form", { 
html: {include: "test_jair_eat_highest.html"} 
}],

["test_jair_fall_lowest", "Form", { 
html: {include: "test_jair_fall_lowest.html"} 
}],

["test_jair_toy_distractor", "Form", { 
html: {include: "test_jair_toy_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_spill_highest", "Form", { 
html: {include: "test_tace_spill_highest.html"} 
}],

["test_tace_toy_lowest", "Form", { 
html: {include: "test_tace_toy_lowest.html"} 
}],

["test_tace_eat_distractor", "Form", { 
html: {include: "test_tace_eat_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_Drum_highest", "Form", { 
html: {include: "test_doon_Drum_highest.html"} 
}],

["test_doon_baby_lowest", "Form", { 
html: {include: "test_doon_baby_lowest.html"} 
}],

["test_doon_purse_distractor", "Form", { 
html: {include: "test_doon_purse_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_spin_highest", "Form", { 
html: {include: "test_telpen_spin_highest.html"} 
}],

["test_telpen_spin_lowest", "Form", { 
html: {include: "test_telpen_spin_lowest.html"} 
}],

["test_telpen_toy_distractor", "Form", { 
html: {include: "test_telpen_toy_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_purse_highest", "Form", { 
html: {include: "test_blime_purse_highest.html"} 
}],

["test_blime_roll_lowest", "Form", { 
html: {include: "test_blime_roll_lowest.html"} 
}],

["test_blime_spin_distractor", "Form", { 
html: {include: "test_blime_spin_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_follow_highest", "Form", { 
html: {include: "test_zant_follow_highest.html"} 
}],

["test_zant_come_lowest", "Form", { 
html: {include: "test_zant_come_lowest.html"} 
}],

["test_zant_Fence_distractor", "Form", { 
html: {include: "test_zant_Fence_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_purse_highest", "Form", { 
html: {include: "test_mipen_purse_highest.html"} 
}],

["test_mipen_Basket_lowest", "Form", { 
html: {include: "test_mipen_Basket_lowest.html"} 
}],

["test_mipen_eat_distractor", "Form", { 
html: {include: "test_mipen_eat_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];