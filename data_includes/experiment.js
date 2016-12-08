var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_tula_careful_distractor","sep",
"test_tace_help_distractor","sep",
"test_doon_want_lowest","sep",
"test_doon_themselves_distractor","sep",
"test_doon_necklace_target","sep",
"test_tula_mommy_target","sep",
"test_vash_what_highest","sep",
"test_tula_give_lowest","sep",
"test_telpen_ball_target","sep",
"test_jair_here_highest","sep",
"test_mipen_church_distractor","sep",
"test_tace_want_lowest","sep",
"test_tace_stop_highest","sep",
"test_doon_help_highest","sep",
"test_tiz_thing_target","sep",
"test_bist_go_lowest","sep",
"test_zant_here_highest","sep",
"test_bist_here_distractor","sep",
"test_blime_look_lowest","sep",
"test_tula_here_highest","sep",
"test_tace_phone_target","sep",
"test_zant_want_lowest","sep",
"test_geck_face_lowest","sep",
"test_zant_off_distractor","sep",
"test_jair_want_lowest","sep",
"test_jair_time_target","sep",
"test_bist_careful_highest","sep",
"test_vash_look_distractor","sep",
"test_tiz_what_distractor","sep",
"test_telpen_look_highest","sep",
"test_tiz_play_lowest","sep",
"test_blime_look_highest","sep",
"test_tiz_where_highest","sep",
"test_blime_toy_target","sep",
"test_zant_book_target","sep",
"test_telpen_red_distractor","sep",
"test_bist_horse_target","sep",
"test_mipen_what_highest","sep",
"test_blime_so_distractor","sep",
"test_telpen_what_lowest","sep",
"test_geck_what_highest","sep",
"test_mipen_bag_target","sep",
"test_vash_have_lowest","sep",
"test_geck_where_distractor","sep",
"test_mipen_here_lowest","sep",
"test_geck_nose_target","sep",
"test_vash_shoe_target","sep",
"test_jair_stop_distractor","outro1","sr","outro2"
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

["test_tula_give_lowest", "Form", { 
html: {include: "test_tula_give_lowest.html"} 
}],

["test_tula_careful_distractor", "Form", { 
html: {include: "test_tula_careful_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_what_highest", "Form", { 
html: {include: "test_vash_what_highest.html"} 
}],

["test_vash_have_lowest", "Form", { 
html: {include: "test_vash_have_lowest.html"} 
}],

["test_vash_look_distractor", "Form", { 
html: {include: "test_vash_look_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_what_highest", "Form", { 
html: {include: "test_geck_what_highest.html"} 
}],

["test_geck_face_lowest", "Form", { 
html: {include: "test_geck_face_lowest.html"} 
}],

["test_geck_where_distractor", "Form", { 
html: {include: "test_geck_where_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_where_highest", "Form", { 
html: {include: "test_tiz_where_highest.html"} 
}],

["test_tiz_play_lowest", "Form", { 
html: {include: "test_tiz_play_lowest.html"} 
}],

["test_tiz_what_distractor", "Form", { 
html: {include: "test_tiz_what_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_careful_highest", "Form", { 
html: {include: "test_bist_careful_highest.html"} 
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

["test_jair_here_highest", "Form", { 
html: {include: "test_jair_here_highest.html"} 
}],

["test_jair_want_lowest", "Form", { 
html: {include: "test_jair_want_lowest.html"} 
}],

["test_jair_stop_distractor", "Form", { 
html: {include: "test_jair_stop_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_stop_highest", "Form", { 
html: {include: "test_tace_stop_highest.html"} 
}],

["test_tace_want_lowest", "Form", { 
html: {include: "test_tace_want_lowest.html"} 
}],

["test_tace_help_distractor", "Form", { 
html: {include: "test_tace_help_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_help_highest", "Form", { 
html: {include: "test_doon_help_highest.html"} 
}],

["test_doon_want_lowest", "Form", { 
html: {include: "test_doon_want_lowest.html"} 
}],

["test_doon_themselves_distractor", "Form", { 
html: {include: "test_doon_themselves_distractor.html"} 
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

["test_telpen_red_distractor", "Form", { 
html: {include: "test_telpen_red_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_look_highest", "Form", { 
html: {include: "test_blime_look_highest.html"} 
}],

["test_blime_look_lowest", "Form", { 
html: {include: "test_blime_look_lowest.html"} 
}],

["test_blime_so_distractor", "Form", { 
html: {include: "test_blime_so_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_here_highest", "Form", { 
html: {include: "test_zant_here_highest.html"} 
}],

["test_zant_want_lowest", "Form", { 
html: {include: "test_zant_want_lowest.html"} 
}],

["test_zant_off_distractor", "Form", { 
html: {include: "test_zant_off_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_what_highest", "Form", { 
html: {include: "test_mipen_what_highest.html"} 
}],

["test_mipen_here_lowest", "Form", { 
html: {include: "test_mipen_here_lowest.html"} 
}],

["test_mipen_church_distractor", "Form", { 
html: {include: "test_mipen_church_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];