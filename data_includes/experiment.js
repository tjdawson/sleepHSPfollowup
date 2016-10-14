var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_geck_come_distractor","sep",
"test_vash_run_distractor","sep",
"test_doon_phone_distractor","sep",
"test_blime_hold_distractor","sep",
"test_bist_run_highest","sep",
"test_blime_sit_lowest","sep",
"test_bist_water_lowest","sep",
"test_doon_necklace_target","sep",
"test_mipen_cup_highest","sep",
"test_geck_nose_target","sep",
"test_blime_toy_target","sep",
"test_blime_push_highest","sep",
"test_jair_time_target","sep",
"test_telpen_throw_highest","sep",
"test_tace_phone_target","sep",
"test_tiz_thing_target","sep",
"test_zant_follow_lowest","sep",
"test_doon_dress_highest","sep",
"test_tiz_cup_distractor","sep",
"test_bist_horse_target","sep",
"test_telpen_spin_lowest","sep",
"test_tula_call_lowest","sep",
"test_geck_clean_lowest","sep",
"test_tula_mommy_target","sep",
"test_jair_necklace_lowest","sep",
"test_tula_phone_highest","sep",
"test_tiz_play_lowest","sep",
"test_mipen_hit_distractor","sep",
"test_telpen_toy_distractor","sep",
"test_zant_throw_distractor","sep",
"test_vash_carry_lowest","sep",
"test_vash_shoe_target","sep",
"test_zant_book_target","sep",
"test_mipen_bag_target","sep",
"test_vash_hold_highest","sep",
"test_tiz_hit_highest","sep",
"test_tace_dress_distractor","sep",
"test_mipen_sip_lowest","sep",
"test_bist_push_distractor","sep",
"test_jair_horse_distractor","sep",
"test_tace_mess_lowest","sep",
"test_zant_come_highest","sep",
"test_tula_stand_distractor","sep",
"test_jair_stand_highest","sep",
"test_tace_toy_highest","sep",
"test_telpen_ball_target","sep",
"test_doon_wear_lowest","sep",
"test_geck_horse_highest","outro1","sr","outro2"
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

["test_tula_call_lowest", "Form", { 
html: {include: "test_tula_call_lowest.html"} 
}],

["test_tula_stand_distractor", "Form", { 
html: {include: "test_tula_stand_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_hold_highest", "Form", { 
html: {include: "test_vash_hold_highest.html"} 
}],

["test_vash_carry_lowest", "Form", { 
html: {include: "test_vash_carry_lowest.html"} 
}],

["test_vash_run_distractor", "Form", { 
html: {include: "test_vash_run_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_horse_highest", "Form", { 
html: {include: "test_geck_horse_highest.html"} 
}],

["test_geck_clean_lowest", "Form", { 
html: {include: "test_geck_clean_lowest.html"} 
}],

["test_geck_come_distractor", "Form", { 
html: {include: "test_geck_come_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_hit_highest", "Form", { 
html: {include: "test_tiz_hit_highest.html"} 
}],

["test_tiz_play_lowest", "Form", { 
html: {include: "test_tiz_play_lowest.html"} 
}],

["test_tiz_cup_distractor", "Form", { 
html: {include: "test_tiz_cup_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_run_highest", "Form", { 
html: {include: "test_bist_run_highest.html"} 
}],

["test_bist_water_lowest", "Form", { 
html: {include: "test_bist_water_lowest.html"} 
}],

["test_bist_push_distractor", "Form", { 
html: {include: "test_bist_push_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_stand_highest", "Form", { 
html: {include: "test_jair_stand_highest.html"} 
}],

["test_jair_necklace_lowest", "Form", { 
html: {include: "test_jair_necklace_lowest.html"} 
}],

["test_jair_horse_distractor", "Form", { 
html: {include: "test_jair_horse_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_toy_highest", "Form", { 
html: {include: "test_tace_toy_highest.html"} 
}],

["test_tace_mess_lowest", "Form", { 
html: {include: "test_tace_mess_lowest.html"} 
}],

["test_tace_dress_distractor", "Form", { 
html: {include: "test_tace_dress_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_dress_highest", "Form", { 
html: {include: "test_doon_dress_highest.html"} 
}],

["test_doon_wear_lowest", "Form", { 
html: {include: "test_doon_wear_lowest.html"} 
}],

["test_doon_phone_distractor", "Form", { 
html: {include: "test_doon_phone_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_throw_highest", "Form", { 
html: {include: "test_telpen_throw_highest.html"} 
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

["test_blime_push_highest", "Form", { 
html: {include: "test_blime_push_highest.html"} 
}],

["test_blime_sit_lowest", "Form", { 
html: {include: "test_blime_sit_lowest.html"} 
}],

["test_blime_hold_distractor", "Form", { 
html: {include: "test_blime_hold_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_come_highest", "Form", { 
html: {include: "test_zant_come_highest.html"} 
}],

["test_zant_follow_lowest", "Form", { 
html: {include: "test_zant_follow_lowest.html"} 
}],

["test_zant_throw_distractor", "Form", { 
html: {include: "test_zant_throw_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_cup_highest", "Form", { 
html: {include: "test_mipen_cup_highest.html"} 
}],

["test_mipen_sip_lowest", "Form", { 
html: {include: "test_mipen_sip_lowest.html"} 
}],

["test_mipen_hit_distractor", "Form", { 
html: {include: "test_mipen_hit_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];