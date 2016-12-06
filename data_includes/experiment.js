var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_tiz_vacum_distractor","sep",
"test_jair_pantry_highest","sep",
"test_geck_show_distractor","sep",
"test_mipen_bag_target","sep",
"test_doon_necklace_target","sep",
"test_tace_play_lowest","sep",
"test_geck_horse_highest","sep",
"test_jair_walk_distractor","sep",
"test_tula_laundry_lowest","sep",
"test_tiz_thing_target","sep",
"test_mipen_stop_highest","sep",
"test_blime_sit_lowest","sep",
"test_tula_toy_distractor","sep",
"test_geck_nose_target","sep",
"test_bist_where_lowest","sep",
"test_tula_mommy_target","sep",
"test_tace_phone_target","sep",
"test_doon_here_highest","sep",
"test_blime_toy_target","sep",
"test_vash_there_lowest","sep",
"test_zant_pantry_distractor","sep",
"test_bist_walk_highest","sep",
"test_zant_look_lowest","sep",
"test_mipen_necklace_lowest","sep",
"test_telpen_here_distractor","sep",
"test_telpen_throw_highest","sep",
"test_tace_trash_distractor","sep",
"test_tula_hello_highest","sep",
"test_mipen_horse_distractor","sep",
"test_geck_face_lowest","sep",
"test_doon_talk_distractor","sep",
"test_blime_vacum_highest","sep",
"test_bist_horse_target","sep",
"test_jair_time_target","sep",
"test_doon_swing_lowest","sep",
"test_blime_throw_distractor","sep",
"test_bist_hello_distractor","sep",
"test_vash_trash_highest","sep",
"test_telpen_stroler_lowest","sep",
"test_telpen_ball_target","sep",
"test_jair_still_lowest","sep",
"test_tace_talk_highest","sep",
"test_vash_shoe_target","sep",
"test_vash_stop_distractor","sep",
"test_zant_show_highest","sep",
"test_tiz_toy_highest","sep",
"test_zant_book_target","sep",
"test_tiz_bag_lowest","outro1","sr","outro2"
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

["test_tula_laundry_lowest", "Form", { 
html: {include: "test_tula_laundry_lowest.html"} 
}],

["test_tula_toy_distractor", "Form", { 
html: {include: "test_tula_toy_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_trash_highest", "Form", { 
html: {include: "test_vash_trash_highest.html"} 
}],

["test_vash_there_lowest", "Form", { 
html: {include: "test_vash_there_lowest.html"} 
}],

["test_vash_stop_distractor", "Form", { 
html: {include: "test_vash_stop_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_horse_highest", "Form", { 
html: {include: "test_geck_horse_highest.html"} 
}],

["test_geck_face_lowest", "Form", { 
html: {include: "test_geck_face_lowest.html"} 
}],

["test_geck_show_distractor", "Form", { 
html: {include: "test_geck_show_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_toy_highest", "Form", { 
html: {include: "test_tiz_toy_highest.html"} 
}],

["test_tiz_bag_lowest", "Form", { 
html: {include: "test_tiz_bag_lowest.html"} 
}],

["test_tiz_vacum_distractor", "Form", { 
html: {include: "test_tiz_vacum_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_walk_highest", "Form", { 
html: {include: "test_bist_walk_highest.html"} 
}],

["test_bist_where_lowest", "Form", { 
html: {include: "test_bist_where_lowest.html"} 
}],

["test_bist_hello_distractor", "Form", { 
html: {include: "test_bist_hello_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_pantry_highest", "Form", { 
html: {include: "test_jair_pantry_highest.html"} 
}],

["test_jair_still_lowest", "Form", { 
html: {include: "test_jair_still_lowest.html"} 
}],

["test_jair_walk_distractor", "Form", { 
html: {include: "test_jair_walk_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_talk_highest", "Form", { 
html: {include: "test_tace_talk_highest.html"} 
}],

["test_tace_play_lowest", "Form", { 
html: {include: "test_tace_play_lowest.html"} 
}],

["test_tace_trash_distractor", "Form", { 
html: {include: "test_tace_trash_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_here_highest", "Form", { 
html: {include: "test_doon_here_highest.html"} 
}],

["test_doon_swing_lowest", "Form", { 
html: {include: "test_doon_swing_lowest.html"} 
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

["test_telpen_stroler_lowest", "Form", { 
html: {include: "test_telpen_stroler_lowest.html"} 
}],

["test_telpen_here_distractor", "Form", { 
html: {include: "test_telpen_here_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_vacum_highest", "Form", { 
html: {include: "test_blime_vacum_highest.html"} 
}],

["test_blime_sit_lowest", "Form", { 
html: {include: "test_blime_sit_lowest.html"} 
}],

["test_blime_throw_distractor", "Form", { 
html: {include: "test_blime_throw_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_show_highest", "Form", { 
html: {include: "test_zant_show_highest.html"} 
}],

["test_zant_look_lowest", "Form", { 
html: {include: "test_zant_look_lowest.html"} 
}],

["test_zant_pantry_distractor", "Form", { 
html: {include: "test_zant_pantry_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_stop_highest", "Form", { 
html: {include: "test_mipen_stop_highest.html"} 
}],

["test_mipen_necklace_lowest", "Form", { 
html: {include: "test_mipen_necklace_lowest.html"} 
}],

["test_mipen_horse_distractor", "Form", { 
html: {include: "test_mipen_horse_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];