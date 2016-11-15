var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_geck_wipe_highest","sep",
"test_mipen_trash_lowest","sep",
"test_zant_me_lowest","sep",
"test_bist_horse_target","sep",
"test_tiz_hit_highest","sep",
"test_zant_build_distractor","sep",
"test_geck_away_distractor","sep",
"test_telpen_purse_distractor","sep",
"test_jair_time_target","sep",
"test_tula_mommy_target","sep",
"test_jair_call_distractor","sep",
"test_vash_sit_lowest","sep",
"test_geck_nose_target","sep",
"test_mipen_away_highest","sep",
"test_blime_sit_lowest","sep",
"test_bist_come_distractor","sep",
"test_bist_careful_highest","sep",
"test_jair_there_lowest","sep",
"test_geck_tissue_lowest","sep",
"test_doon_baby_highest","sep",
"test_telpen_ball_target","sep",
"test_mipen_range_distractor","sep",
"test_tace_speak_lowest","sep",
"test_blime_fall_distractor","sep",
"test_mipen_bag_target","sep",
"test_tula_me_lowest","sep",
"test_tace_phone_target","sep",
"test_blime_baby_highest","sep",
"test_tula_baby_distractor","sep",
"test_vash_purse_highest","sep",
"test_jair_fall_highest","sep",
"test_tiz_thing_target","sep",
"test_tula_come_highest","sep",
"test_vash_wipe_distractor","sep",
"test_tiz_play_lowest","sep",
"test_telpen_throw_lowest","sep",
"test_bist_think_lowest","sep",
"test_vash_shoe_target","sep",
"test_doon_necklace_target","sep",
"test_tace_call_highest","sep",
"test_doon_doing_lowest","sep",
"test_tiz_careful_distractor","sep",
"test_blime_toy_target","sep",
"test_tace_spin_distractor","sep",
"test_doon_hit_distractor","sep",
"test_telpen_spin_highest","sep",
"test_zant_book_target","sep",
"test_zant_come_highest","outro1","sr","outro2"
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

["test_tula_me_lowest", "Form", { 
html: {include: "test_tula_me_lowest.html"} 
}],

["test_tula_baby_distractor", "Form", { 
html: {include: "test_tula_baby_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_purse_highest", "Form", { 
html: {include: "test_vash_purse_highest.html"} 
}],

["test_vash_sit_lowest", "Form", { 
html: {include: "test_vash_sit_lowest.html"} 
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

["test_geck_tissue_lowest", "Form", { 
html: {include: "test_geck_tissue_lowest.html"} 
}],

["test_geck_away_distractor", "Form", { 
html: {include: "test_geck_away_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_hit_highest", "Form", { 
html: {include: "test_tiz_hit_highest.html"} 
}],

["test_tiz_play_lowest", "Form", { 
html: {include: "test_tiz_play_lowest.html"} 
}],

["test_tiz_careful_distractor", "Form", { 
html: {include: "test_tiz_careful_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_careful_highest", "Form", { 
html: {include: "test_bist_careful_highest.html"} 
}],

["test_bist_think_lowest", "Form", { 
html: {include: "test_bist_think_lowest.html"} 
}],

["test_bist_come_distractor", "Form", { 
html: {include: "test_bist_come_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_fall_highest", "Form", { 
html: {include: "test_jair_fall_highest.html"} 
}],

["test_jair_there_lowest", "Form", { 
html: {include: "test_jair_there_lowest.html"} 
}],

["test_jair_call_distractor", "Form", { 
html: {include: "test_jair_call_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_call_highest", "Form", { 
html: {include: "test_tace_call_highest.html"} 
}],

["test_tace_speak_lowest", "Form", { 
html: {include: "test_tace_speak_lowest.html"} 
}],

["test_tace_spin_distractor", "Form", { 
html: {include: "test_tace_spin_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_baby_highest", "Form", { 
html: {include: "test_doon_baby_highest.html"} 
}],

["test_doon_doing_lowest", "Form", { 
html: {include: "test_doon_doing_lowest.html"} 
}],

["test_doon_hit_distractor", "Form", { 
html: {include: "test_doon_hit_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_spin_highest", "Form", { 
html: {include: "test_telpen_spin_highest.html"} 
}],

["test_telpen_throw_lowest", "Form", { 
html: {include: "test_telpen_throw_lowest.html"} 
}],

["test_telpen_purse_distractor", "Form", { 
html: {include: "test_telpen_purse_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_baby_highest", "Form", { 
html: {include: "test_blime_baby_highest.html"} 
}],

["test_blime_sit_lowest", "Form", { 
html: {include: "test_blime_sit_lowest.html"} 
}],

["test_blime_fall_distractor", "Form", { 
html: {include: "test_blime_fall_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_come_highest", "Form", { 
html: {include: "test_zant_come_highest.html"} 
}],

["test_zant_me_lowest", "Form", { 
html: {include: "test_zant_me_lowest.html"} 
}],

["test_zant_build_distractor", "Form", { 
html: {include: "test_zant_build_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_away_highest", "Form", { 
html: {include: "test_mipen_away_highest.html"} 
}],

["test_mipen_trash_lowest", "Form", { 
html: {include: "test_mipen_trash_lowest.html"} 
}],

["test_mipen_range_distractor", "Form", { 
html: {include: "test_mipen_range_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];