var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_blime_head_distractor","sep",
"test_tula_na_lowest","sep",
"test_blime_toy_target","sep",
"test_jair_na_lowest","sep",
"test_blime_watch_highest","sep",
"test_mipen_trash_highest","sep",
"test_blime_na_lowest","sep",
"test_bist_careful_highest","sep",
"test_tiz_noise_highest","sep",
"test_tiz_hurt_distractor","sep",
"test_telpen_throw_highest","sep",
"test_telpen_na_lowest","sep",
"test_doon_necklace_target","sep",
"test_tiz_na_lowest","sep",
"test_jair_careful_distractor","sep",
"test_telpen_ball_target","sep",
"test_vash_shoe_target","sep",
"test_bist_na_lowest","sep",
"test_geck_watch_distractor","sep",
"test_tula_mommy_target","sep",
"test_tace_talk_highest","sep",
"test_bist_horse_target","sep",
"test_doon_talk_distractor","sep",
"test_bist_horse_distractor","sep",
"test_mipen_commission_distractor","sep",
"test_jair_time_target","sep",
"test_tiz_thing_target","sep",
"test_doon_na_lowest","sep",
"test_tace_phone_target","sep",
"test_tace_small_distractor","sep",
"test_tace_na_lowest","sep",
"test_vash_na_lowest","sep",
"test_geck_na_lowest","sep",
"test_tula_call_highest","sep",
"test_tula_in_distractor","sep",
"test_vash_in_highest","sep",
"test_zant_small_highest","sep",
"test_doon_head_highest","sep",
"test_geck_nose_target","sep",
"test_zant_book_target","sep",
"test_zant_na_lowest","sep",
"test_mipen_na_lowest","sep",
"test_geck_horse_highest","sep",
"test_jair_hurt_highest","sep",
"test_mipen_bag_target","sep",
"test_zant_throw_distractor","sep",
"test_telpen_call_distractor","sep",
"test_vash_noise_distractor","outro1","sr","outro2"
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

["test_tula_call_highest", "Form", { 
html: {include: "test_tula_call_highest.html"} 
}],

["test_tula_na_lowest", "Form", { 
html: {include: "test_tula_na_lowest.html"} 
}],

["test_tula_in_distractor", "Form", { 
html: {include: "test_tula_in_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_in_highest", "Form", { 
html: {include: "test_vash_in_highest.html"} 
}],

["test_vash_na_lowest", "Form", { 
html: {include: "test_vash_na_lowest.html"} 
}],

["test_vash_noise_distractor", "Form", { 
html: {include: "test_vash_noise_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_horse_highest", "Form", { 
html: {include: "test_geck_horse_highest.html"} 
}],

["test_geck_na_lowest", "Form", { 
html: {include: "test_geck_na_lowest.html"} 
}],

["test_geck_watch_distractor", "Form", { 
html: {include: "test_geck_watch_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_noise_highest", "Form", { 
html: {include: "test_tiz_noise_highest.html"} 
}],

["test_tiz_na_lowest", "Form", { 
html: {include: "test_tiz_na_lowest.html"} 
}],

["test_tiz_hurt_distractor", "Form", { 
html: {include: "test_tiz_hurt_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_careful_highest", "Form", { 
html: {include: "test_bist_careful_highest.html"} 
}],

["test_bist_na_lowest", "Form", { 
html: {include: "test_bist_na_lowest.html"} 
}],

["test_bist_horse_distractor", "Form", { 
html: {include: "test_bist_horse_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_hurt_highest", "Form", { 
html: {include: "test_jair_hurt_highest.html"} 
}],

["test_jair_na_lowest", "Form", { 
html: {include: "test_jair_na_lowest.html"} 
}],

["test_jair_careful_distractor", "Form", { 
html: {include: "test_jair_careful_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_talk_highest", "Form", { 
html: {include: "test_tace_talk_highest.html"} 
}],

["test_tace_na_lowest", "Form", { 
html: {include: "test_tace_na_lowest.html"} 
}],

["test_tace_small_distractor", "Form", { 
html: {include: "test_tace_small_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_head_highest", "Form", { 
html: {include: "test_doon_head_highest.html"} 
}],

["test_doon_na_lowest", "Form", { 
html: {include: "test_doon_na_lowest.html"} 
}],

["test_doon_talk_distractor", "Form", { 
html: {include: "test_doon_talk_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_throw_highest", "Form", { 
html: {include: "test_telpen_throw_highest.html"} 
}],

["test_telpen_na_lowest", "Form", { 
html: {include: "test_telpen_na_lowest.html"} 
}],

["test_telpen_call_distractor", "Form", { 
html: {include: "test_telpen_call_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_watch_highest", "Form", { 
html: {include: "test_blime_watch_highest.html"} 
}],

["test_blime_na_lowest", "Form", { 
html: {include: "test_blime_na_lowest.html"} 
}],

["test_blime_head_distractor", "Form", { 
html: {include: "test_blime_head_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_small_highest", "Form", { 
html: {include: "test_zant_small_highest.html"} 
}],

["test_zant_na_lowest", "Form", { 
html: {include: "test_zant_na_lowest.html"} 
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

["test_mipen_na_lowest", "Form", { 
html: {include: "test_mipen_na_lowest.html"} 
}],

["test_mipen_commission_distractor", "Form", { 
html: {include: "test_mipen_commission_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];