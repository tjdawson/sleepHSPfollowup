var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_tiz_play_lowest","sep",
"test_geck_nose_target","sep",
"test_telpen_throw_highest","sep",
"test_zant_go_lowest","sep",
"test_doon_baby_lowest","sep",
"test_tula_look_lowest","sep",
"test_zant_step_distractor","sep",
"test_bist_here_highest","sep",
"test_tula_mommy_target","sep",
"test_bist_horse_target","sep",
"test_vash_purse_distractor","sep",
"test_mipen_bag_target","sep",
"test_bist_step_distractor","sep",
"test_mipen_purse_distractor","sep",
"test_tace_phone_target","sep",
"test_blime_toy_target","sep",
"test_mipen_open_highest","sep",
"test_tiz_thing_target","sep",
"test_blime_look_lowest","sep",
"test_jair_breakfast_highest","sep",
"test_vash_put_highest","sep",
"test_doon_necklace_target","sep",
"test_tiz_step_highest","sep",
"test_tiz_purse_distractor","sep",
"test_geck_horse_highest","sep",
"test_tace_dog_lowest","sep",
"test_jair_where_lowest","sep",
"test_telpen_spin_lowest","sep",
"test_bist_fun_lowest","sep",
"test_vash_shoe_target","sep",
"test_tace_throw_highest","sep",
"test_tula_give_highest","sep",
"test_doon_bead_highest","sep",
"test_zant_book_target","sep",
"test_jair_time_target","sep",
"test_telpen_read_distractor","sep",
"test_geck_throw_distractor","sep",
"test_jair_throw_distractor","sep",
"test_tula_step_distractor","sep",
"test_doon_breakfast_distractor","sep",
"test_tace_breakfast_distractor","sep",
"test_blime_purse_highest","sep",
"test_geck_wipe_lowest","sep",
"test_blime_put_distractor","sep",
"test_mipen_cup_lowest","sep",
"test_vash_put_lowest","sep",
"test_zant_read_highest","sep",
"test_telpen_ball_target","sr","outro1","outro2"
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
            countsForProgressBar: false
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

["test_tula_give_highest", "Form", { 
html: {include: "test_tula_give_highest.html"} 
}],

["test_tula_look_lowest", "Form", { 
html: {include: "test_tula_look_lowest.html"} 
}],

["test_tula_put_distractor", "Form", { 
html: {include: "test_tula_put_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_put_highest", "Form", { 
html: {include: "test_vash_put_highest.html"} 
}],

["test_vash_put_lowest", "Form", { 
html: {include: "test_vash_put_lowest.html"} 
}],

["test_vash_horse_distractor", "Form", { 
html: {include: "test_vash_horse_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_horse_highest", "Form", { 
html: {include: "test_geck_horse_highest.html"} 
}],

["test_geck_wipe_lowest", "Form", { 
html: {include: "test_geck_wipe_lowest.html"} 
}],

["test_geck_read_distractor", "Form", { 
html: {include: "test_geck_read_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_step_highest", "Form", { 
html: {include: "test_tiz_step_highest.html"} 
}],

["test_tiz_play_lowest", "Form", { 
html: {include: "test_tiz_play_lowest.html"} 
}],

["test_tiz_throw_distractor", "Form", { 
html: {include: "test_tiz_throw_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_here_highest", "Form", { 
html: {include: "test_bist_here_highest.html"} 
}],

["test_bist_fun_lowest", "Form", { 
html: {include: "test_bist_fun_lowest.html"} 
}],

["test_bist_horse_distractor", "Form", { 
html: {include: "test_bist_horse_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_breakfast_highest", "Form", { 
html: {include: "test_jair_breakfast_highest.html"} 
}],

["test_jair_where_lowest", "Form", { 
html: {include: "test_jair_where_lowest.html"} 
}],

["test_jair_horse_distractor", "Form", { 
html: {include: "test_jair_horse_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_throw_highest", "Form", { 
html: {include: "test_tace_throw_highest.html"} 
}],

["test_tace_dog_lowest", "Form", { 
html: {include: "test_tace_dog_lowest.html"} 
}],

["test_tace_horse_distractor", "Form", { 
html: {include: "test_tace_horse_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_bead_highest", "Form", { 
html: {include: "test_doon_bead_highest.html"} 
}],

["test_doon_baby_lowest", "Form", { 
html: {include: "test_doon_baby_lowest.html"} 
}],

["test_doon_throw_distractor", "Form", { 
html: {include: "test_doon_throw_distractor.html"} 
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

["test_telpen_purse_distractor", "Form", { 
html: {include: "test_telpen_purse_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_purse_highest", "Form", { 
html: {include: "test_blime_purse_highest.html"} 
}],

["test_blime_look_lowest", "Form", { 
html: {include: "test_blime_look_lowest.html"} 
}],

["test_blime_give_distractor", "Form", { 
html: {include: "test_blime_give_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_read_highest", "Form", { 
html: {include: "test_zant_read_highest.html"} 
}],

["test_zant_go_lowest", "Form", { 
html: {include: "test_zant_go_lowest.html"} 
}],

["test_zant_put_distractor", "Form", { 
html: {include: "test_zant_put_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_open_highest", "Form", { 
html: {include: "test_mipen_open_highest.html"} 
}],

["test_mipen_cup_lowest", "Form", { 
html: {include: "test_mipen_cup_lowest.html"} 
}],

["test_mipen_throw_distractor", "Form", { 
html: {include: "test_mipen_throw_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];