var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_bist_sit_distractor","sep",
"test_telpen_come_distractor","sep",
"test_vash_play_lowest","sep",
"test_telpen_want_lowest","sep",
"test_geck_walk_distractor","sep",
"test_vash_wipe_distractor","sep",
"test_doon_necklace_target","sep",
"test_geck_horse_lowest","sep",
"test_zant_here_lowest","sep",
"test_doon_give_lowest","sep",
"test_jair_this_distractor","sep",
"test_blime_baby_distractor","sep",
"test_blime_toy_target","sep",
"test_bist_outside_lowest","sep",
"test_bist_come_highest","sep",
"test_mipen_hey_lowest","sep",
"test_tiz_look_distractor","sep",
"test_mipen_mind_distractor","sep",
"test_tace_phone_target","sep",
"test_doon_drink_distractor","sep",
"test_tiz_play_lowest","sep",
"test_tiz_this_highest","sep",
"test_telpen_ball_target","sep",
"test_tula_mommy_target","sep",
"test_mipen_drink_highest","sep",
"test_bist_horse_target","sep",
"test_tula_phone_lowest","sep",
"test_tula_give_highest","sep",
"test_geck_wipe_highest","sep",
"test_zant_walk_highest","sep",
"test_blime_push_lowest","sep",
"test_tiz_thing_target","sep",
"test_geck_nose_target","sep",
"test_jair_help_highest","sep",
"test_tace_help_distractor","sep",
"test_tace_this_lowest","sep",
"test_vash_shoe_target","sep",
"test_jair_time_target","sep",
"test_jair_hurt_lowest","sep",
"test_mipen_bag_target","sep",
"test_zant_give_distractor","sep",
"test_blime_look_highest","sep",
"test_doon_baby_highest","sep",
"test_telpen_throw_highest","sep",
"test_tula_throw_distractor","sep",
"test_tace_look_highest","sep",
"test_vash_sit_highest","sep",
"test_zant_book_target","outro1","sr","outro2"
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

["test_tula_give_highest", "Form", { 
html: {include: "test_tula_give_highest.html"} 
}],

["test_tula_phone_lowest", "Form", { 
html: {include: "test_tula_phone_lowest.html"} 
}],

["test_tula_throw_distractor", "Form", { 
html: {include: "test_tula_throw_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_sit_highest", "Form", { 
html: {include: "test_vash_sit_highest.html"} 
}],

["test_vash_play_lowest", "Form", { 
html: {include: "test_vash_play_lowest.html"} 
}],

["test_vash_wipe_distractor", "Form", { 
html: {include: "test_vash_wipe_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_wipe_highest", "Form", { 
html: {include: "test_geck_wipe_highest.html"} 
}],

["test_geck_horse_lowest", "Form", { 
html: {include: "test_geck_horse_lowest.html"} 
}],

["test_geck_walk_distractor", "Form", { 
html: {include: "test_geck_walk_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_this_highest", "Form", { 
html: {include: "test_tiz_this_highest.html"} 
}],

["test_tiz_play_lowest", "Form", { 
html: {include: "test_tiz_play_lowest.html"} 
}],

["test_tiz_look_distractor", "Form", { 
html: {include: "test_tiz_look_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_come_highest", "Form", { 
html: {include: "test_bist_come_highest.html"} 
}],

["test_bist_outside_lowest", "Form", { 
html: {include: "test_bist_outside_lowest.html"} 
}],

["test_bist_sit_distractor", "Form", { 
html: {include: "test_bist_sit_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_help_highest", "Form", { 
html: {include: "test_jair_help_highest.html"} 
}],

["test_jair_hurt_lowest", "Form", { 
html: {include: "test_jair_hurt_lowest.html"} 
}],

["test_jair_this_distractor", "Form", { 
html: {include: "test_jair_this_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_look_highest", "Form", { 
html: {include: "test_tace_look_highest.html"} 
}],

["test_tace_this_lowest", "Form", { 
html: {include: "test_tace_this_lowest.html"} 
}],

["test_tace_help_distractor", "Form", { 
html: {include: "test_tace_help_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_baby_highest", "Form", { 
html: {include: "test_doon_baby_highest.html"} 
}],

["test_doon_give_lowest", "Form", { 
html: {include: "test_doon_give_lowest.html"} 
}],

["test_doon_drink_distractor", "Form", { 
html: {include: "test_doon_drink_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_throw_highest", "Form", { 
html: {include: "test_telpen_throw_highest.html"} 
}],

["test_telpen_want_lowest", "Form", { 
html: {include: "test_telpen_want_lowest.html"} 
}],

["test_telpen_come_distractor", "Form", { 
html: {include: "test_telpen_come_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_look_highest", "Form", { 
html: {include: "test_blime_look_highest.html"} 
}],

["test_blime_push_lowest", "Form", { 
html: {include: "test_blime_push_lowest.html"} 
}],

["test_blime_baby_distractor", "Form", { 
html: {include: "test_blime_baby_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_walk_highest", "Form", { 
html: {include: "test_zant_walk_highest.html"} 
}],

["test_zant_here_lowest", "Form", { 
html: {include: "test_zant_here_lowest.html"} 
}],

["test_zant_give_distractor", "Form", { 
html: {include: "test_zant_give_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_drink_highest", "Form", { 
html: {include: "test_mipen_drink_highest.html"} 
}],

["test_mipen_hey_lowest", "Form", { 
html: {include: "test_mipen_hey_lowest.html"} 
}],

["test_mipen_mind_distractor", "Form", { 
html: {include: "test_mipen_mind_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];