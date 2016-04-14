var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_tace_what_distractor","sep",
"test_bist_mister_distractor","sep",
"test_doon_why_lowest","sep",
"test_telpen_ball_target","sep",
"test_bist_horse_target","sep",
"test_geck_dirty_highest","sep",
"test_tula_come_highest","sep",
"test_tiz_thing_target","sep",
"test_zant_help_distractor","sep",
"test_tula_wow_lowest","sep",
"test_tiz_bang_highest","sep",
"test_doon_necklace_target","sep",
"test_tiz_help_distractor","sep",
"test_blime_still_lowest","sep",
"test_telpen_cool_distractor","sep",
"test_bist_where_lowest","sep",
"test_vash_yay_lowest","sep",
"test_tace_look_highest","sep",
"test_bist_what_highest","sep",
"test_tace_phone_target","sep",
"test_jair_help_distractor","sep",
"test_mipen_mister_highest","sep",
"test_telpen_spin_highest","sep",
"test_mipen_look_distractor","sep",
"test_doon_what_highest","sep",
"test_geck_spin_distractor","sep",
"test_geck_nose_target","sep",
"test_jair_time_target","sep",
"test_blime_mister_distractor","sep",
"test_vash_dirty_distractor","sep",
"test_zant_cool_highest","sep",
"test_geck_no_lowest","sep",
"test_tula_watch_distractor","sep",
"test_zant_floor_lowest","sep",
"test_blime_toy_target","sep",
"test_tula_mommy_target","sep",
"test_vash_watch_highest","sep",
"test_mipen_bag_target","sep",
"test_telpen_round_lowest","sep",
"test_tace_look_lowest","sep",
"test_doon_watch_distractor","sep",
"test_mipen_what_lowest","sep",
"test_tiz_what_lowest","sep",
"test_blime_help_highest","sep",
"test_jair_go_lowest","sep",
"test_jair_stand_highest","sep",
"test_zant_book_target","sep",
"test_vash_shoe_target","outro1","sr","outro2"
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
	continueMessage: null
        } ],
        
        //
["test_tula_mommy_target", "Form", { 
html: {include: "test_tula_mommy_target.html"} 
}],

["test_tula_come_highest", "Form", { 
html: {include: "test_tula_come_highest.html"} 
}],

["test_tula_wow_lowest", "Form", { 
html: {include: "test_tula_wow_lowest.html"} 
}],

["test_tula_cool_distractor", "Form", { 
html: {include: "test_tula_cool_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_watch_highest", "Form", { 
html: {include: "test_vash_watch_highest.html"} 
}],

["test_vash_yay_lowest", "Form", { 
html: {include: "test_vash_yay_lowest.html"} 
}],

["test_vash_dirty_distractor", "Form", { 
html: {include: "test_vash_dirty_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_mister_highest", "Form", { 
html: {include: "test_mipen_mister_highest.html"} 
}],

["test_mipen_what_lowest", "Form", { 
html: {include: "test_mipen_what_lowest.html"} 
}],

["test_mipen_bang_distractor", "Form", { 
html: {include: "test_mipen_bang_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_spin_highest", "Form", { 
html: {include: "test_telpen_spin_highest.html"} 
}],

["test_telpen_round_lowest", "Form", { 
html: {include: "test_telpen_round_lowest.html"} 
}],

["test_telpen_stand_distractor", "Form", { 
html: {include: "test_telpen_stand_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_bang_highest", "Form", { 
html: {include: "test_tiz_bang_highest.html"} 
}],

["test_tiz_what_lowest", "Form", { 
html: {include: "test_tiz_what_lowest.html"} 
}],

["test_tiz_look_distractor", "Form", { 
html: {include: "test_tiz_look_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_what_highest", "Form", { 
html: {include: "test_bist_what_highest.html"} 
}],

["test_bist_where_lowest", "Form", { 
html: {include: "test_bist_where_lowest.html"} 
}],

["test_bist_come_distractor", "Form", { 
html: {include: "test_bist_come_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_stand_highest", "Form", { 
html: {include: "test_jair_stand_highest.html"} 
}],

["test_jair_go_lowest", "Form", { 
html: {include: "test_jair_go_lowest.html"} 
}],

["test_jair_come_distractor", "Form", { 
html: {include: "test_jair_come_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_what_highest", "Form", { 
html: {include: "test_doon_what_highest.html"} 
}],

["test_doon_why_lowest", "Form", { 
html: {include: "test_doon_why_lowest.html"} 
}],

["test_doon_watch_distractor", "Form", { 
html: {include: "test_doon_watch_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_dirty_highest", "Form", { 
html: {include: "test_geck_dirty_highest.html"} 
}],

["test_geck_no_lowest", "Form", { 
html: {include: "test_geck_no_lowest.html"} 
}],

["test_geck_what_distractor", "Form", { 
html: {include: "test_geck_what_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_help_highest", "Form", { 
html: {include: "test_blime_help_highest.html"} 
}],

["test_blime_still_lowest", "Form", { 
html: {include: "test_blime_still_lowest.html"} 
}],

["test_blime_watch_distractor", "Form", { 
html: {include: "test_blime_watch_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_cool_highest", "Form", { 
html: {include: "test_zant_cool_highest.html"} 
}],

["test_zant_floor_lowest", "Form", { 
html: {include: "test_zant_floor_lowest.html"} 
}],

["test_zant_spin_distractor", "Form", { 
html: {include: "test_zant_spin_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_look_highest", "Form", { 
html: {include: "test_tace_look_highest.html"} 
}],

["test_tace_look_lowest", "Form", { 
html: {include: "test_tace_look_lowest.html"} 
}],

["test_tace_come_distractor", "Form", { 
html: {include: "test_tace_come_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];