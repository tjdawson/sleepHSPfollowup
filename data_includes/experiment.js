var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_jair_open_highest","sep",
"test_zant_rather_distractor","sep",
"test_zant_here_highest","sep",
"test_mipen_again_distractor","sep",
"test_jair_time_target","sep",
"test_tiz_thing_target","sep",
"test_geck_clean_highest","sep",
"test_vash_open_distractor","sep",
"test_doon_give_distractor","sep",
"test_bist_come_highest","sep",
"test_telpen_toy_highest","sep",
"test_mipen_give_highest","sep",
"test_tula_enough_highest","sep",
"test_blime_come_distractor","sep",
"test_jair_door_lowest","sep",
"test_mipen_bag_target","sep",
"test_telpen_here_distractor","sep",
"test_tula_mommy_target","sep",
"test_doon_necklace_target","sep",
"test_tiz_careful_lowest","sep",
"test_tula_clean_distractor","sep",
"test_tiz_push_highest","sep",
"test_doon_hit_lowest","sep",
"test_tace_phone_target","sep",
"test_bist_horse_target","sep",
"test_blime_toy_target","sep",
"test_geck_put_distractor","sep",
"test_mipen_bead_lowest","sep",
"test_tiz_toy_distractor","sep",
"test_tace_look_lowest","sep",
"test_vash_put_highest","sep",
"test_jair_push_distractor","sep",
"test_zant_sit_lowest","sep",
"test_vash_oops_lowest","sep",
"test_vash_shoe_target","sep",
"test_bist_happy_lowest","sep",
"test_blime_push_highest","sep",
"test_tace_enough_distractor","sep",
"test_doon_bead_highest","sep",
"test_geck_nose_target","sep",
"test_telpen_throw_lowest","sep",
"test_zant_book_target","sep",
"test_blime_truck_lowest","sep",
"test_geck_hi_lowest","sep",
"test_telpen_ball_target","sep",
"test_bist_bead_distractor","sep",
"test_tace_give_highest","sep",
"test_tula_clothes_lowest","outro1","sr","outro2"
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

["test_tula_enough_highest", "Form", { 
html: {include: "test_tula_enough_highest.html"} 
}],

["test_tula_clothes_lowest", "Form", { 
html: {include: "test_tula_clothes_lowest.html"} 
}],

["test_tula_clean_distractor", "Form", { 
html: {include: "test_tula_clean_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_put_highest", "Form", { 
html: {include: "test_vash_put_highest.html"} 
}],

["test_vash_oops_lowest", "Form", { 
html: {include: "test_vash_oops_lowest.html"} 
}],

["test_vash_open_distractor", "Form", { 
html: {include: "test_vash_open_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_clean_highest", "Form", { 
html: {include: "test_geck_clean_highest.html"} 
}],

["test_geck_hi_lowest", "Form", { 
html: {include: "test_geck_hi_lowest.html"} 
}],

["test_geck_put_distractor", "Form", { 
html: {include: "test_geck_put_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_push_highest", "Form", { 
html: {include: "test_tiz_push_highest.html"} 
}],

["test_tiz_careful_lowest", "Form", { 
html: {include: "test_tiz_careful_lowest.html"} 
}],

["test_tiz_toy_distractor", "Form", { 
html: {include: "test_tiz_toy_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_come_highest", "Form", { 
html: {include: "test_bist_come_highest.html"} 
}],

["test_bist_happy_lowest", "Form", { 
html: {include: "test_bist_happy_lowest.html"} 
}],

["test_bist_bead_distractor", "Form", { 
html: {include: "test_bist_bead_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_open_highest", "Form", { 
html: {include: "test_jair_open_highest.html"} 
}],

["test_jair_door_lowest", "Form", { 
html: {include: "test_jair_door_lowest.html"} 
}],

["test_jair_push_distractor", "Form", { 
html: {include: "test_jair_push_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_give_highest", "Form", { 
html: {include: "test_tace_give_highest.html"} 
}],

["test_tace_look_lowest", "Form", { 
html: {include: "test_tace_look_lowest.html"} 
}],

["test_tace_enough_distractor", "Form", { 
html: {include: "test_tace_enough_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_bead_highest", "Form", { 
html: {include: "test_doon_bead_highest.html"} 
}],

["test_doon_hit_lowest", "Form", { 
html: {include: "test_doon_hit_lowest.html"} 
}],

["test_doon_give_distractor", "Form", { 
html: {include: "test_doon_give_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_toy_highest", "Form", { 
html: {include: "test_telpen_toy_highest.html"} 
}],

["test_telpen_throw_lowest", "Form", { 
html: {include: "test_telpen_throw_lowest.html"} 
}],

["test_telpen_here_distractor", "Form", { 
html: {include: "test_telpen_here_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_push_highest", "Form", { 
html: {include: "test_blime_push_highest.html"} 
}],

["test_blime_truck_lowest", "Form", { 
html: {include: "test_blime_truck_lowest.html"} 
}],

["test_blime_come_distractor", "Form", { 
html: {include: "test_blime_come_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_here_highest", "Form", { 
html: {include: "test_zant_here_highest.html"} 
}],

["test_zant_sit_lowest", "Form", { 
html: {include: "test_zant_sit_lowest.html"} 
}],

["test_zant_rather_distractor", "Form", { 
html: {include: "test_zant_rather_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_give_highest", "Form", { 
html: {include: "test_mipen_give_highest.html"} 
}],

["test_mipen_bead_lowest", "Form", { 
html: {include: "test_mipen_bead_lowest.html"} 
}],

["test_mipen_again_distractor", "Form", { 
html: {include: "test_mipen_again_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];