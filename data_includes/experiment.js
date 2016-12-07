var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_telpen_throw_highest","sep",
"test_tula_reach_lowest","sep",
"test_bist_clean_distractor","sep",
"test_tula_mommy_target","sep",
"test_bist_follow_highest","sep",
"test_mipen_careful_distractor","sep",
"test_telpen_bag_distractor","sep",
"test_telpen_ball_target","sep",
"test_vash_bag_highest","sep",
"test_jair_time_target","sep",
"test_geck_careful_highest","sep",
"test_doon_necklace_target","sep",
"test_tiz_thing_target","sep",
"test_tiz_stop_lowest","sep",
"test_blime_fix_lowest","sep",
"test_tula_phone_highest","sep",
"test_doon_look_highest","sep",
"test_mipen_nice_lowest","sep",
"test_doon_beautiful_lowest","sep",
"test_blime_clean_highest","sep",
"test_doon_trash_distractor","sep",
"test_vash_in_distractor","sep",
"test_bist_plant_lowest","sep",
"test_zant_phone_distractor","sep",
"test_tula_throw_distractor","sep",
"test_blime_look_distractor","sep",
"test_mipen_bag_target","sep",
"test_tiz_follow_distractor","sep",
"test_blime_toy_target","sep",
"test_vash_shoe_target","sep",
"test_geck_snout_lowest","sep",
"test_zant_here_lowest","sep",
"test_vash_how_lowest","sep",
"test_tace_telephone_target","sep",
"test_zant_show_highest","sep",
"test_telpen_fun_lowest","sep",
"test_geck_show_distractor","sep",
"test_tace_mine_lowest","sep",
"test_mipen_trash_highest","sep",
"test_tace_in_highest","sep",
"test_bist_horse_target","sep",
"test_jair_help_distractor","sep",
"test_jair_around_highest","sep",
"test_zant_book_target","sep",
"test_jair_down_lowest","sep",
"test_tiz_help_highest","sep",
"test_tace_around_distractor","sep",
"test_geck_nose_target","outro1","sr","outro2"
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

["test_tula_reach_lowest", "Form", { 
html: {include: "test_tula_reach_lowest.html"} 
}],

["test_tula_throw_distractor", "Form", { 
html: {include: "test_tula_throw_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_bag_highest", "Form", { 
html: {include: "test_vash_bag_highest.html"} 
}],

["test_vash_how_lowest", "Form", { 
html: {include: "test_vash_how_lowest.html"} 
}],

["test_vash_in_distractor", "Form", { 
html: {include: "test_vash_in_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_careful_highest", "Form", { 
html: {include: "test_geck_careful_highest.html"} 
}],

["test_geck_snout_lowest", "Form", { 
html: {include: "test_geck_snout_lowest.html"} 
}],

["test_geck_show_distractor", "Form", { 
html: {include: "test_geck_show_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_help_highest", "Form", { 
html: {include: "test_tiz_help_highest.html"} 
}],

["test_tiz_stop_lowest", "Form", { 
html: {include: "test_tiz_stop_lowest.html"} 
}],

["test_tiz_follow_distractor", "Form", { 
html: {include: "test_tiz_follow_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_follow_highest", "Form", { 
html: {include: "test_bist_follow_highest.html"} 
}],

["test_bist_plant_lowest", "Form", { 
html: {include: "test_bist_plant_lowest.html"} 
}],

["test_bist_clean_distractor", "Form", { 
html: {include: "test_bist_clean_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_around_highest", "Form", { 
html: {include: "test_jair_around_highest.html"} 
}],

["test_jair_down_lowest", "Form", { 
html: {include: "test_jair_down_lowest.html"} 
}],

["test_jair_help_distractor", "Form", { 
html: {include: "test_jair_help_distractor.html"} 
}],

["test_tace_telephone_target", "Form", { 
html: {include: "test_tace_telephone_target.html"} 
}],

["test_tace_in_highest", "Form", { 
html: {include: "test_tace_in_highest.html"} 
}],

["test_tace_mine_lowest", "Form", { 
html: {include: "test_tace_mine_lowest.html"} 
}],

["test_tace_around_distractor", "Form", { 
html: {include: "test_tace_around_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_look_highest", "Form", { 
html: {include: "test_doon_look_highest.html"} 
}],

["test_doon_beautiful_lowest", "Form", { 
html: {include: "test_doon_beautiful_lowest.html"} 
}],

["test_doon_trash_distractor", "Form", { 
html: {include: "test_doon_trash_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_throw_highest", "Form", { 
html: {include: "test_telpen_throw_highest.html"} 
}],

["test_telpen_fun_lowest", "Form", { 
html: {include: "test_telpen_fun_lowest.html"} 
}],

["test_telpen_bag_distractor", "Form", { 
html: {include: "test_telpen_bag_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_clean_highest", "Form", { 
html: {include: "test_blime_clean_highest.html"} 
}],

["test_blime_fix_lowest", "Form", { 
html: {include: "test_blime_fix_lowest.html"} 
}],

["test_blime_look_distractor", "Form", { 
html: {include: "test_blime_look_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_show_highest", "Form", { 
html: {include: "test_zant_show_highest.html"} 
}],

["test_zant_here_lowest", "Form", { 
html: {include: "test_zant_here_lowest.html"} 
}],

["test_zant_phone_distractor", "Form", { 
html: {include: "test_zant_phone_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_trash_highest", "Form", { 
html: {include: "test_mipen_trash_highest.html"} 
}],

["test_mipen_nice_lowest", "Form", { 
html: {include: "test_mipen_nice_lowest.html"} 
}],

["test_mipen_careful_distractor", "Form", { 
html: {include: "test_mipen_careful_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];