var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_tula_mom_target","sep",
"test_zant_mom_target","sep",
"test_telpen_dirty_distractor","sep",
"test_blime_clean_lowest","sep",
"test_blime_toy_target","sep",
"test_tiz_thanks_highest","sep",
"test_jair_oops_lowest","sep",
"test_tula_bottle_lowest","sep",
"test_tace_me_lowest","sep",
"test_tace_call_highest","sep",
"test_doon_run_lowest","sep",
"test_tula_dirty_highest","sep",
"test_blime_doll_highest","sep",
"test_vash_thanks_distractor","sep",
"test_telpen_toy_lowest","sep",
"test_geck_call_distractor","sep",
"test_tace_follow_distractor","sep",
"test_blime_fetch_distractor","sep",
"test_zant_change_lowest","sep",
"test_doon_necklace_target","sep",
"test_doon_wipe_distractor","sep",
"test_telpen_fetch_highest","sep",
"test_bist_drop_lowest","sep",
"test_mipen_sink_lowest","sep",
"test_telpen_ball_target","sep",
"test_bist_horse_target","sep",
"test_jair_open_highest","sep",
"test_tula_open_distractor","sep",
"test_vash_shoe_target","sep",
"test_mipen_take_highest","sep",
"test_geck_wipe_highest","sep",
"test_mipen_bag_target","sep",
"test_mipen_far_distractor","sep",
"test_bist_follow_highest","sep",
"test_zant_love_highest","sep",
"test_vash_here_lowest","sep",
"test_vash_car_highest","sep",
"test_tiz_doll_distractor","sep",
"test_tiz_thing_target","sep",
"test_tiz_tree_lowest","sep",
"test_tace_phone_target","sep",
"test_jair_love_distractor","sep",
"test_jair_time_target","sep",
"test_geck_mom_target","sep",
"test_doon_hold_highest","sep",
"test_geck_eye_lowest","sep",
"test_bist_hold_distractor","sep",
"test_zant_car_distractor","outro1","sr","outro2"
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

["test_tula_dirty_highest", "Form", { 
html: {include: "test_tula_dirty_highest.html"} 
}],

["test_tula_bottle_lowest", "Form", { 
html: {include: "test_tula_bottle_lowest.html"} 
}],

["test_tula_open_distractor", "Form", { 
html: {include: "test_tula_open_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_car_highest", "Form", { 
html: {include: "test_vash_car_highest.html"} 
}],

["test_vash_here_lowest", "Form", { 
html: {include: "test_vash_here_lowest.html"} 
}],

["test_vash_thanks_distractor", "Form", { 
html: {include: "test_vash_thanks_distractor.html"} 
}],

["test_geck_mom_target", "Form", { 
html: {include: "test_geck_mom_target.html"} 
}],

["test_geck_wipe_highest", "Form", { 
html: {include: "test_geck_wipe_highest.html"} 
}],

["test_geck_eye_lowest", "Form", { 
html: {include: "test_geck_eye_lowest.html"} 
}],

["test_geck_call_distractor", "Form", { 
html: {include: "test_geck_call_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_thanks_highest", "Form", { 
html: {include: "test_tiz_thanks_highest.html"} 
}],

["test_tiz_tree_lowest", "Form", { 
html: {include: "test_tiz_tree_lowest.html"} 
}],

["test_tiz_doll_distractor", "Form", { 
html: {include: "test_tiz_doll_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_follow_highest", "Form", { 
html: {include: "test_bist_follow_highest.html"} 
}],

["test_bist_drop_lowest", "Form", { 
html: {include: "test_bist_drop_lowest.html"} 
}],

["test_bist_hold_distractor", "Form", { 
html: {include: "test_bist_hold_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_open_highest", "Form", { 
html: {include: "test_jair_open_highest.html"} 
}],

["test_jair_oops_lowest", "Form", { 
html: {include: "test_jair_oops_lowest.html"} 
}],

["test_jair_love_distractor", "Form", { 
html: {include: "test_jair_love_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_call_highest", "Form", { 
html: {include: "test_tace_call_highest.html"} 
}],

["test_tace_me_lowest", "Form", { 
html: {include: "test_tace_me_lowest.html"} 
}],

["test_tace_follow_distractor", "Form", { 
html: {include: "test_tace_follow_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_hold_highest", "Form", { 
html: {include: "test_doon_hold_highest.html"} 
}],

["test_doon_run_lowest", "Form", { 
html: {include: "test_doon_run_lowest.html"} 
}],

["test_doon_wipe_distractor", "Form", { 
html: {include: "test_doon_wipe_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_fetch_highest", "Form", { 
html: {include: "test_telpen_fetch_highest.html"} 
}],

["test_telpen_toy_lowest", "Form", { 
html: {include: "test_telpen_toy_lowest.html"} 
}],

["test_telpen_dirty_distractor", "Form", { 
html: {include: "test_telpen_dirty_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_doll_highest", "Form", { 
html: {include: "test_blime_doll_highest.html"} 
}],

["test_blime_clean_lowest", "Form", { 
html: {include: "test_blime_clean_lowest.html"} 
}],

["test_blime_fetch_distractor", "Form", { 
html: {include: "test_blime_fetch_distractor.html"} 
}],

["test_zant_mom_target", "Form", { 
html: {include: "test_zant_mom_target.html"} 
}],

["test_zant_love_highest", "Form", { 
html: {include: "test_zant_love_highest.html"} 
}],

["test_zant_change_lowest", "Form", { 
html: {include: "test_zant_change_lowest.html"} 
}],

["test_zant_car_distractor", "Form", { 
html: {include: "test_zant_car_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_take_highest", "Form", { 
html: {include: "test_mipen_take_highest.html"} 
}],

["test_mipen_sink_lowest", "Form", { 
html: {include: "test_mipen_sink_lowest.html"} 
}],

["test_mipen_far_distractor", "Form", { 
html: {include: "test_mipen_far_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];