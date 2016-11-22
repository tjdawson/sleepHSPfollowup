var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_zant_street_distractor","sep",
"test_telpen_ready_lowest","sep",
"test_zant_book_target","sep",
"test_vash_elephant_lowest","sep",
"test_tiz_look_distractor","sep",
"test_geck_nose_target","sep",
"test_tace_stop_distractor","sep",
"test_tula_mommy_target","sep",
"test_tace_phone_target","sep",
"test_zant_mommy_highest","sep",
"test_telpen_throw_highest","sep",
"test_mipen_inside_highest","sep",
"test_mipen_basket_lowest","sep",
"test_tula_look_highest","sep",
"test_bist_go_lowest","sep",
"test_jair_careful_lowest","sep",
"test_doon_necklace_target","sep",
"test_blime_sit_highest","sep",
"test_vash_clean_distractor","sep",
"test_tiz_whoo_highest","sep",
"test_mipen_bag_target","sep",
"test_mipen_mommy_distractor","sep",
"test_tula_oh_lowest","sep",
"test_blime_hi_distractor","sep",
"test_geck_door_distractor","sep",
"test_tace_dial_lowest","sep",
"test_blime_toy_target","sep",
"test_telpen_give_distractor","sep",
"test_bist_horse_target","sep",
"test_tace_hi_highest","sep",
"test_tula_sit_distractor","sep",
"test_tiz_thing_target","sep",
"test_jair_time_target","sep",
"test_doon_throw_distractor","sep",
"test_jair_whoo_distractor","sep",
"test_tiz_roll_lowest","sep",
"test_vash_sit_highest","sep",
"test_bist_stop_highest","sep",
"test_geck_clean_highest","sep",
"test_telpen_ball_target","sep",
"test_blime_hang_lowest","sep",
"test_zant_follow_lowest","sep",
"test_doon_give_highest","sep",
"test_vash_shoe_target","sep",
"test_jair_door_highest","sep",
"test_geck_drink_lowest","sep",
"test_bist_inside_distractor","sep",
"test_doon_hang_lowest","outro1","sr","outro2"
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
["test_tula_mommy_target", "Form", { 
html: {include: "test_tula_mommy_target.html"} 
}],

["test_tula_look_highest", "Form", { 
html: {include: "test_tula_look_highest.html"} 
}],

["test_tula_oh_lowest", "Form", { 
html: {include: "test_tula_oh_lowest.html"} 
}],

["test_tula_sit_distractor", "Form", { 
html: {include: "test_tula_sit_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_sit_highest", "Form", { 
html: {include: "test_vash_sit_highest.html"} 
}],

["test_vash_elephant_lowest", "Form", { 
html: {include: "test_vash_elephant_lowest.html"} 
}],

["test_vash_clean_distractor", "Form", { 
html: {include: "test_vash_clean_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_clean_highest", "Form", { 
html: {include: "test_geck_clean_highest.html"} 
}],

["test_geck_drink_lowest", "Form", { 
html: {include: "test_geck_drink_lowest.html"} 
}],

["test_geck_door_distractor", "Form", { 
html: {include: "test_geck_door_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_whoo_highest", "Form", { 
html: {include: "test_tiz_whoo_highest.html"} 
}],

["test_tiz_roll_lowest", "Form", { 
html: {include: "test_tiz_roll_lowest.html"} 
}],

["test_tiz_look_distractor", "Form", { 
html: {include: "test_tiz_look_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_stop_highest", "Form", { 
html: {include: "test_bist_stop_highest.html"} 
}],

["test_bist_go_lowest", "Form", { 
html: {include: "test_bist_go_lowest.html"} 
}],

["test_bist_inside_distractor", "Form", { 
html: {include: "test_bist_inside_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_door_highest", "Form", { 
html: {include: "test_jair_door_highest.html"} 
}],

["test_jair_careful_lowest", "Form", { 
html: {include: "test_jair_careful_lowest.html"} 
}],

["test_jair_whoo_distractor", "Form", { 
html: {include: "test_jair_whoo_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_hi_highest", "Form", { 
html: {include: "test_tace_hi_highest.html"} 
}],

["test_tace_dial_lowest", "Form", { 
html: {include: "test_tace_dial_lowest.html"} 
}],

["test_tace_stop_distractor", "Form", { 
html: {include: "test_tace_stop_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_give_highest", "Form", { 
html: {include: "test_doon_give_highest.html"} 
}],

["test_doon_hang_lowest", "Form", { 
html: {include: "test_doon_hang_lowest.html"} 
}],

["test_doon_throw_distractor", "Form", { 
html: {include: "test_doon_throw_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_throw_highest", "Form", { 
html: {include: "test_telpen_throw_highest.html"} 
}],

["test_telpen_ready_lowest", "Form", { 
html: {include: "test_telpen_ready_lowest.html"} 
}],

["test_telpen_give_distractor", "Form", { 
html: {include: "test_telpen_give_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_sit_highest", "Form", { 
html: {include: "test_blime_sit_highest.html"} 
}],

["test_blime_hang_lowest", "Form", { 
html: {include: "test_blime_hang_lowest.html"} 
}],

["test_blime_hi_distractor", "Form", { 
html: {include: "test_blime_hi_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_mommy_highest", "Form", { 
html: {include: "test_zant_mommy_highest.html"} 
}],

["test_zant_follow_lowest", "Form", { 
html: {include: "test_zant_follow_lowest.html"} 
}],

["test_zant_street_distractor", "Form", { 
html: {include: "test_zant_street_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_inside_highest", "Form", { 
html: {include: "test_mipen_inside_highest.html"} 
}],

["test_mipen_basket_lowest", "Form", { 
html: {include: "test_mipen_basket_lowest.html"} 
}],

["test_mipen_mommy_distractor", "Form", { 
html: {include: "test_mipen_mommy_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];