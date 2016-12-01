var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_mipen_take_highest","sep",
"test_telpen_ball_target","sep",
"test_geck_take_distractor","sep",
"test_tiz_toy_lowest","sep",
"test_telpen_spin_lowest","sep",
"test_tula_look_distractor","sep",
"test_vash_baby_distractor","sep",
"test_tace_phone_target","sep",
"test_tula_clothes_highest","sep",
"test_jair_time_target","sep",
"test_blime_push_highest","sep",
"test_tace_dog_lowest","sep",
"test_jair_head_lowest","sep",
"test_tula_cup_lowest","sep",
"test_vash_shoe_target","sep",
"test_tiz_stair_highest","sep",
"test_zant_book_target","sep",
"test_telpen_fetch_highest","sep",
"test_geck_face_highest","sep",
"test_vash_elephant_highest","sep",
"test_bist_horse_target","sep",
"test_blime_face_distractor","sep",
"test_zant_walk_lowest","sep",
"test_doon_necklace_target","sep",
"test_tula_mommy_target","sep",
"test_tace_call_highest","sep",
"test_mipen_elephant_distractor","sep",
"test_zant_look_highest","sep",
"test_geck_nose_target","sep",
"test_zant_stair_distractor","sep",
"test_geck_lift_lowest","sep",
"test_jair_eat_highest","sep",
"test_doon_grab_lowest","sep",
"test_blime_look_lowest","sep",
"test_mipen_bag_target","sep",
"test_bist_no_lowest","sep",
"test_doon_baby_highest","sep",
"test_tiz_thing_target","sep",
"test_tace_eat_distractor","sep",
"test_mipen_spoon_lowest","sep",
"test_tiz_fetch_distractor","sep",
"test_blime_toy_target","sep",
"test_vash_truck_lowest","sep",
"test_jair_clothes_distractor","sep",
"test_bist_bounce_highest","sep",
"test_doon_bounce_distractor","sep",
"test_bist_push_distractor","sep",
"test_telpen_call_distractor","outro1","sr","outro2"
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

["test_tula_clothes_highest", "Form", { 
html: {include: "test_tula_clothes_highest.html"} 
}],

["test_tula_cup_lowest", "Form", { 
html: {include: "test_tula_cup_lowest.html"} 
}],

["test_tula_look_distractor", "Form", { 
html: {include: "test_tula_look_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_elephant_highest", "Form", { 
html: {include: "test_vash_elephant_highest.html"} 
}],

["test_vash_truck_lowest", "Form", { 
html: {include: "test_vash_truck_lowest.html"} 
}],

["test_vash_baby_distractor", "Form", { 
html: {include: "test_vash_baby_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_face_highest", "Form", { 
html: {include: "test_geck_face_highest.html"} 
}],

["test_geck_lift_lowest", "Form", { 
html: {include: "test_geck_lift_lowest.html"} 
}],

["test_geck_take_distractor", "Form", { 
html: {include: "test_geck_take_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_stair_highest", "Form", { 
html: {include: "test_tiz_stair_highest.html"} 
}],

["test_tiz_toy_lowest", "Form", { 
html: {include: "test_tiz_toy_lowest.html"} 
}],

["test_tiz_fetch_distractor", "Form", { 
html: {include: "test_tiz_fetch_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_bounce_highest", "Form", { 
html: {include: "test_bist_bounce_highest.html"} 
}],

["test_bist_no_lowest", "Form", { 
html: {include: "test_bist_no_lowest.html"} 
}],

["test_bist_push_distractor", "Form", { 
html: {include: "test_bist_push_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_eat_highest", "Form", { 
html: {include: "test_jair_eat_highest.html"} 
}],

["test_jair_head_lowest", "Form", { 
html: {include: "test_jair_head_lowest.html"} 
}],

["test_jair_clothes_distractor", "Form", { 
html: {include: "test_jair_clothes_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_call_highest", "Form", { 
html: {include: "test_tace_call_highest.html"} 
}],

["test_tace_dog_lowest", "Form", { 
html: {include: "test_tace_dog_lowest.html"} 
}],

["test_tace_eat_distractor", "Form", { 
html: {include: "test_tace_eat_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_baby_highest", "Form", { 
html: {include: "test_doon_baby_highest.html"} 
}],

["test_doon_grab_lowest", "Form", { 
html: {include: "test_doon_grab_lowest.html"} 
}],

["test_doon_bounce_distractor", "Form", { 
html: {include: "test_doon_bounce_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_fetch_highest", "Form", { 
html: {include: "test_telpen_fetch_highest.html"} 
}],

["test_telpen_spin_lowest", "Form", { 
html: {include: "test_telpen_spin_lowest.html"} 
}],

["test_telpen_call_distractor", "Form", { 
html: {include: "test_telpen_call_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_push_highest", "Form", { 
html: {include: "test_blime_push_highest.html"} 
}],

["test_blime_look_lowest", "Form", { 
html: {include: "test_blime_look_lowest.html"} 
}],

["test_blime_face_distractor", "Form", { 
html: {include: "test_blime_face_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_look_highest", "Form", { 
html: {include: "test_zant_look_highest.html"} 
}],

["test_zant_walk_lowest", "Form", { 
html: {include: "test_zant_walk_lowest.html"} 
}],

["test_zant_stair_distractor", "Form", { 
html: {include: "test_zant_stair_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_take_highest", "Form", { 
html: {include: "test_mipen_take_highest.html"} 
}],

["test_mipen_spoon_lowest", "Form", { 
html: {include: "test_mipen_spoon_lowest.html"} 
}],

["test_mipen_elephant_distractor", "Form", { 
html: {include: "test_mipen_elephant_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];