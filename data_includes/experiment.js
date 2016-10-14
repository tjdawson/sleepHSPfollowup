var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_telpen_ball_target","sep",
"test_doon_necklace_target","sep",
"test_vash_shoe_target","sep",
"test_bist_inside_distractor","sep",
"test_tace_c'mon_distractor","sep",
"test_tula_hello_lowest","sep",
"test_blime_toy_target","sep",
"test_tula_here_distractor","sep",
"test_tace_look_highest","sep",
"test_bist_horse_target","sep",
"test_bist_gentle_highest","sep",
"test_tula_mommy_target","sep",
"test_mipen_c'mon_lowest","sep",
"test_geck_nose_target","sep",
"test_tace_bag_lowest","sep",
"test_tace_phone_target","sep",
"test_zant_here_highest","sep",
"test_doon_doll_lowest","sep",
"test_telpen_careful_lowest","sep",
"test_blime_fall_highest","sep",
"test_vash_bag_highest","sep",
"test_zant_go_lowest","sep",
"test_mipen_inside_highest","sep",
"test_doon_careful_highest","sep",
"test_jair_gentle_distractor","sep",
"test_blime_careful_distractor","sep",
"test_tiz_play_lowest","sep",
"test_geck_wipe_lowest","sep",
"test_telpen_bag_distractor","sep",
"test_jair_off_lowest","sep",
"test_zant_look_distractor","sep",
"test_tiz_what_highest","sep",
"test_blime_doll_lowest","sep",
"test_mipen_what_distractor","sep",
"test_vash_football_distractor","sep",
"test_jair_time_target","sep",
"test_doon_fall_distractor","sep",
"test_tula_come_highest","sep",
"test_zant_book_target","sep",
"test_tiz_thing_target","sep",
"test_mipen_bag_target","sep",
"test_geck_c'mon_highest","sep",
"test_telpen_football_highest","sep",
"test_jair_whoop_highest","sep",
"test_tiz_whoop_distractor","sep",
"test_bist_walk_lowest","sep",
"test_geck_come_distractor","sep",
"test_vash_inside_lowest","outro1","sr","outro2"
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

["test_tula_hello_lowest", "Form", { 
html: {include: "test_tula_hello_lowest.html"} 
}],

["test_tula_here_distractor", "Form", { 
html: {include: "test_tula_here_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_bag_highest", "Form", { 
html: {include: "test_vash_bag_highest.html"} 
}],

["test_vash_inside_lowest", "Form", { 
html: {include: "test_vash_inside_lowest.html"} 
}],

["test_vash_football_distractor", "Form", { 
html: {include: "test_vash_football_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_c'mon_highest", "Form", { 
html: {include: "test_geck_c'mon_highest.html"} 
}],

["test_geck_wipe_lowest", "Form", { 
html: {include: "test_geck_wipe_lowest.html"} 
}],

["test_geck_come_distractor", "Form", { 
html: {include: "test_geck_come_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_what_highest", "Form", { 
html: {include: "test_tiz_what_highest.html"} 
}],

["test_tiz_play_lowest", "Form", { 
html: {include: "test_tiz_play_lowest.html"} 
}],

["test_tiz_whoop_distractor", "Form", { 
html: {include: "test_tiz_whoop_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_gentle_highest", "Form", { 
html: {include: "test_bist_gentle_highest.html"} 
}],

["test_bist_walk_lowest", "Form", { 
html: {include: "test_bist_walk_lowest.html"} 
}],

["test_bist_inside_distractor", "Form", { 
html: {include: "test_bist_inside_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_whoop_highest", "Form", { 
html: {include: "test_jair_whoop_highest.html"} 
}],

["test_jair_off_lowest", "Form", { 
html: {include: "test_jair_off_lowest.html"} 
}],

["test_jair_gentle_distractor", "Form", { 
html: {include: "test_jair_gentle_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_look_highest", "Form", { 
html: {include: "test_tace_look_highest.html"} 
}],

["test_tace_bag_lowest", "Form", { 
html: {include: "test_tace_bag_lowest.html"} 
}],

["test_tace_c'mon_distractor", "Form", { 
html: {include: "test_tace_c'mon_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_careful_highest", "Form", { 
html: {include: "test_doon_careful_highest.html"} 
}],

["test_doon_doll_lowest", "Form", { 
html: {include: "test_doon_doll_lowest.html"} 
}],

["test_doon_fall_distractor", "Form", { 
html: {include: "test_doon_fall_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_football_highest", "Form", { 
html: {include: "test_telpen_football_highest.html"} 
}],

["test_telpen_careful_lowest", "Form", { 
html: {include: "test_telpen_careful_lowest.html"} 
}],

["test_telpen_bag_distractor", "Form", { 
html: {include: "test_telpen_bag_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_fall_highest", "Form", { 
html: {include: "test_blime_fall_highest.html"} 
}],

["test_blime_doll_lowest", "Form", { 
html: {include: "test_blime_doll_lowest.html"} 
}],

["test_blime_careful_distractor", "Form", { 
html: {include: "test_blime_careful_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_here_highest", "Form", { 
html: {include: "test_zant_here_highest.html"} 
}],

["test_zant_go_lowest", "Form", { 
html: {include: "test_zant_go_lowest.html"} 
}],

["test_zant_look_distractor", "Form", { 
html: {include: "test_zant_look_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_inside_highest", "Form", { 
html: {include: "test_mipen_inside_highest.html"} 
}],

["test_mipen_c'mon_lowest", "Form", { 
html: {include: "test_mipen_c'mon_lowest.html"} 
}],

["test_mipen_what_distractor", "Form", { 
html: {include: "test_mipen_what_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];