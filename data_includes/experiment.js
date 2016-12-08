var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_tula_come_highest","sep",
"test_geck_mom_target","sep",
"test_mipen_necklace_highest","sep",
"test_telpen_ball_target","sep",
"test_jair_food_lowest","sep",
"test_jair_time_target","sep",
"test_tace_what_highest","sep",
"test_jair_open_highest","sep",
"test_telpen_fun_lowest","sep",
"test_bist_what_distractor","sep",
"test_mipen_call_lowest","sep",
"test_blime_touch_distractor","sep",
"test_tiz_here_lowest","sep",
"test_blime_sit_highest","sep",
"test_vash_necklace_distractor","sep",
"test_vash_shoe_target","sep",
"test_vash_clean_lowest","sep",
"test_tace_phone_target","sep",
"test_tiz_fetch_distractor","sep",
"test_bist_horse_target","sep",
"test_geck_watch_distractor","sep",
"test_vash_yours_highest","sep",
"test_zant_clean_lowest","sep",
"test_blime_toy_target","sep",
"test_geck_kiss_lowest","sep",
"test_geck_touch_highest","sep",
"test_telpen_fetch_highest","sep",
"test_zant_book_target","sep",
"test_tula_leave_distractor","sep",
"test_jair_yours_distractor","sep",
"test_mipen_open_distractor","sep",
"test_doon_nice_lowest","sep",
"test_tiz_watch_highest","sep",
"test_blime_purse_lowest","sep",
"test_telpen_bring_distractor","sep",
"test_zant_where_highest","sep",
"test_doon_necklace_target","sep",
"test_bist_leave_highest","sep",
"test_tula_mommy_target","sep",
"test_bist_home_lowest","sep",
"test_tace_sit_distractor","sep",
"test_doon_where_distractor","sep",
"test_mipen_bag_target","sep",
"test_doon_bring_highest","sep",
"test_tace_call_lowest","sep",
"test_zant_come_distractor","sep",
"test_tula_call_lowest","sep",
"test_tiz_thing_target","outro1","sr","outro2"
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

["test_tula_call_lowest", "Form", { 
html: {include: "test_tula_call_lowest.html"} 
}],

["test_tula_leave_distractor", "Form", { 
html: {include: "test_tula_leave_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_yours_highest", "Form", { 
html: {include: "test_vash_yours_highest.html"} 
}],

["test_vash_clean_lowest", "Form", { 
html: {include: "test_vash_clean_lowest.html"} 
}],

["test_vash_necklace_distractor", "Form", { 
html: {include: "test_vash_necklace_distractor.html"} 
}],

["test_geck_mom_target", "Form", { 
html: {include: "test_geck_mom_target.html"} 
}],

["test_geck_touch_highest", "Form", { 
html: {include: "test_geck_touch_highest.html"} 
}],

["test_geck_kiss_lowest", "Form", { 
html: {include: "test_geck_kiss_lowest.html"} 
}],

["test_geck_watch_distractor", "Form", { 
html: {include: "test_geck_watch_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_watch_highest", "Form", { 
html: {include: "test_tiz_watch_highest.html"} 
}],

["test_tiz_here_lowest", "Form", { 
html: {include: "test_tiz_here_lowest.html"} 
}],

["test_tiz_fetch_distractor", "Form", { 
html: {include: "test_tiz_fetch_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_leave_highest", "Form", { 
html: {include: "test_bist_leave_highest.html"} 
}],

["test_bist_home_lowest", "Form", { 
html: {include: "test_bist_home_lowest.html"} 
}],

["test_bist_what_distractor", "Form", { 
html: {include: "test_bist_what_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_open_highest", "Form", { 
html: {include: "test_jair_open_highest.html"} 
}],

["test_jair_food_lowest", "Form", { 
html: {include: "test_jair_food_lowest.html"} 
}],

["test_jair_yours_distractor", "Form", { 
html: {include: "test_jair_yours_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_what_highest", "Form", { 
html: {include: "test_tace_what_highest.html"} 
}],

["test_tace_call_lowest", "Form", { 
html: {include: "test_tace_call_lowest.html"} 
}],

["test_tace_sit_distractor", "Form", { 
html: {include: "test_tace_sit_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_bring_highest", "Form", { 
html: {include: "test_doon_bring_highest.html"} 
}],

["test_doon_nice_lowest", "Form", { 
html: {include: "test_doon_nice_lowest.html"} 
}],

["test_doon_where_distractor", "Form", { 
html: {include: "test_doon_where_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_fetch_highest", "Form", { 
html: {include: "test_telpen_fetch_highest.html"} 
}],

["test_telpen_fun_lowest", "Form", { 
html: {include: "test_telpen_fun_lowest.html"} 
}],

["test_telpen_bring_distractor", "Form", { 
html: {include: "test_telpen_bring_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_sit_highest", "Form", { 
html: {include: "test_blime_sit_highest.html"} 
}],

["test_blime_purse_lowest", "Form", { 
html: {include: "test_blime_purse_lowest.html"} 
}],

["test_blime_touch_distractor", "Form", { 
html: {include: "test_blime_touch_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_where_highest", "Form", { 
html: {include: "test_zant_where_highest.html"} 
}],

["test_zant_clean_lowest", "Form", { 
html: {include: "test_zant_clean_lowest.html"} 
}],

["test_zant_come_distractor", "Form", { 
html: {include: "test_zant_come_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_necklace_highest", "Form", { 
html: {include: "test_mipen_necklace_highest.html"} 
}],

["test_mipen_call_lowest", "Form", { 
html: {include: "test_mipen_call_lowest.html"} 
}],

["test_mipen_open_distractor", "Form", { 
html: {include: "test_mipen_open_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];