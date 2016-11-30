var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_geck_nose_target","sep",
"test_tula_push_distractor","sep",
"test_bist_come_highest","sep",
"test_doon_pretty_highest","sep",
"test_tace_dial_lowest","sep",
"test_jair_playing_lowest","sep",
"test_mipen_purse_highest","sep",
"test_mipen_bag_target","sep",
"test_vash_gift_lowest","sep",
"test_jair_closet_highest","sep",
"test_jair_time_target","sep",
"test_geck_dark_distractor","sep",
"test_geck_bite_highest","sep",
"test_bist_play_lowest","sep",
"test_blime_sit_lowest","sep",
"test_telpen_purse_lowest","sep",
"test_mipen_away_lowest","sep",
"test_zant_book_target","sep",
"test_bist_here_distractor","sep",
"test_zant_go_lowest","sep",
"test_tiz_fetch_distractor","sep",
"test_mipen_pretty_distractor","sep",
"test_jair_call_distractor","sep",
"test_tace_purse_distractor","sep",
"test_blime_closet_distractor","sep",
"test_tula_doll_highest","sep",
"test_geck_clean_lowest","sep",
"test_doon_baby_lowest","sep",
"test_vash_shoe_target","sep",
"test_telpen_ball_target","sep",
"test_doon_bite_distractor","sep",
"test_doon_necklace_target","sep",
"test_zant_dark_highest","sep",
"test_tiz_thing_target","sep",
"test_blime_toy_target","sep",
"test_tiz_bag_highest","sep",
"test_blime_push_highest","sep",
"test_telpen_fetch_highest","sep",
"test_tula_mommy_target","sep",
"test_tace_phone_target","sep",
"test_vash_here_highest","sep",
"test_vash_doll_distractor","sep",
"test_bist_horse_target","sep",
"test_tace_call_highest","sep",
"test_zant_come_distractor","sep",
"test_tiz_here_lowest","sep",
"test_telpen_bag_distractor","sep",
"test_tula_here_lowest","outro1","sr","outro2"
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

["test_tula_doll_highest", "Form", { 
html: {include: "test_tula_doll_highest.html"} 
}],

["test_tula_here_lowest", "Form", { 
html: {include: "test_tula_here_lowest.html"} 
}],

["test_tula_push_distractor", "Form", { 
html: {include: "test_tula_push_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_here_highest", "Form", { 
html: {include: "test_vash_here_highest.html"} 
}],

["test_vash_gift_lowest", "Form", { 
html: {include: "test_vash_gift_lowest.html"} 
}],

["test_vash_doll_distractor", "Form", { 
html: {include: "test_vash_doll_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_bite_highest", "Form", { 
html: {include: "test_geck_bite_highest.html"} 
}],

["test_geck_clean_lowest", "Form", { 
html: {include: "test_geck_clean_lowest.html"} 
}],

["test_geck_dark_distractor", "Form", { 
html: {include: "test_geck_dark_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_bag_highest", "Form", { 
html: {include: "test_tiz_bag_highest.html"} 
}],

["test_tiz_here_lowest", "Form", { 
html: {include: "test_tiz_here_lowest.html"} 
}],

["test_tiz_fetch_distractor", "Form", { 
html: {include: "test_tiz_fetch_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_come_highest", "Form", { 
html: {include: "test_bist_come_highest.html"} 
}],

["test_bist_play_lowest", "Form", { 
html: {include: "test_bist_play_lowest.html"} 
}],

["test_bist_here_distractor", "Form", { 
html: {include: "test_bist_here_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_closet_highest", "Form", { 
html: {include: "test_jair_closet_highest.html"} 
}],

["test_jair_playing_lowest", "Form", { 
html: {include: "test_jair_playing_lowest.html"} 
}],

["test_jair_call_distractor", "Form", { 
html: {include: "test_jair_call_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_call_highest", "Form", { 
html: {include: "test_tace_call_highest.html"} 
}],

["test_tace_dial_lowest", "Form", { 
html: {include: "test_tace_dial_lowest.html"} 
}],

["test_tace_purse_distractor", "Form", { 
html: {include: "test_tace_purse_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_pretty_highest", "Form", { 
html: {include: "test_doon_pretty_highest.html"} 
}],

["test_doon_baby_lowest", "Form", { 
html: {include: "test_doon_baby_lowest.html"} 
}],

["test_doon_bite_distractor", "Form", { 
html: {include: "test_doon_bite_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_fetch_highest", "Form", { 
html: {include: "test_telpen_fetch_highest.html"} 
}],

["test_telpen_purse_lowest", "Form", { 
html: {include: "test_telpen_purse_lowest.html"} 
}],

["test_telpen_bag_distractor", "Form", { 
html: {include: "test_telpen_bag_distractor.html"} 
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

["test_blime_closet_distractor", "Form", { 
html: {include: "test_blime_closet_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_dark_highest", "Form", { 
html: {include: "test_zant_dark_highest.html"} 
}],

["test_zant_go_lowest", "Form", { 
html: {include: "test_zant_go_lowest.html"} 
}],

["test_zant_come_distractor", "Form", { 
html: {include: "test_zant_come_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_purse_highest", "Form", { 
html: {include: "test_mipen_purse_highest.html"} 
}],

["test_mipen_away_lowest", "Form", { 
html: {include: "test_mipen_away_lowest.html"} 
}],

["test_mipen_pretty_distractor", "Form", { 
html: {include: "test_mipen_pretty_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];