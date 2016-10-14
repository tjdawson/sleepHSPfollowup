var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_doon_necklace_target","sep",
"test_doon_hug_highest","sep",
"test_tace_pillow_highest","sep",
"test_mipen_phone_lowest","sep",
"test_tiz_wheel_highest","sep",
"test_mipen_bag_target","sep",
"test_zant_go_lowest","sep",
"test_bist_follow_highest","sep",
"test_tiz_thing_target","sep",
"test_jair_time_target","sep",
"test_tula_pillow_distractor","sep",
"test_jair_off_highest","sep",
"test_zant_going_highest","sep",
"test_zant_book_target","sep",
"test_tula_look_highest","sep",
"test_tula_white_lowest","sep",
"test_mipen_general_distractor","sep",
"test_bist_bucket_lowest","sep",
"test_blime_toy_target","sep",
"test_jair_look_distractor","sep",
"test_telpen_ball_target","sep",
"test_blime_baby_highest","sep",
"test_telpen_ready_lowest","sep",
"test_vash_follow_distractor","sep",
"test_blime_going_distractor","sep",
"test_vash_shoe_target","sep",
"test_tiz_hit_lowest","sep",
"test_tace_lay_lowest","sep",
"test_tula_mommy_target","sep",
"test_geck_dada_lowest","sep",
"test_telpen_off_distractor","sep",
"test_vash_truck_highest","sep",
"test_blime_push_lowest","sep",
"test_doon_baby_lowest","sep",
"test_bist_horse_target","sep",
"test_mipen_trash_highest","sep",
"test_jair_food_lowest","sep",
"test_zant_throw_distractor","sep",
"test_tiz_hug_distractor","sep",
"test_doon_horse_distractor","sep",
"test_vash_purse_lowest","sep",
"test_bist_baby_distractor","sep",
"test_geck_horse_highest","sep",
"test_tace_wheel_distractor","sep",
"test_tace_telephone_target","sep",
"test_geck_truck_distractor","sep",
"test_telpen_throw_highest","sep",
"test_geck_nose_target","outro1","sr","outro2"
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

["test_tula_look_highest", "Form", { 
html: {include: "test_tula_look_highest.html"} 
}],

["test_tula_white_lowest", "Form", { 
html: {include: "test_tula_white_lowest.html"} 
}],

["test_tula_pillow_distractor", "Form", { 
html: {include: "test_tula_pillow_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_truck_highest", "Form", { 
html: {include: "test_vash_truck_highest.html"} 
}],

["test_vash_purse_lowest", "Form", { 
html: {include: "test_vash_purse_lowest.html"} 
}],

["test_vash_follow_distractor", "Form", { 
html: {include: "test_vash_follow_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_horse_highest", "Form", { 
html: {include: "test_geck_horse_highest.html"} 
}],

["test_geck_dada_lowest", "Form", { 
html: {include: "test_geck_dada_lowest.html"} 
}],

["test_geck_truck_distractor", "Form", { 
html: {include: "test_geck_truck_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_wheel_highest", "Form", { 
html: {include: "test_tiz_wheel_highest.html"} 
}],

["test_tiz_hit_lowest", "Form", { 
html: {include: "test_tiz_hit_lowest.html"} 
}],

["test_tiz_hug_distractor", "Form", { 
html: {include: "test_tiz_hug_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_follow_highest", "Form", { 
html: {include: "test_bist_follow_highest.html"} 
}],

["test_bist_bucket_lowest", "Form", { 
html: {include: "test_bist_bucket_lowest.html"} 
}],

["test_bist_baby_distractor", "Form", { 
html: {include: "test_bist_baby_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_off_highest", "Form", { 
html: {include: "test_jair_off_highest.html"} 
}],

["test_jair_food_lowest", "Form", { 
html: {include: "test_jair_food_lowest.html"} 
}],

["test_jair_look_distractor", "Form", { 
html: {include: "test_jair_look_distractor.html"} 
}],

["test_tace_telephone_target", "Form", { 
html: {include: "test_tace_telephone_target.html"} 
}],

["test_tace_pillow_highest", "Form", { 
html: {include: "test_tace_pillow_highest.html"} 
}],

["test_tace_lay_lowest", "Form", { 
html: {include: "test_tace_lay_lowest.html"} 
}],

["test_tace_wheel_distractor", "Form", { 
html: {include: "test_tace_wheel_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_hug_highest", "Form", { 
html: {include: "test_doon_hug_highest.html"} 
}],

["test_doon_baby_lowest", "Form", { 
html: {include: "test_doon_baby_lowest.html"} 
}],

["test_doon_horse_distractor", "Form", { 
html: {include: "test_doon_horse_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_throw_highest", "Form", { 
html: {include: "test_telpen_throw_highest.html"} 
}],

["test_telpen_ready_lowest", "Form", { 
html: {include: "test_telpen_ready_lowest.html"} 
}],

["test_telpen_off_distractor", "Form", { 
html: {include: "test_telpen_off_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_baby_highest", "Form", { 
html: {include: "test_blime_baby_highest.html"} 
}],

["test_blime_push_lowest", "Form", { 
html: {include: "test_blime_push_lowest.html"} 
}],

["test_blime_going_distractor", "Form", { 
html: {include: "test_blime_going_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_going_highest", "Form", { 
html: {include: "test_zant_going_highest.html"} 
}],

["test_zant_go_lowest", "Form", { 
html: {include: "test_zant_go_lowest.html"} 
}],

["test_zant_throw_distractor", "Form", { 
html: {include: "test_zant_throw_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_trash_highest", "Form", { 
html: {include: "test_mipen_trash_highest.html"} 
}],

["test_mipen_phone_lowest", "Form", { 
html: {include: "test_mipen_phone_lowest.html"} 
}],

["test_mipen_general_distractor", "Form", { 
html: {include: "test_mipen_general_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];