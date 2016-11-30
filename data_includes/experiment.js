var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_zant_this_lowest","sep",
"test_vash_here_highest","sep",
"test_vash_shoe_target","sep",
"test_geck_here_distractor","sep",
"test_jair_time_target","sep",
"test_geck_stop_highest","sep",
"test_mipen_peace_distractor","sep",
"test_telpen_fetch_highest","sep",
"test_tace_tired_lowest","sep",
"test_tula_stop_lowest","sep",
"test_vash_hello_distractor","sep",
"test_zant_book_target","sep",
"test_telpen_amazing_distractor","sep",
"test_tace_phone_target","sep",
"test_telpen_ball_target","sep",
"test_vash_come_lowest","sep",
"test_tula_oops_distractor","sep",
"test_tula_hello_highest","sep",
"test_tula_mommy_target","sep",
"test_bist_outside_lowest","sep",
"test_doon_baby_lowest","sep",
"test_geck_snot_lowest","sep",
"test_mipen_juice_lowest","sep",
"test_tiz_good_distractor","sep",
"test_bist_with_highest","sep",
"test_tiz_here_lowest","sep",
"test_blime_toy_target","sep",
"test_doon_help_distractor","sep",
"test_zant_world_distractor","sep",
"test_jair_help_highest","sep",
"test_mipen_no_highest","sep",
"test_telpen_wow_lowest","sep",
"test_blime_oops_highest","sep",
"test_tiz_amazing_highest","sep",
"test_jair_with_distractor","sep",
"test_tiz_thing_target","sep",
"test_bist_fetch_distractor","sep",
"test_tace_hello_highest","sep",
"test_tace_no_distractor","sep",
"test_bist_horsey_target","sep",
"test_doon_hello_highest","sep",
"test_blime_look_lowest","sep",
"test_doon_necklace_target","sep",
"test_geck_momma_target","sep",
"test_blime_stop_distractor","sep",
"test_zant_good_highest","sep",
"test_mipen_bag_target","sep",
"test_jair_no_lowest","outro1","sr","outro2"
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

["test_tula_hello_highest", "Form", { 
html: {include: "test_tula_hello_highest.html"} 
}],

["test_tula_stop_lowest", "Form", { 
html: {include: "test_tula_stop_lowest.html"} 
}],

["test_tula_oops_distractor", "Form", { 
html: {include: "test_tula_oops_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_here_highest", "Form", { 
html: {include: "test_vash_here_highest.html"} 
}],

["test_vash_come_lowest", "Form", { 
html: {include: "test_vash_come_lowest.html"} 
}],

["test_vash_hello_distractor", "Form", { 
html: {include: "test_vash_hello_distractor.html"} 
}],

["test_geck_momma_target", "Form", { 
html: {include: "test_geck_momma_target.html"} 
}],

["test_geck_stop_highest", "Form", { 
html: {include: "test_geck_stop_highest.html"} 
}],

["test_geck_snot_lowest", "Form", { 
html: {include: "test_geck_snot_lowest.html"} 
}],

["test_geck_here_distractor", "Form", { 
html: {include: "test_geck_here_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_amazing_highest", "Form", { 
html: {include: "test_tiz_amazing_highest.html"} 
}],

["test_tiz_here_lowest", "Form", { 
html: {include: "test_tiz_here_lowest.html"} 
}],

["test_tiz_good_distractor", "Form", { 
html: {include: "test_tiz_good_distractor.html"} 
}],

["test_bist_horsey_target", "Form", { 
html: {include: "test_bist_horsey_target.html"} 
}],

["test_bist_with_highest", "Form", { 
html: {include: "test_bist_with_highest.html"} 
}],

["test_bist_outside_lowest", "Form", { 
html: {include: "test_bist_outside_lowest.html"} 
}],

["test_bist_fetch_distractor", "Form", { 
html: {include: "test_bist_fetch_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_help_highest", "Form", { 
html: {include: "test_jair_help_highest.html"} 
}],

["test_jair_no_lowest", "Form", { 
html: {include: "test_jair_no_lowest.html"} 
}],

["test_jair_with_distractor", "Form", { 
html: {include: "test_jair_with_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_hello_highest", "Form", { 
html: {include: "test_tace_hello_highest.html"} 
}],

["test_tace_tired_lowest", "Form", { 
html: {include: "test_tace_tired_lowest.html"} 
}],

["test_tace_no_distractor", "Form", { 
html: {include: "test_tace_no_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_hello_highest", "Form", { 
html: {include: "test_doon_hello_highest.html"} 
}],

["test_doon_baby_lowest", "Form", { 
html: {include: "test_doon_baby_lowest.html"} 
}],

["test_doon_help_distractor", "Form", { 
html: {include: "test_doon_help_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_fetch_highest", "Form", { 
html: {include: "test_telpen_fetch_highest.html"} 
}],

["test_telpen_wow_lowest", "Form", { 
html: {include: "test_telpen_wow_lowest.html"} 
}],

["test_telpen_amazing_distractor", "Form", { 
html: {include: "test_telpen_amazing_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_oops_highest", "Form", { 
html: {include: "test_blime_oops_highest.html"} 
}],

["test_blime_look_lowest", "Form", { 
html: {include: "test_blime_look_lowest.html"} 
}],

["test_blime_stop_distractor", "Form", { 
html: {include: "test_blime_stop_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_good_highest", "Form", { 
html: {include: "test_zant_good_highest.html"} 
}],

["test_zant_this_lowest", "Form", { 
html: {include: "test_zant_this_lowest.html"} 
}],

["test_zant_world_distractor", "Form", { 
html: {include: "test_zant_world_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_no_highest", "Form", { 
html: {include: "test_mipen_no_highest.html"} 
}],

["test_mipen_juice_lowest", "Form", { 
html: {include: "test_mipen_juice_lowest.html"} 
}],

["test_mipen_peace_distractor", "Form", { 
html: {include: "test_mipen_peace_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];