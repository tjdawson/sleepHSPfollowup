var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_jair_time_target","sep",
"test_zant_clean_distractor","sep",
"test_tiz_thing_target","sep",
"test_mipen_plant_distractor","sep",
"test_blime_gone_lowest","sep",
"test_bist_gone_distractor","sep",
"test_doon_necklace_target","sep",
"test_mipen_gone_highest","sep",
"test_tula_mommy_target","sep",
"test_doon_spin_distractor","sep",
"test_tula_eye_distractor","sep",
"test_geck_dad_lowest","sep",
"test_mipen_put_lowest","sep",
"test_geck_play_distractor","sep",
"test_tiz_play_highest","sep",
"test_vash_close_highest","sep",
"test_vash_stop_distractor","sep",
"test_doon_take_highest","sep",
"test_jair_help_highest","sep",
"test_tula_stop_highest","sep",
"test_tula_watch_lowest","sep",
"test_geck_nose_target","sep",
"test_tace_stop_highest","sep",
"test_vash_shoe_target","sep",
"test_blime_clean_highest","sep",
"test_mipen_bag_target","sep",
"test_telpen_take_distractor","sep",
"test_tace_close_distractor","sep",
"test_zant_open_lowest","sep",
"test_vash_look_lowest","sep",
"test_blime_toy_target","sep",
"test_jair_careful_distractor","sep",
"test_bist_happy_lowest","sep",
"test_telpen_spin_highest","sep",
"test_geck_eye_highest","sep",
"test_zant_book_target","sep",
"test_bist_horse_target","sep",
"test_blime_help_distractor","sep",
"test_tace_here_lowest","sep",
"test_tace_phone_target","sep",
"test_telpen_new_lowest","sep",
"test_doon_careful_lowest","sep",
"test_jair_need_lowest","sep",
"test_bist_careful_highest","sep",
"test_telpen_ball_target","sep",
"test_tiz_follow_distractor","sep",
"test_tiz_here_lowest","sep",
"test_zant_follow_highest","outro1","sr","outro2"
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

["test_tula_stop_highest", "Form", { 
html: {include: "test_tula_stop_highest.html"} 
}],

["test_tula_watch_lowest", "Form", { 
html: {include: "test_tula_watch_lowest.html"} 
}],

["test_tula_eye_distractor", "Form", { 
html: {include: "test_tula_eye_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_close_highest", "Form", { 
html: {include: "test_vash_close_highest.html"} 
}],

["test_vash_look_lowest", "Form", { 
html: {include: "test_vash_look_lowest.html"} 
}],

["test_vash_stop_distractor", "Form", { 
html: {include: "test_vash_stop_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_eye_highest", "Form", { 
html: {include: "test_geck_eye_highest.html"} 
}],

["test_geck_dad_lowest", "Form", { 
html: {include: "test_geck_dad_lowest.html"} 
}],

["test_geck_play_distractor", "Form", { 
html: {include: "test_geck_play_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_play_highest", "Form", { 
html: {include: "test_tiz_play_highest.html"} 
}],

["test_tiz_here_lowest", "Form", { 
html: {include: "test_tiz_here_lowest.html"} 
}],

["test_tiz_follow_distractor", "Form", { 
html: {include: "test_tiz_follow_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_careful_highest", "Form", { 
html: {include: "test_bist_careful_highest.html"} 
}],

["test_bist_happy_lowest", "Form", { 
html: {include: "test_bist_happy_lowest.html"} 
}],

["test_bist_gone_distractor", "Form", { 
html: {include: "test_bist_gone_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_help_highest", "Form", { 
html: {include: "test_jair_help_highest.html"} 
}],

["test_jair_need_lowest", "Form", { 
html: {include: "test_jair_need_lowest.html"} 
}],

["test_jair_careful_distractor", "Form", { 
html: {include: "test_jair_careful_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_stop_highest", "Form", { 
html: {include: "test_tace_stop_highest.html"} 
}],

["test_tace_here_lowest", "Form", { 
html: {include: "test_tace_here_lowest.html"} 
}],

["test_tace_close_distractor", "Form", { 
html: {include: "test_tace_close_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_take_highest", "Form", { 
html: {include: "test_doon_take_highest.html"} 
}],

["test_doon_careful_lowest", "Form", { 
html: {include: "test_doon_careful_lowest.html"} 
}],

["test_doon_spin_distractor", "Form", { 
html: {include: "test_doon_spin_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_spin_highest", "Form", { 
html: {include: "test_telpen_spin_highest.html"} 
}],

["test_telpen_new_lowest", "Form", { 
html: {include: "test_telpen_new_lowest.html"} 
}],

["test_telpen_take_distractor", "Form", { 
html: {include: "test_telpen_take_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_clean_highest", "Form", { 
html: {include: "test_blime_clean_highest.html"} 
}],

["test_blime_gone_lowest", "Form", { 
html: {include: "test_blime_gone_lowest.html"} 
}],

["test_blime_help_distractor", "Form", { 
html: {include: "test_blime_help_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_follow_highest", "Form", { 
html: {include: "test_zant_follow_highest.html"} 
}],

["test_zant_open_lowest", "Form", { 
html: {include: "test_zant_open_lowest.html"} 
}],

["test_zant_clean_distractor", "Form", { 
html: {include: "test_zant_clean_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_gone_highest", "Form", { 
html: {include: "test_mipen_gone_highest.html"} 
}],

["test_mipen_put_lowest", "Form", { 
html: {include: "test_mipen_put_lowest.html"} 
}],

["test_mipen_plant_distractor", "Form", { 
html: {include: "test_mipen_plant_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];