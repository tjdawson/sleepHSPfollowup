var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_jair_neck_highest","sep",
"test_doon_necklace_target","sep",
"test_zant_light_highest","sep",
"test_geck_dance_distractor","sep",
"test_tace_dog_lowest","sep",
"test_telpen_neck_distractor","sep",
"test_bist_horse_target","sep",
"test_tace_phone_target","sep",
"test_bist_light_distractor","sep",
"test_vash_shoe_target","sep",
"test_tiz_pillow_distractor","sep",
"test_mipen_truck_distractor","sep",
"test_geck_lizard_highest","sep",
"test_blime_bag_distractor","sep",
"test_tace_lizard_distractor","sep",
"test_telpen_spin_highest","sep",
"test_tula_box_distractor","sep",
"test_bist_dog_highest","sep",
"test_telpen_throw_lowest","sep",
"test_blime_toy_target","sep",
"test_geck_face_lowest","sep",
"test_doon_dance_highest","sep",
"test_tiz_thing_target","sep",
"test_tiz_bag_highest","sep",
"test_doon_drum_lowest","sep",
"test_mipen_spoon_lowest","sep",
"test_zant_book_target","sep",
"test_tula_talk_highest","sep",
"test_blime_sit_lowest","sep",
"test_zant_stair_lowest","sep",
"test_vash_truck_highest","sep",
"test_telpen_ball_target","sep",
"test_vash_elephant_lowest","sep",
"test_jair_door_lowest","sep",
"test_mipen_necklace_highest","sep",
"test_vash_necklace_distractor","sep",
"test_geck_nose_target","sep",
"test_doon_spin_distractor","sep",
"test_jair_time_target","sep",
"test_blime_box_highest","sep",
"test_tula_mommy_target","sep",
"test_tula_sign_lowest","sep",
"test_tiz_turn_lowest","sep",
"test_tace_pillow_highest","sep",
"test_bist_touch_lowest","sep",
"test_jair_talk_distractor","sep",
"test_zant_dog_distractor","sep",
"test_mipen_bag_target","outro1","sr","outro2"
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

["test_tula_talk_highest", "Form", { 
html: {include: "test_tula_talk_highest.html"} 
}],

["test_tula_sign_lowest", "Form", { 
html: {include: "test_tula_sign_lowest.html"} 
}],

["test_tula_box_distractor", "Form", { 
html: {include: "test_tula_box_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_truck_highest", "Form", { 
html: {include: "test_vash_truck_highest.html"} 
}],

["test_vash_elephant_lowest", "Form", { 
html: {include: "test_vash_elephant_lowest.html"} 
}],

["test_vash_necklace_distractor", "Form", { 
html: {include: "test_vash_necklace_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_lizard_highest", "Form", { 
html: {include: "test_geck_lizard_highest.html"} 
}],

["test_geck_face_lowest", "Form", { 
html: {include: "test_geck_face_lowest.html"} 
}],

["test_geck_dance_distractor", "Form", { 
html: {include: "test_geck_dance_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_bag_highest", "Form", { 
html: {include: "test_tiz_bag_highest.html"} 
}],

["test_tiz_turn_lowest", "Form", { 
html: {include: "test_tiz_turn_lowest.html"} 
}],

["test_tiz_pillow_distractor", "Form", { 
html: {include: "test_tiz_pillow_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_dog_highest", "Form", { 
html: {include: "test_bist_dog_highest.html"} 
}],

["test_bist_touch_lowest", "Form", { 
html: {include: "test_bist_touch_lowest.html"} 
}],

["test_bist_light_distractor", "Form", { 
html: {include: "test_bist_light_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_neck_highest", "Form", { 
html: {include: "test_jair_neck_highest.html"} 
}],

["test_jair_door_lowest", "Form", { 
html: {include: "test_jair_door_lowest.html"} 
}],

["test_jair_talk_distractor", "Form", { 
html: {include: "test_jair_talk_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_pillow_highest", "Form", { 
html: {include: "test_tace_pillow_highest.html"} 
}],

["test_tace_dog_lowest", "Form", { 
html: {include: "test_tace_dog_lowest.html"} 
}],

["test_tace_lizard_distractor", "Form", { 
html: {include: "test_tace_lizard_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_dance_highest", "Form", { 
html: {include: "test_doon_dance_highest.html"} 
}],

["test_doon_drum_lowest", "Form", { 
html: {include: "test_doon_drum_lowest.html"} 
}],

["test_doon_spin_distractor", "Form", { 
html: {include: "test_doon_spin_distractor.html"} 
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

["test_telpen_neck_distractor", "Form", { 
html: {include: "test_telpen_neck_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_box_highest", "Form", { 
html: {include: "test_blime_box_highest.html"} 
}],

["test_blime_sit_lowest", "Form", { 
html: {include: "test_blime_sit_lowest.html"} 
}],

["test_blime_bag_distractor", "Form", { 
html: {include: "test_blime_bag_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_light_highest", "Form", { 
html: {include: "test_zant_light_highest.html"} 
}],

["test_zant_stair_lowest", "Form", { 
html: {include: "test_zant_stair_lowest.html"} 
}],

["test_zant_dog_distractor", "Form", { 
html: {include: "test_zant_dog_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_necklace_highest", "Form", { 
html: {include: "test_mipen_necklace_highest.html"} 
}],

["test_mipen_spoon_lowest", "Form", { 
html: {include: "test_mipen_spoon_lowest.html"} 
}],

["test_mipen_truck_distractor", "Form", { 
html: {include: "test_mipen_truck_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];