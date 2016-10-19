var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_blime_push_lowest","sep",
"test_doon_necklace_target","sep",
"test_geck_wipe_highest","sep",
"test_geck_food_distractor","sep",
"test_tiz_toy_highest","sep",
"test_mipen_love_distractor","sep",
"test_tace_wipe_distractor","sep",
"test_telpen_spoon_distractor","sep",
"test_tula_phone_highest","sep",
"test_mipen_usually_lowest_filler","sep",
"test_blime_wipe_highest","sep",
"test_tula_mommy_target","sep",
"test_doon_toy_distractor","sep",
"test_jair_food_highest","sep",
"test_jair_purpose_distractor","sep",
"test_tiz_thing_target","sep",
"test_bist_bottle_distractor","sep",
"test_bist_animal_highest","sep",
"test_zant_light_highest","sep",
"test_vash_animal_distractor","sep",
"test_mipen_spoon_highest","sep",
"test_mipen_bag_target","sep",
"test_geck_nose_target","sep",
"test_blime_light_distractor","sep",
"test_tiz_hit_lowest","sep",
"test_blime_toy_target","sep",
"test_tula_suggest_distractor","sep",
"test_tace_phone_target","sep",
"test_vash_shoe_target","sep",
"test_telpen_ball_target","sep",
"test_tace_suggest_highest","sep",
"test_zant_book_target","sep",
"test_vash_necklace_lowest","sep",
"test_doon_usually_lowest","sep",
"test_bist_horse_target","sep",
"test_doon_purpose_highest","sep",
"test_tula_paper_lowest","sep",
"test_geck_face_lowest","sep",
"test_jair_jewelry_lowest","sep",
"test_tiz_phone_distractor","sep",
"test_vash_bottle_highest","sep",
"test_telpen_toy_highest","sep",
"test_tace_situation_lowest","sep",
"test_jair_time_target","sep",
"test_telpen_push_lowest_filler","sep",
"test_zant_force_distractor","sep",
"test_zant_kitchen_lowest","sep",
"test_bist_dog_lowest","outro1","sr","outro2"
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

["test_tula_paper_lowest", "Form", { 
html: {include: "test_tula_paper_lowest.html"} 
}],

["test_tula_suggest_distractor", "Form", { 
html: {include: "test_tula_suggest_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_bottle_highest", "Form", { 
html: {include: "test_vash_bottle_highest.html"} 
}],

["test_vash_necklace_lowest", "Form", { 
html: {include: "test_vash_necklace_lowest.html"} 
}],

["test_vash_animal_distractor", "Form", { 
html: {include: "test_vash_animal_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_wipe_highest", "Form", { 
html: {include: "test_geck_wipe_highest.html"} 
}],

["test_geck_face_lowest", "Form", { 
html: {include: "test_geck_face_lowest.html"} 
}],

["test_geck_food_distractor", "Form", { 
html: {include: "test_geck_food_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_toy_highest", "Form", { 
html: {include: "test_tiz_toy_highest.html"} 
}],

["test_tiz_hit_lowest", "Form", { 
html: {include: "test_tiz_hit_lowest.html"} 
}],

["test_tiz_phone_distractor", "Form", { 
html: {include: "test_tiz_phone_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_animal_highest", "Form", { 
html: {include: "test_bist_animal_highest.html"} 
}],

["test_bist_dog_lowest", "Form", { 
html: {include: "test_bist_dog_lowest.html"} 
}],

["test_bist_bottle_distractor", "Form", { 
html: {include: "test_bist_bottle_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_food_highest", "Form", { 
html: {include: "test_jair_food_highest.html"} 
}],

["test_jair_jewelry_lowest", "Form", { 
html: {include: "test_jair_jewelry_lowest.html"} 
}],

["test_jair_purpose_distractor", "Form", { 
html: {include: "test_jair_purpose_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_suggest_highest", "Form", { 
html: {include: "test_tace_suggest_highest.html"} 
}],

["test_tace_situation_lowest", "Form", { 
html: {include: "test_tace_situation_lowest.html"} 
}],

["test_tace_wipe_distractor", "Form", { 
html: {include: "test_tace_wipe_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_purpose_highest", "Form", { 
html: {include: "test_doon_purpose_highest.html"} 
}],

["test_doon_usually_lowest", "Form", { 
html: {include: "test_doon_usually_lowest.html"} 
}],

["test_doon_toy_distractor", "Form", { 
html: {include: "test_doon_toy_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_toy_highest", "Form", { 
html: {include: "test_telpen_toy_highest.html"} 
}],

["test_telpen_push_lowest_filler", "Form", { 
html: {include: "test_telpen_push_lowest_filler.html"} 
}],

["test_telpen_spoon_distractor", "Form", { 
html: {include: "test_telpen_spoon_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_wipe_highest", "Form", { 
html: {include: "test_blime_wipe_highest.html"} 
}],

["test_blime_push_lowest", "Form", { 
html: {include: "test_blime_push_lowest.html"} 
}],

["test_blime_light_distractor", "Form", { 
html: {include: "test_blime_light_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_light_highest", "Form", { 
html: {include: "test_zant_light_highest.html"} 
}],

["test_zant_kitchen_lowest", "Form", { 
html: {include: "test_zant_kitchen_lowest.html"} 
}],

["test_zant_force_distractor", "Form", { 
html: {include: "test_zant_force_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_spoon_highest", "Form", { 
html: {include: "test_mipen_spoon_highest.html"} 
}],

["test_mipen_usually_lowest_filler", "Form", { 
html: {include: "test_mipen_usually_lowest_filler.html"} 
}],

["test_mipen_love_distractor", "Form", { 
html: {include: "test_mipen_love_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];