var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_jair_go_highest","sep",
"test_zant_come_highest","sep",
"test_jair_the_distractor","sep",
"test_blime_oops_lowest","sep",
"test_zant_party_distractor","sep",
"test_tiz_thing_target","sep",
"test_telpen_play_lowest","sep",
"test_bist_it_distractor","sep",
"test_tiz_it_highest","sep",
"test_tula_me_lowest","sep",
"test_blime_toy_target","sep",
"test_tace_hello_highest","sep",
"test_blime_close_highest","sep",
"test_telpen_nice_distractor","sep",
"test_mipen_work_distractor","sep",
"test_tula_here_highest","sep",
"test_mipen_bag_target","sep",
"test_tiz_yeah_lowest","sep",
"test_tace_phone_target","sep",
"test_bist_horse_target","sep",
"test_mipen_get_highest","sep",
"test_tace_you_lowest","sep",
"test_doon_hello_distractor","sep",
"test_telpen_ball_target","sep",
"test_tace_get_distractor","sep",
"test_jair_fall_lowest","sep",
"test_geck_nice_highest","sep",
"test_geck_nose_target","sep",
"test_geck_let_lowest","sep",
"test_blime_here_distractor","sep",
"test_tula_close_distractor","sep",
"test_tula_mommy_target","sep",
"test_tiz_go_distractor","sep",
"test_vash_bear_lowest","sep",
"test_vash_come_distractor","sep",
"test_zant_book_target","sep",
"test_bist_come_highest","sep",
"test_bist_look_lowest","sep",
"test_geck_put_distractor","sep",
"test_doon_go_highest","sep",
"test_zant_thank_lowest","sep",
"test_doon_necklace_target","sep",
"test_vash_shoe_target","sep",
"test_telpen_the_highest","sep",
"test_vash_put_highest","sep",
"test_doon_baby_lowest","sep",
"test_jair_time_target","sep",
"test_mipen_phone_lowest","outro1","sr","outro2"
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

["test_tula_close_distractor", "Form", { 
html: {include: "test_tula_close_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_put_highest", "Form", { 
html: {include: "test_vash_put_highest.html"} 
}],

["test_vash_bear_lowest", "Form", { 
html: {include: "test_vash_bear_lowest.html"} 
}],

["test_vash_come_distractor", "Form", { 
html: {include: "test_vash_come_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_nice_highest", "Form", { 
html: {include: "test_geck_nice_highest.html"} 
}],

["test_geck_let_lowest", "Form", { 
html: {include: "test_geck_let_lowest.html"} 
}],

["test_geck_put_distractor", "Form", { 
html: {include: "test_geck_put_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_it_highest", "Form", { 
html: {include: "test_tiz_it_highest.html"} 
}],

["test_tiz_yeah_lowest", "Form", { 
html: {include: "test_tiz_yeah_lowest.html"} 
}],

["test_tiz_go_distractor", "Form", { 
html: {include: "test_tiz_go_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_come_highest", "Form", { 
html: {include: "test_bist_come_highest.html"} 
}],

["test_bist_look_lowest", "Form", { 
html: {include: "test_bist_look_lowest.html"} 
}],

["test_bist_it_distractor", "Form", { 
html: {include: "test_bist_it_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_go_highest", "Form", { 
html: {include: "test_jair_go_highest.html"} 
}],

["test_jair_fall_lowest", "Form", { 
html: {include: "test_jair_fall_lowest.html"} 
}],

["test_jair_the_distractor", "Form", { 
html: {include: "test_jair_the_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_hello_highest", "Form", { 
html: {include: "test_tace_hello_highest.html"} 
}],

["test_tace_you_lowest", "Form", { 
html: {include: "test_tace_you_lowest.html"} 
}],

["test_tace_get_distractor", "Form", { 
html: {include: "test_tace_get_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_go_highest", "Form", { 
html: {include: "test_doon_go_highest.html"} 
}],

["test_doon_baby_lowest", "Form", { 
html: {include: "test_doon_baby_lowest.html"} 
}],

["test_doon_hello_distractor", "Form", { 
html: {include: "test_doon_hello_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_the_highest", "Form", { 
html: {include: "test_telpen_the_highest.html"} 
}],

["test_telpen_play_lowest", "Form", { 
html: {include: "test_telpen_play_lowest.html"} 
}],

["test_telpen_nice_distractor", "Form", { 
html: {include: "test_telpen_nice_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_close_highest", "Form", { 
html: {include: "test_blime_close_highest.html"} 
}],

["test_blime_oops_lowest", "Form", { 
html: {include: "test_blime_oops_lowest.html"} 
}],

["test_blime_here_distractor", "Form", { 
html: {include: "test_blime_here_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_come_highest", "Form", { 
html: {include: "test_zant_come_highest.html"} 
}],

["test_zant_thank_lowest", "Form", { 
html: {include: "test_zant_thank_lowest.html"} 
}],

["test_zant_party_distractor", "Form", { 
html: {include: "test_zant_party_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_get_highest", "Form", { 
html: {include: "test_mipen_get_highest.html"} 
}],

["test_mipen_phone_lowest", "Form", { 
html: {include: "test_mipen_phone_lowest.html"} 
}],

["test_mipen_work_distractor", "Form", { 
html: {include: "test_mipen_work_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];