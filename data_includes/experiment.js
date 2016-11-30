var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_bist_here_lowest","sep",
"test_zant_hurt_distractor","sep",
"test_mipen_pillow_distractor","sep",
"test_vash_clean_distractor","sep",
"test_tiz_thing_target","sep",
"test_blime_catch_distractor","sep",
"test_geck_clean_highest","sep",
"test_geck_necklace_distractor","sep",
"test_mipen_stay_lowest","sep",
"test_vash_shoe_target","sep",
"test_tace_pillow_highest","sep",
"test_tace_come_distractor","sep",
"test_blime_toy_target","sep",
"test_zant_follow_highest","sep",
"test_telpen_ball_target","sep",
"test_tiz_drop_distractor","sep",
"test_tace_play_lowest","sep",
"test_jair_time_target","sep",
"test_doon_hurt_highest","sep",
"test_zant_book_target","sep",
"test_bist_puppy_highest","sep",
"test_bist_sound_distractor","sep",
"test_tula_follow_distractor","sep",
"test_mipen_necklace_highest","sep",
"test_blime_drop_highest","sep",
"test_geck_mommy_lowest","sep",
"test_tace_phone_target","sep",
"test_vash_trunk_highest","sep",
"test_blime_sit_lowest","sep",
"test_telpen_catch_highest","sep",
"test_tiz_sound_highest","sep",
"test_jair_help_highest","sep",
"test_vash_dressed_lowest","sep",
"test_telpen_toy_lowest","sep",
"test_bist_mother_target","sep",
"test_jair_fall_lowest","sep",
"test_doon_puppy_distractor","sep",
"test_tula_toy_lowest","sep",
"test_mipen_bag_target","sep",
"test_tula_mommy_target","sep",
"test_doon_necklace_target","sep",
"test_tiz_where_lowest","sep",
"test_telpen_help_distractor","sep",
"test_geck_nose_target","sep",
"test_zant_take_lowest","sep",
"test_jair_trunk_distractor","sep",
"test_tula_come_highest","sep",
"test_doon_grab_lowest","outro1","sr","outro2"
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

["test_tula_toy_lowest", "Form", { 
html: {include: "test_tula_toy_lowest.html"} 
}],

["test_tula_follow_distractor", "Form", { 
html: {include: "test_tula_follow_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_trunk_highest", "Form", { 
html: {include: "test_vash_trunk_highest.html"} 
}],

["test_vash_dressed_lowest", "Form", { 
html: {include: "test_vash_dressed_lowest.html"} 
}],

["test_vash_clean_distractor", "Form", { 
html: {include: "test_vash_clean_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_clean_highest", "Form", { 
html: {include: "test_geck_clean_highest.html"} 
}],

["test_geck_mommy_lowest", "Form", { 
html: {include: "test_geck_mommy_lowest.html"} 
}],

["test_geck_necklace_distractor", "Form", { 
html: {include: "test_geck_necklace_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_sound_highest", "Form", { 
html: {include: "test_tiz_sound_highest.html"} 
}],

["test_tiz_where_lowest", "Form", { 
html: {include: "test_tiz_where_lowest.html"} 
}],

["test_tiz_drop_distractor", "Form", { 
html: {include: "test_tiz_drop_distractor.html"} 
}],

["test_bist_mother_target", "Form", { 
html: {include: "test_bist_mother_target.html"} 
}],

["test_bist_puppy_highest", "Form", { 
html: {include: "test_bist_puppy_highest.html"} 
}],

["test_bist_here_lowest", "Form", { 
html: {include: "test_bist_here_lowest.html"} 
}],

["test_bist_sound_distractor", "Form", { 
html: {include: "test_bist_sound_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_help_highest", "Form", { 
html: {include: "test_jair_help_highest.html"} 
}],

["test_jair_fall_lowest", "Form", { 
html: {include: "test_jair_fall_lowest.html"} 
}],

["test_jair_trunk_distractor", "Form", { 
html: {include: "test_jair_trunk_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_pillow_highest", "Form", { 
html: {include: "test_tace_pillow_highest.html"} 
}],

["test_tace_play_lowest", "Form", { 
html: {include: "test_tace_play_lowest.html"} 
}],

["test_tace_come_distractor", "Form", { 
html: {include: "test_tace_come_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_hurt_highest", "Form", { 
html: {include: "test_doon_hurt_highest.html"} 
}],

["test_doon_grab_lowest", "Form", { 
html: {include: "test_doon_grab_lowest.html"} 
}],

["test_doon_puppy_distractor", "Form", { 
html: {include: "test_doon_puppy_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_catch_highest", "Form", { 
html: {include: "test_telpen_catch_highest.html"} 
}],

["test_telpen_toy_lowest", "Form", { 
html: {include: "test_telpen_toy_lowest.html"} 
}],

["test_telpen_help_distractor", "Form", { 
html: {include: "test_telpen_help_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_drop_highest", "Form", { 
html: {include: "test_blime_drop_highest.html"} 
}],

["test_blime_sit_lowest", "Form", { 
html: {include: "test_blime_sit_lowest.html"} 
}],

["test_blime_catch_distractor", "Form", { 
html: {include: "test_blime_catch_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_follow_highest", "Form", { 
html: {include: "test_zant_follow_highest.html"} 
}],

["test_zant_take_lowest", "Form", { 
html: {include: "test_zant_take_lowest.html"} 
}],

["test_zant_hurt_distractor", "Form", { 
html: {include: "test_zant_hurt_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_necklace_highest", "Form", { 
html: {include: "test_mipen_necklace_highest.html"} 
}],

["test_mipen_stay_lowest", "Form", { 
html: {include: "test_mipen_stay_lowest.html"} 
}],

["test_mipen_pillow_distractor", "Form", { 
html: {include: "test_mipen_pillow_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];