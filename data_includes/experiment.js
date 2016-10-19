var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_geck_clean_lowest","sep",
"test_zant_read_highest","sep",
"test_telpen_vacuum_lowest","sep",
"test_bist_bounce_highest","sep",
"test_tula_phonecall_lowest","sep",
"test_jair_time_target","sep",
"test_vash_carry_highest","sep",
"test_mipen_clean_lowest","sep",
"test_tiz_hit_highest","sep",
"test_jair_push_distractor","sep",
"test_geck_wipe_highest","sep",
"test_doon_carry_distractor","sep",
"test_doon_friend_lowest","sep",
"test_blime_sit_lowest","sep",
"test_tace_phonecall_highest","sep",
"test_telpen_fetch_highest","sep",
"test_zant_hit_distractor","sep",
"test_blime_off_distractor","sep",
"test_tula_laundry_highest","sep",
"test_bist_play_lowest","sep",
"test_doon_necklace_target","sep",
"test_tace_call_lowest","sep",
"test_tula_wipe_distractor","sep",
"test_tiz_inside_distractor","sep",
"test_telpen_ball_target","sep",
"test_blime_toy_target","sep",
"test_mipen_read_distractor","sep",
"test_jair_leaf_lowest","sep",
"test_tace_phone_target","sep",
"test_zant_book_target","sep",
"test_zant_go_lowest","sep",
"test_mipen_bag_target","sep",
"test_blime_push_highest","sep",
"test_jair_off_highest","sep",
"test_vash_shoe_target","sep",
"test_telpen_phonecall_distractor","sep",
"test_geck_bounce_distractor","sep",
"test_mipen_inside_highest","sep",
"test_tiz_toy_lowest","sep",
"test_geck_nose_target","sep",
"test_vash_bear_lowest","sep",
"test_doon_happy_highest","sep",
"test_bist_horse_target","sep",
"test_tula_mommy_target","sep",
"test_tace_happy_distractor","sep",
"test_bist_fetch_distractor","sep",
"test_vash_laundry_distractor","sep",
"test_tiz_thing_target","outro1","sr","outro2"
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

["test_tula_laundry_highest", "Form", { 
html: {include: "test_tula_laundry_highest.html"} 
}],

["test_tula_phonecall_lowest", "Form", { 
html: {include: "test_tula_phonecall_lowest.html"} 
}],

["test_tula_wipe_distractor", "Form", { 
html: {include: "test_tula_wipe_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_carry_highest", "Form", { 
html: {include: "test_vash_carry_highest.html"} 
}],

["test_vash_bear_lowest", "Form", { 
html: {include: "test_vash_bear_lowest.html"} 
}],

["test_vash_laundry_distractor", "Form", { 
html: {include: "test_vash_laundry_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_wipe_highest", "Form", { 
html: {include: "test_geck_wipe_highest.html"} 
}],

["test_geck_clean_lowest", "Form", { 
html: {include: "test_geck_clean_lowest.html"} 
}],

["test_geck_bounce_distractor", "Form", { 
html: {include: "test_geck_bounce_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_hit_highest", "Form", { 
html: {include: "test_tiz_hit_highest.html"} 
}],

["test_tiz_toy_lowest", "Form", { 
html: {include: "test_tiz_toy_lowest.html"} 
}],

["test_tiz_inside_distractor", "Form", { 
html: {include: "test_tiz_inside_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_bounce_highest", "Form", { 
html: {include: "test_bist_bounce_highest.html"} 
}],

["test_bist_play_lowest", "Form", { 
html: {include: "test_bist_play_lowest.html"} 
}],

["test_bist_fetch_distractor", "Form", { 
html: {include: "test_bist_fetch_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_off_highest", "Form", { 
html: {include: "test_jair_off_highest.html"} 
}],

["test_jair_leaf_lowest", "Form", { 
html: {include: "test_jair_leaf_lowest.html"} 
}],

["test_jair_push_distractor", "Form", { 
html: {include: "test_jair_push_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_phonecall_highest", "Form", { 
html: {include: "test_tace_phonecall_highest.html"} 
}],

["test_tace_call_lowest", "Form", { 
html: {include: "test_tace_call_lowest.html"} 
}],

["test_tace_happy_distractor", "Form", { 
html: {include: "test_tace_happy_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_happy_highest", "Form", { 
html: {include: "test_doon_happy_highest.html"} 
}],

["test_doon_friend_lowest", "Form", { 
html: {include: "test_doon_friend_lowest.html"} 
}],

["test_doon_carry_distractor", "Form", { 
html: {include: "test_doon_carry_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_fetch_highest", "Form", { 
html: {include: "test_telpen_fetch_highest.html"} 
}],

["test_telpen_vacuum_lowest", "Form", { 
html: {include: "test_telpen_vacuum_lowest.html"} 
}],

["test_telpen_phonecall_distractor", "Form", { 
html: {include: "test_telpen_phonecall_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_push_highest", "Form", { 
html: {include: "test_blime_push_highest.html"} 
}],

["test_blime_sit_lowest", "Form", { 
html: {include: "test_blime_sit_lowest.html"} 
}],

["test_blime_off_distractor", "Form", { 
html: {include: "test_blime_off_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_read_highest", "Form", { 
html: {include: "test_zant_read_highest.html"} 
}],

["test_zant_go_lowest", "Form", { 
html: {include: "test_zant_go_lowest.html"} 
}],

["test_zant_hit_distractor", "Form", { 
html: {include: "test_zant_hit_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_inside_highest", "Form", { 
html: {include: "test_mipen_inside_highest.html"} 
}],

["test_mipen_clean_lowest", "Form", { 
html: {include: "test_mipen_clean_lowest.html"} 
}],

["test_mipen_read_distractor", "Form", { 
html: {include: "test_mipen_read_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];