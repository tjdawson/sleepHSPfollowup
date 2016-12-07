var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_telpen_throw_highest","sep",
"test_telpen_buckle_lowest","sep",
"test_doon_eat_distractor","sep",
"test_zant_follow_highest","sep",
"test_zant_read_lowest","sep",
"test_tiz_wrong_lowest","sep",
"test_tace_hello_highest","sep",
"test_tace_no_lowest","sep",
"test_tiz_stair_highest","sep",
"test_geck_na_lowest","sep",
"test_bist_throw_distractor","sep",
"test_geck_nose_target","sep",
"test_bist_shake_lowest","sep",
"test_jair_eat_highest","sep",
"test_vash_stair_distractor","sep",
"test_tula_mommy_target","sep",
"test_tula_thirsty_distractor","sep",
"test_zant_last_distractor","sep",
"test_jair_inside_distractor","sep",
"test_blime_follow_distractor","sep",
"test_vash_elephant_lowest","sep",
"test_telpen_ball_target","sep",
"test_tula_come_highest","sep",
"test_vash_shoe_target","sep",
"test_mipen_military_distractor","sep",
"test_mipen_inside_highest","sep",
"test_tiz_thing_target","sep",
"test_blime_bag_lowest","sep",
"test_telpen_hello_distractor","sep",
"test_doon_sound_lowest","sep",
"test_geck_thirsty_highest","sep",
"test_tula_thirsty_lowest","sep",
"test_blime_stop_highest","sep",
"test_jair_na_lowest","sep",
"test_zant_book_target","sep",
"test_bist_come_highest","sep",
"test_blime_toy_target","sep",
"test_mipen_spoon_lowest","sep",
"test_jair_time_target","sep",
"test_vash_come_highest","sep",
"test_tace_stop_distractor","sep",
"test_doon_necklace_target","sep",
"test_mipen_telephone_target","sep",
"test_tace_phone_target","sep",
"test_bist_horse_target","sep",
"test_geck_share_distractor","sep",
"test_tiz_come_distractor","sep",
"test_doon_share_highest","outro1","sr","outro2"
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

["test_tula_come_highest", "Form", { 
html: {include: "test_tula_come_highest.html"} 
}],

["test_tula_thirsty_lowest", "Form", { 
html: {include: "test_tula_thirsty_lowest.html"} 
}],

["test_tula_thirsty_distractor", "Form", { 
html: {include: "test_tula_thirsty_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_come_highest", "Form", { 
html: {include: "test_vash_come_highest.html"} 
}],

["test_vash_elephant_lowest", "Form", { 
html: {include: "test_vash_elephant_lowest.html"} 
}],

["test_vash_stair_distractor", "Form", { 
html: {include: "test_vash_stair_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_thirsty_highest", "Form", { 
html: {include: "test_geck_thirsty_highest.html"} 
}],

["test_geck_na_lowest", "Form", { 
html: {include: "test_geck_na_lowest.html"} 
}],

["test_geck_share_distractor", "Form", { 
html: {include: "test_geck_share_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_stair_highest", "Form", { 
html: {include: "test_tiz_stair_highest.html"} 
}],

["test_tiz_wrong_lowest", "Form", { 
html: {include: "test_tiz_wrong_lowest.html"} 
}],

["test_tiz_come_distractor", "Form", { 
html: {include: "test_tiz_come_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_come_highest", "Form", { 
html: {include: "test_bist_come_highest.html"} 
}],

["test_bist_shake_lowest", "Form", { 
html: {include: "test_bist_shake_lowest.html"} 
}],

["test_bist_throw_distractor", "Form", { 
html: {include: "test_bist_throw_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_eat_highest", "Form", { 
html: {include: "test_jair_eat_highest.html"} 
}],

["test_jair_na_lowest", "Form", { 
html: {include: "test_jair_na_lowest.html"} 
}],

["test_jair_inside_distractor", "Form", { 
html: {include: "test_jair_inside_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_hello_highest", "Form", { 
html: {include: "test_tace_hello_highest.html"} 
}],

["test_tace_no_lowest", "Form", { 
html: {include: "test_tace_no_lowest.html"} 
}],

["test_tace_stop_distractor", "Form", { 
html: {include: "test_tace_stop_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_share_highest", "Form", { 
html: {include: "test_doon_share_highest.html"} 
}],

["test_doon_sound_lowest", "Form", { 
html: {include: "test_doon_sound_lowest.html"} 
}],

["test_doon_eat_distractor", "Form", { 
html: {include: "test_doon_eat_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_throw_highest", "Form", { 
html: {include: "test_telpen_throw_highest.html"} 
}],

["test_telpen_buckle_lowest", "Form", { 
html: {include: "test_telpen_buckle_lowest.html"} 
}],

["test_telpen_hello_distractor", "Form", { 
html: {include: "test_telpen_hello_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_stop_highest", "Form", { 
html: {include: "test_blime_stop_highest.html"} 
}],

["test_blime_bag_lowest", "Form", { 
html: {include: "test_blime_bag_lowest.html"} 
}],

["test_blime_follow_distractor", "Form", { 
html: {include: "test_blime_follow_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_follow_highest", "Form", { 
html: {include: "test_zant_follow_highest.html"} 
}],

["test_zant_read_lowest", "Form", { 
html: {include: "test_zant_read_lowest.html"} 
}],

["test_zant_last_distractor", "Form", { 
html: {include: "test_zant_last_distractor.html"} 
}],

["test_mipen_telephone_target", "Form", { 
html: {include: "test_mipen_telephone_target.html"} 
}],

["test_mipen_inside_highest", "Form", { 
html: {include: "test_mipen_inside_highest.html"} 
}],

["test_mipen_spoon_lowest", "Form", { 
html: {include: "test_mipen_spoon_lowest.html"} 
}],

["test_mipen_military_distractor", "Form", { 
html: {include: "test_mipen_military_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];