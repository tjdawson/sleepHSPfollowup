var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_vash_teddy_lowest","sep",
"test_telpen_ball_target","sep",
"test_mipen_fine_distractor","sep",
"test_tace_pillow_lowest","sep",
"test_bist_dog_highest","sep",
"test_telpen_fetch_highest","sep",
"test_bist_here_distractor","sep",
"test_blime_here_highest","sep",
"test_doon_purse_distractor","sep",
"test_jair_time_target","sep",
"test_tace_dog_distractor","sep",
"test_vash_fetch_distractor","sep",
"test_vash_shoe_target","sep",
"test_doon_necklace_target","sep",
"test_zant_stop_highest","sep",
"test_vash_purse_highest","sep",
"test_tiz_round_lowest","sep",
"test_telpen_bottle_distractor","sep",
"test_blime_where_lowest","sep",
"test_zant_book_target","sep",
"test_blime_toy_target","sep",
"test_doon_lap_highest","sep",
"test_tula_love_distractor","sep",
"test_bist_horse_target","sep",
"test_geck_love_highest","sep",
"test_tiz_shake_highest","sep",
"test_tace_stop_highest","sep",
"test_mipen_phone_lowest","sep",
"test_tiz_stop_distractor","sep",
"test_zant_open_lowest","sep",
"test_telpen_roll_lowest","sep",
"test_geck_hold_distractor","sep",
"test_jair_lap_distractor","sep",
"test_tula_come_lowest","sep",
"test_blime_shake_distractor","sep",
"test_mipen_bag_target","sep",
"test_tace_phone_target","sep",
"test_tula_mommy_target","sep",
"test_tula_bottle_highest","sep",
"test_bist_go_lowest","sep",
"test_zant_eat_distractor","sep",
"test_tiz_thing_target","sep",
"test_doon_stop_lowest","sep",
"test_mipen_hold_highest","sep",
"test_jair_fall_lowest","sep",
"test_geck_horse_lowest","sep",
"test_jair_eat_highest","sep",
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

["test_tula_bottle_highest", "Form", { 
html: {include: "test_tula_bottle_highest.html"} 
}],

["test_tula_come_lowest", "Form", { 
html: {include: "test_tula_come_lowest.html"} 
}],

["test_tula_love_distractor", "Form", { 
html: {include: "test_tula_love_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_purse_highest", "Form", { 
html: {include: "test_vash_purse_highest.html"} 
}],

["test_vash_teddy_lowest", "Form", { 
html: {include: "test_vash_teddy_lowest.html"} 
}],

["test_vash_fetch_distractor", "Form", { 
html: {include: "test_vash_fetch_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_love_highest", "Form", { 
html: {include: "test_geck_love_highest.html"} 
}],

["test_geck_horse_lowest", "Form", { 
html: {include: "test_geck_horse_lowest.html"} 
}],

["test_geck_hold_distractor", "Form", { 
html: {include: "test_geck_hold_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_shake_highest", "Form", { 
html: {include: "test_tiz_shake_highest.html"} 
}],

["test_tiz_round_lowest", "Form", { 
html: {include: "test_tiz_round_lowest.html"} 
}],

["test_tiz_stop_distractor", "Form", { 
html: {include: "test_tiz_stop_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_dog_highest", "Form", { 
html: {include: "test_bist_dog_highest.html"} 
}],

["test_bist_go_lowest", "Form", { 
html: {include: "test_bist_go_lowest.html"} 
}],

["test_bist_here_distractor", "Form", { 
html: {include: "test_bist_here_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_eat_highest", "Form", { 
html: {include: "test_jair_eat_highest.html"} 
}],

["test_jair_fall_lowest", "Form", { 
html: {include: "test_jair_fall_lowest.html"} 
}],

["test_jair_lap_distractor", "Form", { 
html: {include: "test_jair_lap_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_stop_highest", "Form", { 
html: {include: "test_tace_stop_highest.html"} 
}],

["test_tace_pillow_lowest", "Form", { 
html: {include: "test_tace_pillow_lowest.html"} 
}],

["test_tace_dog_distractor", "Form", { 
html: {include: "test_tace_dog_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_lap_highest", "Form", { 
html: {include: "test_doon_lap_highest.html"} 
}],

["test_doon_stop_lowest", "Form", { 
html: {include: "test_doon_stop_lowest.html"} 
}],

["test_doon_purse_distractor", "Form", { 
html: {include: "test_doon_purse_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_fetch_highest", "Form", { 
html: {include: "test_telpen_fetch_highest.html"} 
}],

["test_telpen_roll_lowest", "Form", { 
html: {include: "test_telpen_roll_lowest.html"} 
}],

["test_telpen_bottle_distractor", "Form", { 
html: {include: "test_telpen_bottle_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_here_highest", "Form", { 
html: {include: "test_blime_here_highest.html"} 
}],

["test_blime_where_lowest", "Form", { 
html: {include: "test_blime_where_lowest.html"} 
}],

["test_blime_shake_distractor", "Form", { 
html: {include: "test_blime_shake_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_stop_highest", "Form", { 
html: {include: "test_zant_stop_highest.html"} 
}],

["test_zant_open_lowest", "Form", { 
html: {include: "test_zant_open_lowest.html"} 
}],

["test_zant_eat_distractor", "Form", { 
html: {include: "test_zant_eat_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_hold_highest", "Form", { 
html: {include: "test_mipen_hold_highest.html"} 
}],

["test_mipen_phone_lowest", "Form", { 
html: {include: "test_mipen_phone_lowest.html"} 
}],

["test_mipen_fine_distractor", "Form", { 
html: {include: "test_mipen_fine_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];