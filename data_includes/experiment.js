var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_zant_here_highest","sep",
"test_blime_toy_target","sep",
"test_tiz_clean_distractor","sep",
"test_tula_mommy_target","sep",
"test_mipen_bag_target","sep",
"test_tace_fell_distractor","sep",
"test_tiz_bang_highest","sep",
"test_bist_baby_lowest","sep",
"test_zant_book_target","sep",
"test_doon_oops_distractor","sep",
"test_tiz_thing_target","sep",
"test_bist_hello_distractor","sep",
"test_tula_hello_highest","sep",
"test_tula_look_lowest","sep",
"test_geck_nose_target","sep",
"test_geck_enough_lowest","sep",
"test_telpen_go_distractor","sep",
"test_tiz_boom_lowest","sep",
"test_tace_phone_target","sep",
"test_geck_clean_highest","sep",
"test_doon_look_highest","sep",
"test_vash_shoe_target","sep",
"test_jair_time_target","sep",
"test_blime_push_lowest","sep",
"test_zant_come_lowest","sep",
"test_mipen_achieve_distractor","sep",
"test_geck_wait_distractor","sep",
"test_mipen_inside_highest","sep",
"test_jair_bang_distractor","sep",
"test_tace_here_lowest","sep",
"test_vash_wait_highest","sep",
"test_doon_necklace_target","sep",
"test_mipen_swinging_lowest","sep",
"test_bist_horse_target","sep",
"test_vash_here_distractor","sep",
"test_bist_go_highest","sep",
"test_telpen_ball_target","sep",
"test_tula_look_distractor","sep",
"test_vash_woah_lowest","sep",
"test_blime_oops_highest","sep",
"test_blime_inside_distractor","sep",
"test_jair_fell_highest","sep",
"test_tace_hello_highest","sep",
"test_telpen_what_lowest","sep",
"test_doon_baby_lowest","sep",
"test_zant_although_distractor","sep",
"test_telpen_look_highest","sep",
"test_jair_oops_lowest","outro1","sr","outro2"
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

["test_tula_hello_highest", "Form", { 
html: {include: "test_tula_hello_highest.html"} 
}],

["test_tula_look_lowest", "Form", { 
html: {include: "test_tula_look_lowest.html"} 
}],

["test_tula_look_distractor", "Form", { 
html: {include: "test_tula_look_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_wait_highest", "Form", { 
html: {include: "test_vash_wait_highest.html"} 
}],

["test_vash_woah_lowest", "Form", { 
html: {include: "test_vash_woah_lowest.html"} 
}],

["test_vash_here_distractor", "Form", { 
html: {include: "test_vash_here_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_clean_highest", "Form", { 
html: {include: "test_geck_clean_highest.html"} 
}],

["test_geck_enough_lowest", "Form", { 
html: {include: "test_geck_enough_lowest.html"} 
}],

["test_geck_wait_distractor", "Form", { 
html: {include: "test_geck_wait_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_bang_highest", "Form", { 
html: {include: "test_tiz_bang_highest.html"} 
}],

["test_tiz_boom_lowest", "Form", { 
html: {include: "test_tiz_boom_lowest.html"} 
}],

["test_tiz_clean_distractor", "Form", { 
html: {include: "test_tiz_clean_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_go_highest", "Form", { 
html: {include: "test_bist_go_highest.html"} 
}],

["test_bist_baby_lowest", "Form", { 
html: {include: "test_bist_baby_lowest.html"} 
}],

["test_bist_hello_distractor", "Form", { 
html: {include: "test_bist_hello_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_fell_highest", "Form", { 
html: {include: "test_jair_fell_highest.html"} 
}],

["test_jair_oops_lowest", "Form", { 
html: {include: "test_jair_oops_lowest.html"} 
}],

["test_jair_bang_distractor", "Form", { 
html: {include: "test_jair_bang_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_hello_highest", "Form", { 
html: {include: "test_tace_hello_highest.html"} 
}],

["test_tace_here_lowest", "Form", { 
html: {include: "test_tace_here_lowest.html"} 
}],

["test_tace_fell_distractor", "Form", { 
html: {include: "test_tace_fell_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_look_highest", "Form", { 
html: {include: "test_doon_look_highest.html"} 
}],

["test_doon_baby_lowest", "Form", { 
html: {include: "test_doon_baby_lowest.html"} 
}],

["test_doon_oops_distractor", "Form", { 
html: {include: "test_doon_oops_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_look_highest", "Form", { 
html: {include: "test_telpen_look_highest.html"} 
}],

["test_telpen_what_lowest", "Form", { 
html: {include: "test_telpen_what_lowest.html"} 
}],

["test_telpen_go_distractor", "Form", { 
html: {include: "test_telpen_go_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_oops_highest", "Form", { 
html: {include: "test_blime_oops_highest.html"} 
}],

["test_blime_push_lowest", "Form", { 
html: {include: "test_blime_push_lowest.html"} 
}],

["test_blime_inside_distractor", "Form", { 
html: {include: "test_blime_inside_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_here_highest", "Form", { 
html: {include: "test_zant_here_highest.html"} 
}],

["test_zant_come_lowest", "Form", { 
html: {include: "test_zant_come_lowest.html"} 
}],

["test_zant_although_distractor", "Form", { 
html: {include: "test_zant_although_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_inside_highest", "Form", { 
html: {include: "test_mipen_inside_highest.html"} 
}],

["test_mipen_swinging_lowest", "Form", { 
html: {include: "test_mipen_swinging_lowest.html"} 
}],

["test_mipen_achieve_distractor", "Form", { 
html: {include: "test_mipen_achieve_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];