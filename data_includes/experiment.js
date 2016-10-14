var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_doon_hang_lowest","sep",
"test_jair_closet_highest","sep",
"test_vash_shoe_target","sep",
"test_geck_nose_target","sep",
"test_telpen_pushchair_lowest","sep",
"test_mipen_drink_highest","sep",
"test_geck_shake_distractor","sep",
"test_jair_drop_lowest","sep",
"test_tace_bag_highest","sep",
"test_tace_pillow_lowest","sep",
"test_tula_follow_distractor","sep",
"test_tula_phone_highest","sep",
"test_mipen_show_lowest","sep",
"test_tula_yellow_lowest","sep",
"test_mipen_bag_distractor","sep",
"test_blime_watch_highest","sep",
"test_vash_store_highest","sep",
"test_geck_horse_highest","sep",
"test_zant_come_lowest","sep",
"test_blime_store_distractor","sep",
"test_bist_drop_lowest","sep",
"test_zant_turn_distractor","sep",
"test_tace_run_distractor","sep",
"test_telpen_drop_distractor","sep",
"test_zant_book_target","sep",
"test_jair_time_target","sep",
"test_mipen_telephone_target","sep",
"test_doon_necklace_target","sep",
"test_tiz_closet_distractor","sep",
"test_tula_mommy_target","sep",
"test_blime_box_lowest","sep",
"test_tiz_shake_highest","sep",
"test_telpen_ball_target","sep",
"test_jair_drink_distractor","sep",
"test_bist_horse_target","sep",
"test_bist_run_highest","sep",
"test_tace_telephone_target","sep",
"test_tiz_ball_lowest","sep",
"test_tiz_thing_target","sep",
"test_doon_drop_highest","sep",
"test_blime_toy_target","sep",
"test_geck_keep_lowest","sep",
"test_bist_phone_distractor","sep",
"test_telpen_turn_highest","sep",
"test_vash_bear_lowest","sep",
"test_doon_watch_distractor","sep",
"test_vash_horse_distractor","sep",
"test_zant_follow_highest","outro1","sr","outro2"
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

["test_tula_yellow_lowest", "Form", { 
html: {include: "test_tula_yellow_lowest.html"} 
}],

["test_tula_follow_distractor", "Form", { 
html: {include: "test_tula_follow_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_store_highest", "Form", { 
html: {include: "test_vash_store_highest.html"} 
}],

["test_vash_bear_lowest", "Form", { 
html: {include: "test_vash_bear_lowest.html"} 
}],

["test_vash_horse_distractor", "Form", { 
html: {include: "test_vash_horse_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_horse_highest", "Form", { 
html: {include: "test_geck_horse_highest.html"} 
}],

["test_geck_keep_lowest", "Form", { 
html: {include: "test_geck_keep_lowest.html"} 
}],

["test_geck_shake_distractor", "Form", { 
html: {include: "test_geck_shake_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_shake_highest", "Form", { 
html: {include: "test_tiz_shake_highest.html"} 
}],

["test_tiz_ball_lowest", "Form", { 
html: {include: "test_tiz_ball_lowest.html"} 
}],

["test_tiz_closet_distractor", "Form", { 
html: {include: "test_tiz_closet_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_run_highest", "Form", { 
html: {include: "test_bist_run_highest.html"} 
}],

["test_bist_drop_lowest", "Form", { 
html: {include: "test_bist_drop_lowest.html"} 
}],

["test_bist_phone_distractor", "Form", { 
html: {include: "test_bist_phone_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_closet_highest", "Form", { 
html: {include: "test_jair_closet_highest.html"} 
}],

["test_jair_drop_lowest", "Form", { 
html: {include: "test_jair_drop_lowest.html"} 
}],

["test_jair_drink_distractor", "Form", { 
html: {include: "test_jair_drink_distractor.html"} 
}],

["test_tace_telephone_target", "Form", { 
html: {include: "test_tace_telephone_target.html"} 
}],

["test_tace_bag_highest", "Form", { 
html: {include: "test_tace_bag_highest.html"} 
}],

["test_tace_pillow_lowest", "Form", { 
html: {include: "test_tace_pillow_lowest.html"} 
}],

["test_tace_run_distractor", "Form", { 
html: {include: "test_tace_run_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_drop_highest", "Form", { 
html: {include: "test_doon_drop_highest.html"} 
}],

["test_doon_hang_lowest", "Form", { 
html: {include: "test_doon_hang_lowest.html"} 
}],

["test_doon_watch_distractor", "Form", { 
html: {include: "test_doon_watch_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_turn_highest", "Form", { 
html: {include: "test_telpen_turn_highest.html"} 
}],

["test_telpen_pushchair_lowest", "Form", { 
html: {include: "test_telpen_pushchair_lowest.html"} 
}],

["test_telpen_drop_distractor", "Form", { 
html: {include: "test_telpen_drop_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_watch_highest", "Form", { 
html: {include: "test_blime_watch_highest.html"} 
}],

["test_blime_box_lowest", "Form", { 
html: {include: "test_blime_box_lowest.html"} 
}],

["test_blime_store_distractor", "Form", { 
html: {include: "test_blime_store_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_follow_highest", "Form", { 
html: {include: "test_zant_follow_highest.html"} 
}],

["test_zant_come_lowest", "Form", { 
html: {include: "test_zant_come_lowest.html"} 
}],

["test_zant_turn_distractor", "Form", { 
html: {include: "test_zant_turn_distractor.html"} 
}],

["test_mipen_telephone_target", "Form", { 
html: {include: "test_mipen_telephone_target.html"} 
}],

["test_mipen_drink_highest", "Form", { 
html: {include: "test_mipen_drink_highest.html"} 
}],

["test_mipen_show_lowest", "Form", { 
html: {include: "test_mipen_show_lowest.html"} 
}],

["test_mipen_bag_distractor", "Form", { 
html: {include: "test_mipen_bag_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];