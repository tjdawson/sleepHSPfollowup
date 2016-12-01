var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_geck_clean_distractor","sep",
"test_zant_book_target","sep",
"test_tace_throw_highest","sep",
"test_mipen_bag_target","sep",
"test_zant_other_lowest","sep",
"test_doon_necklace_target","sep",
"test_vash_bag_highest","sep",
"test_bist_come_highest","sep",
"test_tula_cup_lowest_filler","sep",
"test_tula_throw_distractor","sep",
"test_mipen_what_lowest","sep",
"test_vash_shoe_target","sep",
"test_blime_bag_lowest","sep",
"test_zant_come_highest","sep",
"test_geck_cup_lowest","sep",
"test_mipen_oh_distractor","sep",
"test_telpen_ball_target","sep",
"test_blime_book_distractor","sep",
"test_telpen_ready_lowest","sep",
"test_tiz_bag_lowest","sep",
"test_telpen_go_highest","sep",
"test_jair_bag_distractor","sep",
"test_tiz_look_highest","sep",
"test_vash_water_lowest","sep",
"test_blime_toy_target","sep",
"test_tiz_cup_distractor","sep",
"test_blime_clean_highest","sep",
"test_tace_phone_target","sep",
"test_doon_bead_lowest","sep",
"test_geck_nose_target","sep",
"test_bist_bead_distractor","sep",
"test_tace_up_distractor","sep",
"test_doon_go_distractor","sep",
"test_jair_off_lowest","sep",
"test_vash_come_distractor","sep",
"test_zant_especially_distractor","sep",
"test_bist_horse_target","sep",
"test_tula_mommy_target","sep",
"test_jair_up_highest","sep",
"test_jair_time_target","sep",
"test_doon_bead_highest","sep",
"test_bist_jump_lowest","sep",
"test_tiz_thing_target","sep",
"test_telpen_look_distractor","sep",
"test_tace_pillow_lowest","sep",
"test_tula_come_highest","sep",
"test_geck_up_highest","sep",
"test_mipen_cup_highest","outro1","sr","outro2"
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

["test_tula_cup_lowest_filler", "Form", { 
html: {include: "test_tula_cup_lowest_filler.html"} 
}],

["test_tula_throw_distractor", "Form", { 
html: {include: "test_tula_throw_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_bag_highest", "Form", { 
html: {include: "test_vash_bag_highest.html"} 
}],

["test_vash_water_lowest", "Form", { 
html: {include: "test_vash_water_lowest.html"} 
}],

["test_vash_come_distractor", "Form", { 
html: {include: "test_vash_come_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_up_highest", "Form", { 
html: {include: "test_geck_up_highest.html"} 
}],

["test_geck_cup_lowest", "Form", { 
html: {include: "test_geck_cup_lowest.html"} 
}],

["test_geck_clean_distractor", "Form", { 
html: {include: "test_geck_clean_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_look_highest", "Form", { 
html: {include: "test_tiz_look_highest.html"} 
}],

["test_tiz_bag_lowest", "Form", { 
html: {include: "test_tiz_bag_lowest.html"} 
}],

["test_tiz_cup_distractor", "Form", { 
html: {include: "test_tiz_cup_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_come_highest", "Form", { 
html: {include: "test_bist_come_highest.html"} 
}],

["test_bist_jump_lowest", "Form", { 
html: {include: "test_bist_jump_lowest.html"} 
}],

["test_bist_bead_distractor", "Form", { 
html: {include: "test_bist_bead_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_up_highest", "Form", { 
html: {include: "test_jair_up_highest.html"} 
}],

["test_jair_off_lowest", "Form", { 
html: {include: "test_jair_off_lowest.html"} 
}],

["test_jair_bag_distractor", "Form", { 
html: {include: "test_jair_bag_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_throw_highest", "Form", { 
html: {include: "test_tace_throw_highest.html"} 
}],

["test_tace_pillow_lowest", "Form", { 
html: {include: "test_tace_pillow_lowest.html"} 
}],

["test_tace_up_distractor", "Form", { 
html: {include: "test_tace_up_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_bead_highest", "Form", { 
html: {include: "test_doon_bead_highest.html"} 
}],

["test_doon_bead_lowest", "Form", { 
html: {include: "test_doon_bead_lowest.html"} 
}],

["test_doon_go_distractor", "Form", { 
html: {include: "test_doon_go_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_go_highest", "Form", { 
html: {include: "test_telpen_go_highest.html"} 
}],

["test_telpen_ready_lowest", "Form", { 
html: {include: "test_telpen_ready_lowest.html"} 
}],

["test_telpen_look_distractor", "Form", { 
html: {include: "test_telpen_look_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_clean_highest", "Form", { 
html: {include: "test_blime_clean_highest.html"} 
}],

["test_blime_bag_lowest", "Form", { 
html: {include: "test_blime_bag_lowest.html"} 
}],

["test_blime_book_distractor", "Form", { 
html: {include: "test_blime_book_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_come_highest", "Form", { 
html: {include: "test_zant_come_highest.html"} 
}],

["test_zant_other_lowest", "Form", { 
html: {include: "test_zant_other_lowest.html"} 
}],

["test_zant_especially_distractor", "Form", { 
html: {include: "test_zant_especially_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_cup_highest", "Form", { 
html: {include: "test_mipen_cup_highest.html"} 
}],

["test_mipen_what_lowest", "Form", { 
html: {include: "test_mipen_what_lowest.html"} 
}],

["test_mipen_oh_distractor", "Form", { 
html: {include: "test_mipen_oh_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];