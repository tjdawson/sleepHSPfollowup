var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_geck_nose_target","sep",
"test_doon_hi_highest","sep",
"test_jair_drum_distractor","sep",
"test_telpen_ball_target","sep",
"test_tula_hello_lowest","sep",
"test_zant_book_target","sep",
"test_bist_follow_lowest","sep",
"test_blime_no_highest","sep",
"test_tula_call_highest","sep",
"test_bist_horse_target","sep",
"test_geck_purse_distractor","sep",
"test_doon_chair_distractor","sep",
"test_geck_clean_lowest","sep",
"test_zant_here_lowest","sep",
"test_telpen_hi_distractor","sep",
"test_telpen_there_lowest","sep",
"test_tiz_call_distractor","sep",
"test_jair_time_target","sep",
"test_jair_fall_lowest","sep",
"test_blime_toy_target","sep",
"test_tiz_thing_target","sep",
"test_mipen_towel_lowest","sep",
"test_zant_you_highest","sep",
"test_mipen_bag_target","sep",
"test_doon_baby_lowest","sep",
"test_tula_mommy_target","sep",
"test_geck_eye_highest","sep",
"test_tace_who_lowest","sep",
"test_telpen_throw_highest","sep",
"test_vash_purse_highest","sep",
"test_vash_in_lowest","sep",
"test_bist_come_highest","sep",
"test_blime_come_distractor","sep",
"test_tace_don't_highest","sep",
"test_tula_eye_distractor","sep",
"test_tiz_this_lowest","sep",
"test_blime_push_lowest","sep",
"test_vash_shoe_target","sep",
"test_doon_necklace_target","sep",
"test_zant_back_distractor","sep",
"test_tace_no_distractor","sep",
"test_tace_mom_target","sep",
"test_jair_chair_highest","sep",
"test_vash_throw_distractor","sep",
"test_mipen_you_distractor","sep",
"test_mipen_back_highest","sep",
"test_bist_don't_distractor","sep",
"test_tiz_drum_highest","outro1","sr","outro2"
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

["test_tula_call_highest", "Form", { 
html: {include: "test_tula_call_highest.html"} 
}],

["test_tula_hello_lowest", "Form", { 
html: {include: "test_tula_hello_lowest.html"} 
}],

["test_tula_eye_distractor", "Form", { 
html: {include: "test_tula_eye_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_purse_highest", "Form", { 
html: {include: "test_vash_purse_highest.html"} 
}],

["test_vash_in_lowest", "Form", { 
html: {include: "test_vash_in_lowest.html"} 
}],

["test_vash_throw_distractor", "Form", { 
html: {include: "test_vash_throw_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_eye_highest", "Form", { 
html: {include: "test_geck_eye_highest.html"} 
}],

["test_geck_clean_lowest", "Form", { 
html: {include: "test_geck_clean_lowest.html"} 
}],

["test_geck_purse_distractor", "Form", { 
html: {include: "test_geck_purse_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_drum_highest", "Form", { 
html: {include: "test_tiz_drum_highest.html"} 
}],

["test_tiz_this_lowest", "Form", { 
html: {include: "test_tiz_this_lowest.html"} 
}],

["test_tiz_call_distractor", "Form", { 
html: {include: "test_tiz_call_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_come_highest", "Form", { 
html: {include: "test_bist_come_highest.html"} 
}],

["test_bist_follow_lowest", "Form", { 
html: {include: "test_bist_follow_lowest.html"} 
}],

["test_bist_don't_distractor", "Form", { 
html: {include: "test_bist_don't_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_chair_highest", "Form", { 
html: {include: "test_jair_chair_highest.html"} 
}],

["test_jair_fall_lowest", "Form", { 
html: {include: "test_jair_fall_lowest.html"} 
}],

["test_jair_drum_distractor", "Form", { 
html: {include: "test_jair_drum_distractor.html"} 
}],

["test_tace_mom_target", "Form", { 
html: {include: "test_tace_mom_target.html"} 
}],

["test_tace_don't_highest", "Form", { 
html: {include: "test_tace_don't_highest.html"} 
}],

["test_tace_who_lowest", "Form", { 
html: {include: "test_tace_who_lowest.html"} 
}],

["test_tace_no_distractor", "Form", { 
html: {include: "test_tace_no_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_hi_highest", "Form", { 
html: {include: "test_doon_hi_highest.html"} 
}],

["test_doon_baby_lowest", "Form", { 
html: {include: "test_doon_baby_lowest.html"} 
}],

["test_doon_chair_distractor", "Form", { 
html: {include: "test_doon_chair_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_throw_highest", "Form", { 
html: {include: "test_telpen_throw_highest.html"} 
}],

["test_telpen_there_lowest", "Form", { 
html: {include: "test_telpen_there_lowest.html"} 
}],

["test_telpen_hi_distractor", "Form", { 
html: {include: "test_telpen_hi_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_no_highest", "Form", { 
html: {include: "test_blime_no_highest.html"} 
}],

["test_blime_push_lowest", "Form", { 
html: {include: "test_blime_push_lowest.html"} 
}],

["test_blime_come_distractor", "Form", { 
html: {include: "test_blime_come_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_you_highest", "Form", { 
html: {include: "test_zant_you_highest.html"} 
}],

["test_zant_here_lowest", "Form", { 
html: {include: "test_zant_here_lowest.html"} 
}],

["test_zant_back_distractor", "Form", { 
html: {include: "test_zant_back_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_back_highest", "Form", { 
html: {include: "test_mipen_back_highest.html"} 
}],

["test_mipen_towel_lowest", "Form", { 
html: {include: "test_mipen_towel_lowest.html"} 
}],

["test_mipen_you_distractor", "Form", { 
html: {include: "test_mipen_you_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];