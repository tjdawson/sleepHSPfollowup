var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_bist_confused_lowest","sep",
"test_doon_baby_highest","sep",
"test_jair_time_target","sep",
"test_tiz_box_distractor","sep",
"test_blime_oil_distractor","sep",
"test_jair_bag_distractor","sep",
"test_zant_walk_highest","sep",
"test_blime_box_highest","sep",
"test_tula_cactus_lowest","sep",
"test_geck_nose_target","sep",
"test_tace_phone_target","sep",
"test_tula_tamborine_distractor","sep",
"test_vash_juice_distractor","sep",
"test_blime_clean_lowest","sep",
"test_mipen_bag_target","sep",
"test_tiz_thing_target","sep",
"test_tiz_tamborine_highest","sep",
"test_telpen_toy_highest","sep",
"test_tace_color_highest","sep",
"test_jair_necklace_highest","sep",
"test_tace_touch_distractor","sep",
"test_jair_careful_lowest","sep",
"test_bist_horse_target","sep",
"test_geck_clean_lowest","sep",
"test_doon_necklace_target","sep",
"test_zant_baby_distractor","sep",
"test_vash_bear_lowest","sep",
"test_tula_mommy_target","sep",
"test_bist_necklace_distractor","sep",
"test_mipen_toy_lowest","sep",
"test_geck_touch_highest","sep",
"test_doon_color_distractor","sep",
"test_vash_shoe_target","sep",
"test_tiz_floor_lowest","sep",
"test_zant_book_target","sep",
"test_zant_wall_lowest","sep",
"test_doon_baby_lowest","sep",
"test_bist_oil_highest","sep",
"test_mipen_walk_distractor","sep",
"test_telpen_go_lowest","sep",
"test_telpen_phone_distractor","sep",
"test_blime_toy_target","sep",
"test_telpen_ball_target","sep",
"test_vash_bag_highest","sep",
"test_mipen_juice_highest","sep",
"test_geck_toy_distractor","sep",
"test_tula_phone_highest","sep",
"test_tace_cat_lowest","outro1","sr","outro2"
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

["test_tula_cactus_lowest", "Form", { 
html: {include: "test_tula_cactus_lowest.html"} 
}],

["test_tula_tamborine_distractor", "Form", { 
html: {include: "test_tula_tamborine_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_bag_highest", "Form", { 
html: {include: "test_vash_bag_highest.html"} 
}],

["test_vash_bear_lowest", "Form", { 
html: {include: "test_vash_bear_lowest.html"} 
}],

["test_vash_juice_distractor", "Form", { 
html: {include: "test_vash_juice_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_touch_highest", "Form", { 
html: {include: "test_geck_touch_highest.html"} 
}],

["test_geck_clean_lowest", "Form", { 
html: {include: "test_geck_clean_lowest.html"} 
}],

["test_geck_toy_distractor", "Form", { 
html: {include: "test_geck_toy_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_tamborine_highest", "Form", { 
html: {include: "test_tiz_tamborine_highest.html"} 
}],

["test_tiz_floor_lowest", "Form", { 
html: {include: "test_tiz_floor_lowest.html"} 
}],

["test_tiz_box_distractor", "Form", { 
html: {include: "test_tiz_box_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_oil_highest", "Form", { 
html: {include: "test_bist_oil_highest.html"} 
}],

["test_bist_confused_lowest", "Form", { 
html: {include: "test_bist_confused_lowest.html"} 
}],

["test_bist_necklace_distractor", "Form", { 
html: {include: "test_bist_necklace_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_necklace_highest", "Form", { 
html: {include: "test_jair_necklace_highest.html"} 
}],

["test_jair_careful_lowest", "Form", { 
html: {include: "test_jair_careful_lowest.html"} 
}],

["test_jair_bag_distractor", "Form", { 
html: {include: "test_jair_bag_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_color_highest", "Form", { 
html: {include: "test_tace_color_highest.html"} 
}],

["test_tace_cat_lowest", "Form", { 
html: {include: "test_tace_cat_lowest.html"} 
}],

["test_tace_touch_distractor", "Form", { 
html: {include: "test_tace_touch_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_baby_highest", "Form", { 
html: {include: "test_doon_baby_highest.html"} 
}],

["test_doon_baby_lowest", "Form", { 
html: {include: "test_doon_baby_lowest.html"} 
}],

["test_doon_color_distractor", "Form", { 
html: {include: "test_doon_color_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_toy_highest", "Form", { 
html: {include: "test_telpen_toy_highest.html"} 
}],

["test_telpen_go_lowest", "Form", { 
html: {include: "test_telpen_go_lowest.html"} 
}],

["test_telpen_phone_distractor", "Form", { 
html: {include: "test_telpen_phone_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_box_highest", "Form", { 
html: {include: "test_blime_box_highest.html"} 
}],

["test_blime_clean_lowest", "Form", { 
html: {include: "test_blime_clean_lowest.html"} 
}],

["test_blime_oil_distractor", "Form", { 
html: {include: "test_blime_oil_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_walk_highest", "Form", { 
html: {include: "test_zant_walk_highest.html"} 
}],

["test_zant_wall_lowest", "Form", { 
html: {include: "test_zant_wall_lowest.html"} 
}],

["test_zant_baby_distractor", "Form", { 
html: {include: "test_zant_baby_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_juice_highest", "Form", { 
html: {include: "test_mipen_juice_highest.html"} 
}],

["test_mipen_toy_lowest", "Form", { 
html: {include: "test_mipen_toy_lowest.html"} 
}],

["test_mipen_walk_distractor", "Form", { 
html: {include: "test_mipen_walk_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];