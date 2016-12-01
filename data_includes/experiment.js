var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_telpen_push_highest","sep",
"test_vash_shoe_target","sep",
"test_geck_finished_lowest","sep",
"test_tace_telephone_target","sep",
"test_geck_eye_highest","sep",
"test_doon_necklace_target","sep",
"test_mipen_include_distractor","sep",
"test_blime_bag_highest","sep",
"test_telpen_ball_target","sep",
"test_tiz_here_lowest","sep",
"test_bist_horse_target","sep",
"test_mipen_bag_target","sep",
"test_mipen_talk_lowest","sep",
"test_blime_cleaning_lowest","sep",
"test_tula_careful_highest","sep",
"test_tiz_thing_target","sep",
"test_bist_now_lowest","sep",
"test_bist_no_highest","sep",
"test_zant_book_target","sep",
"test_vash_carry_highest","sep",
"test_vash_inside_lowest","sep",
"test_blime_push_distractor","sep",
"test_tula_nice_lowest","sep",
"test_vash_come_distractor","sep",
"test_tace_this_lowest","sep",
"test_telpen_gently_distractor","sep",
"test_geck_nose_target","sep",
"test_jair_hi_distractor","sep",
"test_tiz_gently_highest","sep",
"test_mipen_come_highest","sep",
"test_blime_toy_target","sep",
"test_tace_hi_highest","sep",
"test_doon_careful_highest","sep",
"test_jair_time_target","sep",
"test_doon_wait_lowest","sep",
"test_doon_bag_distractor","sep",
"test_tula_no_distractor","sep",
"test_zant_come_highest","sep",
"test_zant_follow_lowest","sep",
"test_geck_careful_distractor","sep",
"test_telpen_wait_lowest","sep",
"test_tace_eye_distractor","sep",
"test_zant_purpose_distractor","sep",
"test_tula_mommy_target","sep",
"test_tiz_stand up_distractor","sep",
"test_bist_carry_distractor","sep",
"test_jair_stand up_highest","sep",
"test_jair_fall_lowest","outro1","sr","outro2"
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

["test_tula_careful_highest", "Form", { 
html: {include: "test_tula_careful_highest.html"} 
}],

["test_tula_nice_lowest", "Form", { 
html: {include: "test_tula_nice_lowest.html"} 
}],

["test_tula_no_distractor", "Form", { 
html: {include: "test_tula_no_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_carry_highest", "Form", { 
html: {include: "test_vash_carry_highest.html"} 
}],

["test_vash_inside_lowest", "Form", { 
html: {include: "test_vash_inside_lowest.html"} 
}],

["test_vash_come_distractor", "Form", { 
html: {include: "test_vash_come_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_eye_highest", "Form", { 
html: {include: "test_geck_eye_highest.html"} 
}],

["test_geck_finished_lowest", "Form", { 
html: {include: "test_geck_finished_lowest.html"} 
}],

["test_geck_careful_distractor", "Form", { 
html: {include: "test_geck_careful_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_gently_highest", "Form", { 
html: {include: "test_tiz_gently_highest.html"} 
}],

["test_tiz_here_lowest", "Form", { 
html: {include: "test_tiz_here_lowest.html"} 
}],

["test_tiz_stand up_distractor", "Form", { 
html: {include: "test_tiz_stand up_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_no_highest", "Form", { 
html: {include: "test_bist_no_highest.html"} 
}],

["test_bist_now_lowest", "Form", { 
html: {include: "test_bist_now_lowest.html"} 
}],

["test_bist_carry_distractor", "Form", { 
html: {include: "test_bist_carry_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_stand up_highest", "Form", { 
html: {include: "test_jair_stand up_highest.html"} 
}],

["test_jair_fall_lowest", "Form", { 
html: {include: "test_jair_fall_lowest.html"} 
}],

["test_jair_hi_distractor", "Form", { 
html: {include: "test_jair_hi_distractor.html"} 
}],

["test_tace_telephone_target", "Form", { 
html: {include: "test_tace_telephone_target.html"} 
}],

["test_tace_hi_highest", "Form", { 
html: {include: "test_tace_hi_highest.html"} 
}],

["test_tace_this_lowest", "Form", { 
html: {include: "test_tace_this_lowest.html"} 
}],

["test_tace_eye_distractor", "Form", { 
html: {include: "test_tace_eye_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_careful_highest", "Form", { 
html: {include: "test_doon_careful_highest.html"} 
}],

["test_doon_wait_lowest", "Form", { 
html: {include: "test_doon_wait_lowest.html"} 
}],

["test_doon_bag_distractor", "Form", { 
html: {include: "test_doon_bag_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_push_highest", "Form", { 
html: {include: "test_telpen_push_highest.html"} 
}],

["test_telpen_wait_lowest", "Form", { 
html: {include: "test_telpen_wait_lowest.html"} 
}],

["test_telpen_gently_distractor", "Form", { 
html: {include: "test_telpen_gently_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_bag_highest", "Form", { 
html: {include: "test_blime_bag_highest.html"} 
}],

["test_blime_cleaning_lowest", "Form", { 
html: {include: "test_blime_cleaning_lowest.html"} 
}],

["test_blime_push_distractor", "Form", { 
html: {include: "test_blime_push_distractor.html"} 
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

["test_zant_purpose_distractor", "Form", { 
html: {include: "test_zant_purpose_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_come_highest", "Form", { 
html: {include: "test_mipen_come_highest.html"} 
}],

["test_mipen_talk_lowest", "Form", { 
html: {include: "test_mipen_talk_lowest.html"} 
}],

["test_mipen_include_distractor", "Form", { 
html: {include: "test_mipen_include_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];