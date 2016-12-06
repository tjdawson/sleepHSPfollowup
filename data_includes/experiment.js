var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_doon_point_distractor","sep",
"test_zant_book_target","sep",
"test_jair_time_target","sep",
"test_mipen_deny_distractor","sep",
"test_telpen_give_lowest","sep",
"test_mipen_put_highest","sep",
"test_blime_light_distractor","sep",
"test_geck_point_highest","sep",
"test_doon_wear_lowest","sep",
"test_zant_light_highest","sep",
"test_geck_lift_distractor","sep",
"test_tiz_drop_distractor","sep",
"test_telpen_ball_target","sep",
"test_tiz_remove_highest","sep",
"test_doon_necklace_target","sep",
"test_tiz_thing_target","sep",
"test_tula_deny_highest","sep",
"test_mipen_reach_lowest","sep",
"test_blime_clean_highest","sep",
"test_tace_drop_highest","sep",
"test_jair_bacon_highest","sep",
"test_telpen_lift_highest","sep",
"test_zant_play_distractor","sep",
"test_bist_bacon_distractor","sep",
"test_tace_phone_target","sep",
"test_bist_pet_lowest","sep",
"test_telpen_remove_distractor","sep",
"test_bist_horse_target","sep",
"test_tula_shake_distractor","sep",
"test_tiz_stair_lowest","sep",
"test_zant_exchange_lowest","sep",
"test_geck_clean_lowest","sep",
"test_tace_put_distractor","sep",
"test_vash_show_highest","sep",
"test_mipen_bag_target","sep",
"test_tula_drink_lowest","sep",
"test_doon_shake_highest","sep",
"test_blime_push_lowest","sep",
"test_bist_play_highest","sep",
"test_jair_show_distractor","sep",
"test_vash_clean_distractor","sep",
"test_jair_pull_lowest","sep",
"test_tula_mommy_target","sep",
"test_blime_toy_target","sep",
"test_vash_shoe_target","sep",
"test_geck_nose_target","sep",
"test_vash_hold_lowest","sep",
"test_tace_call_lowest","outro1","sr","outro2"
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

["test_tula_deny_highest", "Form", { 
html: {include: "test_tula_deny_highest.html"} 
}],

["test_tula_drink_lowest", "Form", { 
html: {include: "test_tula_drink_lowest.html"} 
}],

["test_tula_shake_distractor", "Form", { 
html: {include: "test_tula_shake_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_show_highest", "Form", { 
html: {include: "test_vash_show_highest.html"} 
}],

["test_vash_hold_lowest", "Form", { 
html: {include: "test_vash_hold_lowest.html"} 
}],

["test_vash_clean_distractor", "Form", { 
html: {include: "test_vash_clean_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_point_highest", "Form", { 
html: {include: "test_geck_point_highest.html"} 
}],

["test_geck_clean_lowest", "Form", { 
html: {include: "test_geck_clean_lowest.html"} 
}],

["test_geck_lift_distractor", "Form", { 
html: {include: "test_geck_lift_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_remove_highest", "Form", { 
html: {include: "test_tiz_remove_highest.html"} 
}],

["test_tiz_stair_lowest", "Form", { 
html: {include: "test_tiz_stair_lowest.html"} 
}],

["test_tiz_drop_distractor", "Form", { 
html: {include: "test_tiz_drop_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_play_highest", "Form", { 
html: {include: "test_bist_play_highest.html"} 
}],

["test_bist_pet_lowest", "Form", { 
html: {include: "test_bist_pet_lowest.html"} 
}],

["test_bist_bacon_distractor", "Form", { 
html: {include: "test_bist_bacon_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_bacon_highest", "Form", { 
html: {include: "test_jair_bacon_highest.html"} 
}],

["test_jair_pull_lowest", "Form", { 
html: {include: "test_jair_pull_lowest.html"} 
}],

["test_jair_show_distractor", "Form", { 
html: {include: "test_jair_show_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_drop_highest", "Form", { 
html: {include: "test_tace_drop_highest.html"} 
}],

["test_tace_call_lowest", "Form", { 
html: {include: "test_tace_call_lowest.html"} 
}],

["test_tace_put_distractor", "Form", { 
html: {include: "test_tace_put_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_shake_highest", "Form", { 
html: {include: "test_doon_shake_highest.html"} 
}],

["test_doon_wear_lowest", "Form", { 
html: {include: "test_doon_wear_lowest.html"} 
}],

["test_doon_point_distractor", "Form", { 
html: {include: "test_doon_point_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_lift_highest", "Form", { 
html: {include: "test_telpen_lift_highest.html"} 
}],

["test_telpen_give_lowest", "Form", { 
html: {include: "test_telpen_give_lowest.html"} 
}],

["test_telpen_remove_distractor", "Form", { 
html: {include: "test_telpen_remove_distractor.html"} 
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

["test_blime_light_distractor", "Form", { 
html: {include: "test_blime_light_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_light_highest", "Form", { 
html: {include: "test_zant_light_highest.html"} 
}],

["test_zant_exchange_lowest", "Form", { 
html: {include: "test_zant_exchange_lowest.html"} 
}],

["test_zant_play_distractor", "Form", { 
html: {include: "test_zant_play_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_put_highest", "Form", { 
html: {include: "test_mipen_put_highest.html"} 
}],

["test_mipen_reach_lowest", "Form", { 
html: {include: "test_mipen_reach_lowest.html"} 
}],

["test_mipen_deny_distractor", "Form", { 
html: {include: "test_mipen_deny_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];