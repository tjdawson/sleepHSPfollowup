var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_doon_necklace_target","sep",
"test_geck_phone_distractor","sep",
"test_vash_clean_distractor","sep",
"test_tiz_cup_distractor","sep",
"test_geck_release_lowest","sep",
"test_zant_baby_distractor","sep",
"test_zant_eat_lowest","sep",
"test_tula_mommy_target","sep",
"test_tace_mower_lowest_filler","sep",
"test_vash_inside_highest","sep",
"test_blime_bag_lowest","sep",
"test_blime_toy_target","sep",
"test_zant_book_target","sep",
"test_blime_father_distractor","sep",
"test_tiz_thing_target","sep",
"test_jair_inside_distractor","sep",
"test_blime_diaper_highest","sep",
"test_zant_clean_highest","sep",
"test_bist_horse_target","sep",
"test_tula_mower_lowest","sep",
"test_tiz_stair_lowest","sep",
"test_tace_dog_highest","sep",
"test_tula_cup_highest","sep",
"test_doon_baby_highest","sep",
"test_telpen_dog_distractor","sep",
"test_bist_box_lowest","sep",
"test_doon_up_distractor","sep",
"test_jair_up_highest","sep",
"test_bist_mower_distractor","sep",
"test_bist_lift_highest","sep",
"test_mipen_bag_target","sep",
"test_doon_baby_lowest","sep",
"test_mipen_equipment_distractor","sep",
"test_geck_nose_target","sep",
"test_jair_time_target","sep",
"test_vash_place_lowest","sep",
"test_vash_shoe_target","sep",
"test_geck_father_highest","sep",
"test_telpen_mower_highest","sep",
"test_tula_diaper_distractor","sep",
"test_jair_closet_lowest","sep",
"test_tiz_clean_highest","sep",
"test_telpen_toy_lowest","sep",
"test_mipen_phone_highest","sep",
"test_tace_lift_distractor","sep",
"test_mipen_necklace_lowest","sep",
"test_tace_phone_target","sep",
"test_telpen_ball_target","outro1","sr","outro2"
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

["test_tula_cup_highest", "Form", { 
html: {include: "test_tula_cup_highest.html"} 
}],

["test_tula_mower_lowest", "Form", { 
html: {include: "test_tula_mower_lowest.html"} 
}],

["test_tula_diaper_distractor", "Form", { 
html: {include: "test_tula_diaper_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_inside_highest", "Form", { 
html: {include: "test_vash_inside_highest.html"} 
}],

["test_vash_place_lowest", "Form", { 
html: {include: "test_vash_place_lowest.html"} 
}],

["test_vash_clean_distractor", "Form", { 
html: {include: "test_vash_clean_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_father_highest", "Form", { 
html: {include: "test_geck_father_highest.html"} 
}],

["test_geck_release_lowest", "Form", { 
html: {include: "test_geck_release_lowest.html"} 
}],

["test_geck_phone_distractor", "Form", { 
html: {include: "test_geck_phone_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_clean_highest", "Form", { 
html: {include: "test_tiz_clean_highest.html"} 
}],

["test_tiz_stair_lowest", "Form", { 
html: {include: "test_tiz_stair_lowest.html"} 
}],

["test_tiz_cup_distractor", "Form", { 
html: {include: "test_tiz_cup_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_lift_highest", "Form", { 
html: {include: "test_bist_lift_highest.html"} 
}],

["test_bist_box_lowest", "Form", { 
html: {include: "test_bist_box_lowest.html"} 
}],

["test_bist_mower_distractor", "Form", { 
html: {include: "test_bist_mower_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_up_highest", "Form", { 
html: {include: "test_jair_up_highest.html"} 
}],

["test_jair_closet_lowest", "Form", { 
html: {include: "test_jair_closet_lowest.html"} 
}],

["test_jair_inside_distractor", "Form", { 
html: {include: "test_jair_inside_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_dog_highest", "Form", { 
html: {include: "test_tace_dog_highest.html"} 
}],

["test_tace_mower_lowest_filler", "Form", { 
html: {include: "test_tace_mower_lowest_filler.html"} 
}],

["test_tace_lift_distractor", "Form", { 
html: {include: "test_tace_lift_distractor.html"} 
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

["test_doon_up_distractor", "Form", { 
html: {include: "test_doon_up_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_mower_highest", "Form", { 
html: {include: "test_telpen_mower_highest.html"} 
}],

["test_telpen_toy_lowest", "Form", { 
html: {include: "test_telpen_toy_lowest.html"} 
}],

["test_telpen_dog_distractor", "Form", { 
html: {include: "test_telpen_dog_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_diaper_highest", "Form", { 
html: {include: "test_blime_diaper_highest.html"} 
}],

["test_blime_bag_lowest", "Form", { 
html: {include: "test_blime_bag_lowest.html"} 
}],

["test_blime_father_distractor", "Form", { 
html: {include: "test_blime_father_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_clean_highest", "Form", { 
html: {include: "test_zant_clean_highest.html"} 
}],

["test_zant_eat_lowest", "Form", { 
html: {include: "test_zant_eat_lowest.html"} 
}],

["test_zant_baby_distractor", "Form", { 
html: {include: "test_zant_baby_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_phone_highest", "Form", { 
html: {include: "test_mipen_phone_highest.html"} 
}],

["test_mipen_necklace_lowest", "Form", { 
html: {include: "test_mipen_necklace_lowest.html"} 
}],

["test_mipen_equipment_distractor", "Form", { 
html: {include: "test_mipen_equipment_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];