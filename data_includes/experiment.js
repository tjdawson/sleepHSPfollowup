var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_zant_book_target","sep",
"test_tula_phone_highest","sep",
"test_bist_poopoo_distractor","sep",
"test_bist_common_highest","sep",
"test_blime_poopoo_highest","sep",
"test_telpen_fetch_highest","sep",
"test_vash_shoe_target","sep",
"test_tace_oops_distractor","sep",
"test_vash_horse_lowest","sep",
"test_zant_uppies_distractor","sep",
"test_vash_vroooom_highest","sep",
"test_tace_call_highest","sep",
"test_doon_common_distractor","sep",
"test_doon_choke_lowest","sep",
"test_tula_come_lowest","sep",
"test_telpen_hi_lowest","sep",
"test_geck_juice_distractor","sep",
"test_bist_horse_target","sep",
"test_jair_oops_highest","sep",
"test_mipen_juice_highest","sep",
"test_blime_push_lowest","sep",
"test_tiz_thing_target","sep",
"test_mipen_bag_target","sep",
"test_tula_mommy_target","sep",
"test_vash_follow_distractor","sep",
"test_doon_drum_highest","sep",
"test_blime_toy_target","sep",
"test_geck_horse_lowest","sep",
"test_tace_here_lowest_filler","sep",
"test_blime_stair_distractor","sep",
"test_bist_green_lowest","sep",
"test_tiz_look_lowest","sep",
"test_mipen_phone_distractor","sep",
"test_tula_fetch_distractor","sep",
"test_tiz_drum_distractor","sep",
"test_jair_time_target","sep",
"test_telpen_ball_target","sep",
"test_tiz_stair_highest","sep",
"test_jair_vroooom_distractor","sep",
"test_geck_uppies_highest","sep",
"test_geck_horsey_target","sep",
"test_jair_help_lowest","sep",
"test_mipen_stop_lowest","sep",
"test_doon_necklace_target","sep",
"test_telpen_call_distractor","sep",
"test_zant_here_lowest","sep",
"test_tace_telephone_target","sep",
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

["test_tula_phone_highest", "Form", { 
html: {include: "test_tula_phone_highest.html"} 
}],

["test_tula_come_lowest", "Form", { 
html: {include: "test_tula_come_lowest.html"} 
}],

["test_tula_fetch_distractor", "Form", { 
html: {include: "test_tula_fetch_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_vroooom_highest", "Form", { 
html: {include: "test_vash_vroooom_highest.html"} 
}],

["test_vash_horse_lowest", "Form", { 
html: {include: "test_vash_horse_lowest.html"} 
}],

["test_vash_follow_distractor", "Form", { 
html: {include: "test_vash_follow_distractor.html"} 
}],

["test_geck_horsey_target", "Form", { 
html: {include: "test_geck_horsey_target.html"} 
}],

["test_geck_uppies_highest", "Form", { 
html: {include: "test_geck_uppies_highest.html"} 
}],

["test_geck_horse_lowest", "Form", { 
html: {include: "test_geck_horse_lowest.html"} 
}],

["test_geck_juice_distractor", "Form", { 
html: {include: "test_geck_juice_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_stair_highest", "Form", { 
html: {include: "test_tiz_stair_highest.html"} 
}],

["test_tiz_look_lowest", "Form", { 
html: {include: "test_tiz_look_lowest.html"} 
}],

["test_tiz_drum_distractor", "Form", { 
html: {include: "test_tiz_drum_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_common_highest", "Form", { 
html: {include: "test_bist_common_highest.html"} 
}],

["test_bist_green_lowest", "Form", { 
html: {include: "test_bist_green_lowest.html"} 
}],

["test_bist_poopoo_distractor", "Form", { 
html: {include: "test_bist_poopoo_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_oops_highest", "Form", { 
html: {include: "test_jair_oops_highest.html"} 
}],

["test_jair_help_lowest", "Form", { 
html: {include: "test_jair_help_lowest.html"} 
}],

["test_jair_vroooom_distractor", "Form", { 
html: {include: "test_jair_vroooom_distractor.html"} 
}],

["test_tace_telephone_target", "Form", { 
html: {include: "test_tace_telephone_target.html"} 
}],

["test_tace_call_highest", "Form", { 
html: {include: "test_tace_call_highest.html"} 
}],

["test_tace_here_lowest_filler", "Form", { 
html: {include: "test_tace_here_lowest_filler.html"} 
}],

["test_tace_oops_distractor", "Form", { 
html: {include: "test_tace_oops_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_drum_highest", "Form", { 
html: {include: "test_doon_drum_highest.html"} 
}],

["test_doon_choke_lowest", "Form", { 
html: {include: "test_doon_choke_lowest.html"} 
}],

["test_doon_common_distractor", "Form", { 
html: {include: "test_doon_common_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_fetch_highest", "Form", { 
html: {include: "test_telpen_fetch_highest.html"} 
}],

["test_telpen_hi_lowest", "Form", { 
html: {include: "test_telpen_hi_lowest.html"} 
}],

["test_telpen_call_distractor", "Form", { 
html: {include: "test_telpen_call_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_poopoo_highest", "Form", { 
html: {include: "test_blime_poopoo_highest.html"} 
}],

["test_blime_push_lowest", "Form", { 
html: {include: "test_blime_push_lowest.html"} 
}],

["test_blime_stair_distractor", "Form", { 
html: {include: "test_blime_stair_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_follow_highest", "Form", { 
html: {include: "test_zant_follow_highest.html"} 
}],

["test_zant_here_lowest", "Form", { 
html: {include: "test_zant_here_lowest.html"} 
}],

["test_zant_uppies_distractor", "Form", { 
html: {include: "test_zant_uppies_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_juice_highest", "Form", { 
html: {include: "test_mipen_juice_highest.html"} 
}],

["test_mipen_stop_lowest", "Form", { 
html: {include: "test_mipen_stop_lowest.html"} 
}],

["test_mipen_phone_distractor", "Form", { 
html: {include: "test_mipen_phone_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];