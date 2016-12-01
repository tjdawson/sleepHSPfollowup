var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_doon_dancing_highest","sep",
"test_bist_wild_lowest","sep",
"test_geck_finger_highest","sep",
"test_jair_careful_highest","sep",
"test_tiz_toy_highest","sep",
"test_blime_run_distractor","sep",
"test_tiz_thing_target","sep",
"test_geck_nose_target","sep",
"test_geck_careful_distractor","sep",
"test_tiz_tune_lowest","sep",
"test_telpen_ball_target","sep",
"test_mipen_cup_lowest","sep",
"test_tula_mommy_target","sep",
"test_blime_how_highest","sep",
"test_mipen_here_highest","sep",
"test_vash_toy_distractor","sep",
"test_jair_munch_lowest","sep",
"test_tace_enough_highest","sep",
"test_tace_here_distractor","sep",
"test_jair_time_target","sep",
"test_jair_finger_distractor","sep",
"test_vash_shoe_target","sep",
"test_tula_enough_distractor","sep",
"test_zant_come_distractor","sep",
"test_vash_bear_lowest","sep",
"test_doon_necklace_target","sep",
"test_doon_kill_lowest","sep",
"test_vash_deliver_highest","sep",
"test_mipen_bag_target","sep",
"test_geck_dirty_lowest","sep",
"test_zant_upstairs_highest","sep",
"test_telpen_throw_lowest","sep",
"test_telpen_wheel_highest","sep",
"test_bist_run_highest","sep",
"test_tiz_how_distractor","sep",
"test_tace_dog_lowest","sep",
"test_mipen_dancing_distractor","sep",
"test_blime_toy_target","sep",
"test_telpen_upstairs_distractor","sep",
"test_tula_come_highest","sep",
"test_zant_book_target","sep",
"test_zant_floor_lowest","sep",
"test_tace_telephone_target","sep",
"test_doon_wheel_distractor","sep",
"test_bist_deliver_distractor","sep",
"test_bist_horse_target","sep",
"test_blime_fall_lowest","sep",
"test_tula_talk_lowest","outro1","sr","outro2"
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

["test_tula_talk_lowest", "Form", { 
html: {include: "test_tula_talk_lowest.html"} 
}],

["test_tula_enough_distractor", "Form", { 
html: {include: "test_tula_enough_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_deliver_highest", "Form", { 
html: {include: "test_vash_deliver_highest.html"} 
}],

["test_vash_bear_lowest", "Form", { 
html: {include: "test_vash_bear_lowest.html"} 
}],

["test_vash_toy_distractor", "Form", { 
html: {include: "test_vash_toy_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_finger_highest", "Form", { 
html: {include: "test_geck_finger_highest.html"} 
}],

["test_geck_dirty_lowest", "Form", { 
html: {include: "test_geck_dirty_lowest.html"} 
}],

["test_geck_careful_distractor", "Form", { 
html: {include: "test_geck_careful_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_toy_highest", "Form", { 
html: {include: "test_tiz_toy_highest.html"} 
}],

["test_tiz_tune_lowest", "Form", { 
html: {include: "test_tiz_tune_lowest.html"} 
}],

["test_tiz_how_distractor", "Form", { 
html: {include: "test_tiz_how_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_run_highest", "Form", { 
html: {include: "test_bist_run_highest.html"} 
}],

["test_bist_wild_lowest", "Form", { 
html: {include: "test_bist_wild_lowest.html"} 
}],

["test_bist_deliver_distractor", "Form", { 
html: {include: "test_bist_deliver_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_careful_highest", "Form", { 
html: {include: "test_jair_careful_highest.html"} 
}],

["test_jair_munch_lowest", "Form", { 
html: {include: "test_jair_munch_lowest.html"} 
}],

["test_jair_finger_distractor", "Form", { 
html: {include: "test_jair_finger_distractor.html"} 
}],

["test_tace_telephone_target", "Form", { 
html: {include: "test_tace_telephone_target.html"} 
}],

["test_tace_enough_highest", "Form", { 
html: {include: "test_tace_enough_highest.html"} 
}],

["test_tace_dog_lowest", "Form", { 
html: {include: "test_tace_dog_lowest.html"} 
}],

["test_tace_here_distractor", "Form", { 
html: {include: "test_tace_here_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_dancing_highest", "Form", { 
html: {include: "test_doon_dancing_highest.html"} 
}],

["test_doon_kill_lowest", "Form", { 
html: {include: "test_doon_kill_lowest.html"} 
}],

["test_doon_wheel_distractor", "Form", { 
html: {include: "test_doon_wheel_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_wheel_highest", "Form", { 
html: {include: "test_telpen_wheel_highest.html"} 
}],

["test_telpen_throw_lowest", "Form", { 
html: {include: "test_telpen_throw_lowest.html"} 
}],

["test_telpen_upstairs_distractor", "Form", { 
html: {include: "test_telpen_upstairs_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_how_highest", "Form", { 
html: {include: "test_blime_how_highest.html"} 
}],

["test_blime_fall_lowest", "Form", { 
html: {include: "test_blime_fall_lowest.html"} 
}],

["test_blime_run_distractor", "Form", { 
html: {include: "test_blime_run_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_upstairs_highest", "Form", { 
html: {include: "test_zant_upstairs_highest.html"} 
}],

["test_zant_floor_lowest", "Form", { 
html: {include: "test_zant_floor_lowest.html"} 
}],

["test_zant_come_distractor", "Form", { 
html: {include: "test_zant_come_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_here_highest", "Form", { 
html: {include: "test_mipen_here_highest.html"} 
}],

["test_mipen_cup_lowest", "Form", { 
html: {include: "test_mipen_cup_lowest.html"} 
}],

["test_mipen_dancing_distractor", "Form", { 
html: {include: "test_mipen_dancing_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];