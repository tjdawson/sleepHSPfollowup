var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_geck_hello_distractor","sep",
"test_jair_stand_highest","sep",
"test_tula_toy_lowest","sep",
"test_tula_drink_highest","sep",
"test_bist_touch_lowest","sep",
"test_jair_knob_lowest","sep",
"test_tula_close_distractor","sep",
"test_tiz_thing_target","sep",
"test_mipen_necklace_highest","sep",
"test_zant_book_target","sep",
"test_bist_stand_distractor","sep",
"test_jair_come_distractor","sep",
"test_tace_bad_lowest","sep",
"test_tiz_here_lowest","sep",
"test_blime_toy_target","sep",
"test_doon_necklace_target","sep",
"test_tula_mommy_target","sep",
"test_vash_roll_distractor","sep",
"test_jair_time_target","sep",
"test_doon_necklace_distractor","sep",
"test_mipen_bag_target","sep",
"test_bist_horse_target","sep",
"test_tace_drink_distractor","sep",
"test_vash_fill_lowest","sep",
"test_zant_love_highest","sep",
"test_geck_daddy_highest","sep",
"test_tiz_love_distractor","sep",
"test_doon_dance_lowest","sep",
"test_telpen_ball_target","sep",
"test_geck_dad_lowest","sep",
"test_telpen_load_distractor","sep",
"test_blime_baby_distractor","sep",
"test_zant_dad_lowest_filler","sep",
"test_mipen_phone_lowest","sep",
"test_telpen_roll_highest","sep",
"test_zant_toy_distractor","sep",
"test_tace_phone_target","sep",
"test_tiz_toy_highest","sep",
"test_bist_come_highest","sep",
"test_tace_hello_highest","sep",
"test_geck_nose_target","sep",
"test_telpen_fetch_lowest","sep",
"test_blime_purse_lowest","sep",
"test_blime_close_highest","sep",
"test_vash_shoe_target","sep",
"test_doon_baby_highest","sep",
"test_mipen_daddy_distractor","sep",
"test_vash_load_highest","outro1","sr","outro2"
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

["test_tula_drink_highest", "Form", { 
html: {include: "test_tula_drink_highest.html"} 
}],

["test_tula_toy_lowest", "Form", { 
html: {include: "test_tula_toy_lowest.html"} 
}],

["test_tula_close_distractor", "Form", { 
html: {include: "test_tula_close_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_load_highest", "Form", { 
html: {include: "test_vash_load_highest.html"} 
}],

["test_vash_fill_lowest", "Form", { 
html: {include: "test_vash_fill_lowest.html"} 
}],

["test_vash_roll_distractor", "Form", { 
html: {include: "test_vash_roll_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_daddy_highest", "Form", { 
html: {include: "test_geck_daddy_highest.html"} 
}],

["test_geck_dad_lowest", "Form", { 
html: {include: "test_geck_dad_lowest.html"} 
}],

["test_geck_hello_distractor", "Form", { 
html: {include: "test_geck_hello_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_toy_highest", "Form", { 
html: {include: "test_tiz_toy_highest.html"} 
}],

["test_tiz_here_lowest", "Form", { 
html: {include: "test_tiz_here_lowest.html"} 
}],

["test_tiz_love_distractor", "Form", { 
html: {include: "test_tiz_love_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_come_highest", "Form", { 
html: {include: "test_bist_come_highest.html"} 
}],

["test_bist_touch_lowest", "Form", { 
html: {include: "test_bist_touch_lowest.html"} 
}],

["test_bist_stand_distractor", "Form", { 
html: {include: "test_bist_stand_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_stand_highest", "Form", { 
html: {include: "test_jair_stand_highest.html"} 
}],

["test_jair_knob_lowest", "Form", { 
html: {include: "test_jair_knob_lowest.html"} 
}],

["test_jair_come_distractor", "Form", { 
html: {include: "test_jair_come_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_hello_highest", "Form", { 
html: {include: "test_tace_hello_highest.html"} 
}],

["test_tace_bad_lowest", "Form", { 
html: {include: "test_tace_bad_lowest.html"} 
}],

["test_tace_drink_distractor", "Form", { 
html: {include: "test_tace_drink_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_baby_highest", "Form", { 
html: {include: "test_doon_baby_highest.html"} 
}],

["test_doon_dance_lowest", "Form", { 
html: {include: "test_doon_dance_lowest.html"} 
}],

["test_doon_necklace_distractor", "Form", { 
html: {include: "test_doon_necklace_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_roll_highest", "Form", { 
html: {include: "test_telpen_roll_highest.html"} 
}],

["test_telpen_fetch_lowest", "Form", { 
html: {include: "test_telpen_fetch_lowest.html"} 
}],

["test_telpen_load_distractor", "Form", { 
html: {include: "test_telpen_load_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_close_highest", "Form", { 
html: {include: "test_blime_close_highest.html"} 
}],

["test_blime_purse_lowest", "Form", { 
html: {include: "test_blime_purse_lowest.html"} 
}],

["test_blime_baby_distractor", "Form", { 
html: {include: "test_blime_baby_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_love_highest", "Form", { 
html: {include: "test_zant_love_highest.html"} 
}],

["test_zant_dad_lowest_filler", "Form", { 
html: {include: "test_zant_dad_lowest_filler.html"} 
}],

["test_zant_toy_distractor", "Form", { 
html: {include: "test_zant_toy_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_necklace_highest", "Form", { 
html: {include: "test_mipen_necklace_highest.html"} 
}],

["test_mipen_phone_lowest", "Form", { 
html: {include: "test_mipen_phone_lowest.html"} 
}],

["test_mipen_daddy_distractor", "Form", { 
html: {include: "test_mipen_daddy_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];