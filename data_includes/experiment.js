var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_zant_follow_highest","sep",
"test_tula_shiny_distractor","sep",
"test_vash_careful_lowest","sep",
"test_tiz_thing_target","sep",
"test_blime_much_distractor","sep",
"test_tiz_careful_lowest","sep",
"test_bist_come_lowest","sep",
"test_tiz_here_distractor","sep",
"test_tula_hello_highest","sep",
"test_geck_nose_target","sep",
"test_jair_no_lowest","sep",
"test_blime_toy_target","sep",
"test_vash_careful_distractor","sep",
"test_geck_clean_lowest","sep",
"test_doon_hello_distractor","sep",
"test_tace_phone_target","sep",
"test_doon_shiny_highest","sep",
"test_zant_book_target","sep",
"test_telpen_call_distractor","sep",
"test_vash_shoe_target","sep",
"test_tace_call_highest","sep",
"test_telpen_ball_target","sep",
"test_tula_mommy_target","sep",
"test_zant_finally_distractor","sep",
"test_jair_careful_highest","sep",
"test_tace_follow_distractor","sep",
"test_tiz_play_highest","sep",
"test_mipen_here_highest","sep",
"test_geck_face_highest","sep",
"test_telpen_good_lowest","sep",
"test_geck_stop_distractor","sep",
"test_mipen_bag_target","sep",
"test_zant_look_lowest","sep",
"test_doon_necklace_target","sep",
"test_doon_doll_lowest","sep",
"test_blime_sit_lowest","sep",
"test_vash_here_highest","sep",
"test_jair_play_distractor","sep",
"test_tace_food_lowest","sep",
"test_bist_face_distractor","sep",
"test_bist_careful_highest","sep",
"test_mipen_drink_lowest","sep",
"test_blime_stop_highest","sep",
"test_tula_give_lowest","sep",
"test_telpen_here_highest","sep",
"test_bist_horse_target","sep",
"test_jair_time_target","sep",
"test_mipen_himself_distractor","outro1","sr","outro2"
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

["test_tula_give_lowest", "Form", { 
html: {include: "test_tula_give_lowest.html"} 
}],

["test_tula_shiny_distractor", "Form", { 
html: {include: "test_tula_shiny_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_here_highest", "Form", { 
html: {include: "test_vash_here_highest.html"} 
}],

["test_vash_careful_lowest", "Form", { 
html: {include: "test_vash_careful_lowest.html"} 
}],

["test_vash_careful_distractor", "Form", { 
html: {include: "test_vash_careful_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_face_highest", "Form", { 
html: {include: "test_geck_face_highest.html"} 
}],

["test_geck_clean_lowest", "Form", { 
html: {include: "test_geck_clean_lowest.html"} 
}],

["test_geck_stop_distractor", "Form", { 
html: {include: "test_geck_stop_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_play_highest", "Form", { 
html: {include: "test_tiz_play_highest.html"} 
}],

["test_tiz_careful_lowest", "Form", { 
html: {include: "test_tiz_careful_lowest.html"} 
}],

["test_tiz_here_distractor", "Form", { 
html: {include: "test_tiz_here_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_careful_highest", "Form", { 
html: {include: "test_bist_careful_highest.html"} 
}],

["test_bist_come_lowest", "Form", { 
html: {include: "test_bist_come_lowest.html"} 
}],

["test_bist_face_distractor", "Form", { 
html: {include: "test_bist_face_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_careful_highest", "Form", { 
html: {include: "test_jair_careful_highest.html"} 
}],

["test_jair_no_lowest", "Form", { 
html: {include: "test_jair_no_lowest.html"} 
}],

["test_jair_play_distractor", "Form", { 
html: {include: "test_jair_play_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_call_highest", "Form", { 
html: {include: "test_tace_call_highest.html"} 
}],

["test_tace_food_lowest", "Form", { 
html: {include: "test_tace_food_lowest.html"} 
}],

["test_tace_follow_distractor", "Form", { 
html: {include: "test_tace_follow_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_shiny_highest", "Form", { 
html: {include: "test_doon_shiny_highest.html"} 
}],

["test_doon_doll_lowest", "Form", { 
html: {include: "test_doon_doll_lowest.html"} 
}],

["test_doon_hello_distractor", "Form", { 
html: {include: "test_doon_hello_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_here_highest", "Form", { 
html: {include: "test_telpen_here_highest.html"} 
}],

["test_telpen_good_lowest", "Form", { 
html: {include: "test_telpen_good_lowest.html"} 
}],

["test_telpen_call_distractor", "Form", { 
html: {include: "test_telpen_call_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_stop_highest", "Form", { 
html: {include: "test_blime_stop_highest.html"} 
}],

["test_blime_sit_lowest", "Form", { 
html: {include: "test_blime_sit_lowest.html"} 
}],

["test_blime_much_distractor", "Form", { 
html: {include: "test_blime_much_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_follow_highest", "Form", { 
html: {include: "test_zant_follow_highest.html"} 
}],

["test_zant_look_lowest", "Form", { 
html: {include: "test_zant_look_lowest.html"} 
}],

["test_zant_finally_distractor", "Form", { 
html: {include: "test_zant_finally_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_here_highest", "Form", { 
html: {include: "test_mipen_here_highest.html"} 
}],

["test_mipen_drink_lowest", "Form", { 
html: {include: "test_mipen_drink_lowest.html"} 
}],

["test_mipen_himself_distractor", "Form", { 
html: {include: "test_mipen_himself_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];