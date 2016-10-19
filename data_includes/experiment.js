var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_doon_necklace_target","sep",
"test_zant_enough_distractor","sep",
"test_tace_phone_target","sep",
"test_mipen_spoon_lowest","sep",
"test_mipen_necklace_highest","sep",
"test_jair_time_target","sep",
"test_mipen_bag_target","sep",
"test_blime_bag_distractor","sep",
"test_tace_off_distractor","sep",
"test_jair_bag_lowest","sep",
"test_zant_diaper_lowest","sep",
"test_tace_gentle_highest","sep",
"test_telpen_drum_distractor","sep",
"test_jair_necklace_distractor","sep",
"test_vash_stand up_distractor","sep",
"test_tula_clean_distractor","sep",
"test_bist_horse_target","sep",
"test_tula_mommy_target","sep",
"test_tula_drink_lowest","sep",
"test_bist_bounce_lowest","sep",
"test_blime_toy_target","sep",
"test_tiz_throw_lowest","sep",
"test_tiz_thing_target","sep",
"test_bist_gentle_distractor","sep",
"test_tiz_drum_highest","sep",
"test_blime_clean_highest","sep",
"test_telpen_ball_target","sep",
"test_tiz_come_distractor","sep",
"test_geck_nose_target","sep",
"test_tula_come_highest","sep",
"test_vash_bag_highest","sep",
"test_blime_push_lowest","sep",
"test_vash_put away_lowest","sep",
"test_geck_clean_highest","sep",
"test_jair_stand up_highest","sep",
"test_tace_hello_lowest","sep",
"test_telpen_up_highest","sep",
"test_zant_book_target","sep",
"test_doon_off_highest","sep",
"test_mipen_sell_distractor","sep",
"test_doon_gentle_lowest","sep",
"test_vash_shoe_target","sep",
"test_geck_walk_distractor","sep",
"test_bist_come_highest","sep",
"test_telpen_spin_lowest","sep",
"test_doon_up_distractor","sep",
"test_zant_walk_highest","sep",
"test_geck_go_lowest","outro1","sr","outro2"
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

["test_tula_come_highest", "Form", { 
html: {include: "test_tula_come_highest.html"} 
}],

["test_tula_drink_lowest", "Form", { 
html: {include: "test_tula_drink_lowest.html"} 
}],

["test_tula_clean_distractor", "Form", { 
html: {include: "test_tula_clean_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_bag_highest", "Form", { 
html: {include: "test_vash_bag_highest.html"} 
}],

["test_vash_put away_lowest", "Form", { 
html: {include: "test_vash_put away_lowest.html"} 
}],

["test_vash_stand up_distractor", "Form", { 
html: {include: "test_vash_stand up_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_clean_highest", "Form", { 
html: {include: "test_geck_clean_highest.html"} 
}],

["test_geck_go_lowest", "Form", { 
html: {include: "test_geck_go_lowest.html"} 
}],

["test_geck_walk_distractor", "Form", { 
html: {include: "test_geck_walk_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_drum_highest", "Form", { 
html: {include: "test_tiz_drum_highest.html"} 
}],

["test_tiz_throw_lowest", "Form", { 
html: {include: "test_tiz_throw_lowest.html"} 
}],

["test_tiz_come_distractor", "Form", { 
html: {include: "test_tiz_come_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_come_highest", "Form", { 
html: {include: "test_bist_come_highest.html"} 
}],

["test_bist_bounce_lowest", "Form", { 
html: {include: "test_bist_bounce_lowest.html"} 
}],

["test_bist_gentle_distractor", "Form", { 
html: {include: "test_bist_gentle_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_stand up_highest", "Form", { 
html: {include: "test_jair_stand up_highest.html"} 
}],

["test_jair_bag_lowest", "Form", { 
html: {include: "test_jair_bag_lowest.html"} 
}],

["test_jair_necklace_distractor", "Form", { 
html: {include: "test_jair_necklace_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_gentle_highest", "Form", { 
html: {include: "test_tace_gentle_highest.html"} 
}],

["test_tace_hello_lowest", "Form", { 
html: {include: "test_tace_hello_lowest.html"} 
}],

["test_tace_off_distractor", "Form", { 
html: {include: "test_tace_off_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_off_highest", "Form", { 
html: {include: "test_doon_off_highest.html"} 
}],

["test_doon_gentle_lowest", "Form", { 
html: {include: "test_doon_gentle_lowest.html"} 
}],

["test_doon_up_distractor", "Form", { 
html: {include: "test_doon_up_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_up_highest", "Form", { 
html: {include: "test_telpen_up_highest.html"} 
}],

["test_telpen_spin_lowest", "Form", { 
html: {include: "test_telpen_spin_lowest.html"} 
}],

["test_telpen_drum_distractor", "Form", { 
html: {include: "test_telpen_drum_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_clean_highest", "Form", { 
html: {include: "test_blime_clean_highest.html"} 
}],

["test_blime_push_lowest", "Form", { 
html: {include: "test_blime_push_lowest.html"} 
}],

["test_blime_bag_distractor", "Form", { 
html: {include: "test_blime_bag_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_walk_highest", "Form", { 
html: {include: "test_zant_walk_highest.html"} 
}],

["test_zant_diaper_lowest", "Form", { 
html: {include: "test_zant_diaper_lowest.html"} 
}],

["test_zant_enough_distractor", "Form", { 
html: {include: "test_zant_enough_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_necklace_highest", "Form", { 
html: {include: "test_mipen_necklace_highest.html"} 
}],

["test_mipen_spoon_lowest", "Form", { 
html: {include: "test_mipen_spoon_lowest.html"} 
}],

["test_mipen_sell_distractor", "Form", { 
html: {include: "test_mipen_sell_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];