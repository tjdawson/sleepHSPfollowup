var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_telpen_horse_distractor","sep",
"test_vash_shoe_target","sep",
"test_bist_toy_distractor","sep",
"test_jair_stand_lowest","sep",
"test_blime_baby_lowest","sep",
"test_tula_door_distractor","sep",
"test_blime_support_distractor","sep",
"test_tace_phone_target","sep",
"test_tula_paper_lowest","sep",
"test_doon_baby_highest","sep",
"test_tiz_toy_highest","sep",
"test_mipen_cup_highest","sep",
"test_jair_bag_distractor","sep",
"test_bist_animal_highest","sep",
"test_doon_pillow_distractor","sep",
"test_geck_face_lowest","sep",
"test_mipen_four_distractor","sep",
"test_tiz_thing_target","sep",
"test_mipen_purse_lowest","sep",
"test_tiz_vacuum_lowest","sep",
"test_blime_toy_target","sep",
"test_zant_door_highest","sep",
"test_jair_necklace_highest","sep",
"test_tula_mommy_target","sep",
"test_vash_cup_distractor","sep",
"test_doon_hug_lowest","sep",
"test_zant_bag_lowest","sep",
"test_blime_pillow_highest","sep",
"test_vash_bag_highest","sep",
"test_tiz_necklace_distractor","sep",
"test_jair_time_target","sep",
"test_telpen_toy_highest","sep",
"test_geck_nose_target","sep",
"test_tace_pillow_highest","sep",
"test_doon_necklace_target","sep",
"test_geck_horse_highest","sep",
"test_vash_teddy bear_lowest","sep",
"test_telpen_ball_target","sep",
"test_geck_animal_distractor","sep",
"test_telpen_dog_lowest","sep",
"test_zant_book_target","sep",
"test_bist_horse_target","sep",
"test_bist_cold_lowest","sep",
"test_tace_stop_lowest","sep",
"test_tula_cup_highest","sep",
"test_zant_million_distractor","sep",
"test_mipen_bag_target","sep",
"test_tace_baby_distractor","outro1","sr","outro2"
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

["test_tula_paper_lowest", "Form", { 
html: {include: "test_tula_paper_lowest.html"} 
}],

["test_tula_door_distractor", "Form", { 
html: {include: "test_tula_door_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_bag_highest", "Form", { 
html: {include: "test_vash_bag_highest.html"} 
}],

["test_vash_teddy bear_lowest", "Form", { 
html: {include: "test_vash_teddy bear_lowest.html"} 
}],

["test_vash_cup_distractor", "Form", { 
html: {include: "test_vash_cup_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_horse_highest", "Form", { 
html: {include: "test_geck_horse_highest.html"} 
}],

["test_geck_face_lowest", "Form", { 
html: {include: "test_geck_face_lowest.html"} 
}],

["test_geck_animal_distractor", "Form", { 
html: {include: "test_geck_animal_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_toy_highest", "Form", { 
html: {include: "test_tiz_toy_highest.html"} 
}],

["test_tiz_vacuum_lowest", "Form", { 
html: {include: "test_tiz_vacuum_lowest.html"} 
}],

["test_tiz_necklace_distractor", "Form", { 
html: {include: "test_tiz_necklace_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_animal_highest", "Form", { 
html: {include: "test_bist_animal_highest.html"} 
}],

["test_bist_cold_lowest", "Form", { 
html: {include: "test_bist_cold_lowest.html"} 
}],

["test_bist_toy_distractor", "Form", { 
html: {include: "test_bist_toy_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_necklace_highest", "Form", { 
html: {include: "test_jair_necklace_highest.html"} 
}],

["test_jair_stand_lowest", "Form", { 
html: {include: "test_jair_stand_lowest.html"} 
}],

["test_jair_bag_distractor", "Form", { 
html: {include: "test_jair_bag_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_pillow_highest", "Form", { 
html: {include: "test_tace_pillow_highest.html"} 
}],

["test_tace_stop_lowest", "Form", { 
html: {include: "test_tace_stop_lowest.html"} 
}],

["test_tace_baby_distractor", "Form", { 
html: {include: "test_tace_baby_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_baby_highest", "Form", { 
html: {include: "test_doon_baby_highest.html"} 
}],

["test_doon_hug_lowest", "Form", { 
html: {include: "test_doon_hug_lowest.html"} 
}],

["test_doon_pillow_distractor", "Form", { 
html: {include: "test_doon_pillow_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_toy_highest", "Form", { 
html: {include: "test_telpen_toy_highest.html"} 
}],

["test_telpen_dog_lowest", "Form", { 
html: {include: "test_telpen_dog_lowest.html"} 
}],

["test_telpen_horse_distractor", "Form", { 
html: {include: "test_telpen_horse_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_pillow_highest", "Form", { 
html: {include: "test_blime_pillow_highest.html"} 
}],

["test_blime_baby_lowest", "Form", { 
html: {include: "test_blime_baby_lowest.html"} 
}],

["test_blime_support_distractor", "Form", { 
html: {include: "test_blime_support_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_door_highest", "Form", { 
html: {include: "test_zant_door_highest.html"} 
}],

["test_zant_bag_lowest", "Form", { 
html: {include: "test_zant_bag_lowest.html"} 
}],

["test_zant_million_distractor", "Form", { 
html: {include: "test_zant_million_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_cup_highest", "Form", { 
html: {include: "test_mipen_cup_highest.html"} 
}],

["test_mipen_purse_lowest", "Form", { 
html: {include: "test_mipen_purse_lowest.html"} 
}],

["test_mipen_four_distractor", "Form", { 
html: {include: "test_mipen_four_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];