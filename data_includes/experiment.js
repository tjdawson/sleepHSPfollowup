var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_tiz_answer_distractor","sep",
"test_mipen_bag_target","sep",
"test_tace_press_highest","sep",
"test_blime_toy_target","sep",
"test_vash_shoe_target","sep",
"test_mipen_open_highest","sep",
"test_telpen_sound_highest","sep",
"test_geck_put_distractor","sep",
"test_geck_nose_target","sep",
"test_telpen_ball_target","sep",
"test_tiz_shake_highest","sep",
"test_doon_sound_distractor","sep",
"test_vash_open_distractor","sep",
"test_zant_read_highest","sep",
"test_geck_blow_highest","sep",
"test_doon_necklace_target","sep",
"test_zant_book_target","sep",
"test_jair_leaf_lowest","sep",
"test_vash_play_lowest","sep",
"test_bist_follow_lowest","sep",
"test_doon_pretty_lowest","sep",
"test_tace_look_distractor","sep",
"test_tula_press_distractor","sep",
"test_tace_phone_target","sep",
"test_geck_touch_lowest","sep",
"test_mipen_stop_lowest","sep",
"test_bist_read_distractor","sep",
"test_tula_answer_highest","sep",
"test_jair_open_distractor","sep",
"test_tiz_thing_target","sep",
"test_telpen_look_distractor","sep",
"test_telpen_wheel_lowest","sep",
"test_blime_close_highest","sep",
"test_mipen_blow_distractor","sep",
"test_tace_dial_lowest","sep",
"test_jair_time_target","sep",
"test_vash_put_highest","sep",
"test_bist_look_highest","sep",
"test_blime_answer_distractor","sep",
"test_bist_horse_target","sep",
"test_tula_talk_lowest","sep",
"test_tula_mommy_target","sep",
"test_zant_read_lowest","sep",
"test_tiz_music_lowest","sep",
"test_jair_come_highest","sep",
"test_blime_vacuum_lowest","sep",
"test_doon_baby_highest","sep",
"test_zant_blow_distractor","outro1","sr","outro2"
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
continueMessage: null
        } ],
        
        //
["test_tula_mommy_target", "Form", { 
html: {include: "test_tula_mommy_target.html"} 
}],

["test_tula_answer_highest", "Form", { 
html: {include: "test_tula_answer_highest.html"} 
}],

["test_tula_talk_lowest", "Form", { 
html: {include: "test_tula_talk_lowest.html"} 
}],

["test_tula_blow_distractor", "Form", { 
html: {include: "test_tula_blow_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_put_highest", "Form", { 
html: {include: "test_vash_put_highest.html"} 
}],

["test_vash_play_lowest", "Form", { 
html: {include: "test_vash_play_lowest.html"} 
}],

["test_vash_look_distractor", "Form", { 
html: {include: "test_vash_look_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_blow_highest", "Form", { 
html: {include: "test_geck_blow_highest.html"} 
}],

["test_geck_touch_lowest", "Form", { 
html: {include: "test_geck_touch_lowest.html"} 
}],

["test_geck_come_distractor", "Form", { 
html: {include: "test_geck_come_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_shake_highest", "Form", { 
html: {include: "test_tiz_shake_highest.html"} 
}],

["test_tiz_music_lowest", "Form", { 
html: {include: "test_tiz_music_lowest.html"} 
}],

["test_tiz_read_distractor", "Form", { 
html: {include: "test_tiz_read_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_look_highest", "Form", { 
html: {include: "test_bist_look_highest.html"} 
}],

["test_bist_follow_lowest", "Form", { 
html: {include: "test_bist_follow_lowest.html"} 
}],

["test_bist_press_distractor", "Form", { 
html: {include: "test_bist_press_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_come_highest", "Form", { 
html: {include: "test_jair_come_highest.html"} 
}],

["test_jair_leaf_lowest", "Form", { 
html: {include: "test_jair_leaf_lowest.html"} 
}],

["test_jair_shake_distractor", "Form", { 
html: {include: "test_jair_shake_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_press_highest", "Form", { 
html: {include: "test_tace_press_highest.html"} 
}],

["test_tace_dial_lowest", "Form", { 
html: {include: "test_tace_dial_lowest.html"} 
}],

["test_tace_put_distractor", "Form", { 
html: {include: "test_tace_put_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_baby_highest", "Form", { 
html: {include: "test_doon_baby_highest.html"} 
}],

["test_doon_pretty_lowest", "Form", { 
html: {include: "test_doon_pretty_lowest.html"} 
}],

["test_doon_look_distractor", "Form", { 
html: {include: "test_doon_look_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_sound_highest", "Form", { 
html: {include: "test_telpen_sound_highest.html"} 
}],

["test_telpen_wheel_lowest", "Form", { 
html: {include: "test_telpen_wheel_lowest.html"} 
}],

["test_telpen_look_distractor", "Form", { 
html: {include: "test_telpen_look_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_close_highest", "Form", { 
html: {include: "test_blime_close_highest.html"} 
}],

["test_blime_vacuum_lowest", "Form", { 
html: {include: "test_blime_vacuum_lowest.html"} 
}],

["test_blime_press_distractor", "Form", { 
html: {include: "test_blime_press_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_read_highest", "Form", { 
html: {include: "test_zant_read_highest.html"} 
}],

["test_zant_read_lowest", "Form", { 
html: {include: "test_zant_read_lowest.html"} 
}],

["test_zant_blow_distractor", "Form", { 
html: {include: "test_zant_blow_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_open_highest", "Form", { 
html: {include: "test_mipen_open_highest.html"} 
}],

["test_mipen_stop_lowest", "Form", { 
html: {include: "test_mipen_stop_lowest.html"} 
}],

["test_mipen_shake_distractor", "Form", { 
html: {include: "test_mipen_shake_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];