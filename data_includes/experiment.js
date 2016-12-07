var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_geck_hug_lowest","sep",
"test_doon_follow_distractor","sep",
"test_jair_head_highest","sep",
"test_tiz_music_lowest","sep",
"test_zant_dance_distractor","sep",
"test_vash_truck_highest","sep",
"test_mipen_bag_target","sep",
"test_mipen_phone_highest","sep",
"test_tace_floor_lowest","sep",
"test_zant_here_lowest","sep",
"test_telpen_ball_target","sep",
"test_bist_head_distractor","sep",
"test_mipen_throw_distractor","sep",
"test_bist_walk_highest","sep",
"test_mipen_clean_lowest","sep",
"test_doon_wear_lowest","sep",
"test_jair_horse_distractor","sep",
"test_tace_phone_target","sep",
"test_geck_press_distractor","sep",
"test_geck_nose_target","sep",
"test_tula_play_distractor","sep",
"test_tula_me_lowest","sep",
"test_blime_wipe_lowest","sep",
"test_tiz_thing_target","sep",
"test_jair_okay_lowest","sep",
"test_blime_roll_highest","sep",
"test_vash_bag_lowest","sep",
"test_vash_here_distractor","sep",
"test_jair_time_target","sep",
"test_bist_horse_target","sep",
"test_zant_book_target","sep",
"test_zant_follow_highest","sep",
"test_telpen_soccer_lowest","sep",
"test_tiz_roll_distractor","sep",
"test_tace_phone_distractor","sep",
"test_vash_shoe_target","sep",
"test_blime_toy_target","sep",
"test_doon_dance_highest","sep",
"test_blime_walk_distractor","sep",
"test_geck_horse_highest","sep",
"test_tula_mommy_target","sep",
"test_telpen_truck_distractor","sep",
"test_tiz_play_highest","sep",
"test_doon_necklace_target","sep",
"test_tace_press_highest","sep",
"test_bist_dog_lowest","sep",
"test_tula_here_highest","sep",
"test_telpen_throw_highest","outro1","sr","outro2"
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

["test_tula_here_highest", "Form", { 
html: {include: "test_tula_here_highest.html"} 
}],

["test_tula_me_lowest", "Form", { 
html: {include: "test_tula_me_lowest.html"} 
}],

["test_tula_play_distractor", "Form", { 
html: {include: "test_tula_play_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_truck_highest", "Form", { 
html: {include: "test_vash_truck_highest.html"} 
}],

["test_vash_bag_lowest", "Form", { 
html: {include: "test_vash_bag_lowest.html"} 
}],

["test_vash_here_distractor", "Form", { 
html: {include: "test_vash_here_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_horse_highest", "Form", { 
html: {include: "test_geck_horse_highest.html"} 
}],

["test_geck_hug_lowest", "Form", { 
html: {include: "test_geck_hug_lowest.html"} 
}],

["test_geck_press_distractor", "Form", { 
html: {include: "test_geck_press_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_play_highest", "Form", { 
html: {include: "test_tiz_play_highest.html"} 
}],

["test_tiz_music_lowest", "Form", { 
html: {include: "test_tiz_music_lowest.html"} 
}],

["test_tiz_roll_distractor", "Form", { 
html: {include: "test_tiz_roll_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_walk_highest", "Form", { 
html: {include: "test_bist_walk_highest.html"} 
}],

["test_bist_dog_lowest", "Form", { 
html: {include: "test_bist_dog_lowest.html"} 
}],

["test_bist_head_distractor", "Form", { 
html: {include: "test_bist_head_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_head_highest", "Form", { 
html: {include: "test_jair_head_highest.html"} 
}],

["test_jair_okay_lowest", "Form", { 
html: {include: "test_jair_okay_lowest.html"} 
}],

["test_jair_horse_distractor", "Form", { 
html: {include: "test_jair_horse_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_press_highest", "Form", { 
html: {include: "test_tace_press_highest.html"} 
}],

["test_tace_floor_lowest", "Form", { 
html: {include: "test_tace_floor_lowest.html"} 
}],

["test_tace_phone_distractor", "Form", { 
html: {include: "test_tace_phone_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_dance_highest", "Form", { 
html: {include: "test_doon_dance_highest.html"} 
}],

["test_doon_wear_lowest", "Form", { 
html: {include: "test_doon_wear_lowest.html"} 
}],

["test_doon_follow_distractor", "Form", { 
html: {include: "test_doon_follow_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_throw_highest", "Form", { 
html: {include: "test_telpen_throw_highest.html"} 
}],

["test_telpen_soccer_lowest", "Form", { 
html: {include: "test_telpen_soccer_lowest.html"} 
}],

["test_telpen_truck_distractor", "Form", { 
html: {include: "test_telpen_truck_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_roll_highest", "Form", { 
html: {include: "test_blime_roll_highest.html"} 
}],

["test_blime_wipe_lowest", "Form", { 
html: {include: "test_blime_wipe_lowest.html"} 
}],

["test_blime_walk_distractor", "Form", { 
html: {include: "test_blime_walk_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_follow_highest", "Form", { 
html: {include: "test_zant_follow_highest.html"} 
}],

["test_zant_here_lowest", "Form", { 
html: {include: "test_zant_here_lowest.html"} 
}],

["test_zant_dance_distractor", "Form", { 
html: {include: "test_zant_dance_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_phone_highest", "Form", { 
html: {include: "test_mipen_phone_highest.html"} 
}],

["test_mipen_clean_lowest", "Form", { 
html: {include: "test_mipen_clean_lowest.html"} 
}],

["test_mipen_throw_distractor", "Form", { 
html: {include: "test_mipen_throw_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];