var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_telpen_ball_target","sep",
"test_telpen_toy_distractor","sep",
"test_mipen_throughout_highest","sep",
"test_geck_up_highest","sep",
"test_blime_toy_target","sep",
"test_tula_phone_highest","sep",
"test_tiz_hit_lowest","sep",
"test_geck_nose_target","sep",
"test_zant_book_target","sep",
"test_tiz_toy_highest","sep",
"test_jair_time_target","sep",
"test_tiz_doing_distractor","sep",
"test_jair_up_highest","sep",
"test_doon_necklace_target","sep",
"test_telpen_importance_highest","sep",
"test_bist_stay_highest","sep",
"test_mipen_bag_target","sep",
"test_vash_up_distractor","sep",
"test_jair_careful_lowest","sep",
"test_geck_stop_lowest","sep",
"test_doon_stair_lowest","sep",
"test_tace_face_lowest","sep",
"test_jair_phone_distractor","sep",
"test_doon_doing_highest","sep",
"test_blime_sit_highest","sep",
"test_vash_truck_lowest","sep",
"test_bist_horse_target","sep",
"test_zant_careful_lowest_filler","sep",
"test_geck_sit_distractor","sep",
"test_tace_stop_highest","sep",
"test_tace_importance_distractor","sep",
"test_tula_throughout_distractor","sep",
"test_tula_thanks_lowest","sep",
"test_tace_phone_target","sep",
"test_bist_grass_lowest","sep",
"test_doon_stay_distractor","sep",
"test_telpen_cause_lowest","sep",
"test_zant_down_highest","sep",
"test_zant_area_distractor","sep",
"test_vash_shoe_target","sep",
"test_blime_hold_lowest","sep",
"test_tula_mommy_target","sep",
"test_tiz_thing_target","sep",
"test_bist_stop_distractor","sep",
"test_mipen_else_distractor","sep",
"test_blime_down_distractor","sep",
"test_mipen_defense_lowest","sep",
"test_vash_stop_highest","outro1","sr","outro2"
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

["test_tula_thanks_lowest", "Form", { 
html: {include: "test_tula_thanks_lowest.html"} 
}],

["test_tula_throughout_distractor", "Form", { 
html: {include: "test_tula_throughout_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_stop_highest", "Form", { 
html: {include: "test_vash_stop_highest.html"} 
}],

["test_vash_truck_lowest", "Form", { 
html: {include: "test_vash_truck_lowest.html"} 
}],

["test_vash_up_distractor", "Form", { 
html: {include: "test_vash_up_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_up_highest", "Form", { 
html: {include: "test_geck_up_highest.html"} 
}],

["test_geck_stop_lowest", "Form", { 
html: {include: "test_geck_stop_lowest.html"} 
}],

["test_geck_sit_distractor", "Form", { 
html: {include: "test_geck_sit_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_toy_highest", "Form", { 
html: {include: "test_tiz_toy_highest.html"} 
}],

["test_tiz_hit_lowest", "Form", { 
html: {include: "test_tiz_hit_lowest.html"} 
}],

["test_tiz_doing_distractor", "Form", { 
html: {include: "test_tiz_doing_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_stay_highest", "Form", { 
html: {include: "test_bist_stay_highest.html"} 
}],

["test_bist_grass_lowest", "Form", { 
html: {include: "test_bist_grass_lowest.html"} 
}],

["test_bist_stop_distractor", "Form", { 
html: {include: "test_bist_stop_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_up_highest", "Form", { 
html: {include: "test_jair_up_highest.html"} 
}],

["test_jair_careful_lowest", "Form", { 
html: {include: "test_jair_careful_lowest.html"} 
}],

["test_jair_phone_distractor", "Form", { 
html: {include: "test_jair_phone_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_stop_highest", "Form", { 
html: {include: "test_tace_stop_highest.html"} 
}],

["test_tace_face_lowest", "Form", { 
html: {include: "test_tace_face_lowest.html"} 
}],

["test_tace_importance_distractor", "Form", { 
html: {include: "test_tace_importance_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_doing_highest", "Form", { 
html: {include: "test_doon_doing_highest.html"} 
}],

["test_doon_stair_lowest", "Form", { 
html: {include: "test_doon_stair_lowest.html"} 
}],

["test_doon_stay_distractor", "Form", { 
html: {include: "test_doon_stay_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_importance_highest", "Form", { 
html: {include: "test_telpen_importance_highest.html"} 
}],

["test_telpen_cause_lowest", "Form", { 
html: {include: "test_telpen_cause_lowest.html"} 
}],

["test_telpen_toy_distractor", "Form", { 
html: {include: "test_telpen_toy_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_sit_highest", "Form", { 
html: {include: "test_blime_sit_highest.html"} 
}],

["test_blime_hold_lowest", "Form", { 
html: {include: "test_blime_hold_lowest.html"} 
}],

["test_blime_down_distractor", "Form", { 
html: {include: "test_blime_down_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_down_highest", "Form", { 
html: {include: "test_zant_down_highest.html"} 
}],

["test_zant_careful_lowest_filler", "Form", { 
html: {include: "test_zant_careful_lowest_filler.html"} 
}],

["test_zant_area_distractor", "Form", { 
html: {include: "test_zant_area_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_throughout_highest", "Form", { 
html: {include: "test_mipen_throughout_highest.html"} 
}],

["test_mipen_defense_lowest", "Form", { 
html: {include: "test_mipen_defense_lowest.html"} 
}],

["test_mipen_else_distractor", "Form", { 
html: {include: "test_mipen_else_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];