var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_tace_shake_distractor","sep",
"test_mipen_hear_lowest","sep",
"test_mipen_control_distractor","sep",
"test_mipen_bag_target","sep",
"test_tiz_step_lowest","sep",
"test_blime_open_distractor","sep",
"test_blime_neck_lowest","sep",
"test_zant_come_lowest","sep",
"test_jair_open_highest","sep",
"test_tula_drink_lowest","sep",
"test_tula_hold_highest","sep",
"test_zant_stand_highest","sep",
"test_tiz_cup_distractor","sep",
"test_zant_book_target","sep",
"test_telpen_tap_distractor","sep",
"test_jair_time_target","sep",
"test_tiz_tap_highest","sep",
"test_bist_come_lowest","sep",
"test_vash_wait_lowest","sep",
"test_telpen_coming_lowest","sep",
"test_geck_sit_lowest","sep",
"test_mipen_cup_highest","sep",
"test_tula_you_distractor","sep",
"test_tace_phone_target","sep",
"test_bist_horse_target","sep",
"test_tace_call_lowest","sep",
"test_geck_touch_highest","sep",
"test_vash_shoe_target","sep",
"test_geck_momma_target","sep",
"test_doon_necklace_target","sep",
"test_doon_doll_lowest","sep",
"test_zant_throw_distractor","sep",
"test_bist_go_highest","sep",
"test_tace_you_highest","sep",
"test_jair_hurry_lowest","sep",
"test_blime_hold_highest","sep",
"test_tiz_thing_target","sep",
"test_telpen_throw_highest","sep",
"test_doon_shake_highest","sep",
"test_vash_hold_distractor","sep",
"test_tula_mommy_target","sep",
"test_telpen_ball_target","sep",
"test_bist_touch_distractor","sep",
"test_jair_go_distractor","sep",
"test_vash_drink_highest","sep",
"test_doon_stand_distractor","sep",
"test_geck_drink_distractor","sep",
"test_blime_toy_target","outro1","sr","outro2"
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

["test_tula_hold_highest", "Form", { 
html: {include: "test_tula_hold_highest.html"} 
}],

["test_tula_drink_lowest", "Form", { 
html: {include: "test_tula_drink_lowest.html"} 
}],

["test_tula_you_distractor", "Form", { 
html: {include: "test_tula_you_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_drink_highest", "Form", { 
html: {include: "test_vash_drink_highest.html"} 
}],

["test_vash_wait_lowest", "Form", { 
html: {include: "test_vash_wait_lowest.html"} 
}],

["test_vash_hold_distractor", "Form", { 
html: {include: "test_vash_hold_distractor.html"} 
}],

["test_geck_momma_target", "Form", { 
html: {include: "test_geck_momma_target.html"} 
}],

["test_geck_touch_highest", "Form", { 
html: {include: "test_geck_touch_highest.html"} 
}],

["test_geck_sit_lowest", "Form", { 
html: {include: "test_geck_sit_lowest.html"} 
}],

["test_geck_drink_distractor", "Form", { 
html: {include: "test_geck_drink_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_tap_highest", "Form", { 
html: {include: "test_tiz_tap_highest.html"} 
}],

["test_tiz_step_lowest", "Form", { 
html: {include: "test_tiz_step_lowest.html"} 
}],

["test_tiz_cup_distractor", "Form", { 
html: {include: "test_tiz_cup_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_go_highest", "Form", { 
html: {include: "test_bist_go_highest.html"} 
}],

["test_bist_come_lowest", "Form", { 
html: {include: "test_bist_come_lowest.html"} 
}],

["test_bist_touch_distractor", "Form", { 
html: {include: "test_bist_touch_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_open_highest", "Form", { 
html: {include: "test_jair_open_highest.html"} 
}],

["test_jair_hurry_lowest", "Form", { 
html: {include: "test_jair_hurry_lowest.html"} 
}],

["test_jair_go_distractor", "Form", { 
html: {include: "test_jair_go_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_you_highest", "Form", { 
html: {include: "test_tace_you_highest.html"} 
}],

["test_tace_call_lowest", "Form", { 
html: {include: "test_tace_call_lowest.html"} 
}],

["test_tace_shake_distractor", "Form", { 
html: {include: "test_tace_shake_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_shake_highest", "Form", { 
html: {include: "test_doon_shake_highest.html"} 
}],

["test_doon_doll_lowest", "Form", { 
html: {include: "test_doon_doll_lowest.html"} 
}],

["test_doon_stand_distractor", "Form", { 
html: {include: "test_doon_stand_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_throw_highest", "Form", { 
html: {include: "test_telpen_throw_highest.html"} 
}],

["test_telpen_coming_lowest", "Form", { 
html: {include: "test_telpen_coming_lowest.html"} 
}],

["test_telpen_tap_distractor", "Form", { 
html: {include: "test_telpen_tap_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_hold_highest", "Form", { 
html: {include: "test_blime_hold_highest.html"} 
}],

["test_blime_neck_lowest", "Form", { 
html: {include: "test_blime_neck_lowest.html"} 
}],

["test_blime_open_distractor", "Form", { 
html: {include: "test_blime_open_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_stand_highest", "Form", { 
html: {include: "test_zant_stand_highest.html"} 
}],

["test_zant_come_lowest", "Form", { 
html: {include: "test_zant_come_lowest.html"} 
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

["test_mipen_hear_lowest", "Form", { 
html: {include: "test_mipen_hear_lowest.html"} 
}],

["test_mipen_control_distractor", "Form", { 
html: {include: "test_mipen_control_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];