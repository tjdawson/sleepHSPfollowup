var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_blime_baby_highest","sep",
"test_geck_face_highest","sep",
"test_vash_bear_highest","sep",
"test_tiz_thing_target","sep",
"test_tula_over_lowest","sep",
"test_vash_shoe_target","sep",
"test_zant_book_target","sep",
"test_jair_leg_lowest","sep",
"test_zant_foreign_distractor","sep",
"test_mipen_phone_lowest","sep",
"test_blime_toy_target","sep",
"test_doon_baby_highest","sep",
"test_tiz_leg_lowest","sep",
"test_zant_plate_highest","sep",
"test_tace_table_distractor","sep",
"test_zant_bowl_lowest","sep",
"test_telpen_ball_target","sep",
"test_geck_nose_target","sep",
"test_bist_dog_distractor","sep",
"test_tula_necklace_distractor","sep",
"test_blime_plate_distractor","sep",
"test_telpen_cup_lowest","sep",
"test_bist_horse_target","sep",
"test_doon_necklace_target","sep",
"test_tace_call_lowest","sep",
"test_telpen_phone_distractor","sep",
"test_doon_bear_distractor","sep",
"test_vash_hand_distractor","sep",
"test_tula_phone_highest","sep",
"test_vash_truck_lowest","sep",
"test_geck_horse_lowest","sep",
"test_bist_bucket_lowest","sep",
"test_blime_vaccuum_lowest","sep",
"test_mipen_necklace_highest","sep",
"test_telpen_dog_highest","sep",
"test_tace_button_highest","sep",
"test_doon_baby_lowest","sep",
"test_jair_face_distractor","sep",
"test_jair_necklace_highest","sep",
"test_tace_telephone_target","sep",
"test_tiz_hand_highest","sep",
"test_bist_table_highest","sep",
"test_tula_telephone_target","sep",
"test_jair_time_target","sep",
"test_tiz_button_distractor","sep",
"test_mipen_experience_distractor","sep",
"test_geck_baby_distractor","sep",
"test_mipen_telephone_target","outro1","sr","outro2"
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
["test_tula_telephone_target", "Form", { 
html: {include: "test_tula_telephone_target.html"} 
}],

["test_tula_phone_highest", "Form", { 
html: {include: "test_tula_phone_highest.html"} 
}],

["test_tula_over_lowest", "Form", { 
html: {include: "test_tula_over_lowest.html"} 
}],

["test_tula_necklace_distractor", "Form", { 
html: {include: "test_tula_necklace_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_bear_highest", "Form", { 
html: {include: "test_vash_bear_highest.html"} 
}],

["test_vash_truck_lowest", "Form", { 
html: {include: "test_vash_truck_lowest.html"} 
}],

["test_vash_hand_distractor", "Form", { 
html: {include: "test_vash_hand_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_face_highest", "Form", { 
html: {include: "test_geck_face_highest.html"} 
}],

["test_geck_horse_lowest", "Form", { 
html: {include: "test_geck_horse_lowest.html"} 
}],

["test_geck_baby_distractor", "Form", { 
html: {include: "test_geck_baby_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_hand_highest", "Form", { 
html: {include: "test_tiz_hand_highest.html"} 
}],

["test_tiz_leg_lowest", "Form", { 
html: {include: "test_tiz_leg_lowest.html"} 
}],

["test_tiz_button_distractor", "Form", { 
html: {include: "test_tiz_button_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_table_highest", "Form", { 
html: {include: "test_bist_table_highest.html"} 
}],

["test_bist_bucket_lowest", "Form", { 
html: {include: "test_bist_bucket_lowest.html"} 
}],

["test_bist_dog_distractor", "Form", { 
html: {include: "test_bist_dog_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_necklace_highest", "Form", { 
html: {include: "test_jair_necklace_highest.html"} 
}],

["test_jair_leg_lowest", "Form", { 
html: {include: "test_jair_leg_lowest.html"} 
}],

["test_jair_face_distractor", "Form", { 
html: {include: "test_jair_face_distractor.html"} 
}],

["test_tace_telephone_target", "Form", { 
html: {include: "test_tace_telephone_target.html"} 
}],

["test_tace_button_highest", "Form", { 
html: {include: "test_tace_button_highest.html"} 
}],

["test_tace_call_lowest", "Form", { 
html: {include: "test_tace_call_lowest.html"} 
}],

["test_tace_table_distractor", "Form", { 
html: {include: "test_tace_table_distractor.html"} 
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

["test_doon_bear_distractor", "Form", { 
html: {include: "test_doon_bear_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_dog_highest", "Form", { 
html: {include: "test_telpen_dog_highest.html"} 
}],

["test_telpen_cup_lowest", "Form", { 
html: {include: "test_telpen_cup_lowest.html"} 
}],

["test_telpen_phone_distractor", "Form", { 
html: {include: "test_telpen_phone_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_baby_highest", "Form", { 
html: {include: "test_blime_baby_highest.html"} 
}],

["test_blime_vaccuum_lowest", "Form", { 
html: {include: "test_blime_vaccuum_lowest.html"} 
}],

["test_blime_plate_distractor", "Form", { 
html: {include: "test_blime_plate_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_plate_highest", "Form", { 
html: {include: "test_zant_plate_highest.html"} 
}],

["test_zant_bowl_lowest", "Form", { 
html: {include: "test_zant_bowl_lowest.html"} 
}],

["test_zant_foreign_distractor", "Form", { 
html: {include: "test_zant_foreign_distractor.html"} 
}],

["test_mipen_telephone_target", "Form", { 
html: {include: "test_mipen_telephone_target.html"} 
}],

["test_mipen_necklace_highest", "Form", { 
html: {include: "test_mipen_necklace_highest.html"} 
}],

["test_mipen_phone_lowest", "Form", { 
html: {include: "test_mipen_phone_lowest.html"} 
}],

["test_mipen_experience_distractor", "Form", { 
html: {include: "test_mipen_experience_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];