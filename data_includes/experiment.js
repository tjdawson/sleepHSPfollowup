var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_tace_don't_highest","sep",
"test_jair_careful_highest","sep",
"test_geck_good_distractor","sep",
"test_tula_give_highest","sep",
"test_doon_watch_distractor","sep",
"test_jair_don't_distractor","sep",
"test_tiz_thing_target","sep",
"test_tula_touch_lowest","sep",
"test_mipen_bag_target","sep",
"test_vash_shoe_target","sep",
"test_tace_careful_distractor","sep",
"test_tiz_drum_lowest","sep",
"test_mipen_president_distractor","sep",
"test_geck_nicely_lowest","sep",
"test_bist_stand_highest","sep",
"test_bist_look_distractor","sep",
"test_telpen_eye_distractor","sep",
"test_tace_look_lowest","sep",
"test_mipen_ok_lowest","sep",
"test_vash_sit_lowest","sep",
"test_telpen_touch_lowest","sep",
"test_zant_come_lowest","sep",
"test_blime_here_lowest","sep",
"test_geck_nose_target","sep",
"test_telpen_watch_highest","sep",
"test_zant_across_distractor","sep",
"test_zant_book_target","sep",
"test_tula_stand_distractor","sep",
"test_doon_go_lowest","sep",
"test_doon_careful_highest","sep",
"test_blime_wait_distractor","sep",
"test_jair_time_target","sep",
"test_bist_horse_target","sep",
"test_doon_necklace_target","sep",
"test_blime_toy_target","sep",
"test_vash_give_distractor","sep",
"test_tula_mommy_target","sep",
"test_tace_telephone_target","sep",
"test_vash_good_highest","sep",
"test_telpen_ball_target","sep",
"test_zant_here_highest","sep",
"test_bist_look_lowest","sep",
"test_tiz_wait_highest","sep",
"test_geck_eye_highest","sep",
"test_mipen_here_highest","sep",
"test_tiz_here_distractor","sep",
"test_jair_look_lowest_filler","sep",
"test_blime_look_highest","outro1","sr","outro2"
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

["test_tula_touch_lowest", "Form", { 
html: {include: "test_tula_touch_lowest.html"} 
}],

["test_tula_stand_distractor", "Form", { 
html: {include: "test_tula_stand_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_good_highest", "Form", { 
html: {include: "test_vash_good_highest.html"} 
}],

["test_vash_sit_lowest", "Form", { 
html: {include: "test_vash_sit_lowest.html"} 
}],

["test_vash_give_distractor", "Form", { 
html: {include: "test_vash_give_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_eye_highest", "Form", { 
html: {include: "test_geck_eye_highest.html"} 
}],

["test_geck_nicely_lowest", "Form", { 
html: {include: "test_geck_nicely_lowest.html"} 
}],

["test_geck_good_distractor", "Form", { 
html: {include: "test_geck_good_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_wait_highest", "Form", { 
html: {include: "test_tiz_wait_highest.html"} 
}],

["test_tiz_drum_lowest", "Form", { 
html: {include: "test_tiz_drum_lowest.html"} 
}],

["test_tiz_here_distractor", "Form", { 
html: {include: "test_tiz_here_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_stand_highest", "Form", { 
html: {include: "test_bist_stand_highest.html"} 
}],

["test_bist_look_lowest", "Form", { 
html: {include: "test_bist_look_lowest.html"} 
}],

["test_bist_look_distractor", "Form", { 
html: {include: "test_bist_look_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_careful_highest", "Form", { 
html: {include: "test_jair_careful_highest.html"} 
}],

["test_jair_look_lowest_filler", "Form", { 
html: {include: "test_jair_look_lowest_filler.html"} 
}],

["test_jair_don't_distractor", "Form", { 
html: {include: "test_jair_don't_distractor.html"} 
}],

["test_tace_telephone_target", "Form", { 
html: {include: "test_tace_telephone_target.html"} 
}],

["test_tace_don't_highest", "Form", { 
html: {include: "test_tace_don't_highest.html"} 
}],

["test_tace_look_lowest", "Form", { 
html: {include: "test_tace_look_lowest.html"} 
}],

["test_tace_careful_distractor", "Form", { 
html: {include: "test_tace_careful_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_careful_highest", "Form", { 
html: {include: "test_doon_careful_highest.html"} 
}],

["test_doon_go_lowest", "Form", { 
html: {include: "test_doon_go_lowest.html"} 
}],

["test_doon_watch_distractor", "Form", { 
html: {include: "test_doon_watch_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_watch_highest", "Form", { 
html: {include: "test_telpen_watch_highest.html"} 
}],

["test_telpen_touch_lowest", "Form", { 
html: {include: "test_telpen_touch_lowest.html"} 
}],

["test_telpen_eye_distractor", "Form", { 
html: {include: "test_telpen_eye_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_look_highest", "Form", { 
html: {include: "test_blime_look_highest.html"} 
}],

["test_blime_here_lowest", "Form", { 
html: {include: "test_blime_here_lowest.html"} 
}],

["test_blime_wait_distractor", "Form", { 
html: {include: "test_blime_wait_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_here_highest", "Form", { 
html: {include: "test_zant_here_highest.html"} 
}],

["test_zant_come_lowest", "Form", { 
html: {include: "test_zant_come_lowest.html"} 
}],

["test_zant_across_distractor", "Form", { 
html: {include: "test_zant_across_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_here_highest", "Form", { 
html: {include: "test_mipen_here_highest.html"} 
}],

["test_mipen_ok_lowest", "Form", { 
html: {include: "test_mipen_ok_lowest.html"} 
}],

["test_mipen_president_distractor", "Form", { 
html: {include: "test_mipen_president_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];