var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_tace_take_lowest","sep",
"test_tace_phone_target","sep",
"test_tiz_music_distractor","sep",
"test_vash_shoe_target","sep",
"test_zant_look_highest","sep",
"test_jair_eat_highest","sep",
"test_geck_nose_target","sep",
"test_bist_oops_distractor","sep",
"test_telpen_throw_highest","sep",
"test_jair_time_target","sep",
"test_doon_eat_distractor","sep",
"test_blime_oops_highest","sep",
"test_telpen_look_distractor","sep",
"test_tula_come_highest","sep",
"test_telpen_ball_target","sep",
"test_vash_nah_lowest","sep",
"test_doon_music_highest","sep",
"test_doon_like_lowest","sep",
"test_blime_toy_target","sep",
"test_blime_neck_lowest","sep",
"test_tiz_crawl_lowest","sep",
"test_tiz_thing_target","sep",
"test_tula_mommy_target","sep",
"test_bist_watch_lowest","sep",
"test_mipen_bag_target","sep",
"test_blime_done_distractor","sep",
"test_tula_necklace_distractor","sep",
"test_zant_book_target","sep",
"test_bist_done_highest","sep",
"test_mipen_carry_lowest","sep",
"test_tace_call_highest","sep",
"test_zant_no_lowest","sep",
"test_tiz_look_highest","sep",
"test_geck_throw_distractor","sep",
"test_vash_look_highest","sep",
"test_jair_play_lowest","sep",
"test_geck_horse_highest","sep",
"test_jair_call_distractor","sep",
"test_tace_horse_distractor","sep",
"test_geck_cute_lowest","sep",
"test_telpen_spin_lowest","sep",
"test_tula_clothes_lowest","sep",
"test_mipen_necklace_highest","sep",
"test_mipen_student_distractor","sep",
"test_bist_horse_target","sep",
"test_doon_necklace_target","sep",
"test_zant_draw_distractor","sep",
"test_vash_come_distractor","outro1","sr","outro2"
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

["test_tula_clothes_lowest", "Form", { 
html: {include: "test_tula_clothes_lowest.html"} 
}],

["test_tula_necklace_distractor", "Form", { 
html: {include: "test_tula_necklace_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_look_highest", "Form", { 
html: {include: "test_vash_look_highest.html"} 
}],

["test_vash_nah_lowest", "Form", { 
html: {include: "test_vash_nah_lowest.html"} 
}],

["test_vash_come_distractor", "Form", { 
html: {include: "test_vash_come_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_horse_highest", "Form", { 
html: {include: "test_geck_horse_highest.html"} 
}],

["test_geck_cute_lowest", "Form", { 
html: {include: "test_geck_cute_lowest.html"} 
}],

["test_geck_throw_distractor", "Form", { 
html: {include: "test_geck_throw_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_look_highest", "Form", { 
html: {include: "test_tiz_look_highest.html"} 
}],

["test_tiz_crawl_lowest", "Form", { 
html: {include: "test_tiz_crawl_lowest.html"} 
}],

["test_tiz_music_distractor", "Form", { 
html: {include: "test_tiz_music_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_done_highest", "Form", { 
html: {include: "test_bist_done_highest.html"} 
}],

["test_bist_watch_lowest", "Form", { 
html: {include: "test_bist_watch_lowest.html"} 
}],

["test_bist_oops_distractor", "Form", { 
html: {include: "test_bist_oops_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_eat_highest", "Form", { 
html: {include: "test_jair_eat_highest.html"} 
}],

["test_jair_play_lowest", "Form", { 
html: {include: "test_jair_play_lowest.html"} 
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

["test_tace_take_lowest", "Form", { 
html: {include: "test_tace_take_lowest.html"} 
}],

["test_tace_horse_distractor", "Form", { 
html: {include: "test_tace_horse_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_music_highest", "Form", { 
html: {include: "test_doon_music_highest.html"} 
}],

["test_doon_like_lowest", "Form", { 
html: {include: "test_doon_like_lowest.html"} 
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

["test_telpen_spin_lowest", "Form", { 
html: {include: "test_telpen_spin_lowest.html"} 
}],

["test_telpen_look_distractor", "Form", { 
html: {include: "test_telpen_look_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_oops_highest", "Form", { 
html: {include: "test_blime_oops_highest.html"} 
}],

["test_blime_neck_lowest", "Form", { 
html: {include: "test_blime_neck_lowest.html"} 
}],

["test_blime_done_distractor", "Form", { 
html: {include: "test_blime_done_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_look_highest", "Form", { 
html: {include: "test_zant_look_highest.html"} 
}],

["test_zant_no_lowest", "Form", { 
html: {include: "test_zant_no_lowest.html"} 
}],

["test_zant_draw_distractor", "Form", { 
html: {include: "test_zant_draw_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_necklace_highest", "Form", { 
html: {include: "test_mipen_necklace_highest.html"} 
}],

["test_mipen_carry_lowest", "Form", { 
html: {include: "test_mipen_carry_lowest.html"} 
}],

["test_mipen_student_distractor", "Form", { 
html: {include: "test_mipen_student_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];