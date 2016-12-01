var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_doon_necklace_target","sep",
"test_doon_want_lowest","sep",
"test_mipen_dirty_distractor","sep",
"test_blime_dirty_highest","sep",
"test_bist_horse_target","sep",
"test_geck_mouth_highest","sep",
"test_blime_choke_distractor","sep",
"test_vash_wall_lowest","sep",
"test_jair_time_target","sep",
"test_vash_trunk_highest","sep",
"test_telpen_dog_lowest","sep",
"test_tace_pillow_highest","sep",
"test_mipen_juice_highest","sep",
"test_mipen_necklace_lowest","sep",
"test_geck_up_lowest","sep",
"test_geck_pillow_distractor","sep",
"test_telpen_juice_distractor","sep",
"test_zant_book_target","sep",
"test_vash_light_distractor","sep",
"test_geck_nose_target","sep",
"test_telpen_spin_highest","sep",
"test_bist_follow_highest","sep",
"test_tula_fall_highest","sep",
"test_tula_different_distractor","sep",
"test_tiz_play_lowest","sep",
"test_bist_come_lowest","sep",
"test_tace_telephone_target","sep",
"test_bist_fall_distractor","sep",
"test_tace_mouth_distractor","sep",
"test_zant_trunk_distractor","sep",
"test_tula_give_lowest","sep",
"test_blime_toy_target","sep",
"test_doon_choke_highest","sep",
"test_mipen_telephone_target","sep",
"test_tula_mom_target","sep",
"test_zant_light_highest","sep",
"test_tiz_different_highest","sep",
"test_tiz_stand_distractor","sep",
"test_tace_green_lowest","sep",
"test_telpen_ball_target","sep",
"test_jair_stand_highest","sep",
"test_jair_spin_distractor","sep",
"test_tiz_thing_target","sep",
"test_blime_help_lowest","sep",
"test_vash_shoe_target","sep",
"test_jair_grape_lowest","sep",
"test_doon_follow_distractor","sep",
"test_zant_way_lowest","outro1","sr","outro2"
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
["test_tula_mom_target", "Form", { 
html: {include: "test_tula_mom_target.html"} 
}],

["test_tula_fall_highest", "Form", { 
html: {include: "test_tula_fall_highest.html"} 
}],

["test_tula_give_lowest", "Form", { 
html: {include: "test_tula_give_lowest.html"} 
}],

["test_tula_different_distractor", "Form", { 
html: {include: "test_tula_different_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_trunk_highest", "Form", { 
html: {include: "test_vash_trunk_highest.html"} 
}],

["test_vash_wall_lowest", "Form", { 
html: {include: "test_vash_wall_lowest.html"} 
}],

["test_vash_light_distractor", "Form", { 
html: {include: "test_vash_light_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_mouth_highest", "Form", { 
html: {include: "test_geck_mouth_highest.html"} 
}],

["test_geck_up_lowest", "Form", { 
html: {include: "test_geck_up_lowest.html"} 
}],

["test_geck_pillow_distractor", "Form", { 
html: {include: "test_geck_pillow_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_different_highest", "Form", { 
html: {include: "test_tiz_different_highest.html"} 
}],

["test_tiz_play_lowest", "Form", { 
html: {include: "test_tiz_play_lowest.html"} 
}],

["test_tiz_stand_distractor", "Form", { 
html: {include: "test_tiz_stand_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_follow_highest", "Form", { 
html: {include: "test_bist_follow_highest.html"} 
}],

["test_bist_come_lowest", "Form", { 
html: {include: "test_bist_come_lowest.html"} 
}],

["test_bist_fall_distractor", "Form", { 
html: {include: "test_bist_fall_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_stand_highest", "Form", { 
html: {include: "test_jair_stand_highest.html"} 
}],

["test_jair_grape_lowest", "Form", { 
html: {include: "test_jair_grape_lowest.html"} 
}],

["test_jair_spin_distractor", "Form", { 
html: {include: "test_jair_spin_distractor.html"} 
}],

["test_tace_telephone_target", "Form", { 
html: {include: "test_tace_telephone_target.html"} 
}],

["test_tace_pillow_highest", "Form", { 
html: {include: "test_tace_pillow_highest.html"} 
}],

["test_tace_green_lowest", "Form", { 
html: {include: "test_tace_green_lowest.html"} 
}],

["test_tace_mouth_distractor", "Form", { 
html: {include: "test_tace_mouth_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_choke_highest", "Form", { 
html: {include: "test_doon_choke_highest.html"} 
}],

["test_doon_want_lowest", "Form", { 
html: {include: "test_doon_want_lowest.html"} 
}],

["test_doon_follow_distractor", "Form", { 
html: {include: "test_doon_follow_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_spin_highest", "Form", { 
html: {include: "test_telpen_spin_highest.html"} 
}],

["test_telpen_dog_lowest", "Form", { 
html: {include: "test_telpen_dog_lowest.html"} 
}],

["test_telpen_juice_distractor", "Form", { 
html: {include: "test_telpen_juice_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_dirty_highest", "Form", { 
html: {include: "test_blime_dirty_highest.html"} 
}],

["test_blime_help_lowest", "Form", { 
html: {include: "test_blime_help_lowest.html"} 
}],

["test_blime_choke_distractor", "Form", { 
html: {include: "test_blime_choke_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_light_highest", "Form", { 
html: {include: "test_zant_light_highest.html"} 
}],

["test_zant_way_lowest", "Form", { 
html: {include: "test_zant_way_lowest.html"} 
}],

["test_zant_trunk_distractor", "Form", { 
html: {include: "test_zant_trunk_distractor.html"} 
}],

["test_mipen_telephone_target", "Form", { 
html: {include: "test_mipen_telephone_target.html"} 
}],

["test_mipen_juice_highest", "Form", { 
html: {include: "test_mipen_juice_highest.html"} 
}],

["test_mipen_necklace_lowest", "Form", { 
html: {include: "test_mipen_necklace_lowest.html"} 
}],

["test_mipen_dirty_distractor", "Form", { 
html: {include: "test_mipen_dirty_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];