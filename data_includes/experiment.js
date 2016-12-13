var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_tiz_door_distractor","sep",
"test_vash_inside_highest","sep",
"test_tace_phone_target","sep",
"test_tace_throw_distractor","sep",
"test_blime_stop_distractor","sep",
"test_geck_face_highest","sep",
"test_geck_careful_distractor","sep",
"test_jair_time_target","sep",
"test_vash_what_lowest","sep",
"test_doon_necklace_target","sep",
"test_jair_inside_lowest","sep",
"test_jair_hello_distractor","sep",
"test_telpen_look_lowest","sep",
"test_tace_stop_highest","sep",
"test_doon_fix_lowest","sep",
"test_geck_nose_target","sep",
"test_mipen_spoon_highest","sep",
"test_blime_toy_target","sep",
"test_doon_face_distractor","sep",
"test_mipen_bag_target","sep",
"test_vash_shake_distractor","sep",
"test_telpen_push_distractor","sep",
"test_bist_horse_target","sep",
"test_tiz_shake_highest","sep",
"test_tace_what_lowest","sep",
"test_zant_dirty_lowest","sep",
"test_doon_three_highest","sep",
"test_tula_done_lowest","sep",
"test_bist_careful_highest","sep",
"test_tiz_corner_lowest","sep",
"test_tula_hello_highest","sep",
"test_bist_inside_distractor","sep",
"test_tula_spoon_distractor","sep",
"test_blime_push_highest","sep",
"test_zant_clean_highest","sep",
"test_tula_mommy_target","sep",
"test_mipen_clean_distractor","sep",
"test_bist_pet_lowest","sep",
"test_telpen_throw_highest","sep",
"test_geck_touch_lowest","sep",
"test_jair_door_highest","sep",
"test_telpen_ball_target","sep",
"test_mipen_inside_lowest","sep",
"test_tiz_thing_target","sep",
"test_vash_shoe_target","sep",
"test_zant_three_distractor","sep",
"test_zant_mama_target","sep",
"test_blime_here_lowest","outro1","sr","outro2"
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

["test_tula_done_lowest", "Form", { 
html: {include: "test_tula_done_lowest.html"} 
}],

["test_tula_spoon_distractor", "Form", { 
html: {include: "test_tula_spoon_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_inside_highest", "Form", { 
html: {include: "test_vash_inside_highest.html"} 
}],

["test_vash_what_lowest", "Form", { 
html: {include: "test_vash_what_lowest.html"} 
}],

["test_vash_shake_distractor", "Form", { 
html: {include: "test_vash_shake_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_face_highest", "Form", { 
html: {include: "test_geck_face_highest.html"} 
}],

["test_geck_touch_lowest", "Form", { 
html: {include: "test_geck_touch_lowest.html"} 
}],

["test_geck_careful_distractor", "Form", { 
html: {include: "test_geck_careful_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_shake_highest", "Form", { 
html: {include: "test_tiz_shake_highest.html"} 
}],

["test_tiz_corner_lowest", "Form", { 
html: {include: "test_tiz_corner_lowest.html"} 
}],

["test_tiz_door_distractor", "Form", { 
html: {include: "test_tiz_door_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_careful_highest", "Form", { 
html: {include: "test_bist_careful_highest.html"} 
}],

["test_bist_pet_lowest", "Form", { 
html: {include: "test_bist_pet_lowest.html"} 
}],

["test_bist_inside_distractor", "Form", { 
html: {include: "test_bist_inside_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_door_highest", "Form", { 
html: {include: "test_jair_door_highest.html"} 
}],

["test_jair_inside_lowest", "Form", { 
html: {include: "test_jair_inside_lowest.html"} 
}],

["test_jair_hello_distractor", "Form", { 
html: {include: "test_jair_hello_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_stop_highest", "Form", { 
html: {include: "test_tace_stop_highest.html"} 
}],

["test_tace_what_lowest", "Form", { 
html: {include: "test_tace_what_lowest.html"} 
}],

["test_tace_throw_distractor", "Form", { 
html: {include: "test_tace_throw_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_three_highest", "Form", { 
html: {include: "test_doon_three_highest.html"} 
}],

["test_doon_fix_lowest", "Form", { 
html: {include: "test_doon_fix_lowest.html"} 
}],

["test_doon_face_distractor", "Form", { 
html: {include: "test_doon_face_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_throw_highest", "Form", { 
html: {include: "test_telpen_throw_highest.html"} 
}],

["test_telpen_look_lowest", "Form", { 
html: {include: "test_telpen_look_lowest.html"} 
}],

["test_telpen_push_distractor", "Form", { 
html: {include: "test_telpen_push_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_push_highest", "Form", { 
html: {include: "test_blime_push_highest.html"} 
}],

["test_blime_here_lowest", "Form", { 
html: {include: "test_blime_here_lowest.html"} 
}],

["test_blime_stop_distractor", "Form", { 
html: {include: "test_blime_stop_distractor.html"} 
}],

["test_zant_mama_target", "Form", { 
html: {include: "test_zant_mama_target.html"} 
}],

["test_zant_clean_highest", "Form", { 
html: {include: "test_zant_clean_highest.html"} 
}],

["test_zant_dirty_lowest", "Form", { 
html: {include: "test_zant_dirty_lowest.html"} 
}],

["test_zant_three_distractor", "Form", { 
html: {include: "test_zant_three_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_spoon_highest", "Form", { 
html: {include: "test_mipen_spoon_highest.html"} 
}],

["test_mipen_inside_lowest", "Form", { 
html: {include: "test_mipen_inside_lowest.html"} 
}],

["test_mipen_clean_distractor", "Form", { 
html: {include: "test_mipen_clean_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];