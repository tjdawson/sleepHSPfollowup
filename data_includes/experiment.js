var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_blime_clean_lowest","sep",
"test_zant_behind_distractor","sep",
"test_blime_toy_target","sep",
"test_bist_mommy_lowest","sep",
"test_zant_floor_lowest","sep",
"test_geck_face_distractor","sep",
"test_telpen_toy_highest","sep",
"test_jair_follow_distractor","sep",
"test_zant_book_target","sep",
"test_tula_mom_target","sep",
"test_tiz_face_highest","sep",
"test_blime_bag_highest","sep",
"test_geck_bag_lowest","sep",
"test_tace_phone_target","sep",
"test_jair_open_highest","sep",
"test_tula_toy_distractor","sep",
"test_doon_toy_highest","sep",
"test_bist_follow_highest","sep",
"test_doon_necklace_target","sep",
"test_geck_nose_target","sep",
"test_tiz_thing_target","sep",
"test_tiz_walk_distractor","sep",
"test_tula_slow_highest","sep",
"test_geck_toy_highest","sep",
"test_vash_shoe_target","sep",
"test_vash_call_distractor","sep",
"test_tula_rug_lowest","sep",
"test_jair_door_lowest","sep",
"test_blime_claim_distractor","sep",
"test_mipen_walk_highest","sep",
"test_mipen_necklace_lowest","sep",
"test_telpen_clean_lowest_filler","sep",
"test_telpen_ball_target","sep",
"test_vash_floor_lowest","sep",
"test_mipen_officer_distractor","sep",
"test_tace_call_highest","sep",
"test_tace_bag_distractor","sep",
"test_tiz_toy_lowest","sep",
"test_tace_bag_lowest_filler","sep",
"test_vash_toy_highest","sep",
"test_telpen_open_distractor","sep",
"test_doon_hold_lowest","sep",
"test_doon_slow_distractor","sep",
"test_jair_time_target","sep",
"test_zant_diaper_highest","sep",
"test_bist_mom_target","sep",
"test_bist_diaper_distractor","sep",
"test_mipen_bag_target","outro1","sr","outro2"
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
["test_tula_mom_target", "Form", { 
html: {include: "test_tula_mom_target.html"} 
}],

["test_tula_slow_highest", "Form", { 
html: {include: "test_tula_slow_highest.html"} 
}],

["test_tula_rug_lowest", "Form", { 
html: {include: "test_tula_rug_lowest.html"} 
}],

["test_tula_toy_distractor", "Form", { 
html: {include: "test_tula_toy_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_toy_highest", "Form", { 
html: {include: "test_vash_toy_highest.html"} 
}],

["test_vash_floor_lowest", "Form", { 
html: {include: "test_vash_floor_lowest.html"} 
}],

["test_vash_call_distractor", "Form", { 
html: {include: "test_vash_call_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_toy_highest", "Form", { 
html: {include: "test_geck_toy_highest.html"} 
}],

["test_geck_bag_lowest", "Form", { 
html: {include: "test_geck_bag_lowest.html"} 
}],

["test_geck_face_distractor", "Form", { 
html: {include: "test_geck_face_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_face_highest", "Form", { 
html: {include: "test_tiz_face_highest.html"} 
}],

["test_tiz_toy_lowest", "Form", { 
html: {include: "test_tiz_toy_lowest.html"} 
}],

["test_tiz_walk_distractor", "Form", { 
html: {include: "test_tiz_walk_distractor.html"} 
}],

["test_bist_mom_target", "Form", { 
html: {include: "test_bist_mom_target.html"} 
}],

["test_bist_follow_highest", "Form", { 
html: {include: "test_bist_follow_highest.html"} 
}],

["test_bist_mommy_lowest", "Form", { 
html: {include: "test_bist_mommy_lowest.html"} 
}],

["test_bist_diaper_distractor", "Form", { 
html: {include: "test_bist_diaper_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_open_highest", "Form", { 
html: {include: "test_jair_open_highest.html"} 
}],

["test_jair_door_lowest", "Form", { 
html: {include: "test_jair_door_lowest.html"} 
}],

["test_jair_follow_distractor", "Form", { 
html: {include: "test_jair_follow_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_call_highest", "Form", { 
html: {include: "test_tace_call_highest.html"} 
}],

["test_tace_bag_lowest_filler", "Form", { 
html: {include: "test_tace_bag_lowest_filler.html"} 
}],

["test_tace_bag_distractor", "Form", { 
html: {include: "test_tace_bag_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_toy_highest", "Form", { 
html: {include: "test_doon_toy_highest.html"} 
}],

["test_doon_hold_lowest", "Form", { 
html: {include: "test_doon_hold_lowest.html"} 
}],

["test_doon_slow_distractor", "Form", { 
html: {include: "test_doon_slow_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_toy_highest", "Form", { 
html: {include: "test_telpen_toy_highest.html"} 
}],

["test_telpen_clean_lowest_filler", "Form", { 
html: {include: "test_telpen_clean_lowest_filler.html"} 
}],

["test_telpen_open_distractor", "Form", { 
html: {include: "test_telpen_open_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_bag_highest", "Form", { 
html: {include: "test_blime_bag_highest.html"} 
}],

["test_blime_clean_lowest", "Form", { 
html: {include: "test_blime_clean_lowest.html"} 
}],

["test_blime_claim_distractor", "Form", { 
html: {include: "test_blime_claim_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_diaper_highest", "Form", { 
html: {include: "test_zant_diaper_highest.html"} 
}],

["test_zant_floor_lowest", "Form", { 
html: {include: "test_zant_floor_lowest.html"} 
}],

["test_zant_behind_distractor", "Form", { 
html: {include: "test_zant_behind_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_walk_highest", "Form", { 
html: {include: "test_mipen_walk_highest.html"} 
}],

["test_mipen_necklace_lowest", "Form", { 
html: {include: "test_mipen_necklace_lowest.html"} 
}],

["test_mipen_officer_distractor", "Form", { 
html: {include: "test_mipen_officer_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];