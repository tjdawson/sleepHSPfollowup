var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_mipen_take_highest","sep",
"test_tiz_stair_highest","sep",
"test_zant_spin_distractor","sep",
"test_vash_shoe_target","sep",
"test_mipen_election_distractor","sep",
"test_mipen_bag_target","sep",
"test_telpen_spin_highest","sep",
"test_tace_dirty_distractor","sep",
"test_geck_clean_highest","sep",
"test_tiz_na_lowest","sep",
"test_jair_stand_highest","sep",
"test_zant_follow_highest","sep",
"test_doon_hug_highest","sep",
"test_tula_mommy_target","sep",
"test_tace_bag_highest","sep",
"test_zant_book_target","sep",
"test_tula_na_lowest","sep",
"test_vash_na_lowest","sep",
"test_bist_phone_distractor","sep",
"test_blime_na_lowest","sep",
"test_zant_na_lowest","sep",
"test_bist_move_highest","sep",
"test_doon_follow_distractor","sep",
"test_tiz_thing_target","sep",
"test_blime_toy_target","sep",
"test_geck_in_distractor","sep",
"test_mipen_na_lowest","sep",
"test_tace_phone_target","sep",
"test_geck_nose_target","sep",
"test_vash_move_distractor","sep",
"test_tula_phone_highest","sep",
"test_jair_stair_distractor","sep",
"test_tiz_stand_distractor","sep",
"test_blime_dirty_highest","sep",
"test_tula_clean_distractor","sep",
"test_doon_na_lowest","sep",
"test_jair_hungry_lowest","sep",
"test_doon_necklace_target","sep",
"test_jair_time_target","sep",
"test_telpen_ball_target","sep",
"test_tace_na_lowest","sep",
"test_vash_in_highest","sep",
"test_bist_na_lowest","sep",
"test_geck_na_lowest","sep",
"test_blime_bag_distractor","sep",
"test_bist_horse_target","sep",
"test_telpen_na_lowest","sep",
"test_telpen_hug_distractor","outro1","sr","outro2"
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

["test_tula_phone_highest", "Form", { 
html: {include: "test_tula_phone_highest.html"} 
}],

["test_tula_na_lowest", "Form", { 
html: {include: "test_tula_na_lowest.html"} 
}],

["test_tula_clean_distractor", "Form", { 
html: {include: "test_tula_clean_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_in_highest", "Form", { 
html: {include: "test_vash_in_highest.html"} 
}],

["test_vash_na_lowest", "Form", { 
html: {include: "test_vash_na_lowest.html"} 
}],

["test_vash_move_distractor", "Form", { 
html: {include: "test_vash_move_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_clean_highest", "Form", { 
html: {include: "test_geck_clean_highest.html"} 
}],

["test_geck_na_lowest", "Form", { 
html: {include: "test_geck_na_lowest.html"} 
}],

["test_geck_in_distractor", "Form", { 
html: {include: "test_geck_in_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_stair_highest", "Form", { 
html: {include: "test_tiz_stair_highest.html"} 
}],

["test_tiz_na_lowest", "Form", { 
html: {include: "test_tiz_na_lowest.html"} 
}],

["test_tiz_stand_distractor", "Form", { 
html: {include: "test_tiz_stand_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_move_highest", "Form", { 
html: {include: "test_bist_move_highest.html"} 
}],

["test_bist_na_lowest", "Form", { 
html: {include: "test_bist_na_lowest.html"} 
}],

["test_bist_phone_distractor", "Form", { 
html: {include: "test_bist_phone_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_stand_highest", "Form", { 
html: {include: "test_jair_stand_highest.html"} 
}],

["test_jair_hungry_lowest", "Form", { 
html: {include: "test_jair_hungry_lowest.html"} 
}],

["test_jair_stair_distractor", "Form", { 
html: {include: "test_jair_stair_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_bag_highest", "Form", { 
html: {include: "test_tace_bag_highest.html"} 
}],

["test_tace_na_lowest", "Form", { 
html: {include: "test_tace_na_lowest.html"} 
}],

["test_tace_dirty_distractor", "Form", { 
html: {include: "test_tace_dirty_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_hug_highest", "Form", { 
html: {include: "test_doon_hug_highest.html"} 
}],

["test_doon_na_lowest", "Form", { 
html: {include: "test_doon_na_lowest.html"} 
}],

["test_doon_follow_distractor", "Form", { 
html: {include: "test_doon_follow_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_spin_highest", "Form", { 
html: {include: "test_telpen_spin_highest.html"} 
}],

["test_telpen_na_lowest", "Form", { 
html: {include: "test_telpen_na_lowest.html"} 
}],

["test_telpen_hug_distractor", "Form", { 
html: {include: "test_telpen_hug_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_dirty_highest", "Form", { 
html: {include: "test_blime_dirty_highest.html"} 
}],

["test_blime_na_lowest", "Form", { 
html: {include: "test_blime_na_lowest.html"} 
}],

["test_blime_bag_distractor", "Form", { 
html: {include: "test_blime_bag_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_follow_highest", "Form", { 
html: {include: "test_zant_follow_highest.html"} 
}],

["test_zant_na_lowest", "Form", { 
html: {include: "test_zant_na_lowest.html"} 
}],

["test_zant_spin_distractor", "Form", { 
html: {include: "test_zant_spin_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_take_highest", "Form", { 
html: {include: "test_mipen_take_highest.html"} 
}],

["test_mipen_na_lowest", "Form", { 
html: {include: "test_mipen_na_lowest.html"} 
}],

["test_mipen_election_distractor", "Form", { 
html: {include: "test_mipen_election_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];